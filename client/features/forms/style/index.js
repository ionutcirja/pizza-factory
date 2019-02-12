import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  position: relative;
  width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 1.4rem;
  line-height: 2rem;
  border-style: solid;
  transition: border-color 0.25s ease-out;
  border-color: ${props => (props.valid ? '#2e8b57' : '#cccccc')};
  border-width: 1px;
  
  &:focus {
    border-color: #333333;
  }
  
  &:disabled {
    background-color: #f4f4f4;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px 20px;
  font-size: 1.2rem;
  line-height: 2rem;
  border: 1px solid;
  transition: background-color 0.25s ease-out;
  border-color: ${props => (props.valid ? '#2e8b57' : '#cccccc')};
  border-top: 0;
  white-space: nowrap;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const Error = styled.span`
  display: block;
  max-width: 300px;
  font-size: 1rem;
  line-height: 1.4rem;
  color: #fa8072;
  margin-top: 15px;
`;
