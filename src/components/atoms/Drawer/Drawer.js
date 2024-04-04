import MUIDrawer from "@mui/material/Drawer";

export function Drawer({ children, ...props }) {
  return <MUIDrawer {...props}>{children}</MUIDrawer>;
}
