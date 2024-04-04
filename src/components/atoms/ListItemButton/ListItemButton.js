import MUIListItemButton from "@mui/material/ListItemButton";

export function ListItemButton({ children, ...props }) {
  return <MUIListItemButton {...props}>{children}</MUIListItemButton>;
}
