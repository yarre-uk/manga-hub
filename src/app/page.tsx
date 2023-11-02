'use client';

import { useSession } from 'next-auth/react';

import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

function HomePage() {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();
  const { data: session } = useSession();

  const fetchPostAdmin = async () => {
    try {
      const res = await axiosAuth.get('/WeatherForecast');

      console.log(res);

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

  const fetchPost = async () => {
    try {
      const res = await axiosAuth.get('/WeatherForecast/get-auth');

      console.log(res);

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
      <Button onClick={fetchPostAdmin}>Get Weather Admin</Button>
      <Button onClick={fetchPost}>Get Weather</Button>
      <Button
        onClick={() => {
          console.log(session);
        }}
      >
        Console session
      </Button>

      <div className="w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90" />
    </div>
  );
}

export default HomePage;
