import { Button } from '@/components';
import { useAxios } from '@/modules/auth';

const HomeContainer = () => {
  const axios = useAxios();

  const handleClick = async () => {
    const res = await axios.get('/profile');
    console.log(res.data);
  };

  return (
    <div>
      <p>Home Page</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

export default HomeContainer;
