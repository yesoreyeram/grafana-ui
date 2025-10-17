// Hello Grafana Component

import React, {
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Button, Modal, Stack } from "@grafana/ui";

import { VerySpecialHello } from "@/components/very-special-hello/very-special-hello";

type Props = { message: string };

export const HelloGrafana: (
  props: PropsWithChildren<Props>
) => ReactElement = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack>
      <Button onClick={() => setIsOpen(true)}>Hello</Button>
      <Modal
        title={"Hello Grafana Component"}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <VerySpecialHello message={`${message}`} />
      </Modal>
    </Stack>
  );
};
