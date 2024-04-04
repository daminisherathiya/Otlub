import MUIBadge from "@mui/material/Badge";

export function Badge({ children, ...props }) {
  return <MUIBadge {...props}>{children}</MUIBadge>;
}
