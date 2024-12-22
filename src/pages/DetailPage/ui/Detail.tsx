import React from 'react';
import { useParams } from 'react-router-dom';
import s from './Detail.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DataCars } from '@/shared/lib/data/data';

interface DetailProps {
    className?: string;
}

const Detail = ({ className }: DetailProps) => {
    const { id } = useParams<{ id: string }>();
    const car = DataCars.find((car) => car.id === Number(id));

    if (!car) {
        return <div>Автомобиль с таким ID не найден</div>;
    }

    return (
        <section className={classNames(s.wrapper, {}, ['container'])}>
            <div className={s.box_content}>
                <div className={classNames(s.card, {}, [s.box_img])}>
                    <img src={car.imgSrc} alt={car.altText} className={s.image} />
                </div>
                <div className={classNames(s.card, {}, [s.box_detail])}>
                    <h2 className={s.title}>{car.title}</h2>
                    <p className={s.price}>{car.price.toLocaleString()} сом</p>
                    <ul className={s.detailsList}>
                        <li>Дата выпуска: {car.releaseDate}</li>
                        <li>Город / район: {car.details.city}</li>
                        <li>Год: {car.details.year}</li>
                        <li>Цвет: {car.details.color}</li>
                        <li>Объем двигателя: {car.details.engineVolume} л</li>
                        <li>Руль: {car.details.steeringWheel}</li>
                        <li>Привод: {car.details.drive}</li>
                        <li>Топливо: {car.details.fuel}</li>
                        <li>Тип кузова: {car.details.bodyType}</li>
                        <li>Состояние: {car.details.condition}</li>
                    </ul>
                </div>
            </div>
            <div className={s.descriptionSection}>
                <h3>Описание</h3>
                <p>{car.description}</p>
            </div>
        </section>
    );
};

export default Detail;
