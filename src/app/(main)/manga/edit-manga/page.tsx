'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Checkbox, Input } from '@/shared/components/FormComponents';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import useAxiosAuth from '@/shared/hooks/useAxiosAuth';

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

function EditMangaPage() {
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
      await axiosAuth.post('User/set-isadmin-value', data);

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
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Change Password Form</p>
      <form
        className="flex w-[50%] flex-col gap-6 lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="userId"
          type="number"
          defaultValue={1}
          register={register}
          error={errors?.userId?.message}
        />

        <Checkbox
          label="isAdmin"
          register={register}
          error={errors?.isAdmin?.message}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default EditMangaPage;
