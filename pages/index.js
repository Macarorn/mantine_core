import {
  ActionIcon,
  Box,
  Group,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { PlayerPlay, Settings, Playlist, Plus } from "tabler-icons-react";

export default function Home() {
  const theme = useMantineTheme();

  return (
    <Group direction="column" mt="-20px">
      <Group
        style={{
          backgroundColor: theme.colors.gray[0],
          width: "500px",
          height: "100vh",
        }}
        mx="auto"
        direction="column"
      >
        <Group position="apart" style={{ width: "100%" }}>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <Settings />
          </ActionIcon>
          <ActionIcon color="gray" size="xl" m="sm" variant="transparent">
            <Playlist />
          </ActionIcon>
        </Group>
      </Group>
    </Group>
  );
}
