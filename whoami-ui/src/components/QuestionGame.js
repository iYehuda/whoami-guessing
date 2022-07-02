import { useMemo, useState } from "react";

import _ from "lodash";
import Question from "./Question";
import QuestionIndex from "./QuestionIndex";
import ScoreBar from "./ScoreBar";

function getQuestionChoices(questions, answer, choicesCount) {
  const availableWrongChoices = questions.filter(
    (question) => question !== answer
  );

  const choices = _.sampleSize(availableWrongChoices, choicesCount - 1).map(
    (option) => ({ ...option, correct: false })
  );

  choices.push({
    ...answer,
    correct: true,
  });

  return _.shuffle(choices);
}

export default function QuestionGame({
  questions,
  choicesPerQuestion,
  nextQuestionDelay,
  onFinished,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const shuffledQuestions = useMemo(() => {
    return _.shuffle(questions);
  }, [questions]);
  const answer = shuffledQuestions[currentQuestion];
  const choices = useMemo(() => {
    return getQuestionChoices(shuffledQuestions, answer, choicesPerQuestion);
  }, [shuffledQuestions, answer, choicesPerQuestion]);
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <>
      <QuestionIndex current={currentQuestion + 1} total={questions.length} />
      <Question
        image={answer.image}
        choices={choices}
        onAnswer={(_, correct) => {
          if (correct) {
            setScore(score + 1);
          }
          if (isLastQuestion) {
            setTimeout(() => {
              onFinished(score + Number(correct));
            }, nextQuestionDelay);
          } else {
            setTimeout(() => {
              setCurrentQuestion(currentQuestion + 1);
            }, nextQuestionDelay);
          }
        }}
        key={currentQuestion}
      ></Question>
      <ScoreBar score={score} />
    </>
  );
}
