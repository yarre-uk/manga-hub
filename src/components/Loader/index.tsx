import { CSSProperties } from 'react';

import { ContainerLoaderStyled, FullPageLoaderStyled } from './styled';

import theme from '@/constants/theme';
import { createAnimation, cssValue, parseLengthAndUnit } from '@/utils';

export const ContainerLoader = () => {
  return (
    <ContainerLoaderStyled>
      <BeatLoader size={25} />
    </ContainerLoaderStyled>
  );
};

export const FullPageLoader = () => {
  return (
    <FullPageLoaderStyled>
      <CircleLoader size={200} />
    </FullPageLoaderStyled>
  );
};

export const CircleLoader = ({
  color = theme.colours.primary,
  speedMultiplier = 1,
  cssOverride = {},
  size = 50,
  ...additionalProps
}: {
  color?: string;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
  size?: number | string;
}) => {
  const circle = createAnimation(
    'CircleLoader',
    '0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}',
    'circle',
  );

  const wrapper: CSSProperties = {
    display: 'inherit',
    position: 'relative',
    width: cssValue(size),
    height: cssValue(size),
    ...cssOverride,
  };

  const style = (i: number): CSSProperties => {
    const { value, unit } = parseLengthAndUnit(size);

    return {
      position: 'absolute',
      height: `${value * (1 - i / 10)}${unit}`,
      width: `${value * (1 - i / 10)}${unit}`,
      borderTop: `1px solid ${color}`,
      borderBottom: 'none',
      borderLeft: `1px solid ${color}`,
      borderRight: 'none',
      borderRadius: '100%',
      transition: '2s',
      top: `${i * 0.7 * 2.5}%`,
      left: `${i * 0.35 * 2.5}%`,
      animation: `${circle} ${1 / speedMultiplier}s ${
        (i * 0.2) / speedMultiplier
      }s infinite linear`,
    };
  };

  return (
    <span style={wrapper} {...additionalProps}>
      <span style={style(0)} />
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
      <span style={style(4)} />
    </span>
  );
};

const BeatLoader = ({
  color = theme.colours.primary,
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalProps
}: {
  color?: string;
  cssOverride?: CSSProperties;
  speedMultiplier?: number;
  size?: number | string;
  margin?: number | string;
}) => {
  const beat = createAnimation(
    'BeatLoader',
    '0%, 100% {transform: scale(1)} 50% {transform: scale(0.5)}',
    'beat',
  );

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
