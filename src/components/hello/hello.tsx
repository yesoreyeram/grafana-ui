import React, { type PropsWithChildren, type ReactElement } from "react";

type Props = {
  message: string;
  greeting?: string;
  emoji?: string;
};

export const Hello: (props: PropsWithChildren<Props>) => ReactElement = (
  props
) => {
  const { message, greeting = "Hello", emoji = "👋" } = props;
  return (
    <div>
      {greeting} from {message}&nbsp;{emoji}
    </div>
  );
};
