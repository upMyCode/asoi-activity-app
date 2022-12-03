import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from "axios";

type TUSER = {
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
  loadingStatus: object;
  error: string | null;
}

const initialState: TInitialState = {
  loading: 'idle',
  loadingStatus: {},
  error: null
};

export const fetchUserDate = createAsyncThunk(
    'registration/fetchUserDate',
    async function(state:TUSER,{ rejectWithValue}) {
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