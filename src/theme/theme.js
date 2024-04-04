import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";

import { breakpoints } from "./breakpoints";
import { palette } from "./colors";

let theme = createTheme({
  palette: { mode: "dark", ...palette },
  breakpoints: { values: breakpoints },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
theme = responsiveFontSizes(theme);

export { theme };
