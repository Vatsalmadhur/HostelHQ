import React from "react";
import { Button } from "@mui/material";

const Btn = (props) => {
  return (
    <div>
      <Button
        sx={{
          bgcolor: "coral",
          "&:hover": { bgcolor: "coral" },
        }}
        variant="contained"
      >
        {props.value}
      </Button>
    </div>
  );
};

export default Btn;
