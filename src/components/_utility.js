// Helper Function
export const convertToNum = (string) => {
  let number = parseFloat(string);
  let rounded = number.toFixed(2);
  return parseFloat(rounded);
};
