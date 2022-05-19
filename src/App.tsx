import Box from "@mui/material/Box";
import { Title, TodoList, Form } from "./components";

function App() {
    return (
        <Box sx={{ p: 4, maxWidth: 600 }}>
            <Title />
            <Form />
            <TodoList />
        </Box>
    );
}

export default App;
