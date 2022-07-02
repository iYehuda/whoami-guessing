import { Typography } from "@mui/material";

export default function ScoreBar({ score }) {
  return (
    <Typography variant="h5" component="div">
      Your score: {score}
    </Typography>
  );
}
