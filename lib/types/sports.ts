import { z } from "zod"
import { ImagesArrayT } from "./main"

export const SportCategoriesT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      name: z.string()
    })
  }).array()
})
export type SportCategoriesT = z.infer<typeof SportCategoriesT> 

export const SportT = z.object({
  id: z.string(),
  attributes: z.object({
    name: z.string(),
    category: z.object({
      data: z.object({
        id: z.string(),
        attributes: z.object({
          name: z.string()
        })
      }).nullable()
    }),
    images: ImagesArrayT,
    description: z.string().nullable()
  })
})
export type SportT = z.infer<typeof SportT> 

export const SportsT = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
    })
  }),
  data: z.object({
    id: z.string(),
    attributes: z.object({
      name: z.string()
    })
  }).array()
})
export type SportsT = z.infer<typeof SportsT> 