import React, { CSSProperties } from 'react';

import styled from '@emotion/styled';
import { P3M } from '@assets/styles/TextStyles';

interface IContainer {
  custom?: CSSProperties;
}
const Container = styled.button<IContainer>(({ theme, custom }) => ({
  position: 'absolute',
  padding: '0.8rem 2rem',
  background: theme.color.sitePrimaryBlue,
  transition: 'all 0.3s',
  minHeight: '5rem',
  bottom: '-2.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.color.siteWhite,
  ...custom,
}));

interface IPrimaryButton {
  type?: 'button' | 'submit';
  children: string | React.ReactElement;
  custom?: CSSProperties;
  form?: string;
}
function PrimaryButton({ type = 'button', children, custom, form }: IPrimaryButton) {
  return (
    <Container form={form} type={type} custom={custom}>
      <P3M>{children}</P3M>
    </Container>
  );
}

export default PrimaryButton;
