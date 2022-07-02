import { CardContent } from "@mui/material";
import { useState } from "react";
import Choice from "./Choice";
import GameCard from "./GameCard";
import Picture from "./Picture";

export default function Question({ image, choices, onAnswer = null }) {
  const [answer, setAnswer] = useState(null);
  const answered = answer !== null;

  return (
    <GameCard>
      <CardContent>
        <Picture src={image} />
        {choices.map(({ name, correct }, index) => (
          <Choice
            value={name}
            key={index}
            correct={answered && correct}
            incorrect={index === answer && !correct}
            onClick={
              answered
                ? undefined
                : () => {
                    setAnswer(index);
                    onAnswer && onAnswer(choices[index], correct);
                  }
            }
            sealed={answered}
          />
        ))}
      </CardContent>
    </GameCard>
  );
}
