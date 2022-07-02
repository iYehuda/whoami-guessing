import Card from "@mui/material/Card";

export default function GameCard({ children }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "inline-block",
        marginBlockStart: "1em",
        maxWidth: "50%",
      }}
    >
      {children}
    </Card>
  );
}
