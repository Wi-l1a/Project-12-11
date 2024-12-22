import s from './Footer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(s.Footer, {}, [className])}>
            <div className={s.logo}>LOGO</div>
            <div className={s.copyright}>
                <p >Copyright © 2023 Name-Company</p>
            </div>
        </footer>
    );
};