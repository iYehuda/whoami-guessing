import Box from "@mui/material/Box";

export default function Picture({ src, width = 300 }) {
  return (
    <Box>
      <img width={width} src={src} alt="Who AM I?" />
    </Box>
  );
}
