import dynamic from 'next/dynamic';

const SignInContainer = dynamic(() => import('@/containers/sign-in'), {
  ssr: false,
});

export default function SignInPage() {
  return <SignInContainer />;
}
