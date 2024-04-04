import MUIMenuItem from "@mui/material/MenuItem";

export function MenuItem({ children, ...props }) {
  return <MUIMenuItem {...props}>{children}</MUIMenuItem>;
}
