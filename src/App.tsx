import "./App.css";
import React from "react";
import { AppShell, Header } from "@mantine/core";
import TimerComponent from "./components/timer";
import EventComponent from "./components/event";

function App() {
  return (
    <div className="App">
      <AppShell
        padding="md"
        header={<Header height={60} p="xs">{<h1>Calomodoro</h1>}</Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
        <TimerComponent />
        <EventComponent />
      </AppShell>
    </div>
  );
}

export default App;
