import { CSSProperties, FC } from 'react';

import { createAnimation, cssValue } from '@/shared/utils';
import { COLORS } from '@/theme';

export interface BeatLoaderProps {
  color?: string;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
  size?: number | string;
  margin: number | string;
}

const beat = createAnimation(
  'BeatLoader',
  '50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}',
  'beat',
);

const BeatLoader: FC<BeatLoaderProps> = ({
  color = '#674299',
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalProps
}) => {
  const wrapper: CSSProperties = {
    display: 'inherit',
    ...cssOverride,
  };

  const style = (i: number): CSSProperties => {
    return {
      display: 'inline-block',
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: '100%',
      animation: `${beat} ${0.7 / speedMultiplier}s ${
        i % 2 ? '0s' : `${0.35 / speedMultiplier}s`
      } infinite linear`,
      animationFillMode: 'both',
    };
  };

  return (
    <span style={wrapper} {...additionalProps}>
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
    </span>
  );
};

export default BeatLoader;
