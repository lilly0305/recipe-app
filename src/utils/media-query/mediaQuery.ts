import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IMediaQuery {
  children: React.ReactElement;
}

export const IsDesktop = ({ children }: IMediaQuery) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? children : null;
};

export const IsTablet = ({ children }: IMediaQuery) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return isTablet ? children : null;
};

export const IsMobile = ({ children }: IMediaQuery) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? children : null;
};

export const IsDefault = ({ children }: IMediaQuery) => {
  const isDefault = useMediaQuery({ maxWidth: 1023 });

  return isDefault ? children : null;
};

const bp = {
  mobile: 300,
  tablet: 768,
  desktop: 1024,
};
export const mq = (n: keyof typeof bp) => `@media (min-width: ${bp[n]}px)`;
