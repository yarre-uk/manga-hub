const specialChars = ['_', ' ', '-'];

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param str - The input string.
 * @returns The capitalized string.
 *
 * @example```
 * capitalizeText('hello world') // 'Hello World'
 * capitalizeText('hello_world') // 'Hello World'
 * capitalizeText('hello-world') // 'Hello World'
 * capitalizeText('helloWorld') // 'Hello World'
 * ```
 */
function capitalizeText(str: string): string {
  if (!str) {
    return str;
  }

  for (let i = str.length - 1; i > 1; i--) {
    if (str[i] == str[i].toUpperCase() && !specialChars.includes(str[i])) {
      str = `${str.substring(0, i)} ${str.substring(i)}`;
    } else if (specialChars.includes(str[i])) {
      str = `${str.substring(0, i)} ${str[i + 1].toUpperCase()}${str.substring(
        i + 2,
      )}`;
    }
  }

  str = `${str[0].toUpperCase()}${str.substring(1)}`;

  return str;
}

export default capitalizeText;
