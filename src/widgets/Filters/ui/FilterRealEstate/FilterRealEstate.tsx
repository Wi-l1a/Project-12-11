import { Input } from '@/shared/ui/Input/Input';
import s from './../Filters.module.scss'

import { Select } from '@/shared/ui/Select/Select';

interface FilterRealEstateProps {
    handleChange: (filters: any) => void;

}
export const FilterRealEstate = ({ handleChange, }: FilterRealEstateProps) => {

    return (
        <>
            <span className={s.line} />
            <span className={s.label}>Цена</span>
            <div className={s.box}>
                <Input
                    type="number"
                    name="minPrice"
                    placeholder="Мин. цена"
                    onChange={handleChange}
                />
                <Input
                    type="number"
                    name="maxPrice"
                    placeholder="Макс. цена"
                    onChange={handleChange}
                />
            </div>

        </>
    );
};
