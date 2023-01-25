import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderFont } from '../../styles';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';
import { ErrorText } from '../ErrorText';
import { generateId } from '../../utils/generators';

interface IProps extends IBaseProps {
  error?: string;
  id?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  label?: string | JSX.Element;
  text?: string | JSX.Element;
}

const InputFieldContainer = styled.div``;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 8px;
  font-size: 1.1rem;
  background: ${theme.colors.neutral[600]};
  box-shadow: inset 0 0 0 0 ${theme.colors.neutral[800]};
  border-width: 1px;
  border-right-width: 4px;
  border-style: solid;
  border-color: ${theme.colors.neutral[400]};
  border-radius: 4px;
  outline: none;

  &:focus,
  &:focus-within {
    border-color: ${theme.colors.primary[400]};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  ${HeaderFont}
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledText = styled.p`
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-style: italic;
`;

export const InputField: React.FC<IProps> = ({
  className,
  dataCy,
  error,
  id,
  inputProps = {},
  label,
  text,
}) => {
  const [_id, setId] = useState('');

  useEffect(() => {
    if (_id && id) setId(id);
    setId(id || generateId({ alphabet: 'alpha' }));
  }, [id]);

  const renderError = () => {
    if (!error) return null;
    return <ErrorText>{ error }</ErrorText>;
  };

  const renderLabel = () => {
    if (!label) return null;
    if (typeof label !== 'string') return label;
    return <StyledLabel htmlFor={ _id }>{ label }</StyledLabel>;
  };

  const renderText = () => {
    if (!text) return null;
    if (typeof text !== 'string') return text;
    return <StyledText>{ text }</StyledText>;
  };

  return (
    <InputFieldContainer
      className={ className }
      data-cy={ dataCy }
    >
      { renderLabel() }
      { renderText() }
      <StyledInput
        { ...inputProps }
        id={ _id }
      />
      { renderError() }
    </InputFieldContainer>
  );
};
