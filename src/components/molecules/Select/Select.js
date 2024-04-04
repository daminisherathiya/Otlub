import { useState, useId } from "react";
import { Box } from "../../atoms/Box";
import { MenuItem } from "../../atoms/MenuItem";
import { FormControl } from "../../atoms/FormControl";
import { InputLabel } from "../../atoms/InputLabel";
import { Select as AtomsSelect } from "../../atoms/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export function Select({ label }) {
  const id = useId();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <InputLabel className="tw-mb-1 tw-text-xs tw-text-white">
        {label} <span className="tw-text-error-main">*</span>
      </InputLabel>
      <FormControl className="tw-w-full">
        <AtomsSelect
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          id={id}
          value={age}
          inputProps={{ className: "tw-py-2 tw-text-[10px] tw-rounded-[5px] tw-leading-[14px]" }}
          onChange={handleChange}
          IconComponent={KeyboardArrowDownIcon}
          MenuProps={{ classes: { paper: "tw-bg-primary-dark" } }}
        >
          <MenuItem className="tw-min-h-0 tw-text-xs" value={10}>
            Ten
          </MenuItem>
          <MenuItem className="tw-min-h-0 tw-text-xs" value={20}>
            Twenty
          </MenuItem>
          <MenuItem className="tw-min-h-0 tw-text-xs" value={30}>
            Thirty
          </MenuItem>
        </AtomsSelect>
      </FormControl>
    </Box>
  );
}
