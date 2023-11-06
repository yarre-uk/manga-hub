'use client';

import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

function AdminPage() {
  const axiosAuth = useAxiosAuth();
  const { toast } = useToast();

  const fetchWeather = async () => {
    try {
      const res = await axiosAuth.get('api/User/get-all', {
        params: { PageSize: 10, PageCount: 2 },
      });

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
      <p>Admin page</p>
      <Button onClick={fetchWeather}>Get weather admin</Button>
    </div>
  );
}

export default AdminPage;
