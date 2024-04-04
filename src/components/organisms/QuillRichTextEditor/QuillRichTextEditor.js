import { useState } from "react";
import QuillEditor from "react-quill";
import { InputLabel } from "../../atoms/InputLabel";
import { Box } from "../../atoms/Box";

import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ align: [""] }, { align: ["center"] }, { align: ["right"] }],
    [{ font: ["serif", "monospace"] }],
    [{ list: "bullet" }],
    ["link", "image"],
    ["blockquote", "code-block"],
    [{ indent: "-1" }, { indent: "+1" }],
  ],
};

export function QuillRichTextEditor({ label }) {
  const [value, setValue] = useState("");

  return (
    <Box>
      <InputLabel className="tw-mb-1 tw-mt-7 tw-text-xs tw-text-white">
        {label} <span className="tw-text-error-main">*</span>
      </InputLabel>
      <QuillEditor className="c-quill-editor tw-rounded-[5px] tw-bg-white tw-text-black" theme="snow" value={value} modules={modules} onChange={(value) => setValue(value)} />
    </Box>
  );
}
