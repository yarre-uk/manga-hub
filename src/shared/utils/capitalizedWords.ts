/**
 * Transforms a string by converting camel case to capitalize every word and separate them by space
 *
 * @param str The string to transform.
 * @returns The transformed string.
 *
 * Example:
 * ```javascript
 * const transformedString = capitalizedWords('thisIsAString');
 * console.log(transformedString); // 'This Is A String'
 * ```
 */
function capitalizedWords(str: string): string {
  for (let i = str.length - 1; i > 1; i--) {
    if (str[i] == str[i].toUpperCase()) {
      str = `${str.substring(0, i)} ${str.substring(i)}`;
    }
  }

  str = `${str[0].toUpperCase()}${str.substring(1)}`;

  return str;
}

export default capitalizedWords;
