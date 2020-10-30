// Helper Function
export const convertToNum = (string) => {
  let number = parseFloat(string);
  let rounded = number.toFixed(8);
  return parseFloat(rounded);
};

export const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substr(0, length) + "\u2026";
};
