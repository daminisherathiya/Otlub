import MUICollapse from "@mui/material/Collapse";

export function Collapse({ children, ...props }) {
  return <MUICollapse {...props}>{children}</MUICollapse>;
}
