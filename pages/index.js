import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { PlayerPlay, Settings, Playlist, Plus, PlaylistAdd } from "tabler-icons-react";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <Group direction="column" mt="-20px">
      <Group
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "10vh", //antes estaba en 100vh
        }}
        mx="auto"
        direction="column"
      >
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <Settings />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <PlaylistAdd />
          </ActionIcon>
        </Group>
        <Group
          spacing="none"
          mt="sm"
          position="center"
          mx="auto"
          direction="column"
          height="175px"
        >
          <Title order={1} style={{ fontWeight: "900", fontSize: "4rem" }}>
            25:00
          </Title>
          <Text>Record Mantine Tutorial</Text>
          {/* Esto debería estar debajo del contador */}
        </Group>
        <Group
          mt="sm"
          position="center"
          mx="auto"
          direction="row"
          height="200px"
          mb="md"
        >
          <ActionIcon color="dark" size="xl" variant="transparent">
            -5
          </ActionIcon>
          <ActionIcon radius="xl" color="dark" size="xl" variant="filled">
            <PlayerPlay />
          </ActionIcon>
          <ActionIcon color="dark" size="xl" variant="transparent">
            +5
          </ActionIcon>
        </Group>
      </Group>
    </Group>
  );
}
