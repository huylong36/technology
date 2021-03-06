import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import Cookies from "js-cookie";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Logo from '../../assets/image/logo.png';
import LayoutAdmin from "../layout/admin";
import { loginUser } from "./auth/authSlice";
const Header = () => {
  const user_ = useSelector((state) => state.user);
  useEffect(() => {
    const userInfo = Cookies.get("user")
      ? JSON.parse(Cookies.get("user") || "")
      : null;
    dispatch(loginUser(userInfo));
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = useCallback(() => {
    Cookies.remove("user");
    window.location.href = "/";
  }, []);
  
  const pages = [
      {
          title:"Home",
          router:"/"
      },
      {
          title:"Blog",
          router:"/new-product"
      },
      {
          title:"Radio",
          router:"/discount"
      },
      {
          title:"Video",
          router:"/contact"
      },
  ]
  return (
    <div>
      <div>
        <AppBar position="static" color="transparent" style={{boxShadow:'none'}}>
            <Container maxWidth="xl">
          <Toolbar disableGutters>
          <Typography
           noWrap
           component="div"
           sx={{ mr: 2, display: { xs: 'none', md: 'flex', width: "15%" } }}
          >
              <img src={Logo} width="30%" style={{ objectFit: "cover", cursor: 'pointer' }} alt="logo"/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: "center" }}>
                {pages.map((page, key) => (
                    <Button key={key} color="warning" style={{margin:'20px' , color:"#1c1c1c" , fontWeight:700 , textTransform:'capitalize' , fontSize:'16px' }} onClick={() => history.push(page.router)}>{page.title}</Button>
                ))}
                {user_.user?.userRole === 1 ? <LayoutAdmin/> : ''}
          </Box>
          {
                !user_.user ?
                 <div>
                    <Button onClick={() => history.push('/register')}>
                        ????ng k?? 
                    </Button>
                    <Button onClick={() => history.push('/login')}>
                        ????ng nh???p 
                    </Button></div> 
                    : 
                    <div>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,fontSize:'15px'}}>
                               Welcome <span style={{fontSize:'18px' , fontWeight:500 , color:'#1c1c1c'}}> &nbsp; &nbsp;{user_.user.fullname}</span>&nbsp;
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                                <MenuItem style={{ display: 'flex', alignItems: 'center' }} onClick={handleLogout}>
                                    <ExitToAppRoundedIcon style={{ fontSize: '0.9rem' }} />
                                    <Typography textAlign="center" style={{ fontSize: '0.9rem', marginLeft: '0.4rem' }}>????ng xu???t</Typography>
                                </MenuItem>
                            </Menu>
                    </div> 
            }
          </Toolbar>
          </Container>
        </AppBar>
      </div>
    </div>
  );
};

export default Header;
