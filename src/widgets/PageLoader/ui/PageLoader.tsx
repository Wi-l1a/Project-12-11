import { Loader } from '@/widgets/Loader/Loader';
import s from './PageLoader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(s.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};