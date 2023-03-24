import './Content.css'
import React from 'react'
import ContentContainer from '../contentContainer/ContentContainer';
import Spinner from '../spinner/Spinner';
import { useStoreSelector } from '../../store/hooks/hooks';

interface IContent {
    isLoading: any,
    isError: any,
    status: string
}

const Content:React.FC<IContent> = ({isLoading, isError, status}) => {

    const {data, maxResults} = useStoreSelector(state => state.stateReducer)

    return (
        <section className="content">

            {isLoading && <Spinner/>}

            {isError && <h3>Failed load...</h3>}

            {(!isLoading && !isError) && <ContentContainer totalItems={maxResults}
                                        items={data}
                                        statusLoading={status}/>}
        </section>
    )
}

export default Content;