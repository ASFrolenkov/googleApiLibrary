import Card from "../card/Card";
import React from 'react'
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
    const {numberResults, tabIndex} = useStoreSelector(state => state.fetchReducer)

    const clickEvent = () => {
        //Условие, если количество результатов минус нынещный tabIndex больше заданного шага пагинации, то прибавляем tabIndex
        if (maxResults - tabIndex > numberResults) {
            dispatch(addTabIndex());
        }
    }
    

    return (
        <>
            <h2 className="content__title">Found {totalItems} results</h2>

            <div className="content__wrapper">
                {data.map((elem: any, i: number) => {
                    return (
                        <Link to={`/singleBook/${elem.id}`} key={i}>
                            <Card data={[elem.volumeInfo, elem.id]}/>
                        </Link>
                    )
                })}
            </div>

            {maxResults - tabIndex > numberResults ? statusLoading === 'pending' ? <button className="content__load">Loading...</button> :
                                                                                   <button className="content__load" onClick={() => clickEvent()}>Load more</button> : 
                                                     null}
            
        </>  
    )
}

export default ContentContainer;

///buildFolder/googleApi