'use client';

import { Button } from '@/shared/components/ui/button';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

function HomePage() {
  const axiosAuth = useAxiosAuth();

  const fetchPost = async () => {
    try {
      await axiosAuth.get('/WeatherForecast');

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
