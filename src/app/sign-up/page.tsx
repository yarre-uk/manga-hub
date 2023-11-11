'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Resolver, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SignUpDTO } from './types';

import Input from '@/shared/components/input';
import Textarea from '@/shared/components/textarea';
import { Button } from '@/shared/components/ui/button';
import { useToast } from '@/shared/components/ui/use-toast';
import { ROUTE } from '@/shared/constants/routes';
import {
  PasswordRegex,
  PhoneRegex,
} from '@/shared/constants/validationConstants';
import { axios } from '@/shared/lib/axios';

const validationSchema = yup
  .object({
    login: yup.string().required('Login required').min(4),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password minimal length is 8')
      .matches(
        PasswordRegex,
        'Password may contain only latin characters, numbers and special characters.',
      ),
    firstName: yup.string().required('First Name required').min(4),
    lastName: yup.string().required('Last Name required').min(4),
    description: yup.string().required('Description required').min(15),
    phoneNumber: yup
      .string()
      .required('Phone number required')
      .matches(PhoneRegex, 'Incorrect phone number'),
    showConfidentialInformation: yup
      .boolean()
      .required('Show Confidential Information required'),
    birthDate: yup.date().required('Birth dare required').min(new Date(1950)),
    email: yup
      .string()
      .required('Email required')
      .email('Incorrect email')
      .min(5, 'Email minimum length is 5'),
  })
  .required();

function SignUpPage() {
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDTO>({
    resolver: yupResolver(validationSchema) as Resolver<SignUpDTO, unknown>,
  });

  const onSubmit: SubmitHandler<SignUpDTO> = async (data) => {
    try {
      await axios.post('api/User/register', {
        ...data,
        userId: 0,
        birthDate: new Date(data.birthDate).toISOString(),
        avatar: '',
      });

      toast({
        title: 'Success',
        description: 'Check your email for confirmation before login',
      });

      router.push(ROUTE.HOME);
    } catch (error) {
      toast({
        title: 'Error occurred',
        variant: 'destructive',
        // description: error.errors, TODO doesn't work
      });
    }
  };
  return (
    <div className="flex flex-col items-center gap-6 pt-10">
      <p className="text-2xl">Registration form</p>
      <form
        className="flex w-[50%] flex-col gap-6 lg:w-[50rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="login"
          register={register}
          error={errors?.login?.message}
        />
        <Input
          label="password"
          register={register}
          error={errors?.password?.message}
        />
        <Input
          label="email"
          register={register}
          error={errors?.email?.message}
        />
        <Input
          label="firstName"
          register={register}
          error={errors?.firstName?.message}
        />
        <Input
          label="lastName"
          register={register}
          error={errors?.lastName?.message}
        />

        <Textarea
          label="description"
          register={register}
          error={errors?.description?.message}
        />

        <Input
          label="phoneNumber"
          register={register}
          error={errors?.phoneNumber?.message}
        />

        {/* <Checkbox
          label="showConfidentialInformation"
          register={register}
          error={errors?.showConfidentialInformation?.message}
        /> */}

        <Input
          type="checkbox"
          label="showConfidentialInformation"
          register={register}
          className="flex flex-row"
          error={errors?.showConfidentialInformation?.message}
        />

        <Input
          type="date"
          label="birthDate"
          register={register}
          defaultValue={new Date().toISOString().slice(0, 10)}
          error={errors?.birthDate?.message}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignUpPage;
