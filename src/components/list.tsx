type TListProps = {
  tag: 'ol' | 'ul';
} & React.HTMLAttributes<HTMLUListElement>;

type TListItemProps =React.LiHTMLAttributes<HTMLLIElement>;

export const List = ({ tag: Tag, ...props }: TListProps) => {
  return <Tag {...props} />;
};

export const ListItem = ({ children, ...props }: TListItemProps) => {
  return <li {...props}>{children}</li>;
};


