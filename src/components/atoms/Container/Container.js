import MUIContainer from "@mui/material/Container";

export function Container({ children, ...props }) {
  return <MUIContainer {...props}>{children}</MUIContainer>;
}
