interface homeState {
  entities: string[];
  status: 'idle' | 'pending' | 'failed';
  error: string;
}

export const initialState: homeState = {
  entities: ['hello'],
  status: 'idle',
  error: '',
};
