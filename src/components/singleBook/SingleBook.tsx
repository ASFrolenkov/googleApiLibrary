import './singleBook.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { googleLibApi } from '../../services/bookService'
import SingleBookContent from '../singleBookContent/SingleBookContent'
import Spinner from '../spinner/Spinner'


const SingleBook: React.FC = () => {
    const {bookId} = useParams()
    
    //Уход от ошибки, когда в googleLibApi приходил ID undefined(bookId = undefined)
    if (!bookId) {
       return (
        <></>
       ); 
    }

    //Получение ответа запроса
    const {data, isLoading, isError} = googleLibApi.useFetchOneBookQuery(bookId);    

    return (
        <section className="singleBook">

            {isLoading && <Spinner/>}

            {isError && <div>Ошибка</div>}

            <div className="singleBook__wrapper_all">
                {data?.volumeInfo && <SingleBookContent data={data.volumeInfo}/>}
            </div>
        </section>
    )
}

export default SingleBook;