import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {TInitialState} from './TInitialState';
import {TUser} from './TUser';

const initialState: TInitialState = {
  loading: 'idle',
  loadingStatus: {},
  error: null
};

export const fetchUserDate = createAsyncThunk(
    'registration/fetchUserDate',
    async function(state:TUser,{ rejectWithValue}) {
      try{
        const response = await axios.post('http://localhost:8080/auth/registration', state);

        return response;
      } catch (e) {
        return rejectWithValue(e);
      }
    }
)

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchUserDate.pending, (state) => {
          state.loading = 'pending';
        })
        .addCase(fetchUserDate.fulfilled, (state, action) => {
          state.loading = 'succeeded';
          state.loadingStatus = action.payload;
        })
        .addCase(fetchUserDate.rejected, (state) => {
          state.loading = 'failed';
        })
  }
})

export default registrationSlice.reducer;