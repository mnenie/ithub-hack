const prettier = require('prettier');

module.exports = async () => {
  const options = await prettier.resolveConfig(__filename);
  return {
    ...options,
    plugins: ['prettier-plugin-tailwindcss']
  };
};