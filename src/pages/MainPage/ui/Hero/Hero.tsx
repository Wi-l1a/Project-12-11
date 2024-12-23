import s from './Hero.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import HeroImg from '@/shared/assets/icons/HeroImg.svg'
import { Input } from '@/shared/ui/Input/Input';
import SearchIcon from '@/shared/assets/icons/search_Icon.svg';
import RealEstateIcon from '@/shared/assets/icons/RealEstate_icon.svg';
import TransportIcon from '@/shared/assets/icons/Transport_icon.svg';
import ServicesIcon from '@/shared/assets/icons/Services_icon.svg';
import { CardCategory } from './CardCategory/CardCategory';

interface HeroProps {
    className?: string;
}

const cards = [
    {
        to: 'catalog/real-estate/',
        icon: <RealEstateIcon />,
        title: "Недвижимость",
        description: "Быстрый доступ к объявлениям по покупке, продаже или аренде квартир, домов и другой недвижимости. Найдите свой идеальный вариант уже сейчас!"
    },
    {
        to: 'catalog/transport/',
        icon: <TransportIcon />,
        title: "Транспорт",
        description: "Объявления о продаже и аренде автомобилей, мотоциклов и другой техники. Удобный поиск транспортных средств."
    },
    {
        to: '#',
        icon: <ServicesIcon />,
        title: "Услуги",
        description: "Лёгкий доступ к профессиональным услугам — ремонт, консультации и многое другое. Быстро найдите специалиста!"
    },
]

export const Hero = ({ className }: HeroProps) => {
    return (
        <section className={classNames(s.Hero, {}, [className])}>
            <div className={classNames(s.wrapper, {}, ['container'])}>
                <div className={s.boxContent}>
                    <div className={s.boxText}>
                        <h1 className='title'>
                            <span>Быстрый поиск</span> для
                            вашего удобства</h1>
                        <article className='description'>
                            Инструмент поиска, созданный для облегчения поиска нужных объявлений — будь то квартира, услуги или автомобиль. Помогает клиентам быстро находить именно то, что они ищут, экономя их время и повышая удобство использования платформы.
                        </article>
                        <Input
                            icon={<SearchIcon />}
                            width="60%"
                            type="text"
                            className={s.input}
                            placeholder={'Поиск'}
                        />
                    </div>
                    <div className={s.boxImg}>
                        <HeroImg />
                    </div>
                </div>
                <CardCategory
                    data={cards}
                />
            </div>
        </section>
    );
};