export const AUTH_SLICE_NAME = 'auth';

interface authState {
  accessToken: string;
  refreshToken: string;
  status: 'idle' | 'pending' | 'failed';
  error: string;
}

export const initialState: authState = {
  accessToken: '',
  refreshToken: '',
  status: 'idle',
  error: '',
};
