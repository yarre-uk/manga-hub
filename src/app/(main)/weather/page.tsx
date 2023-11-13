'use client';

import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';

function WeatherPage() {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();

  const fetchWeather = async () => {
    try {
      const res = await axiosAuth.get('/WeatherForecast/get-auth');

      toast({
        title: 'Success',
        description: `Result length - ${res.data.length}`,
      });
    } catch (e) {
      console.error(e);

      toast({
        title: 'Error occurred!',
        variant: 'destructive',
        description: 'Some error occurred',
      });
    }
  };

  return (
    <div>
      <p>User page page</p>
      <Button onClick={fetchWeather}>Get weather</Button>
    </div>
  );
}

export default WeatherPage;
