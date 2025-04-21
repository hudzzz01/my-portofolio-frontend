import {createSlice} from '@reduxjs/toolkit'

interface LoadingState {
    loading : {
        isLoading : boolean,
        message : string
    }
}



const initialState : LoadingState = {
    loading : {
        isLoading : false,
        message : ""
    }
}



const loadingSlice = createSlice ({
    name : "loading",
    initialState,
    reducers : {
        setLoading : (state, action) => {
            state.loading.isLoading = action.payload
        }
    }
})

export const {setLoading} = loadingSlice.actions
export default loadingSlice.reducer