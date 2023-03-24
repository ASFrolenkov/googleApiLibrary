import { createAction } from "@reduxjs/toolkit";

const addSearch = createAction('state/search', (search: string) => {
    return {
        payload: search
    }
});

const addCategories = createAction('state/categories', (categories: string) => {
    if (categories === 'all') {
        categories = '';
    }

    return {
        payload: categories
    }
});

const addOrder = createAction('state/order', (order: string) => {
    return {
        payload: order
    }
});

const addTabIndex = createAction('state/addTabIndex');

const setTrueResetFlag = createAction('state/setTrueResetFlag');

const setFalseResetFlag = createAction('state/setFalseResetFlag');

export {addSearch, addCategories, addOrder, addTabIndex, setTrueResetFlag, setFalseResetFlag};