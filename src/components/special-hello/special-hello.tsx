// Special Hello Component

import React, { type PropsWithChildren, type ReactElement } from "react";

import { Hello } from "@/components/hello/hello";

type Props = { message: string };

export const SpecialHello: (
  props: PropsWithChildren<Props>
) => ReactElement = ({ message }) => {
  return <Hello message={message} emoji="🥳" greeting="Special Hello" />;
};
