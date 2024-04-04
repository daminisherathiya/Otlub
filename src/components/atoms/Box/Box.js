import MUIBox from "@mui/material/Box";

export function Box({ children, ...props }) {
  return <MUIBox {...props}>{children}</MUIBox>;
}
