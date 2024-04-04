import MUITextField from "@mui/material/TextField";

export function TextField({ children, ...props }) {
  return <MUITextField {...props}>{children}</MUITextField>;
}
