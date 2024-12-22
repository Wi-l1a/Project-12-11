import s from './HowItWorks.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import HowItWorksImg from '@/shared/assets/icons/HowItWorksImg.svg'
interface HowItWorksProps {
    className?: string;
}

export const HowItWorks = ({ className }: HowItWorksProps) => {
    return (
        <section className={classNames(s.HowItWorks, {}, [className])}>
            <div className={classNames(s.wrapper, {}, ['container'])}>
                <div className={s.HowItWorksImg}>
                    <HowItWorksImg />
                </div>
                <div className={s.boxText}>
                    <h2 className='title'>
                        Как это работает?
                    </h2>
                    <p className='description'>
                        Мы анализируем ваши запросы и помогает быстро находить подходящие объявления. Просто введите ключевые слова, и система подберет для вас самые релевантные предложения — будь то квартира, услуги или автомобиль. Все для вашего удобства и экономии времени!
                    </p>
                </div>
            </div>
        </section>
    );
};