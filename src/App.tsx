import Box from "@mui/material/Box";
import { Title, Todo, Form } from "./components";

function App() {
    return (
        <Box sx={{ p: 4, maxWidth: 600 }}>
            <Title />
            <Form />
            <Todo text="12321312" />
            <Todo text="12321312" />
        </Box>
    );
}

export default App;
