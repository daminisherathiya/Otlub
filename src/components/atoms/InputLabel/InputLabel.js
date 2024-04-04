import MUIInputLabel from "@mui/material/InputLabel";

export function InputLabel({ children, ...props }) {
  return <MUIInputLabel {...props}>{children}</MUIInputLabel>;
}
