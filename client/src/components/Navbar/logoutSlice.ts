import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {TInitialState} from './TInitialState'

const initialState: TInitialState = {
  loading: 'idle',
  loadingStatus: '',
  error: null
};

export const fetchUserDate = createAsyncThunk(
    'logout/fetchUserDate',
    async function(id:string,{ rejectWithValue}) {

      console.log(id)
      try{
        const response = await axios.post('http://localhost:8080/auth/logout', {id});

        const responseData: string = response.data;

        return responseData;
      } catch (e) {
        return rejectWithValue(e);
      }
    }
)

const logoutSlice = createSlice({
  name: 'logout',
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
          console.log(action.payload);
          Cookies.remove('user');
        })
        .addCase(fetchUserDate.rejected, (state) => {
          state.loading = 'failed';
        })
  }
})

export default logoutSlice.reducer;