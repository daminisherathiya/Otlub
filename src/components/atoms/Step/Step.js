import MUIStep from "@mui/material/Step";

export function Step({ children, ...props }) {
  return <MUIStep {...props}>{children}</MUIStep>;
}
