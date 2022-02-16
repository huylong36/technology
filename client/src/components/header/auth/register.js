import { Button, Container, Grid, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import * as React from 'react';
import { useForm } from "react-hook-form";
import authApi from '../../../apis/api/authApi';
import './style.scss';
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
export const RegisterForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
    } = useForm();
    const onSubmit = async (data) => {
        await authApi.registerApi(data)
        .then((res)=>{
            enqueueSnackbar("Đăng ký tài khoản thành công! ", {
                variant: "success",
              });
        })
        .catch((error)=>{
            enqueueSnackbar(error.response.data.message, {
                variant: "error",
              });
              return;
        })

    }
    return (
        <div className="register-page">
            <Container maxWidth="sm">
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
                           />
                            <TextField
                                fullWidth
                                inputProps={{ ...register("fullname", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Fullname"
                            />
                            <TextField
                                fullWidth
                                inputProps={{ ...register("password", { required: true }) }}
                                variant="outlined"
                                type="password"
                                placeholder="Password"
                               
                            />
                            <TextField
                                fullWidth
                                inputProps={{ ...register("password2", { required: true }) }}
                                variant="outlined"
                                placeholder="Enter the password"
                                type="password"
                            />

                            <TextField
                                fullWidth
                                inputProps={{ ...register("phone", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Phone"
                            />

                            <TextField
                                fullWidth
                                inputProps={{ ...register("email", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Email"
                            />

                            <TextField
                                fullWidth
                                inputProps={{ ...register("address", { required: true }) }}
                                variant="outlined"
                                multiline
                                placeholder="Address"
                            />
                            <Button type="submit" color="primary" variant="contained" style={{marginBottom:'20px'}}>
                                Đăng kí
                            </Button>
                        </Grid>
                        <div style={{textAlign:'center'}}> Bạn đã có tài khoản ? &nbsp;	&nbsp;	<Link style={{textDecoration:'unset'}} to="/login"><Button variant="contained" color="secondary">Đăng nhập ngay</Button></Link></div>

                    </form>
                </Box>
            </Container>
        </div>
    )
}
