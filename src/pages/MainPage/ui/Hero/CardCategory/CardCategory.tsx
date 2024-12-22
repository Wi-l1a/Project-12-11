import React, { ReactNode, useState } from 'react';
import s from './CardCategory.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import PressIcon from '@/shared/assets/icons/Press_icon.svg'
import { Icon } from '@/shared/ui/Icon';
import { useHoverEffect } from '@/shared/lib/HoverEffect/HoverEffect';


interface CardCategoryProps {
    className?: string;
    icon?: ReactNode;
    title: string;
    description: string;
    to: string;
}

interface CardDataProps {
    data: CardCategoryProps[];
}

export const CardCategory = ({ data }: CardDataProps) => {
    const { overlayStyle, handleMouseOver, handleMouseOut } = useHoverEffect('#4D7FEA');
    return (
        <>
            <div className={s.cards}>
                <div className='overlay' style={overlayStyle} />
                {data.map((el, index) => (
                    <React.Fragment key={el.title}>
                        <AppLink
                            onMouseEnter={handleMouseOver}
                            onMouseLeave={handleMouseOut}
                            to={el.to} className={classNames(s.card, {}, [])}>
                            <div className={s.box_name}>
                                <div className={s.icon}>{el.icon}</div>
                                <h3 className={s.title}>{el.title}</h3>
                            </div>
                            <p className={classNames(s.description, {}, ['description'])}>{el.description}</p>
                            <Icon
                                className={s.pressIcon}
                                Svg={PressIcon}
                                width={50}
                                height={50}
                            />
                        </AppLink>
                        {index < data.length - 1 && <span className={s.cardSeparator}></span>}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};
