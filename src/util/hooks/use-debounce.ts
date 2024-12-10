import * as React from 'react';

export function useDebounce<T>(value: T, delay: number = 200) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, debouncedValue]);

  return debouncedValue;
}