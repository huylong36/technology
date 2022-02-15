import { Button, Container, Grid, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import * as React from 'react';
import { useForm } from "react-hook-form";
import authApi from '../../../apis/api/authApi';
import './style.scss';

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        await authApi.registerApi(data);

    }
    return (
        <div className="register-page">
            <Container maxWidth="md">
                <Box
                    sx={{
                        width: 300,
                        height: '100%',
                        margin: 'auto'
                    }}
                    className="box-register"
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container className="box-">
                            <TextField
                                fullWidth
                                inputProps={{ ...register("username", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Username"
                            >
                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("fullname", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Fullname"
                            >
                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("password", { required: true }) }}
                                variant="outlined"
                                type="password"
                                multiline
                                placeholder="Password"
                               
                            >
                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("password2", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Enter the password"
                                type="password"
                            >

                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("phone", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Phone"
                            >

                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("email", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Email"
                            >

                            </TextField>
                            <TextField
                                fullWidth
                                inputProps={{ ...register("address", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Address"
                            >
                            </TextField>
                            <Button type="submit" color="primary">
                                Đăng kí
                            </Button>
                        </Grid>

                    </form>
                </Box>
            </Container>
        </div>
    )
}
