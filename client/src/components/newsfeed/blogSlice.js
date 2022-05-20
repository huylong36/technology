import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogAPI from '../../apis/api/blog';
const initialState = {
    blog:{}
}

export const fetchBlog = createAsyncThunk("blogSlice/fetch", async (args) => {
    const {data} = await blogAPI.getBlog({});
    return data;
})

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.blog = action.payload
            })
    }
})
const { reducer, actions } = blogSlice;

export const { createBlog } = actions;
export default reducer;