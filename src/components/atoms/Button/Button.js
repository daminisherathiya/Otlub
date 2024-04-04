import MUIButton from "@mui/material/Button";

export function Button({ children, ...props }) {
  return <MUIButton {...props}>{children}</MUIButton>;
}
