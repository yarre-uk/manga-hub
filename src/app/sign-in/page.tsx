import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  login: string;
  password: string;
};

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('login', { required: true })} />
      {errors.login && <span>This field is required</span>}

      <input {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default SignIn;
