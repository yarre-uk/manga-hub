module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames
      .filter((filePath) => !filePath.includes('[...nextauth]'))
      .join(' ')}`,
    `yarn prettier --write ${filenames
      .filter((filePath) => !filePath.includes('[...nextauth]'))
      .join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames
      .filter((filePath) => !filePath.includes('[...nextauth]'))
      .join(' ')}`,
};
