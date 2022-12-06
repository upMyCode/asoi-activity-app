export type TInitialState = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  loadingStatus: object;
  error: string | null;
}