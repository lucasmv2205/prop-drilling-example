import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Gryffindor from "../../assets/gryffindor.png";
import Slytherin from "../../assets/slytherin.png";
import { Scoreboard } from "../Scoreboard";
// import { TeamB } from "../TeamB";
// import { TeamA } from "../TeamA";

export function Counter({
  gryffindorScore,
  setGryffindorScore,
  slytherinScore,
  setSlytherinScore,
}) {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        display: "flex",
        flexDirection: "row",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 300,
        },
      }}
    >

      <Paper
        elevation={2}
        sx={{ color: "#fff", padding: 1, backgroundColor: "#7f0909" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Gryffindor</h2>
          <img className="icon-house" src={Gryffindor} alt="Gryffindor icon" />
        </Box>
        <Scoreboard score={gryffindorScore} setScore={setGryffindorScore} />
      </Paper>
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

    </Box>
  );
}

// {/* <TeamA gryffindorScore={gryffindorScore} setGryffindorScore={setGryffindorScore} />
// <TeamB slytherinScore={slytherinScore} setSlytherinScore={setSlytherinScore} /> */}
