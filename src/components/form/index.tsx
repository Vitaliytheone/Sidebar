import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
    return (
        <Box sx={{ display: "flex", mb: "32px" }} component="form" noValidate autoComplete="off">
            <TextField sx={{ mr: "6px", width: "100%" }} id="add-todo" label="Write task" variant="outlined" />
            <Button sx={{ height: "auto", width: "160px" }} variant="outlined" type="submit">
                Add task
            </Button>
        </Box>
    );
};

export default Form;
