import { KeyboardEvent } from 'react';

const checkIfServiceKey = (event: KeyboardEvent<HTMLDivElement>) => {
  const { key } = event;

  const serviceKeys = [
    'Tab',
    'Shift',
    'Control',
    'Alt',
    'CapsLock',
    'Escape',
    'PageUp',
    'PageDown',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'Insert',
    'Delete',
  ];

  return !serviceKeys.includes(key);
};

export default checkIfServiceKey;
