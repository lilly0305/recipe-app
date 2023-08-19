import React, { forwardRef } from 'react';
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri';
import styled from '@emotion/styled';

const CheckBoxContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 1rem',

  'input[type="checkbox"]': {
    display: 'none',
  },
}));

const Label = styled.label(() => ({
  cursor: 'pointer',
}));

interface IFieldProps {
  label: string;
}
interface ICheckbox {
  fieldProps?: IFieldProps;
  name?: string;
  value?: boolean;
  onChange: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CheckBox = forwardRef(({ fieldProps, ...props }: ICheckbox, _ref) => {
  return (
    <CheckBoxContainer>
      <input type="checkbox" checked={props.value} id={props.name} onChange={props.onChange} />

      {props.value ? <RiCheckboxFill size={20} /> : <RiCheckboxBlankLine size={20} />}

      <Label htmlFor={props.name}>{fieldProps?.label}</Label>
    </CheckBoxContainer>
  );
});

CheckBox.displayName = 'CheckBox';
export default CheckBox;
