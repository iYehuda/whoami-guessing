import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GameCard from "./GameCard";
import BasicSelect from "./BasicSelect";
import { useState } from "react";

const DIFFICULTY_RATIOS = {
  EASY: 0.4,
  MEDIUM: 0.6,
  HARD: 1,
};

export default function StartPage({ totalQuestions, onStart }) {
  const [questionCount, setQuestionCount] = useState();
  const easyCount = Math.round(totalQuestions * DIFFICULTY_RATIOS.EASY);
  const mediumCount = Math.round(totalQuestions * DIFFICULTY_RATIOS.MEDIUM);
  const hardCount = Math.round(totalQuestions * DIFFICULTY_RATIOS.HARD);

  return (
    <GameCard>
      <CardContent>
        <Typography variant="h5" mb={"1em"}>
          Welcome!
        </Typography>
        <BasicSelect
          label={"Choose difficulty"}
          options={[
            {
              name: "Easy",
              value: easyCount,
            },
            {
              name: "Medium",
              value: mediumCount,
            },
            {
              name: "Hard",
              value: hardCount,
            },
          ]}
          value={questionCount}
          onChange={setQuestionCount}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          disabled={!questionCount}
          onClick={() => onStart(questionCount)}
        >
          Start
        </Button>
      </CardActions>
    </GameCard>
  );
}
