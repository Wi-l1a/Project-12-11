import { classNames } from '@/shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autofocus?: boolean;
    icon?: React.ReactNode;
    width?: string | number;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        icon,
        width,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);


    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     onChange?.(e.target.value);
    //     console.log(e.target.value);
    // };


    return (
        <div className={classNames(s.inputWrapper, {}, [className])} style={{ width }}>
            <input
                className={classNames(s.Input, {}, [])}
                placeholder={placeholder}
                ref={ref}
                type={type}
                value={value}
                onChange={onChange}
                {...otherProps}
            />
            {icon && <div className={s.iconWrapper}>{icon}</div>}
        </div>
    );
});
