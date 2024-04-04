import MUIStepButton from "@mui/material/StepButton";

export function StepButton({ children, ...props }) {
  return <MUIStepButton {...props}>{children}</MUIStepButton>;
}
