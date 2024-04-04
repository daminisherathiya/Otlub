import MUILink from "@mui/material/Link";

export function Link({ children, ...props }) {
  return <MUILink {...props}>{children}</MUILink>;
}
