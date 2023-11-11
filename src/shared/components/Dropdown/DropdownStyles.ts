import styled from 'styled-components';

export const Dropdown = styled.div<{ zIndex?: number }>`
  position: relative;
  display: flex;
  padding: 0;
  z-index: ${({ zIndex }) => zIndex ?? 0};
`;

export const DropdownContent = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: #202125;
  border: 1px solid #595959;
  box-shadow: 5px 5px 10px #202125;
  transform: translateX(-45%);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25rem;
`;
