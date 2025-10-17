"use client";

import React, {
  useState,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Stack, Button, Modal, Icon } from "@grafana/ui";
import { VerySpecialHello } from "@/components/very-special-hello/very-special-hello";

export const HelloGrafana: (props: PropsWithChildren) => ReactElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack>
      <Button onClick={() => setIsOpen(true)}>
        <Icon name="ai-sparkle" />
        &nbsp; Hello
      </Button>
      <Modal
        title={"Hello Grafana Component"}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        <VerySpecialHello message={`Grafana UI Components library`} />
      </Modal>
    </Stack>
  );
};
