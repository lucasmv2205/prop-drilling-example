import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slytherin from "../../assets/slytherin.png";
import { Scoreboard } from "../Scoreboard";

export function TeamB({
    slytherinScore,
    setSlytherinScore,
  }){

    return(
        <Paper
        elevation={2}
        sx={{ color: "#fff", padding: 1, backgroundColor: "#0D6217" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Slytherin</h2>
          <img className="icon-house" src={Slytherin} alt="Slytherin icon" />
        </Box>
        <Scoreboard score={slytherinScore} setScore={setSlytherinScore} />
      </Paper>
    )
}