import MUIStepper from "@mui/material/Stepper";

export function Stepper({ children, ...props }) {
  return <MUIStepper {...props}>{children}</MUIStepper>;
}
