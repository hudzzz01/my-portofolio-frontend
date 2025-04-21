import {configureStore} from '@reduxjs/toolkit'
import loadingReducer from '../slice/loadingSlice'
import themeReducer from '../slice/themeSlice'

export const store = configureStore({
    reducer:{
        loading : loadingReducer,
        theme : themeReducer,
    }
})