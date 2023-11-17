'use client';
import Link from 'next/link';
import styled from 'styled-components';

import { Control as AuthControl } from '@/shared/components/lib';

export const SignPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
`;

export const PictureSection = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.15;
    z-index: 2;
  }
`;

export const Picture = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 90%;
`;

export const FormSection = styled.div`
  position: relative;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  background: #202125;
`;

export const FormContentWrapper = styled.div`
  margin-top: 8rem;
`;

export const Control = styled(AuthControl)`
  margin: 0 0 1rem;
`;

export const BackButton = styled(Link)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 3rem;
  height: 3rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  background: rgb(43, 44, 48);
  border-radius: 6px;
  transition: 0.2s;

  &:hover {
    background-color: #34363c;
  }

  & > svg {
  }
`;

export const Heading = styled.h2`
  margin: 0 0 1rem;
  text-align: center;
  letter-spacing: 0.4px;
  line-height: normal;
  font-size: 1.75rem;
  font-weight: 800;
`;

export const Subheading = styled.h5`
  margin: 0 0 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: normal;
  color: aliceblue;
  letter-spacing: 0.5px;
`;

export const SubmitButton = styled.button<{ bgtype: 'signin' | 'signup' }>`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin: 0.75rem 0 0.5rem;
  padding: 0 16px;
  background: #0b63d9;
  color: #f7f7f7;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.375s;
  border-radius: 0.75rem;
  margin-bottom: 2rem;

  &:hover {
    ${({ bgtype }) =>
      `background ${bgtype === 'signup' ? '#964145' : '#084ba5'}`};
  }

  &:disabled {
    opacity: 0.25;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  backface-visibility: hidden;
`;

export const OrText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 1px;
    background-color: #2f3137;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

export const ForgotPasswordButton = styled(Link)`
  all: unset;
  color: #674299;
  cursor: pointer;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HaveAccountText = styled.p`
  color: #fbfef9;
  font-weight: 500;
`;

export const SignInButton = styled(Link)`
  all: unset;
  color: #674299;
  cursor: pointer;
  padding-left: 0.5rem;
`;

export const CopyrightText = styled.p`
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  opacity: 0.5;
  pointer-events: none;
  color: #a0a6b0;
  font-family: sans-serif !important;
`;
