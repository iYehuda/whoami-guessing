import Button from "@mui/material/Button";

export default function Choice({
  value,
  correct = false,
  incorrect = false,
  onClick = null,
  sealed = false,
}) {
  return (
    <div>
      <Button
        variant="contained"
        color={correct ? "success" : incorrect ? "error" : "info"}
        onClick={!sealed ? onClick : undefined}
        sx={{
          width: "100%",
          marginBlockStart: "1em",
        }}
        disableTouchRipple={sealed}
      >
        {value}
      </Button>
    </div>
  );
}
