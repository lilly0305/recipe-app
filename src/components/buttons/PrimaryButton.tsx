import React from 'react';

import styled from '@emotion/styled';
import { P3M } from '@assets/styles/TextStyles';

const Container = styled.button(({ theme }) => ({
  position: 'absolute',
  padding: '0.8rem 2rem',
  background: theme.color.sitePrimaryBlue,
  transition: 'all 0.3s',
  minHeight: '5rem',
  bottom: '-2.5rem',
  left: '50%',
  transform: 'translateX(-50%)',
  color: theme.color.siteWhite,
}));

interface IPrimaryButton {
  type: 'button' | 'submit';
  children: string | React.ReactElement;
}
function PrimaryButton({ type, children }: IPrimaryButton) {
  return (
    <Container type={type}>
      <P3M>{children}</P3M>
    </Container>
  );
}

export default PrimaryButton;
