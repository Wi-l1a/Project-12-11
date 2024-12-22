import { Input } from '@/shared/ui/Input/Input';
import s from './FilterProduct.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import SearchIcon from '@/shared/assets/icons/search_Icon.svg';
import { Select } from '@/shared/ui/Select/Select';

interface FilterProductProps {
    onFilterChange: (filters: any) => void;
    className?: string;
}

export const FilterProduct = ({ onFilterChange, className }: FilterProductProps) => {
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        onFilterChange({ [name]: value });
    };

    return (
        <div className={classNames(s.FilterProduct, {}, [className])}>
            <Input
                icon={<SearchIcon />}
                width="100%"
                type="text"
                name="search"
                className={classNames(s.input, {}, [s.search])}
                placeholder="Поиск"
                onChange={handleFilterChange}
            />
            <span className={s.label}>Цена</span>
            <div className={s.box}>
                <Input
                    type="number"
                    name="minPrice"
                    placeholder="Мин. цена"
                    onChange={handleFilterChange}
                />
                <Input
                    type="number"
                    name="maxPrice"
                    placeholder="Макс. цена"
                    onChange={handleFilterChange}
                />
            </div>
            <span className={s.label}>Год</span>
            <div className={s.box}>
                <Input
                    type="number"
                    name="minYear"
                    placeholder="От"
                    onChange={handleFilterChange}
                />
                <Input
                    type="number"
                    name="maxYear"
                    placeholder="До"
                    onChange={handleFilterChange}
                />
            </div>
            <Select
                name="city"
                options={["Бишкек", "Алматы", "Москва"]}
                placeholder="Город: Все"
                onChange={handleFilterChange}
            />

            <Select
                name="color"
                options={["Серебристый", "Черный", "Красный", "Синий"]}
                placeholder="Цвет: Любой"
                onChange={handleFilterChange}
            />

            <Select
                name="model"
                options={["Bentley", "BMW", "Mercedes"]}
                placeholder="Модель: Все"
                onChange={handleFilterChange}
            />
            <Select
                name="steeringWheel"
                options={["Левый", "Правый"]}
                placeholder="Руль: Любой"
                onChange={handleFilterChange}
            />
            <Select
                name="drive"
                options={["Передний", "Задний", "Полный"]}
                placeholder="Привод: Любой"
                onChange={handleFilterChange}
            />
            <Select
                name="fuel"
                options={["Бензин", "Дизель", "Электрический"]}
                placeholder="Топливо : Любой"
                onChange={handleFilterChange}
            />
            <Select
                name="bodyType"
                options={["Седан", "Кроссовер", "Хэтчбек"]}
                placeholder="Кузов: Любой"
                onChange={handleFilterChange}
            />
            <Select
                name="condition"
                options={["Б/у", "Новый"]}
                placeholder="Состояние: Любой"
                onChange={handleFilterChange}
            />
        </div>
    );
};
