import Card from "@mui/material/Card";

export default function GameCard({ children, sx }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "inline-block",
        marginBlockStart: "1em",
        maxWidth: "50%",
        minWidth: "30%",
      }}
    >
      {children}
    </Card>
  );
}
