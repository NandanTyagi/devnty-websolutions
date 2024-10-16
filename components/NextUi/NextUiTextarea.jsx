import React from "react";
import { Textarea } from "@nextui-org/react";

export function NextUiTextarea({ label, placeholder, className, minRows, onChange, value}) {
  return (
    <div className={`next-ui-textarea flex w-full items-center`}>
      <Textarea
        label={label}
        placeholder={placeholder}
        className={`${className}`}
        minRows={minRows}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default NextUiTextarea;
