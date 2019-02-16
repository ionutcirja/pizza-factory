import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 80px;
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
`;

export const Button = styled.button`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 40px;
  padding: 0;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  background: ${({ bgColour }) => bgColour};
  color: ${({ colour }) => colour};
  
  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      text-decoration: none;
    }
  }
  
  span {
    display: block;
    position: absolute;
    right: 10px;
    top: 16px;
    font-size: 0.6rem;
    color: ${({ labelColour }) => labelColour}
  }
`;

export const Message = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ colour }) => colour}
`;

export const SizesWrapper = styled.div`
  margin-bottom: 30px;
`;

export const IngredientsWrapper = styled.div`
  margin-bottom: 30px;
`;
