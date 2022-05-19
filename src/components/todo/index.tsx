import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";

type TTodo = {
    text: string;
};

const Todo = ({ text }: TTodo) => {
    return (
        <Card sx={{ p: "16px", mb: "12px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography>{text}</Typography>
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
