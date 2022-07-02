import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import { useState } from "react";
import Choice from "./Choice";
import Picture from "./Picture";

export default function Question({ image, options, onAnswer = null }) {
  const [answer, setAnswer] = useState(null);
  const answered = answer !== null;

  return (
    <Card
      sx={{
        maxWidth: "50%",
        display: "inline-block",
      }}
    >
      <CardContent>
        <Picture src={image} />
        {options.map(({ name, correct }, index) => (
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
                    onAnswer && onAnswer(options[index], correct);
                  }
            }
            sealed={answered}
          />
        ))}
      </CardContent>
    </Card>
  );
}
