import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GameCard from "./GameCard";

function getGreeting(successRate) {
  if (successRate === 1) {
    return "Perfect!";
  }
  if (successRate >= 0.9) {
    return "Excellent!";
  }
  if (successRate >= 0.8) {
    return "Great!";
  }
  if (successRate >= 0.7) {
    return "Nice!";
  }
  return "Eh...";
}

export default function FinishPage({ score, total, onTryAgain }) {
  const successRate = score / total;
  const greeting = getGreeting(successRate);
  return (
    <GameCard>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {greeting}
        </Typography>
        <Typography variant="h5" component="div">
          You answered {score} out of {total} questions correctly
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onTryAgain}>
          Try again
        </Button>
      </CardActions>
    </GameCard>
  );
}
