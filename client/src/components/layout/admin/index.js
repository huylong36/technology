import { TreeItem, TreeView } from "@mui/lab";
import {
  AppBar, Button, CssBaseline, Divider,
  Drawer, Toolbar,
  Tooltip
} from "@mui/material";
import { Box } from "@mui/system";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, useLocation } from "react-router";
import Logo from "../../../assets/image/logo.png";
import CreateProduct from "./createProduct";
import Dashboard from "./dashboard";
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 400;
const appbarHeight = 70;
const LayoutAdmin = () => {
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = useState(true);
  const handleRouting = (route) => {
    history.push(route);
  };
  const handleLogout = React.useCallback(() => {
    Cookies.remove("user");
    window.location.href = "/";
  }, []);
  const user_ = useSelector((state) => state.user);
const handleDrawerOpen = () =>{
  setOpen(!open)
}

  
  const renderHeader = () => {
    return (
      <>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{ width: "100%" }}>
          <Toolbar
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="logo_main">
                <img src={Logo} width={48} alt="logo" />
              </div>
              <Button handleAction={handleDrawerOpen} ><MenuIcon /></Button>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "1rem",
              }}
            >
            
              <div style={{ fontWeight: 700 }}>{user_.user?.fullname}</div>
              <Tooltip title="Đăng xuất">
                <LogoutIcon className="btn_logout" onClick={() => handleLogout()} />
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  };
  const renderMenuLeft = () => {
    return (
      <>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <TreeView
            aria-label="controlled"
            className="cus_treeview"
            defaultSelected={[location.pathname]}
          >
            <div className="text_treeview">Trang chủ</div>
            <TreeItem
              nodeId={""}
              label="Trang chủ"
              className="cus_treeitem"
              onClick={() => handleRouting("/")}
            />
            <TreeItem
              nodeId={""}
              label="Dashboard"
              className="cus_treeitem"
              onClick={() => handleRouting("/dashboard")}
            />
            <TreeItem
              nodeId={""}
              label="Tạo sản phẩm"
              className="cus_treeitem"
              onClick={() => handleRouting("/create-product")}
            />
          </TreeView>
          <Divider />
        </Drawer>
      </>
    );
  };
  const renderBody = () => {
    return (
        <>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/create-product" exact component={CreateProduct} />
        </>
    )
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {renderHeader()}
        {renderMenuLeft()}
        <Box
          component="main"
          sx={{ p: 3, flexGrow: 1 }}
          style={{
            backgroundColor: "#e3f2fd",
            marginTop: appbarHeight + "px",
            borderRadius: "1rem 1rem 0 0",
            minHeight: "100vh",
          }}
        >
          {renderBody()}
          
        </Box>
      </Box>
    </>
  )
}

export default LayoutAdmin;
