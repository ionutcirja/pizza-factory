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

export const CartList = styled.ul`
  width: 100%;
  max-width: 600px;
`;

export const CartItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ borderColour }) => borderColour};
  padding: 10px 5px;
`;

export const RemoveBtn = styled.button`
  width: 20px;
  height: 20px;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1rem;
  margin-right: 10px;
  
  &:before {
    content: '+';
    display: block;
    transform: rotate(45deg);
    color: ${({ colour }) => colour};
  }
`;

export const Description = styled.p`
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1rem;
  
  span {
    display: block;
    
    &:first-child {
      color: ${({ sizeColour }) => sizeColour};
      text-transform: capitalize;
    }
    
    &:last-child {
    font-size: 0.8rem;
      color: ${({ ingredientsColour }) => ingredientsColour};
    }
  }
`;

export const Price = styled.p`
  font-size: 0.8rem;
  line-height: 1rem;
  margin-left: 40px;
  color: ${({ colour }) => colour};
`;

export const QuantityWrapper = styled.div`
  margin-left: 20px;
`;

export const Quantity = styled.p`
  display: inline-block;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ colour }) => colour};
`;

export const IncreaseBtn = styled.button`
  width: 20px;
  height: 20px;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 2rem;
  margin-left: 10px;
  
  &:before {
    content: '+';
    display: block;
    color: ${({ colour }) => colour};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DecreaseBtn = styled.button`
  width: 20px;
  height: 20px;
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1rem;
  margin-right: 10px;
  
  &:before {
    content: '-';
    display: block;
    color: ${({ colour }) => colour};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:before {
      color: ${({ disabledColour }) => disabledColour};
    }
  }
`;

export const TotalWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 40px;
  font-size: 1.2rem;
  line-height: 2rem;
  color: ${({ colour }) => colour};
`;
