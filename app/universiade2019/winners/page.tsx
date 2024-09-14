import SearchField from '@/components/SearchField'
import React from 'react'
import Content from './Content'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getWinnersUniversiade } from '@/lib/queries/universiade/getWinnersUniversiade';
import ErrorHandler from '@/components/errors/ErrorHandler';

export default async function Winners({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined },
}) {

  const [ dataResult ] = await Promise.allSettled([
    getWinnersUniversiade()
  ]);
  if (dataResult.status === "rejected") return (
    <ErrorHandler
      error={dataResult.reason as unknown}
      place="Победители, призеры и участники СФУ" 
      notFound
      goBack={false}
    />
  ); 

  return (
    <div className='sm:w-4/5 container mt-16'>
      <Breadcrumbs data={[
        {title: "Универсиада", slug: "universiade2019"}, 
        {title: "Победители, призеры и участники СФУ", slug: "winners" }
      ]}/>
      <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
        <h1 className='font-semibold lg:text-xl text-base'>{dataResult.value.title}</h1>
        <SearchField placeholder='Поиск по имени' className='rounded-full' />
      </div>
      <Content searchParams={searchParams} className="mt-6"/>
    </div>
  )
}
