import MUISelect from "@mui/material/Select";

export function Select({ children, ...props }) {
  return <MUISelect {...props}>{children}</MUISelect>;
}
