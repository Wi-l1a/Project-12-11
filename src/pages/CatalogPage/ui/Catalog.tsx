import { FilterProduct } from '@/widgets/FilterProduct';
import s from './Catalog.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CardProduct } from '@/widgets/CardProduct/ui/CardProduct';
import { useHoverEffect } from '@/shared/lib/HoverEffect/HoverEffect';
import { DataCars } from '../../../shared/lib/data/data';
import { useState } from 'react';
import { Select } from '@/shared/ui/Select/Select';

interface CatalogProps {
    className?: string;
}

const Catalog = ({ className }: CatalogProps) => {
    const { overlayStyle, handleMouseOver, handleMouseOut } = useHoverEffect('#4d7fea2f');

    const [filters, setFilters] = useState<any>({});
    const [selectedSort, setSelectedSort] = useState<string>(''); // State to store selected sort option

    const handleFilterChange = (newFilters: any) => {
        setFilters((prevFilters: any) => ({ ...prevFilters, ...newFilters }));
    };

    const handleSortChange = (option: string) => {
        setSelectedSort(option); // Update the selected sort option
    };

    const filteredData = DataCars.filter((car) => {
        const {
            search,
            city,
            minYear,
            maxYear,
            color,
            minPrice,
            maxPrice,
            model,
            steeringWheel,
            drive,
            fuel,
            bodyType,
            condition
        } = filters;

        return (
            (!search || car.title.toLowerCase().includes(search.toLowerCase())) &&
            (!city || car.details.city === city) &&
            (minYear === undefined || minYear === '' || car.details.year >= parseInt(minYear)) &&
            (maxYear === undefined || maxYear === '' || car.details.year <= parseInt(maxYear)) &&
            (!color || car.details.color === color) &&
            (minPrice === undefined || minPrice === '' || car.price >= parseInt(minPrice)) &&
            (maxPrice === undefined || maxPrice === '' || car.price <= parseInt(maxPrice)) &&
            (!model || car.title.toLowerCase().includes(model.toLowerCase())) &&
            (!steeringWheel || car.details.steeringWheel === steeringWheel) &&
            (!drive || car.details.drive === drive) &&
            (!fuel || car.details.fuel === fuel) &&
            (!bodyType || car.details.bodyType === bodyType) &&
            (!condition || car.details.condition === condition)
        );
    });

    const sortByDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day); // Convert string to Date
    };

    const sortedData = [...filteredData].sort((a, b) => {
        switch (selectedSort) {
            case 'Цена: по возрастанию':
                return a.price - b.price;
            case 'Цена: по убыванию':
                return b.price - a.price;
            case 'Дата: сначала новые':
                return sortByDate(b.releaseDate).getTime() - sortByDate(a.releaseDate).getTime();
            case 'Дата: сначала старые':
                return sortByDate(a.releaseDate).getTime() - sortByDate(b.releaseDate).getTime();
            default:
                return 0;
        }
    });

    return (
        <section className={classNames(s.wrapper, {}, ['container'])}>
            <div className={s.box_filter}>
                <FilterProduct onFilterChange={handleFilterChange} />
            </div>
            <div className={s.content}>
                <Select
                    className={s.sort}
                    width={'30%'}
                    name="Sorting"
                    options={[
                        'Цена: по возрастанию',
                        'Цена: по убыванию',
                        'Дата: сначала новые',
                        'Дата: сначала старые'
                    ]}
                    placeholder="Сортировка"
                    onChange={(e) => handleSortChange(e.target.value)} // Handle sort change
                />
                <div className={s.cards}>
                    <div className="overlay" style={overlayStyle} />
                    {sortedData.length > 0 ? (
                        sortedData.map((el) => (
                            <CardProduct
                                data={el}
                                key={el.id}
                                MouseOver={handleMouseOver}
                                MouseOut={handleMouseOut}
                            />
                        ))
                    ) : (
                        <div className={s.noResults}>Ничего не найдено</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
