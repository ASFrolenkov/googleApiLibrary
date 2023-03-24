import './Card.css'
import React from 'react'
import { IData } from '../../types/types'

interface DataItemsProps {
    data: IData[];
}

const Card: React.FC<DataItemsProps> = ({data}) => {
    const [dataObj] = data;

    const {authors, categories, imageLinks, title} = dataObj;

    //Проблема с обработкой компонента когда в imageLinks и categories приходит undefined. Решение:
    const imgThumbnail = imageLinks ? imageLinks.thumbnail : null;

    const categoriesContent = categories ? categories[0] : null;

    return (
        <div className='content__item' tabIndex={0}>
            {imgThumbnail ? <img src={`${imgThumbnail}`} alt={title} className="content__img"/> :
                            <h4 className='content__img'>Image not found</h4>}
            <h3 className="content__categories">{
                categoriesContent ? categoriesContent :
                                    'Categories not found'
            }</h3>
            <h2 className="content__item_title">{title}</h2>

            <h3 className="content__authors">{authors ? authors.join(', ') : 'Authors not found'}</h3>
        </div>
    )
}

export default Card;