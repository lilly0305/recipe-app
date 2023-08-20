import styled from '@emotion/styled';

export const CommonContainer = styled.div(() => ({
  width: '100%',
  maxWidth: '120rem',
  margin: '0 auto',
  padding: '0 1.6rem',
}));

export const CommonMemoContainer = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.color.white,
  boxShadow: theme.shadow.primary,
  padding: '4rem 1.6rem',
}));
