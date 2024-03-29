import Markdown from '@/components/Markdown'
// import ErrorHandler from '@/components/errors/ErrorHandler';
// import { getFactsRecordsUniversiade } from '@/lib/queries/main';
import React from 'react'

export default function FactsRecords() {
    const text = `
## **Семь интересных фактов о Зимней универсиаде 2019:**
1. _Это первая зимняя Универсиада в России._ Ранее наша страна уже дважды принимала летние всемирные студенческие игры – в 1973 году в Москве и в 2013 году в Казани. Соревнования этого года стали для России символичными третьими и в то же время дебютными.

2. _Участники состязались в одиннадцати дисциплинах._ Впервые в программу универсиады включен хоккей с мячом. А вот соревнования по лыжному спорту прошли уже в 29-й раз. Эта дисциплина не покидает программу с самых первых зимних студенческих игр.

3. _Самому молодому послу Зимней универсиады 2019 было всего шесть лет._ Юная блогерша из Красноярска Злата Демьянова ведет свой Ютуб-канал о здоровом образе жизни, и сама занимается спортом практически с пеленок. В месяц девочку отдали на грудничковое плавание, а в полтора года она уже участвовала в соревнованиях. Злата стала не только самым молодым послом этих студенческих игр, но и за всю историю их проведения.

4. _Победителей и призеров Зимней универсиады 2019 года наградили уникальными медалями._ Они сделаны из алюминиевого сплава, используемого в космической отрасли, и украшены знаменитыми кристаллами Swarovski. Смелый эксперимент удался. Необычные медали уже по достоинству оценили все причастные к Универсиаде. Всего на Универсиаде было разыграно 76 комплектов наград.

5. _В честь Зимней универсиады 2019 в России выпущены четыре памятные монеты._ Две из них – обычные десятирублевые с изображением логотипа и талисмана игр. А еще две сделаны из драгоценных металлов: серебряная, достоинством в 3 рубля, с изображением лыжницы, и золотая, достоинством в 50 рублей, с логотипом игр. Тираж монет довольно скромный, поэтому коллекционеры объявили на них охоту.

6. _Гости Зимней универсиады 2019 смогли забрать Красноярск с собой._ Специально к студенческим играм приберегли выходящие из оборота бумажные десятирублевые банкноты. На купюрах изображен город, принимающий Универсиаду. Получить памятную купюру можно было не только в отделениях красноярских банков, но и на сдачу в сувенирных лавках.

7. _По Красноярску прошел медвежий марш._ Для многих спортсменов и гостей Универсиады студенческие соревнования стали первой, а может быть и единственной возможностью побывать в Сибири. Специально для них руководство Красноярска решило показать весь колорит края. На протяжении всех дней соревнований в городе проходило множество мероприятий. Одним из самых необычных стал медвежий марш. Пугаться не стоит – звери ненастоящие. Вместо них – переодетые актеры и светящиеся куклы. Но от этого мероприятие не стало менее запоминающимся, а иностранцы смогли рассказать на родине, что в России действительно ходят по улице медведи.



## **Рекорды Зимней универсиады 2019**
Марину Вяткину называют звездой спортивного ориентирования. Четыре медали: две золотые и две серебряные. Студентка Сибирского федерального университета стала рекордсменкой по количеству завоеванных наград на Зимней универсиаде 2019.
`;

    // const [ dataResult ] = await Promise.allSettled([
    //     getFactsRecordsUniversiade()
    //   ]);
    //   if (dataResult.status === "rejected") return (
    //     <ErrorHandler
    //       error={dataResult.reason as unknown}
    //       place="Факты и рекорды" 
    //       notFound
    //       goBack={false}
    //     />
    //   );

    return (
        <div className='sm:w-4/5 container my-16'>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Факты и рекорды</h1>
            </div>
            <div className='mt-16'>
                <Markdown data={text} moreButton={false}/>
            </div>
        </div>
    )
}
