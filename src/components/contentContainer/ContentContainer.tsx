import Card from "../card/Card";
import React, {useState, useEffect} from 'react'
import { useStoreSelector, useStoreDispatch } from "../../store/hooks/hooks";
import {  addTabIndex } from "../../store/actions/actionsFetch";
import { Link } from 'react-router-dom'

interface IContentProps {
    totalItems: number;
    items: any[];
    statusLoading: string;
}

const ContentContainer:React.FC<IContentProps> = ({totalItems, statusLoading}) => {
    const dispatch = useStoreDispatch();

    const {data, maxResults} = useStoreSelector(state => state.stateReducer);
    const {resetflag, numberResults} = useStoreSelector(state => state.fetchReducer)

    const [localState, setLocalState] = useState(data);

    useEffect(() => {
        //Если флаг true, то мы перезаписываем локальный массив элементов. Иначе добавляем к нему элементы
        if (resetflag) {
            setLocalState(data);   
        } else {
            setLocalState((state) => [...state, ...data])
        }
        
    }, [data])

    const clickEvent = () => {
        console.log('click');
        //Если количество результатов больше шага пагинцаии, то добавляем tabIndex
        if (maxResults > numberResults) {
            dispatch(addTabIndex());
        }
    }
    

    return (
        <>
            <h2 className="content__title">Found {totalItems} results</h2>

            <div className="content__wrapper">
                {localState.map((elem: any, i: number) => {
                    return (
                        <Link to={`/singleBook/${elem.id}`} key={i}>
                            <Card data={[elem.volumeInfo, elem.id]}/>
                        </Link>
                    )
                })}
            </div>
            
            {statusLoading === 'pending' ? <button className="content__load">Loading...</button> : <button className="content__load" onClick={() => clickEvent()}>Load more</button>}
            
        </>  
    )
}

export default ContentContainer;