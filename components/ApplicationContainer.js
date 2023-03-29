import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "FFFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={
        <Footer height={60} p="md">
          <Group position="apart" spacing="xl">
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>🕛 List timer: </span>
              0h 25m
            </Text>
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>🎉 End timer: </span>
              7:51pm
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <Text size="xl" weight="boldest">
              Alpaca Activiyty.
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
