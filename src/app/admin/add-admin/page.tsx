'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import Input from '@/shared/components/input';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/lib/hooks/useAxiosAuth';

type SetAdminDTO = { userId: number; isAdmin: boolean };

const validationSchema = yup
  .object({
    userId: yup
      .number()
      .required('Id required')
      .min(0, `Id can't be less then 0`),
    isAdmin: yup.boolean().required('Show Confidential Information required'),
  })
  .required();

function ForgotPasswordPage() {
  const { toast } = useToast();
  const axiosAuth = useAxiosAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetAdminDTO>({
    resolver: yupResolver(validationSchema) as Resolver<SetAdminDTO, unknown>,
  });

  const onSubmit: SubmitHandler<SetAdminDTO> = async (data) => {
    try {
      await axiosAuth.post('api/User/set-isadmin-value', data);

      toast({
        title: 'Success',
        description: `User's admin option of user with id ${data.userId} has been set to ${data.isAdmin}`,
      });
    } catch (error) {
      toast({
        title: 'Error occurred!',
        variant: 'destructive',
      });
    }
  };
  return (
    <div className="flex gap-6 items-center pt-10 flex-col">
      <p className="text-2xl">Change Password Form</p>
      <form
        className="flex flex-col gap-6 w-[50%] lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="userId"
          type="number"
          defaultValue={1}
          register={register}
          error={errors?.userId?.message}
        />

        <Input
          type="checkbox"
          label="isAdmin"
          register={register}
          className="flex flex-row w-auto"
          error={errors?.isAdmin?.message}
        />

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
