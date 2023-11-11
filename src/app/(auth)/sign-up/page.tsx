import dynamic from 'next/dynamic';

const SignUpContainer = dynamic(() => import('@/components/sign-up'), {
  ssr: false,
});

export default function SignUpPage() {
  return <SignUpContainer />;
}
