import Container from "@mui/material/Container";
import "./App.css";

import LoadingCircle from "./components/LoadingCircle";
import QuestionGame from "./components/QuestionGame";
import WhoamiAppBar from "./components/WhoamiAppBar";
import { useSettings, useQuestions } from "./hooks";

function App() {
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
        <QuestionGame
          questions={questions}
          choicesPerQuestion={choicesPerQuestion}
          nextQuestionDelay={nextQuestionDelay}
        />
      </Container>
    </div>
  );
}

export default App;
