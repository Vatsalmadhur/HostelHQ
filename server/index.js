require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const port =  process.env.PORT || 5000
const http = require('http').Server(app)
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY

const db = require('./dbFunc') 

const database = require('./config/database')

if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cookieParser());


const resolveToken = async (req, res, next) => {
	const url = req.originalUrl.split("?")[0]
	if(1==2){
		next()
	}else{
		const token = req.cookies.token
		const authData = await verifyToken(token)
		if (!authData.result){
			if(req.method=="GET"){
				res.redirect(`http://${req.header('host')}/login`)
			} else{
				res.status(401).json({status:false,msg:"unauthorised access"})
			}
			return
		}
		else{
			req.usrProf = authData.data
			next()
		}
	}}



app.get('/', (req, res)=>{
	res.end("Alive")
})


app.post("/add-new-user",async (req,res)=>{
	const {email, pass, name , role } = req.body
	const emailquery = `
	SELECT * FROM users WHERE email = $1;
	`;
	const emailvalues = [email];
	const dupEmail = await db.query(emailquery, emailvalues);
	if( dupEmail.rows.length!=0){
		res.send({status:false,email:true,result:"email exists"})
		return
	}
	let rows
if(role==="warden"){
	rows = await db.addWarden({name, email , pass}) 
}else if(role==="student"){
	rows = await db.addStudent(req.body)
}
else if(role==="staff"){
	rows = await db.addStaff(req.body)
}

const uid = rows[0].uid
	const token = jwt.sign({data:uid}, secret, { expiresIn: '7d' })
	const expiryDate = new Date(Number(new Date()) + (7*24*3600000));
	res.setHeader("Set-Cookie", `token=${token};expires=${expiryDate}; Path=/;HttpOnly`)
	res.status(200).json({"status":true, "token":token})
})

/* Login Endpoint */

app.post("/let-me-in",async (req,res)=>{
	const {email, pass, role } = req.body
	const table = role==="warden" ? "wardens" : (role==="student" ? "students" : "staffs")
	const query = `
	SELECT * FROM users WHERE ${table} = $1;
	`;
	const values = [email];
	const { rows } = await database.query(query, values);
	if(rows.length==0){
		res.send({status:false,result:"wrong email or password"})
	}else{
		const match = await bcrypt.compare(pass, rows[0].pass)
		if(match){
			const token = jwt.sign({
				data:rows[0].uid
			}, secret, { expiresIn: '7d' })
			var expiryDate = new Date(Number(new Date()) + (7*24*3600000));
			res.setHeader("Set-Cookie", `token=${token};expires=${expiryDate}; Path=/;HttpOnly`)

			res.status(200).json({"status":true, "token":token})
		}
		else{
			res.send({status:false,result:"wrong email or password"})
		}
	}
})

app.use(resolveToken)

app.post('/add-building', async (req, res)=> {
	const {name, floors} = req.body
	const {rows} = await db.addBuilding({name, floors, warden:req.usrProf.uid})
	res.status(200).json(rows)

})


app.post('/add-floor', async (req, res)=> {
	const {building, number, rooms} = req.body
	const {rows} = await db.addFloor({building, number, rooms})
	res.status(200).json(rows)
})



const server = http.listen(port, ()=>{
	console.log(`running on port ${port}`)
})

