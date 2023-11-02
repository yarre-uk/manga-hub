'use client';

function HomePage() {
  // const axiosAuth = useAxiosAuth();
  // const { toast } = useToast();
  // const { data: session } = useSession();

  // const fetchPostAdmin = async () => {
  //   try {
  //     const res = await axiosAuth.get('/WeatherForecast');

  //     console.log(res);

  //     toast({
  //       title: 'Success',
  //       description: `Result length - ${res.data.length}`,
  //     });
  //   } catch (e) {
  //     console.error(e);

  //     toast({
  //       title: 'Error occurred!',
  //       variant: 'destructive',
  //       description: 'Some error occurred',
  //     });
  //   }
  // };

  // const fetchPost = async () => {
  //   try {
  //     const res = await axiosAuth.get('/WeatherForecast/get-auth');

  //     console.log(res);

  //     toast({
  //       title: 'Success',
  //       description: `Result length - ${res.data.length}`,
  //     });
  //   } catch (e) {
  //     console.error(e);

  //     toast({
  //       title: 'Error occurred!',
  //       variant: 'destructive',
  //       description: 'Some error occurred',
  //     });
  //   }
  // };

  return (
    <div>
      <p className="text-3xl mx-auto text-center my-4">MangaHub Home Page</p>
    </div>
  );
}

export default HomePage;
