export type TInitialState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  loadingStatus: string;
  error: string | null;
}