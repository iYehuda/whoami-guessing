import useExternal from "./useExternal";

export default function useSettings() {
  return useExternal("external/settings.json");
}
