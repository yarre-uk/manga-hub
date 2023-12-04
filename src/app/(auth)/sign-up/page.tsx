import dynamic from 'next/dynamic';

const SignUpContainer = dynamic(() => import('@/containers/sign-up'), {
  ssr: false,
});

export default function SignUpPage() {
  return <SignUpContainer />;
}
