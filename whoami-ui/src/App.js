import _ from "lodash";
import Container from "@mui/material/Container";
import { useState } from "react";
import "./App.css";
import FinishPage from "./components/FinishPage";

import LoadingCircle from "./components/LoadingCircle";
import QuestionGame from "./components/QuestionGame";
import StartPage from "./components/StartPage";
import WhoamiAppBar from "./components/WhoamiAppBar";
import { useSettings, useQuestions } from "./hooks";

const STATUS_STARTING = "starting";
const STATUS_PLAYING = "playing";
const STATUS_FINISHED = "finished";

function chooseQuestions(allQuestions, count) {
  return _.sampleSize(allQuestions, count);
}

function App() {
  const [status, setStatus] = useState(STATUS_STARTING);
  const [result, setResult] = useState(null);
  const [questions, setQuestions] = useState(null);
  const {
    data: allQuestions,
    isLoading: isQuestionsLoading,
    isError: isQuestionsError,
  } = useQuestions();
  const {
    data: settings,
    isLoading: isSettingsLoading,
    isError: isSettingsError,
  } = useSettings();
  const { choicesPerQuestion, nextQuestionDelay } = settings || {};

  if (isQuestionsLoading || isSettingsLoading) {
    return <LoadingCircle />;
  }

  if (isQuestionsError || isSettingsError) {
    return "Something went wrong...";
  }

  return (
    <div className="App">
      <WhoamiAppBar />
      <Container>
        {status === STATUS_STARTING && (
          <StartPage
            totalQuestions={allQuestions.length}
            onStart={(questionCount) => {
              setQuestions(chooseQuestions(allQuestions, questionCount));
              setStatus(STATUS_PLAYING);
            }}
          />
        )}
        {status === STATUS_FINISHED && (
          <FinishPage
            score={result.score}
            total={result.total}
            onTryAgain={() => {
              setStatus(STATUS_STARTING);
            }}
          />
        )}
        {status === STATUS_PLAYING && (
          <QuestionGame
            questions={questions}
            choicesPerQuestion={choicesPerQuestion}
            nextQuestionDelay={nextQuestionDelay}
            onFinished={(score) => {
              setResult({
                score,
                total: allQuestions.length,
              });
              setStatus(STATUS_FINISHED);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
