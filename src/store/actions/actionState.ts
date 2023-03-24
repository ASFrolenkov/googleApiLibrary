import { createAction } from "@reduxjs/toolkit";

const setData = createAction('state/setData', (data: any[]) => {
    return {
        payload: data
    }
})

const addDataToState = createAction('state/addDataToState', (data: any[]) => {
    return {
        payload: data
    }
})

const changeMaxResults = createAction('state/changeMaxResults', (maxResults: number) => {
    return {
        payload: maxResults
    }
})

export {setData, addDataToState, changeMaxResults}