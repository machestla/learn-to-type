import React, { forwardRef } from "react";
import { Input } from "@chakra-ui/core";

export const Letter = forwardRef(({ handleChange, keyValue, placeholder, label }: { handleChange: any, keyValue: string, placeholder: string, label?: string }, ref: any) => {

    return (
        <Input ref={ref} name="" size="lg" type="text" placeholder={placeholder} w="3rem" value={keyValue} onChange={handleChange} aria-label={label} />
    )
});