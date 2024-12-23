import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Select.module.scss';
import React, { memo, SelectHTMLAttributes, forwardRef } from 'react';

type HTMLInputProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>;

interface SelectProps extends HTMLInputProps {
    className?: string;
    name: string;
    options: string[];
    placeholder: string;
    width?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = memo(
    forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
        const { className, name, options, onChange, placeholder, width, ...otherProps } = props;

        return (
            <div
                style={{ width }}
                className={classNames(s.select, {}, [className])}
            >
                <select
                    ref={ref}
                    name={name}
                    onChange={onChange}
                    {...otherProps}
                >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    })
);
