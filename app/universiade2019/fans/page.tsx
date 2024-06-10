import Breadcrumbs from '@/components/Breadcrumbs'
import Markdown from '@/components/Markdown'
import React from 'react'

export default function Fans() {

    const text = `
Более 2000 школьников и студентов из разных вузов, школ, колледжей и техникумов России приняли участие в проекте «Болельщики Зимней универсиады 2019», направленном на создание групп поддержки спортсменов Студенческих игр.

До начала Студенческих игр участники программы успели посетить все тестовые соревнования, а во время Зимней универсиады 2019 болельщики активно поддерживали спортсменов-участников из всех стран. Перед этим ребята познакомились со спецификой каждой спортивной дисциплины, а также изучили правила поведения на трибунах и узнали о том, что разрешено и запрещено болельщикам на турнирах по разным видам спорта. Кроме того, все участники проекта получили необходимую атрибутику болельщиков.
`

    return (
        <div className='sm:w-4/5 container my-16'>
            <Breadcrumbs data={[
              {title: "Универсиада", slug: "universiade2019"}, 
              {title: "Болельщики", slug: "fans" }
            ]}/>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Болельщики</h1>
            </div>
            <div className='mt-16'>
                <Markdown data={text} moreButton={false}/>
            </div>
        </div>
    )
}
