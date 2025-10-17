import React from 'react';

type TSectionProps = React.HTMLAttributes<HTMLElement>;

type TSectionHeaderProps = React.HTMLAttributes<HTMLElement>;

type TSectionBodyProps = React.HTMLAttributes<HTMLElement>;

export const Section = ({ children, ...props }: TSectionProps) => {
  return <section {...props}>{children}</section>;
};

export const SectionHeader = ({ children, ...props }: TSectionHeaderProps) => {
  return <header {...props}>{children}</header>;
};

export const SectionBody = ({ children, ...props }: TSectionBodyProps) => {
  return <div {...props}>{children}</div>;
};
