/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Button from '@/shared/components/Button';
import axios from '@/shared/lib/axios';

function HomePage() {
  // const { data: session } = useSession();
  // const [posts, setPosts] = useState();
  // const axiosAuth = useAxiosAuth();

  const fetchPost = async () => {
    let res: any;

    try {
      res = await axios.post('https://localhost:7142/api/Auth/login', {
        login: 'Admin',
        password: 'admin231_rte',
      });
    } catch (e) {
      console.log(JSON.stringify(res?.data, null, 4));
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
