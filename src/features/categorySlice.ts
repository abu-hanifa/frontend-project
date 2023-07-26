import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    category: [],
    loading: false
}

export const fetchCategory = createAsyncThunk(
    'category/fetch',
     async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/categories')
            const category = await res.json()
            if(category.error) {
                return thunkAPI.rejectWithValue(category.error)
            }
            return category
            
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
     }
     )
     
     const categorySlice = createSlice({
        name: 'category',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.loading = false
                state.category = action.payload
            })
            .addCase(fetchCategory.pending, (state, action) => {
                state.loading = true
            })
        }
     })
     export default categorySlice.reducer