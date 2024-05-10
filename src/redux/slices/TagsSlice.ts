import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../models/Tag';
import { StoreState } from '../store/Store';
import { ENDPOINTS } from '../../api/endpoints/Endpoints';
import axiosInstance from '../../api/axios/AxiosInstance';

interface TagState {
    list: Tag[];
    isLoading: boolean;
    error: string | null;
}

const initialState: TagState = {
    list: [],
    isLoading: false,
    error: null
};

export const fetchTags = createAsyncThunk<Tag[], void, { state: StoreState }>(
    'tags/fetchTags',
    async (_, { getState }) => {
        const state = getState();

        if (state.tags.list.length > 0) {
            return state.tags.list;
        }

        const response = await axiosInstance.get<Tag[]>(ENDPOINTS.getAllTags);
        return response.data;
    }
);

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTags.fulfilled, (state, action: PayloadAction<Tag[]>) => {
                state.list = action.payload;
                state.isLoading = false;
                state.error = null
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.error = action.error.message ?? null;
                state.isLoading = false;
            });
    },
});

export default tagsSlice.reducer;
