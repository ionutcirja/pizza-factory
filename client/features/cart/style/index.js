import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 80px;
`;

export const Message = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ colour }) => colour}
`;
