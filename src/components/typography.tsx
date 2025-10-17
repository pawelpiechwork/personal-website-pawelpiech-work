type TTypographyProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({ tag: Tag, ...props }: TTypographyProps) => {
  return <Tag {...props} />;
};
