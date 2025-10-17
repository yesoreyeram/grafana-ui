import React, { useState } from "react";
import { DataSourcePlugin, DataSourceApi } from "@grafana/data";
import { Stack, Button, Modal, Icon } from "@grafana/ui";
import { Hello } from "@/components/hello/hello";
import { SpecialHello } from "@/components/special-hello/special-hello";
import { VerySpecialHello } from "@/components/very-special-hello/very-special-hello";
import { HelloGrafana } from "@/components/hello-grafana/hello-grafana";

class DataSource extends DataSourceApi {
  query = () => Promise.resolve({ data: [] });
  testDatasource = () =>
    Promise.resolve({ status: "success", message: "It works..!" });
}

export const plugin = new DataSourcePlugin(DataSource)
  .setConfigEditor(() => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Stack direction={"column"} gap={4}>
        <Hello message="Config Editor" greeting="Hello" emoji="🥰" />
        <SpecialHello message="Config Editor" />
        <VerySpecialHello message="Config Editor" />
        <HelloGrafana />
        <Stack>
          <Button onClick={() => setIsOpen(true)}>
            <Icon name="ai-sparkle" />
            &nbsp; Hello
          </Button>
          <Modal
            title={"Hello"}
            isOpen={isOpen}
            onDismiss={() => setIsOpen(false)}
          >
            <VerySpecialHello message={`Grafana`} />
          </Modal>
        </Stack>
      </Stack>
    );
  })
  .setQueryEditor(() => <>Query Editor</>);
