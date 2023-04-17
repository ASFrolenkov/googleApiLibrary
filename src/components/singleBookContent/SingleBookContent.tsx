import './singleBookContent.css'
import React from 'react'



const SingleBookContent: React.FC<any> = ({data}) => {
    const {title, authors, description, categories, imageLinks} = data


    let category = null;

    if (categories) {
        category = categories[0]
    }

/*     let imageLink = null; 
    if (imageLinks) {
        imageLinks.medium ? imageLink = imageLinks.medium:
                            imageLink = imageLinks.thumbnail;
    } */

    const regExp = /<br>|<i>|<\/i>|<a>|<\/a>|<b>|<\/b>|<li>|<\/li>|<ul>|<\/ul>|<p>|<\/p>|&quot;/g;
    let replacedDescr = null;
    if (description) {
        replacedDescr = description.replace(regExp, '')
    }



    return (
        <>
            <div className="singleBook__img">
                {imageLinks ? <img src={imageLinks.thumbnail} alt={title} /> : <h4 className='content__img single'>Image not found</h4>}
            </div>
            <div className="singleBook__wrapper">
                <h3 className="singleBook__categories">{category}</h3>
                <h2 className="singleBook__title">{title}</h2>
                <h3 className="singleBook__author">{authors}</h3>
                <p className="singleBook__descr">{replacedDescr}</p>
            </div>
        </>
    )
}

export default SingleBookContent;