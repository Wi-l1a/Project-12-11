import { AppLink } from '@/shared/ui/AppLink/AppLink';
import s from './Header.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={classNames(s.Header, {}, [className])}>
            <nav className={classNames('container', {}, [])}>
                <div className={s.logo}>
                    <AppLink to={'/'}>
                        logo
                    </AppLink>
                </div>
                <ul>
                    <li><AppLink to={'/'}>Главная</AppLink></li>
                    <li><AppLink to={'/catalog'}>Каталог</AppLink></li>
                </ul>
            </nav>
        </header>
    );
};