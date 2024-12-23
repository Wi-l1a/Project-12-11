import s from './Catalog.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHoverEffect } from '@/shared/lib/HoverEffect/HoverEffect';
import { DataCars } from '../../../shared/lib/data/data';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Select } from '@/shared/ui/Select/Select';
import { Filters } from '@/widgets/Filters';
import { CardProduct } from '@/widgets/CardProduct';
import { useParams } from 'react-router-dom';
import { getFilteredDataForCars, getFilteredDataForRealEstate } from '@/helpers/FiltersConfig';
import { dataRealEstate } from '@/shared/lib/data/dataRealEstate';
import { scrollToTop } from '@/helpers';
import { Input } from '@/shared/ui/Input/Input';
import SearchIcon from '@/shared/assets/icons/search_Icon.svg';

interface CatalogProps {
    className?: string;
}

const Catalog = ({ className }: CatalogProps) => {
    const { category } = useParams<{ category?: string }>();
    const { overlayStyle, handleMouseOver, handleMouseOut } = useHoverEffect('#4d7fea2f');
    const [filters, setFilters] = useState<any>({});
    const [selectedSort, setSelectedSort] = useState<string>('');

    const handleFilterChange = (newFilters: any) => {
        setFilters((prevFilters: any) => ({ ...prevFilters, ...newFilters }));
    };

    const filteredData = useMemo(() => {
        switch (category) {
            case 'transport':
                return getFilteredDataForCars(DataCars, filters);
            case 'real-estate':
                return getFilteredDataForRealEstate(dataRealEstate, filters);
            default:
                return [];
        }
    }, [category, filters]);

    useEffect(() => {
        scrollToTop();
    }, [filteredData]);

    const handleSortChange = (option: string) => {
        setSelectedSort(option);
    };

    const sortByDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    const sortedData = useMemo(() => {
        return [...filteredData].sort((a, b) => {
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
    }, [filteredData, selectedSort]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        handleFilterChange({ [name]: value });
    };

    const inputsRef = useRef<{ [key: string]: HTMLInputElement | HTMLSelectElement }>({});

    const handleResetFilters = () => {
        setFilters({});
        Object.values(inputsRef.current).forEach((input) => {
            if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
                input.value = '';
            }
        });
    };

    return (
        <section className={classNames(s.wrapper, {}, ['container'])}>
            <div className={s.box_filter}>
                <Filters handleChange={handleChange} category={category} handleResetFilters={handleResetFilters} inputsRef={inputsRef} />
            </div>
            <div className={s.content}>
                <div className={s.box_search}>
                    <Input
                        ref={(el) => el && (inputsRef.current['search'] = el)}
                        icon={<SearchIcon />}
                        width="100%"
                        type="text"
                        name="search"
                        className={classNames(s.input, {}, [s.search])}
                        placeholder="Поиск"
                        onChange={handleChange}
                    />
                    <Select
                        className={s.sort}
                        width={'40%'}
                        name="Sorting"
                        options={[
                            'Цена: по возрастанию',
                            'Цена: по убыванию',
                            'Дата: сначала новые',
                            'Дата: сначала старые'
                        ]}
                        placeholder="Сортировка: По умолчанию"
                        onChange={(e) => handleSortChange(e.target.value)}
                    />
                </div>
                <div className={s.cards}>
                    <div className="overlay" style={overlayStyle} />
                    {!category ? (
                        <div className={s.noResults}>Пожалуйста, выберите категорию</div>
                    ) : sortedData.length > 0 ? (
                        sortedData.map((el) => (
                            <CardProduct
                                category={category}
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
