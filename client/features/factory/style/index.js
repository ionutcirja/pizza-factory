import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 80px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  
  button {
    margin-right: 20px;
    
    &:last-child {
      margin-right: 0;
    }
  }
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
    display: inline-block;
    margin-left: 10px;
    font-size: 0.8rem;
    color: ${({ labelColour }) => labelColour}
  }
`;

export const Message = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${({ colour }) => colour}
`;

export const FieldWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 30px;
`;
