import MUIIconButton from "@mui/material/IconButton";

export function IconButton({ children, ...props }) {
  return <MUIIconButton {...props}>{children}</MUIIconButton>;
}
