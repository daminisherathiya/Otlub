import MUIAppBar from "@mui/material/AppBar";

export function AppBar({ children, ...props }) {
  return <MUIAppBar {...props}>{children}</MUIAppBar>;
}
