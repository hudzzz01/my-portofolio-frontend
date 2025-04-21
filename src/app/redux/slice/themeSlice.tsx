import {createSlice} from '@reduxjs/toolkit'

interface themeState {
    theme : {
        isDark : boolean,
    }
}



const initialState : themeState = {
    theme : {
        isDark : false,
    }
}



const themeSlice = createSlice ({
    name : "theme",
    initialState,
    reducers : {
        setDarkMode : (state, action) => {
            state.theme.isDark = action.payload
        }
    }
})

export const {setDarkMode} = themeSlice.actions
export default themeSlice.reducer