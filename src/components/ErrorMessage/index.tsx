import { ErrorMessageStyled } from './styled';

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) {
    return null;
  }

  return <ErrorMessageStyled>{`${message}`}</ErrorMessageStyled>;
};

export default ErrorMessage;
