import styled from 'styled-components';

const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colours.foreground.basic};

  border: 2px solid ${({ theme }) => theme.colours.foreground.light};
  border-radius: ${({ theme }) => theme.border.radius};

  padding: 0.75rem 1.5rem;

  gap: 0.5rem;
`;

export const Card = styled(DefaultCard)``;

export const CardForm = styled(DefaultCard).attrs({ as: 'form' })`
  width: 400px;

  padding: 20px 40px;

  gap: 1rem;
`;
