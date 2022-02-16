import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useForm } from 'react-hook-form';
import authApi from '../../../apis/api/authApi';
import { useSnackbar } from "notistack";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { loginUser } from './authSlice';
export const LoginForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        register,
        handleSubmit,
        setValue,
        reset,
    } = useForm();
    const history = useHistory();
    const onSubmitLogin = async (data) =>{
        await authApi.loginApi(data)
        .then((res)=>{
            enqueueSnackbar("Đăng nhập thành công! ", {
                variant: "success",
              });
              Cookies.set('user' , JSON.stringify(res.data.user));
              history.push('/')
        })
        .catch((err) =>{
            enqueueSnackbar(err.response.data.message, {
                variant: "error",
              });
              return
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
                <form onSubmit={handleSubmit(onSubmitLogin)}>
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
                            inputProps={{ ...register("password", { required: true }) }}
                            variant="outlined"
                            placeholder="Password"
                            type="password"
                        />
                        <div style={{display:'unset' , textAlign:'center'}}>
                        <Button type="submit" color="primary" variant="contained" style={{marginBottom:'20px'}}>
                            Đăng nhập
                        </Button>
                       <div> Bạn chưa có tài khoản ? &nbsp;	&nbsp;	<Link style={{textDecoration:'unset'}} to="/register"><Button variant="contained" color="secondary">Đăng kí ngay</Button></Link></div>
                        </div>
                          
                    </Grid>

                </form>
            </Box>
        </Container>
    </div>
    )
}

export default LoginForm
