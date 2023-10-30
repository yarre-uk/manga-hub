'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from './input';
import { SignUpDTO } from './types';

import { Button } from '@/shared/components/ui/button';
import { Textarea } from '@/shared/components/ui/textarea';
import { useToast } from '@/shared/components/ui/use-toast';
import axios from '@/shared/lib/axios';

function UserForm() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDTO>();

  const onSubmit: SubmitHandler<SignUpDTO> = async (data) => {
    try {
      await axios.post('api/User/register', {
        ...data,
        userId: 0,
        birthDate: new Date(data.birthDate).toISOString(),
      });

      // Success toast
      toast({
        title: 'Success',
        description: 'Check your email for confirmation before login',
      });

      // Redirect to home page
      router.push('/');
    } catch (error) {
      // Error toast
      toast({
        title: 'Error occurred',
        variant: 'destructive',
        // description: error.errors, TODO doesn't work
      });
    }
  };
  return (
    <div className="flex gap-6 items-center pt-10 flex-col">
      <p className="text-2xl">Registration form</p>
      <form
        className="flex flex-col gap-6 w-[50%] lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="login" register={register} errors={errors} />
        <Input label="password" register={register} errors={errors} />
        <Input label="email" register={register} errors={errors} />
        <Input label="firstName" register={register} errors={errors} />
        <Input label="lastName" register={register} errors={errors} />

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <Textarea
            {...register('description', { required: 'This field is required' })}
          />
          {errors.description && (
            <p className="text-red-500 ml-2">{errors.description.message}</p>
          )}
        </div>
        <Input label="phoneNumber" register={register} errors={errors} />
        <Input
          type="checkbox"
          label="showConfidentialInformation"
          className="h-4 w-fit"
          divClassName="flex flex-row gap-4 items-center"
          register={register}
          errors={errors}
        />
        <Input
          type="date"
          label="birthDate"
          register={register}
          errors={errors}
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

export default UserForm;
