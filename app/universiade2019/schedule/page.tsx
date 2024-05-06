import Markdown from '@/components/Markdown'
import React from 'react'

export default function Schedule() {

    const text = `
## **Расписание соревнований Универсиады-2019:**

- соревнования по горнолыжному спорту проходили со 2 по 11 марта 2019 года в Фанпарке «Бобровый лог»;

- соревнования по сноуборду и фристайлы проходили с 1 по 11 марта 2019 года на кластере «Сопка»;

- соревнования по спортивному ориентированию и лыжным гонкам проходили с 1 по 12 марта 2019 года на кластере «Радуга»;

- соревнования по биатлону проходили с 4 по 10 марта 2019 года в спортивном комплексе «Академия биатлона»;

- соревнования по керлингу проходили с 3 по 10 марта 2019 года во Дворце спорта им. Ивана Ярыгина;

- соревнования по шорт-треку проходили с 4 по 6 марта 2019 года в многофункциональном спортивном комплексе «Арена.Север»;

- за мужской и женский хоккей с мячом можно было поболеть с 1 по 10 марта 2019 года на стадионе «Енисей»;

- отдельно мужчины играли в хоккей с 1 по 12 марта 2019 года в ледовом дворце «Кристалл Арена»;

- увидеть женский хоккей можно было сразу на двух объектах: с 1 по 8 марта 2019 года на стадионе «Первомайский» и с 10 по 11 марта 2019 года в многофункциональном спортивном комплексе «Арена.Север»;

- соревнования по фигурному катанию проходили с 6 по 9 марта 2019 года в спортивно-зрелищном комплексе «Платинум Арена Красноярск».
`

    return (
        <div className='sm:w-4/5 container my-16'>
            <div className='flex lg:flex-row flex-col justify-between gap-6 border-b-2 border-foreground pb-2'>
                <h1 className='font-semibold lg:text-xl text-base'>Расписание соревнований</h1>
            </div>
            <div className='mt-16'>
                <Markdown data={text} moreButton={false}/>
            </div>
        </div>
    )
}