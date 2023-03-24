import './header.css'
import { addSearch, addCategories, addOrder } from '../../store/actions/actionsFetch'

import React, {useCallback} from 'react'
import { useStoreDispatch } from '../../store/hooks/hooks'
import { useStoreSelector } from '../../store/hooks/hooks'
import {Link} from 'react-router-dom'

const Header: React.FC = () => {
    const dispatch = useStoreDispatch();

    const {search} = useStoreSelector(state => state.fetchReducer)

    //Отправка в fetchSlice по нажатию Enter
    const event = useCallback((eventTarget: any) => {
        const eventFunction = (e: any) => {
            if (e.key === 'Enter') {
                dispatch(addSearch(eventTarget.value));
                eventTarget.removeEventListener('keydown', eventFunction);
                return;
            }
            eventTarget.removeEventListener('keydown', eventFunction);
            return;    
        }

        eventTarget.addEventListener('keydown', eventFunction);
    }, [search])
    //Отправка в fetchSlice по нажатию кнопки
    const clickEvent = useCallback(() => {
        const input: any = document.querySelector('#searchId');
        if (input) {
            dispatch(addSearch(input.value))
        }
    }, [search])

    return (
        <header className="header">
            <Link to="/">
                <h1 className="header__title">Search for books</h1>
            </Link>
            

            <div className="header__search_wrapper">
                <input type="text"
                    placeholder='search here'
                    className='header__search'
                    onChange={(e): any => event(e.target)}
                    id='searchId'/>
                    <button className="header__search_btn" onClick={() => clickEvent()}>Search</button>
            </div>


            <div className="header__wrapper">
                <div className="header__item">
                    <h2 className="header__item_title">Categories</h2>
                    <select name="categories"
                            id="categories" 
                            className="header__select"
                            onChange={(e) => dispatch(addCategories(e.target.value))}>
                        <option value="all" className="header__option">all</option>
                        <option value="art" className="header__option">art</option>
                        <option value="biography" className="header__option">biography</option>
                        <option value="computers" className="header__option">computers</option>
                        <option value="history" className="header__option">history</option>
                        <option value="medical" className="header__option">medical</option>
                        <option value="poetry" className="header__option">poetry</option>
                    </select>
                </div>

                <div className="header__item">
                    <h2 className="header__item_title">Sorting by</h2>
                    <select name="sorting"
                            id="sorting"
                            className="header__select"
                            onChange={(e) => dispatch(addOrder(e.target.value))}>
                        <option value="relevance" className="header__option">relevance</option>
                        <option value="newest" className="header__option">newest</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header;