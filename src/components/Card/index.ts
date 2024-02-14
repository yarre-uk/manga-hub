import styled from 'styled-components';

const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.foreground.basic};

  border: 2px solid ${({ theme }) => theme.foreground.light};
  border-radius: ${({ theme }) => theme.borderRadius};

  padding: 0.75rem 1.5rem;

  gap: 0.5rem;
`;

export const Card = styled(DefaultCard)``;

export const CardForm = styled(DefaultCard).attrs({ as: 'form' })`
  gap: 0;
`;
