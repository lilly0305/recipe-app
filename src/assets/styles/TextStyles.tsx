import styled from '@emotion/styled';
import { mq } from '@utils/media-query/mediaQuery';

// ASSETS: TEXTS
export const H1 = styled.div(({ color, theme }) => ({
  fontSize: '4.2rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.heavy,

  [mq('desktop')]: {
    fontSize: '4.8rem',
  },
}));

export const H2 = styled.div(({ color, theme }) => ({
  fontSize: '3.6rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.extraBold,

  [mq('desktop')]: {
    fontSize: '4rem',
  },
}));

export const H3 = styled.div(({ color, theme }) => ({
  fontSize: '3.2rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.bold,

  [mq('desktop')]: {
    fontSize: '3.6rem',
  },
}));

export const H4 = styled.div(({ color, theme }) => ({
  fontSize: '2.8rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.bold,

  [mq('desktop')]: {
    fontSize: '3.2rem',
  },
}));

export const H5 = styled.div(({ color, theme }) => ({
  fontSize: '2rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.bold,

  [mq('desktop')]: {
    fontSize: '2.4rem',
  },
}));

export const H6 = styled.div(({ color, theme }) => ({
  fontSize: '1.8rem',
  lineHeight: 1.4,
  color: color,
  fontWeight: theme.fontWeight.bold,

  [mq('desktop')]: {
    fontSize: '2rem',
  },
}));

export const P1M = styled.div(({ color, theme }) => ({
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,

  [mq('desktop')]: {
    fontSize: '2.4rem',
  },
}));

export const P2M = styled.div(({ color, theme }) => ({
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,

  [mq('desktop')]: {
    fontSize: '2rem',
  },
}));

export const P3M = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,

  [mq('desktop')]: {
    fontSize: '1.8rem',
  },
}));

export const P4M = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,
}));

export const P5M = styled.div(({ color, theme }) => ({
  fontSize: '1.4rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,
}));

export const P6M = styled.div(({ color, theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.medium,
  color: color,
}));

export const P1R = styled.div(({ color, theme }) => ({
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,

  [mq('desktop')]: {
    fontSize: '2.4rem',
  },
}));

export const P2R = styled.div(({ color, theme }) => ({
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,

  [mq('desktop')]: {
    fontSize: '2rem',
  },
}));

export const P3R = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,

  [mq('desktop')]: {
    fontSize: '1.8rem',
  },
}));

export const P4R = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,
}));

export const P5R = styled.div(({ color, theme }) => ({
  fontSize: '1.4rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,
}));

export const P6R = styled.div(({ color, theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.regular,
  color: color,
}));

export const P1L = styled.div(({ color, theme }) => ({
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,

  [mq('desktop')]: {
    fontSize: '2.4rem',
  },
}));

export const P2L = styled.div(({ color, theme }) => ({
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,

  [mq('desktop')]: {
    fontSize: '2rem',
  },
}));

export const P3L = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,

  [mq('desktop')]: {
    fontSize: '1.8rem',
  },
}));

export const P4L = styled.div(({ color, theme }) => ({
  fontSize: '1.6rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,
}));

export const P5L = styled.div(({ color, theme }) => ({
  fontSize: '1.4rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,
}));

export const P6L = styled.div(({ color, theme }) => ({
  fontSize: '1.2rem',
  lineHeight: 1.5,
  fontWeight: theme.fontWeight.light,
  color: color,
}));
