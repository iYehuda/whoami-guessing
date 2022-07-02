import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  value,
  onChange,
  options,
  label,
  sx = {},
}) {
  return (
    <Box sx={{ minWidth: 120, ...sx }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          label={label}
          onChange={({ target }) => onChange(target.value)}
        >
          {options.map(({ name, value }) => (
            <MenuItem value={value} key={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
