import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import QuizIcon from "@mui/icons-material/Quiz";
import { Typography } from "@mui/material";

export default function WhoamiAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <QuizIcon sx={{ marginInlineEnd: "1em" }} />
          <Typography variant="h6" component="div">
            Who Am I?
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
