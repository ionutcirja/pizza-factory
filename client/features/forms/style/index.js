import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  position: relative;
  display: block;
  width: 100%;
`;

export const Text = styled.input.attrs({
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

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  appearance: none;
  margin: 0;
  
  & + label {
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 0;
    padding-left: 30px;
    line-height: 1.4rem;
    text-transform: capitalize;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-color: ${({ error, borderColour, borderErrorColour }) => (error ? borderErrorColour : borderColour)};
      border-width: 1px;
      border-style: solid;
    }
  }
  
  &:checked + label {
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 9px;
      width: 2px;
      height: 2px;
      box-shadow: ${({ checkColour }) => `
        2px 0 0 ${checkColour},
        4px 0 0 ${checkColour},
        4px -2px 0 ${checkColour},
        4px -4px 0 ${checkColour},
        4px -6px 0 ${checkColour},
        4px -8px 0 ${checkColour}`};
      transform: rotate(45deg);
    }
  }
  
  &:disabled + label {
    cursor: not-allowed;
    opacity: 0.25;
  }
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Select = styled.div`
  width: 100%;
  overflow: hidden;
  border-style: solid;
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
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 5px;
  color: ${({ colour }) => colour};
`;

export const Error = styled.span`
  display: block;
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ colour }) => colour};
  margin-top: 15px;
`;
