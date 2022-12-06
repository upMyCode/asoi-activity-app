import {TUserReturnStatement} from "./TUserReturnStatement";

export type TInitialState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  loadingData: TUserReturnStatement;
  error: string | null;
}