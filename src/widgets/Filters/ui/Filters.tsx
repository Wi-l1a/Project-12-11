import { classNames } from '@/shared/lib/classNames/classNames';
import { FilterCars } from './FilterCars/FilterCars';
import { FilterRealEstate } from './FilterRealEstate/FilterRealEstate';
import s from './Filters.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

interface FiltersProps {
    handleChange: (filters: any) => void;
    category: string
    handleResetFilters: React.Dispatch<React.SetStateAction<any>>;
    inputsRef: React.MutableRefObject<{ [key: string]: HTMLInputElement | HTMLSelectElement }>;
}

export const Filters = ({ handleChange, category, handleResetFilters, inputsRef }: FiltersProps) => {

    const renderFilterComponent = () => {
        switch (category) {
            case 'transport':
                return <FilterCars handleChange={handleChange} inputsRef={inputsRef} />;
            case 'real-estate':
                return <FilterRealEstate handleChange={handleChange} />;
            default:
                return null;
        }
    };


    return (
        <div className={classNames(s.Filters, {}, [])}>
            <span className={s.label}>Фильтры</span>
            <div className={s.box_category}>
                <AppLink to={'/catalog/transport/'}>
                    Транспорт
                </AppLink>
                <AppLink to={'/catalog/real-estate/'}>
                    Недвижимость
                </AppLink>
                <AppLink to={'#'}>
                    Услуги
                </AppLink>
            </div>
            {renderFilterComponent()}
            <button className={s.btn_reset} onClick={handleResetFilters}>Сбросить все фильтры</button>
        </div>
    );
};
