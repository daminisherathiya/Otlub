import MUIListItemText from "@mui/material/ListItemText";

export function ListItemText({ children, ...props }) {
  return <MUIListItemText {...props}>{children}</MUIListItemText>;
}
