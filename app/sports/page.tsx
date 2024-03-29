import ErrorHandler from '@/components/errors/ErrorHandler';
import { getSportsCategories } from '@/lib/queries/main';
import { getColor } from '@/lib/utils';
import React from 'react'
import SportsArray from './SportsArray';

export default async function Sports() {

    const [ dataResult ] = await Promise.allSettled([
        getSportsCategories()
    ]);
    if (dataResult.status === "rejected") return (
        <ErrorHandler
            error={dataResult.reason as unknown}
            place="Категории видов спорта" 
            notFound
            goBack={false}
        />
    );

    return (
        <div className='sm:w-4/5 container my-16'>
            <h1 className='font-bold lg:text-2xl text-lg'>Виды спорта</h1>
            <div className='my-16'>
                {dataResult.value.data.map((category, index) => (
                    <div key={category.id} className='mb-20'>
                        <div 
                            className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 pb-2 mb-4'
                            style={{borderColor: `hsl(var(${getColor(index)}))`}}
                        >
                            <h1 className='font-semibold lg:text-xl text-base'>{category.attributes.name}</h1>
                        </div>
                        <SportsArray categoryId={category.id} categoryIndx={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}
