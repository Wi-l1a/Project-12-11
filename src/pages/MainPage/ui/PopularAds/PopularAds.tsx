import s from './PopularAds.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Icon_Lalafo from '@/shared/assets/icons/icon_lalafo.svg'

interface PopularAdsProps {
    className?: string;
}

export const PopularAds = ({ className }: PopularAdsProps) => {
    return (
        <section className={classNames(s.PopularAds, {}, [className])}>
            <div className={classNames(s.wrapper, {}, ['container'])}>
                <div className={s.boxText}>
                    <h2 className='title'>
                        Объявления с популярных  сайтов
                    </h2>
                    <p className='description'>
                        Мы объединяем объявления с ведущих сайтов, чтобы вы могли быстро найти то, что нужно, в одном удобном месте. Экономьте время и выбирайте лучшее!
                    </p>
                </div>
                <div className={s.icons}>
                    <Icon_Lalafo />
                    <Icon_Lalafo />
                    <Icon_Lalafo />
                    <Icon_Lalafo />
                    <Icon_Lalafo />
                    <Icon_Lalafo />
                </div>
            </div>
        </section>
    );
};