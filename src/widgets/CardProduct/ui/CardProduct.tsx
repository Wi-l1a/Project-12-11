import s from './CardProduct.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';


type CarDetails = {
    city: string;
    year: number;
    color: string;
    engineVolume: number;
};


type RealEstateDetails = {
    city: string;
    year: number;
    area: string;
    floor: number;
    rooms: number;
    condition: string;
    type: string;
};

type Car = {
    id: number;
    imgSrc: any;
    altText: string;
    title: string;
    description: string;
    details: any;
    price: number;
    releaseDate: string;
};

interface CardProductProps {
    data: Car,
    category: string
    className?: string;
    MouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
    MouseOut?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const CardProduct = ({ MouseOver, MouseOut, data, category, className }: CardProductProps) => {

    return (
        <>
            <AppLink
                onMouseEnter={MouseOver}
                onMouseLeave={MouseOut}
                to={`/${category}/detail/${data.id}`}
                className={classNames(s.card, {}, [className])}>
                <div className={s.box_img}>
                    <img src={data.imgSrc} alt={data.altText} />
                </div>
                <div className={s.card_content}>
                    <h2>{data.title}</h2>
                    <ul className={s.description}>
                        {category === 'transport' ?
                            <>
                                <li>{data.details.city}</li>
                                <li>год / {data.details.year}</li>
                                <li>Цвет / {data.details.color}</li>
                                <li>Объем двигателя / {data.details.engineVolume}</li>
                            </>
                            :
                            <>
                                <li>{data.details.city}</li>
                                <li>Год: {data.details.year}</li>
                                <li>Площадь: {data.details.area}</li>
                                <li>Этаж: {data.details.floor}</li>
                                <li>Комнаты: {data.details.rooms}</li>
                                <li>Состояние: {data.details.condition}</li>
                                <li>Тип: {data.details.type}</li>

                            </>
                        }
                    </ul>
                    <div className={s.bottom_box}>
                        <span className={s.price}>{data.price} сом</span>
                        <p className={s.data}>Дата выпуска: <span>{data.releaseDate}</span></p>
                    </div>
                </div>
            </AppLink>

        </>
    );
};