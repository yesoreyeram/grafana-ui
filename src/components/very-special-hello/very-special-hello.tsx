// Very Special Hello Component

import React, { type PropsWithChildren, type ReactElement } from "react";
import { upperCase } from "upper-case";

import { SpecialHello } from "@/components/special-hello/special-hello";

type Props = { message: string };

export const VerySpecialHello: (
  props: PropsWithChildren<Props>
) => ReactElement = ({ message }) => {
  return <SpecialHello message={`${upperCase(message)}`} />;
};
