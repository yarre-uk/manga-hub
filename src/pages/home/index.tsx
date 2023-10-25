import { fetchPosts, reset, selectCounter } from './features';

import { useDispatch, useSelector } from '@/store';

function Home() {
  const { entities, status, error } = useSelector(selectCounter);
  const dispatch = useDispatch();

  const onClickFetch = () => {
    dispatch(fetchPosts());
  };

  const onClickReset = () => {
    dispatch(reset());
  };

  let result;
  if (status == 'pending') {
    result = 'Loading';
  } else if (status == 'failed') {
    result = error;
  } else {
    result = entities.join(' ');
  }

  return (
    <div>
      <h2>Test</h2>
      <button onClick={onClickFetch}>Fetch</button>
      <button onClick={onClickReset}>Reset</button>
      <p>res - {result}</p>
    </div>
  );
}

export default Home;
