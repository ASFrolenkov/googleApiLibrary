import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { IParams, IData } from '../types/types';

const _apiKey: string = 'AIzaSyBmhiYybyW_KEu04OnyNEC28dGfrdjyMxw';

export const googleLibApi = createApi({
    reducerPath: 'googleLibApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/'}),
    endpoints: (build) => ({
        fetchBooks: build.query<any, IParams>({
            query: ({tabIndex, search, categories, order, numberResults}) => ({
                url: '/volumes',
                params: {
                    //Параметры взяты из документации Google Books APIs
                    q: `"${search}"+subject:"${categories}"`,
                    startIndex: tabIndex,
                    maxResults: numberResults,
                    orderBy: order,
                    key: _apiKey
                }
            })
        }),
        fetchOneBook: build.query<IData, any>({
            query: (bookId) => ({
                //Получение книги по ID
                url: `/volumes/${bookId}`
            })
        })
    })
})