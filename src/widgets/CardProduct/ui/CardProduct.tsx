import s from './CardProduct.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Bentley from '@/shared/assets/images/bentley.jpg'
import { AppLink } from '@/shared/ui/AppLink/AppLink';

type CarDetails = {
    city: string;
    year: number;
    color: string;
    engineVolume: number;
};

type Car = {
    id: number;
    imgSrc: any;
    altText: string;
    title: string;
    description: string;
    details: CarDetails;
    price: number;
    releaseDate: string;
};

interface CardProductProps {
    data: Car,
    className?: string;
    MouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
    MouseOut?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const CardProduct = ({ className, MouseOver, MouseOut, data }: CardProductProps) => {
    return (
        <AppLink
            onMouseEnter={MouseOver}
            onMouseLeave={MouseOut}
            to={`/detail/${data.id}`}
            className={classNames(s.CardProduct, {}, [className])}>
            <div className={s.box_img}>
                <img src={data.imgSrc} alt={data.altText} />
            </div>
            <div className={s.card_content}>
                <h2>{data.title}</h2>
                <ul className={s.description}>
                    <li>{data.details.city}</li>
                    <li>год / {data.details.year}</li>
                    <li>Цвет / {data.details.color}</li>
                    <li>Объем двигателя / {data.details.engineVolume}</li>
                </ul>
                <div className={s.bottom_box}>
                    <span className={s.price}>{data.price} сом</span>
                    <p className={s.data}>Дата выпуска: <span>{data.releaseDate}</span></p>
                </div>
            </div>
        </AppLink>
    );
};