import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function QuestionIndex({ current, total }) {
  return (
    <Box
      sx={{
        display: "inline",
        maxWidth: "50%",
      }}
    >
      <Typography variant="h2" component="div" mt={1}>
        {current}/{total}
      </Typography>
    </Box>
  );
}
