import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = ({ children }: { children: React.ReactNode }) => {
  return <StyledOverlay>{children}</StyledOverlay>;
};

export default Overlay;
