import "./App.css";
import { AppShell, Navbar, Header } from "@mantine/core";
import TimerComponent from "./components/timer";
import EventComponent from "./components/event";

function App() {
  return (
    <div className="App">
      <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={<Header height={60} p="xs">{/* Header content */}</Header>}
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
