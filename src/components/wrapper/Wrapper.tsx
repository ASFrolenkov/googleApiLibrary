import React ,{ useEffect } from 'react'
import Header from "../header/HeaderComponent";
import SingleBook from "../singleBook/SingleBook";
import Content from "../content/Content";
import { useStoreSelector, useStoreDispatch } from '../../store/hooks/hooks';
import { ILocal } from '../../types/types';
import { addDataToState, changeMaxResults, setData } from '../../store/actions/actionState';
import { googleLibApi } from '../../services/bookService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Wrapper: React.FC = () => {
    const dispatch: any = useStoreDispatch();

    // Получение state из storage
    const localState: ILocal = useStoreSelector(state => state.fetchReducer)
    const {resetflag} = useStoreSelector(state => state.fetchReducer)

    //RTK Query, ответ запроса
    const {data, isLoading, isError, status} = googleLibApi.useFetchBooksQuery(localState);

    //Отправка в stateSlice
    useEffect(() => {
        if (!isLoading && !isError) {
            if (resetflag) {
                dispatch(setData(data.items));
            } else {
                dispatch(addDataToState(data.items));
            }  
            dispatch(changeMaxResults(data.totalItems));
        }
    }, [data])

    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Content isLoading={isLoading} isError={isError} status={status}/>}/>
                <Route path="/singleBook/:bookId" element={<SingleBook/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default Wrapper;