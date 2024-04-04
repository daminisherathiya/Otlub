import MUIMenu from "@mui/material/Menu";

export function Menu({ children, ...props }) {
  return <MUIMenu {...props}>{children}</MUIMenu>;
}
