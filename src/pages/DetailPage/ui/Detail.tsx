import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Detail.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DataCars } from '@/shared/lib/data/data';
import { Slider } from '@/widgets/Slider';
import { scrollToTop } from '@/helpers';
import { dataRealEstate } from '@/shared/lib/data/dataRealEstate';

interface DetailProps {
    className?: string;
}

const Detail = ({ className }: DetailProps) => {
    const { category, id } = useParams<{ category: string, id: string }>();
    const car = DataCars.find((el) => el.id === Number(id));
    const realEstate = dataRealEstate.find((el) => el.id === Number(id));

    if (!car) {
        return <div>Автомобиль с таким ID не найден</div>;
    }

    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <>
            {category === 'transport' ?
                <section className={classNames(s.wrapper, {}, ['container'])}>
                    <div className={s.box_content}>
                        <div className={classNames(s.card, {}, [s.box_Slider])}>
                            <Slider
                                image={car.imgSrc}
                                data={car?.images}
                            />
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
                :
                <section className={classNames(s.wrapper, {}, ['container'])}>
                    <div className={s.box_content}>
                        <div className={classNames(s.card, {}, [s.box_Slider])}>
                            <Slider
                                image={realEstate.imgSrc}
                                data={realEstate?.images}
                            />
                        </div>
                        <div className={classNames(s.card, {}, [s.box_detail])}>
                            <h2 className={s.title}>{realEstate.title}</h2>
                            <p className={s.price}>{realEstate.price.toLocaleString()} сом</p>
                            <ul className={s.detailsList}>
                                <li>{realEstate.details.city}</li>
                                <li>Год: {realEstate.details.year}</li>
                                <li>Площадь: {realEstate.details.area}</li>
                                <li>Этаж: {realEstate.details.floor}</li>
                                <li>Комнаты: {realEstate.details.rooms}</li>
                                <li>Состояние: {realEstate.details.condition}</li>
                                <li>Тип: {realEstate.details.type}</li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.descriptionSection}>
                        <h3>Описание</h3>
                        <p>{car.description}</p>
                    </div>
                </section>
            }
        </>

    );
};

export default Detail;
