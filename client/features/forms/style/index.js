import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  position: relative;
  width: 300px;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 10px 20px;
  font-size: 1.4rem;
  line-height: 2rem;
  border-style: solid;
  border-color: ${({ error, borderColour, borderErrorColour }) => (error ? borderErrorColour : borderColour)};
  border-width: 1px;
  color: ${({ colour }) => colour};
`;

export const Select = styled.div`
  width: 100%;
  overflow: hidden;
  border-style: solid;
  transition: border-color 0.25s ease-out;
  border-color: ${({ error, borderColour, borderErrorColour }) => (error ? borderErrorColour : borderColour)};
  border-width: 1px;
  
  select {
    width: 107%;
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 10px 20px;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    appearance: none;
    color: ${({ colour }) => colour};
    text-transform: capitalize;
  }
`;

export const Label = styled.label`
  display: block;
  max-width: 300px;
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 5px;
  color: ${({ colour }) => colour};
`;

export const Error = styled.span`
  display: block;
  max-width: 300px;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ colour }) => colour};
  margin-top: 15px;
`;
