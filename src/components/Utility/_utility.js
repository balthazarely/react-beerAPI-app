// Helper Function
export const convertToNum = (string) => {
  let number = parseFloat(string);
  let rounded = number.toFixed(8);
  return parseFloat(rounded);
};
