import s from './NotFoundPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(s.NotFoundPage, {}, [className])}>
            <h1>Страница не найдена</h1>
        </div>
    );
};