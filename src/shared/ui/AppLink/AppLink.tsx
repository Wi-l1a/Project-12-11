import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, ReactNode } from 'react';


interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, ...otherProps } = props


    return (
        <Link
            to={to}
            className={classNames(s.AppLink, {}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};  