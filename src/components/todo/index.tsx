import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

type TTodo = {
    value: string;
};

const Todo = ({ value }: TTodo) => {
    return (
        <Card sx={{ p: "16px", mb: "12px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <TextField sx={{ mr: "6px", width: "100%" }} id="todo" variant="standard" value={value} />
                <CardActions>
                    <Button>
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default Todo;
