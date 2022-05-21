import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import todo from "../../store/todo";

const Form = () => {
    const [value, setValue] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        todo.addTodo({ id: nanoid(), value });
    };

    return (
        <Box onSubmit={onSubmit} sx={{ display: "flex", mb: "32px" }} component="form" noValidate autoComplete="off">
            <TextField
                onChange={onChange}
                sx={{ mr: "6px", width: "100%" }}
                id="add-todo"
                label="Write task"
                variant="outlined"
            />
            <Button sx={{ height: "auto", width: "160px" }} variant="outlined" type="submit" disabled={!value}>
                Add task
            </Button>
        </Box>
    );
};

export default observer(Form);
