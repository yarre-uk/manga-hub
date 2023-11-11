import React, { PropsWithChildren } from 'react';

import {
  GoogleLogo,
  GoogleSignInButton,
  GoogleSignInButtonText,
} from './styles';

function GoogleSignButton({ children }: PropsWithChildren) {
  const handleClick = async () => {
    alert('Sign with google!');
    //   localStorage.setItem(AUTHORIZATION_STORAGE_KEY, 'true');
    //   window.location.href = `${API_URL}/google-auth/google?returnUrl=${CLIENT_URL}`;
  };

  return (
    <GoogleSignInButton onClick={handleClick}>
      <GoogleLogo src="sign/google.svg" alt="" />
      <GoogleSignInButtonText>{children}</GoogleSignInButtonText>
    </GoogleSignInButton>
  );
}

export default GoogleSignButton;
