import MUIFormControl from "@mui/material/FormControl";

export function FormControl({ children, ...props }) {
  return <MUIFormControl {...props}>{children}</MUIFormControl>;
}
