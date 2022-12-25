import { ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = {
  children: ReactNode;
  weight?: TextWeights;
  color?: TextColors;
  size?: TextSizes;
  variant?: TextVariants;
};

export const Text = ({ children, weight = 'small', color = 'white', size = 'medium', variant = 'p' }: TextProps) => {
  return (
    <TextRoot as={variant} weight={weight} color={color} size={size} variant={variant}>
      {children}
    </TextRoot>
  );
};

type TextColors = 'purple' | 'white' | 'second-white' | 'light-grey';

type TextWeights = 'small' | 'medium' | 'big';

type TextSizes = 'small' | 'medium';

type TextVariants = 'span' | 'p' | 'h2' | 'h3' | 'h4';

const getWeight = ({ weight }: Pick<TextProps, 'weight'>) => {
  switch (weight) {
    case undefined:
    case 'small':
      return '400';
    case 'medium':
      return '500';
    case 'big':
      return '600';
  }
};

const getColor = ({ color }: Pick<TextProps, 'color'>) => {
  switch (color) {
    case undefined:
    case 'white':
      return '#FAFAFA';
    case 'second-white':
      return '#E8E8FC';
    case 'purple':
      return '#8E8CF0';
    case 'light-grey':
      return '#E2E4E7';
  }
};

const getSize = ({ size, variant }: Pick<TextProps, 'size' | 'variant'>) => {
  if (variant == 'h2') return '40px';
  if (variant == 'h3') return '32px';
  if (variant == 'h4') return '28px';

  switch (size) {
    case undefined:
    case 'medium':
      return '16px';
    case 'small':
      return '14px';
  }
};

const TextRoot = styled.span<Pick<TextProps, 'weight' | 'color' | 'size' | 'variant'>>`
  color: ${getColor};
  font-weight: ${getWeight};
  font-size: ${getSize};
  line-height: 24px;

  @media (max-width: 480px) {
    h3 {
      font-size: 22px;
    }
  }
`;
