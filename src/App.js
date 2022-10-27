import { Typography } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <Typography sx={{fontSize: 11}}>Prop Drilling</Typography>
    </>

  );
}

export default App;
