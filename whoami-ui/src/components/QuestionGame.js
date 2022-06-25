import { useMemo, useState } from "react";

import _ from "lodash";
import Question from "./Question";
import QuestionIndex from "./QuestionIndex";

export default function QuestionGame({
  questions,
  choicesPerQuestion,
  nextQuestionDelay,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const shuffledQuestions = useMemo(() => {
    return _.shuffle(questions);
  }, [questions]);
  const answer = shuffledQuestions[currentQuestion];
  const options = useMemo(() => {
    const allOptions = shuffledQuestions.filter(
      (_, index) => index !== currentQuestion
    );

    const selectedOptions = _.sampleSize(
      allOptions,
      choicesPerQuestion - 1
    ).map((option) => ({ ...option, correct: false }));

    selectedOptions.push({
      ...answer,
      correct: true,
    });

    return _.shuffle(selectedOptions);
  }, [shuffledQuestions, choicesPerQuestion, answer, currentQuestion]);

  return (
    <>
      <QuestionIndex current={currentQuestion + 1} total={questions.length} />
      <Question
        image={answer.image}
        options={options}
        onAnswer={() => {
          if (currentQuestion < questions.length - 1) {
            setTimeout(() => {
              setCurrentQuestion(currentQuestion + 1);
            }, nextQuestionDelay);
          }
        }}
        key={currentQuestion}
      ></Question>
    </>
  );
}
