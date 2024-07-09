let timeout: number | undefined;
const debouncer = (func: Function, wait: number) => {
  clearTimeout(timeout);
  timeout = setTimeout(func, wait);
};
export default debouncer;
