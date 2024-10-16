import React from "react";
import { Input } from "@nextui-org/react";

export function NextUiInput({ type = "text", label, placeholder, className, onChange, value}) {
  return (
    <div className={`next-ui-input flex w-full items-center`}>
      <Input
        type={type}
        label={label && label}
        placeholder={placeholder && placeholder}
        size="lg"
        radius="sm"
        className={`${className}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default NextUiInput;
