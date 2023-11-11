import styled from 'styled-components';

interface BackdropProps {
  open: boolean;
}

const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: ${({ open }) => (open ? 10 : -10)};
  padding: 8rem 4rem 0;
  transition: opacity 0.3s ease, z-index 0s;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
`;

export default Backdrop;
