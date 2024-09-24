import { useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TodoList from "./TodoList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function App() {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="HOME" value="home" />
              <Tab label="TODOS" value="todos" />
            </TabList>
          </Box>
          <TabPanel value="home">
            <h1>Welcome To My Todo App ✅</h1>
          </TabPanel>
          <TabPanel value="todos">
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6">My Todos</Typography>
              </Toolbar>
            </AppBar>
            <TodoList />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default App;
