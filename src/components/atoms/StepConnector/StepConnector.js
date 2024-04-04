import MUIStepConnector from "@mui/material/StepConnector";

export function StepConnector({ children, ...props }) {
  return <MUIStepConnector {...props}>{children}</MUIStepConnector>;
}
