import { ErrorMessageStyled } from './styled';

const ErrorMessage = ({ message }: { message: unknown }) => {
  if (!message) {
    return null;
  }

  return <ErrorMessageStyled>{`${message}`}</ErrorMessageStyled>;
};

export default ErrorMessage;
