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
  width: 200px;
  height: 40px;
  padding: 0;
  border: none;
  outline: none;
  text-align: center;
  border-radius: 5px;
  color: $color-white;
  text-decoration: none;
  cursor: pointer;
  
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
    margin-left: 10px;
  }
`;
