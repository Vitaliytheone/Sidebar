import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TTodo } from "../../store/todo";
import todo from "../../store/todo";

const Todo = ({ value, id }: TTodo) => {
    const onRemove = () => {
        todo.removeTodo(id);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        todo.updateTodo(id, e.target.value);
    };

    return (
        <Card sx={{ p: "16px", mb: "12px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <TextField
                    sx={{ mr: "6px", width: "100%" }}
                    id="todo"
                    onChange={onChange}
                    variant="standard"
                    value={value}
                />
                <CardActions>
                    <Button onClick={onRemove}>
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default observer(Todo);
