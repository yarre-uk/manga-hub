function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number = 166,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  function debounced(...args: Parameters<T>): void {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

export default debounce;
