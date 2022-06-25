import { useMemo, useState } from "react";

import * as _ from "lodash";
import Question from "./Question";

export default function QuestionGame({ questions, choicesPerQuestions = 4 }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const answer = questions[currentQuestion];
  const options = useMemo(() => {
    const allOptions = questions.filter(
      (_, index) => index !== currentQuestion
    );

    const selectedOptions = _.sampleSize(
      allOptions,
      choicesPerQuestions - 1
    ).map((option) => ({ ...option, correct: false }));

    selectedOptions.push({
      ...answer,
      correct: true,
    });

    return _.shuffle(selectedOptions);
  }, [questions, choicesPerQuestions, answer, currentQuestion]);

  return (
    <Question
      image={answer.image}
      options={options}
      onAnswer={() => {
        if (currentQuestion < questions.length - 1) {
          setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1);
          }, 1000);
        }
      }}
      key={currentQuestion}
    ></Question>
  );
}
