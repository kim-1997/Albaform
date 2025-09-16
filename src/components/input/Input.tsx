"use client";

import { useState } from "react";
import styles from "./Input.module.css";

type InputWithLabel = {
    hasLabel?: true;
    labelText: string;
    placeholder: string;
    name: string;
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputWithoutLabel = {
    hasLabel: false;
    labelText?: never;
    placeholder: string;
    name: string;
    id?: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputType = InputWithLabel | InputWithoutLabel;

export default function Input({
    labelText,
    placeholder,
    id,
    name,
    hasLabel = true,
    type = "text",
    value,
    onChange,
}: InputType) {
    return (
        <div className={styles.inputBox}>
            {hasLabel && <label htmlFor={id}>{labelText}</label>}
            <input type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    );
}
