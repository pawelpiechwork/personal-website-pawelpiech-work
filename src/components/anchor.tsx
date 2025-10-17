type TAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = (props: TAnchorProps) => {
  return <a {...props} />;
};