function debounceFunction(fn: () => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: []) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    return new Promise((resolve) => {
      timeoutId = setTimeout(() => resolve(fn(...args)), delay);
    });
  };
}

export default debounceFunction;
