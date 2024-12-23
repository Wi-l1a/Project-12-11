import { Input } from '@/shared/ui/Input/Input';
import s from './../Filters.module.scss'

import { Select } from '@/shared/ui/Select/Select';

interface FilterCarsProps {
    handleChange: (filters: any) => void;
    inputsRef: React.MutableRefObject<{ [key: string]: HTMLInputElement | HTMLSelectElement }>;
}

export const FilterCars = ({ handleChange, inputsRef }: FilterCarsProps) => {

    return (
        <>

            <span className={s.line} />
            <span className={s.label}>Цена</span>
            <div className={s.box}>
                <Input
                    ref={(el) => el && (inputsRef.current['minPrice'] = el)}
                    type="number"
                    name="minPrice"
                    placeholder="Мин. цена"
                    onChange={handleChange}
                />
                <Input
                    ref={(el) => el && (inputsRef.current['maxPrice'] = el)}
                    type="number"
                    name="maxPrice"
                    placeholder="Макс. цена"
                    onChange={handleChange}
                />
            </div>
            <span className={s.label}>Год</span>
            <div className={s.box}>
                <Input
                    ref={(el) => el && (inputsRef.current['minYear'] = el)}
                    type="number"
                    name="minYear"
                    placeholder="От"
                    onChange={handleChange}
                />
                <Input
                    ref={(el) => el && (inputsRef.current['maxYear'] = el)}
                    type="number"
                    name="maxYear"
                    placeholder="До"
                    onChange={handleChange}
                />
            </div>
            <span className={s.label}>Другое</span>

            <Select
                ref={(el) => el && (inputsRef.current['city'] = el)}
                name="city"
                options={["Бишкек", "Алматы", "Москва"]}
                placeholder="Город: Все"
                onChange={handleChange}
            />

            <Select
                ref={(el) => el && (inputsRef.current['city'] = el)}
                name="color"
                options={["Серебристый", "Черный", "Красный", "Синий"]}
                placeholder="Цвет: Любой"
                onChange={handleChange}
            />

            <Select
                ref={(el) => el && (inputsRef.current['model'] = el)}
                name="model"
                options={["Bentley", "BMW", "Mercedes"]}
                placeholder="Модель: Все"
                onChange={handleChange}
            />
            <Select
                ref={(el) => el && (inputsRef.current['steeringWheel'] = el)}
                name="steeringWheel"
                options={["Левый", "Правый"]}
                placeholder="Руль: Любой"
                onChange={handleChange}
            />
            <Select
                ref={(el) => el && (inputsRef.current['drive'] = el)}
                name="drive"
                options={["Передний", "Задний", "Полный"]}
                placeholder="Привод: Любой"
                onChange={handleChange}
            />
            <Select
                ref={(el) => el && (inputsRef.current['fuel'] = el)}
                name="fuel"
                options={["Бензин", "Дизель", "Электрический"]}
                placeholder="Топливо : Любой"
                onChange={handleChange}
            />
            <Select
                ref={(el) => el && (inputsRef.current['bodyType'] = el)}
                name="bodyType"
                options={["Седан", "Кроссовер", "Хэтчбек"]}
                placeholder="Кузов: Любой"
                onChange={handleChange}
            />
            <Select
                ref={(el) => el && (inputsRef.current['condition'] = el)}
                name="condition"
                options={["Б/у", "Новый"]}
                placeholder="Состояние: Любой"
                onChange={handleChange}
            />
        </>
    );
};
