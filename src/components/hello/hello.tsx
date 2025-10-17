import React, { PropsWithChildren, ReactElement } from "react";

type Props = {
  message: string;
  greeting?: string;
  emoji?: string;
};

export const Hello: (props: PropsWithChildren<Props>) => ReactElement = ({
  message,
  greeting = "Hello",
  emoji = "👋",
}) => {
  return (
    <div>
      {greeting} from {message}&nbsp;{emoji}
    </div>
  );
};
