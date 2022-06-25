import { Typography } from "@mui/material";

export default function QuestionIndex({ current, total }) {
  return (
    <Typography variant="h2" component="div" gutterBottom>
      {current}/{total}
    </Typography>
  );
}
