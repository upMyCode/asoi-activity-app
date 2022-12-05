import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";
import Cookies from 'js-cookie'

type TUser = {
     userFIO: string;
     userMobilePhone: string;
     userPassword: string;
};

type TUserReturnStatement = {
  id: string;
  userFIO: string;
  userEmail: string;
  userMobilePhone: string;
  userFaculty: string;
  userGroup: string;
  userPassword: string;
  userRepeatPassword: string;
};

type TInitialState = {
     loading: 'idle' | 'pending' | 'succeeded' | 'failed';
     loadingData: TUserReturnStatement;
     error: string | null;
}

const userReturnStatement = {
      id: '',
      userFIO: '',
      userEmail: '',
      userMobilePhone: '',
      userFaculty: '',
      userGroup: '',
      userPassword: '',
      userRepeatPassword: '',
}

const initialState: TInitialState = {
     loading: 'idle',
     loadingData: userReturnStatement,
     error: null
};

export const fetchUserDate = createAsyncThunk<TUserReturnStatement, TUser, {rejectValue: string}>(
    'login/fetchUserDate',
    async function(state: TUser, {rejectWithValue}) {
      const response = await axios.post('http://localhost:8080/auth/login', state);

      if (!response) {
        return rejectWithValue('Server error')
      }

      const responseUserData: TUserReturnStatement = response.data

      return responseUserData;
    }
);

const loginSlice = createSlice({
     name: 'login',
     initialState,
     reducers: {},
     extraReducers: (build) => {
       build
           .addCase(fetchUserDate.pending, (state) => {
             state.loading = 'pending';
           })
           .addCase(fetchUserDate.fulfilled, (state, action) => {
             state.loading = 'succeeded';
             state.loadingData = action.payload;

             Cookies.set('user', JSON.stringify(state.loadingData));
           })
           .addCase(fetchUserDate.rejected, (state) => {
             state.loading = 'failed';
           })
     }
});

export default loginSlice.reducer;