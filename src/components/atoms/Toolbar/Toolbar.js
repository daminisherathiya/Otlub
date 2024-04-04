import MUIToolbar from "@mui/material/Toolbar";

export function Toolbar({ children, ...props }) {
  return <MUIToolbar {...props}>{children}</MUIToolbar>;
}
