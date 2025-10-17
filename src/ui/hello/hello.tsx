import React from "react";

type Props = (
  props: React.PropsWithChildren<{ message: string }>
) => React.ReactElement;

export const Hello: Props = (props) => {
  const { message } = props;
  return <div>Hello from {message}...👋</div>;
};
