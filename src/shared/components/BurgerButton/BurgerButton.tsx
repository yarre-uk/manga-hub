'use client';
import './BurgerButtonStyles.css';
import { GooeynessSvgEffect } from '..';

interface BurgerButtonProps {
  onClick: () => void;
  active: boolean;
}

function BurgerButton({ onClick, active }: BurgerButtonProps) {
  return (
    <>
      <GooeynessSvgEffect />
      <div className={`plate ${active ? 'active' : ''}`} onClick={onClick}>
        <svg className="burger" version="1.1" viewBox="0 0 100 100">
          <path className="line line1" d="M 30,35 H 70 " />
          <path className="line line2" d="M 50,50 H 30 L 34,32" />
          <path className="line line3" d="M 50,50 H 70 L 66,68" />
          <path className="line line4" d="M 30,65 H 70 " />
        </svg>
        <svg className="x" version="1.1" viewBox="0 0 100 100">
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </>
  );
}

export default BurgerButton;
