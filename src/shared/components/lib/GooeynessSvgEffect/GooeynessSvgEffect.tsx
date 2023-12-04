'use client';
import styled from 'styled-components';

function GooeynessSvgEffect() {
  return (
    <StyledGooeynessSvgEffect>
      <defs>
        <filter id="gooeyness">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="gooeyness"
          />
          <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
        </filter>
      </defs>
    </StyledGooeynessSvgEffect>
  );
}

export default GooeynessSvgEffect;

const StyledGooeynessSvgEffect = styled.svg`
  display: none;
`;
