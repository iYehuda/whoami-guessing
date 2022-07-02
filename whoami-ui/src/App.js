import Container from "@mui/material/Container";
import { useState } from "react";
import "./App.css";
import FinishPage from "./components/FinishPage";

import LoadingCircle from "./components/LoadingCircle";
import QuestionGame from "./components/QuestionGame";
import WhoamiAppBar from "./components/WhoamiAppBar";
import { useSettings, useQuestions } from "./hooks";

const STATUS_PLAYING = "playing";
const STATUS_FINISHED = "finished";

function App() {
  const [status, setStatus] = useState(STATUS_PLAYING);
  const [result, setResult] = useState(null);
  const {
    data: questions,
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
    return "Bad";
  }

  return (
    <div className="App">
      <WhoamiAppBar />
      <Container>
        {status === STATUS_FINISHED ? (
          <FinishPage
            score={result.score}
            total={result.total}
            onTryAgain={() => {
              setStatus(STATUS_PLAYING);
            }}
          />
        ) : (
          <QuestionGame
            questions={questions}
            choicesPerQuestion={choicesPerQuestion}
            nextQuestionDelay={nextQuestionDelay}
            onFinished={(score) => {
              setResult({
                score,
                total: questions.length,
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
