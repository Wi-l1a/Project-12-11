import { AppLink } from 'shared/ui/AppLink/AppLink';
import s from './Header.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(s.Header, {}, [className])}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/catalog'}>Каталог</AppLink>
        </div>
    );
};