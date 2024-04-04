import MUITypography from "@mui/material/Typography";

export function Typography({ children, ...props }) {
  return <MUITypography {...props}>{children}</MUITypography>;
}
