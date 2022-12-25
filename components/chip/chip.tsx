import { ReactNode } from 'react';
import styled from 'styled-components';

type ChipProps = {
  children: ReactNode;
  variant?: ChipVariants;
  size?: ChipSizes;
};

export const Chip = ({ children, variant = 'default', size = 'medium' }: ChipProps) => {
  return (
    <ChipRoot variant={variant} size={size}>
      {children}
    </ChipRoot>
  );
};

type ChipVariants = 'default' | 'positive' | 'negative' | 'warning';
type ChipSizes = 'small' | 'medium';

const getBackgroundColor = ({ variant }: Pick<ChipProps, 'variant'>) => {
  switch (variant) {
    case undefined:
    case 'default':
      return '#828282';
    case 'warning':
      return '#3C8FA9';
    case 'negative':
      return '#7270C0';
    case 'positive':
      return '#4DAB75';
  }
};

const getPaddings = ({ size }: Pick<ChipProps, 'size'>) => {
  switch (size) {
    case undefined:
    case 'medium':
      return '2px 18px 2px 18px';
    case 'small':
      return '4px 10px 4px 10px';
  }
};

const ChipRoot = styled.div<Pick<ChipProps, 'variant' | 'size'>>`
  display: inline-block;
  background: ${getBackgroundColor};
  padding: ${getPaddings};
  box-sizing: border-box;
  color: #ffffff;
  font-size: 14px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
