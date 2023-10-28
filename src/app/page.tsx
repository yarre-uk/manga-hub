/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/shared/components/Button';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

function HomePage() {
  // const { data: session } = useSession();
  // const [posts, setPosts] = useState();
  const axiosAuth = useAxiosAuth();

  const fetchPost = async () => {
    try {
      await axiosAuth.get('https://localhost:7142/WeatherForecast');

      console.log('1');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Button onClick={fetchPost}>Get User Posts</Button>
      {/* {posts && JSON.stringify(posts)} */}
    </div>
  );
}

export default HomePage;
