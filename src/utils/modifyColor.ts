/**
 * Takes a hexadecimal color string and returns a modified color string with the brightness increased or decreased by the specified amount.
 *
 * @param hexString - A string representing a color in hexadecimal format (#RRGGBB)
 * @param amount - A number representing the amount to increase or decrease the brightness of the color
 * @returns A string representing the modified color in hexadecimal format (#RRGGBB)
 */
const modifyColor = (hexString: string, amount: number) => {
  // Convert the hex string to RGB values
  let r = parseInt(hexString.slice(1, 3), 16);
  let g = parseInt(hexString.slice(3, 5), 16);
  let b = parseInt(hexString.slice(5, 7), 16);

  // Increase or decrease the RGB values by the specified amount
  r += amount;
  g += amount;
  b += amount;

  // Ensure the RGB values are within the valid range of 0-255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert the modified RGB values back to a hex string
  const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');

  return `#${hex}`;
};

export default modifyColor;
