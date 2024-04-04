import { useId } from "react";

import { TextField } from "../../atoms/TextField";
import { InputLabel } from "../../atoms/InputLabel";

export function InputWithTitle({ label, type }) {
  const id = useId();

  return (
    <>
      <InputLabel className="tw-mb-1 tw-text-xs tw-text-white">
        {label} <span className="tw-text-error-main">*</span>
      </InputLabel>
      <TextField
        id={id}
        InputProps={{ className: "tw-text-[10px] tw-rounded-[5px] hover:tw-border-[#19224F]", classes: { input: "tw-h-auto tw-py-2 autofill:tw-shadow-none tw-bg-clip-text" } }}
        required
        className="tw-mb-3 tw-w-full tw-border-[#19224F]"
        hiddenLabel
        type={type}
      />
    </>
  );
}
