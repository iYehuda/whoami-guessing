import useExternal from "./useExternal";

export default function useQuestions() {
  return useExternal("external/questions.json");
}
