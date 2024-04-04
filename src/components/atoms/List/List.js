import MUIList from "@mui/material/List";

export function List({ children, ...props }) {
  return <MUIList {...props}>{children}</MUIList>;
}
