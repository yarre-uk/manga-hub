import theme from '@/constants/theme';

const getBorder = (colour?: string) => {
  return `
  border-radius: ${theme.border.radius};
  border-color: ${colour || theme.border.colour};
  border-width: ${theme.border.width};
  border-style: solid;
  `;
};

export default getBorder;
