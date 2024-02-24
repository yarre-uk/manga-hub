import { Button } from '@/components';
import { useAxios } from '@/modules/auth';

const Page = () => {
  const axios = useAxios();

  const handleClick = async () => {
    const res = await axios.get('/profile');
    console.log(res.data);
  };

  return (
    <div>
      <p>Profile Page</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default Page;
