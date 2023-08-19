import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: theme.color.placeholderColor,
  gap: '0.2rem 0',
  minHeight: '5.6rem',
}));

const Input = styled.input(() => ({
  flex: 1,
  width: '100%',
  lineHeight: 1.4,
}));

interface IInputLabel {
  isValid?: boolean;
}
const InputLabel = styled.label<IInputLabel>(({ isValid = false, theme }) => ({
  color: isValid ? theme.color.sitePrimaryBlue : theme.color.placeholderColor,
}));

const InputLeft = styled.div(() => ({
  display: 'flex',
  gap: '0 1rem',
  alignItems: 'center',
  width: '100%',
}));

const InputWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0 1rem',
  width: '100%',
  padding: '0.6rem 0',
  borderBottom: `0.1rem solid ${theme.color.borderOne}`,
}));

const InputSuffix = styled.div(({ theme }) => ({
  fill: theme.color.borderOne,
}));

const ErrorMessage = styled.div(({ theme }) => ({
  color: theme.color.siteRed,
  fontSize: '1.4rem',
}));

interface IFieldProps {
  placeholder: string;
  prefix: React.ReactElement;
  inputType?: 'text' | 'email' | 'password';
  suffix?: string | React.ReactElement;
  errorMessage?: string;
  isValid?: boolean;
}
interface ITextInput {
  fieldProps?: IFieldProps;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextInput = forwardRef(({ fieldProps, ...props }: ITextInput, _ref) => {
  return (
    <Container>
      <InputWrapper>
        <InputLeft>
          <InputLabel isValid={fieldProps?.isValid}>{fieldProps?.prefix}</InputLabel>

          <Input {...props} type={fieldProps?.inputType} placeholder={fieldProps?.placeholder} />
        </InputLeft>

        <InputSuffix>{fieldProps?.suffix}</InputSuffix>
      </InputWrapper>

      <ErrorMessage>{fieldProps?.errorMessage}</ErrorMessage>
    </Container>
  );
});

TextInput.displayName = 'TextInput';
export default TextInput;
