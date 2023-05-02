import React,{useState,useEffect} from "react";
import { styled, useTheme,alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CloseIcon from '@mui/icons-material/Close';
import "./Sidebar.css";
import logo from "../Assets/logo.png";
import { HelpOutlineOutlined, NotificationsNoneOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from "@mui/material";
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import menuIcon from "../Assets/Vector.png";
import gearIcon from "../Assets/gear.png";
import userGearIcon from "../Assets/userGear.png";
import cliGearIcon from "../Assets/cset.png";
import lp from "../Assets/lp.png";
import report from "../Assets/reports.png";
import dashIcon from "../Assets/Dashboard.png";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

function Sidebar(){
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const op = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [menuList, setMenuList] = useState([]);

    const menuUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetMenuAccess/1`;
      useEffect(()=>{
    fetch(menuUrl)
    .then((res)=>res.json())
    .then((list)=>{
      console.log(list.Data);
      setMenuList(list.Data);
    })
      },[])



    const [open1, setOpen1] = React.useState(true);

  const handleMenuClick = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(true);

  const handleCsClick = () => {
    setOpen2(!open2);
  };
  
  const [open3, setOpen3] = React.useState(true);

  const handleTreatClick = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(true);

  const handleUserClick = () => {
    setOpen4(!open4);
  };
    return(
        <>
       <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="navigBar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className="sbarbtn"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
           
            <IconButton
              color="inherit"
              aria-label="open drawer"
            
              className="helpbtn me-2"
              
            >
              <HelpOutlineOutlined />
            </IconButton>
            <span style={{ color: "black" }} className="me-3">
              Help
            </span>

            <IconButton
              color="inherit"
              aria-label="open drawer"
             
              className="sbarbtn me-3"
              
            >
              <NotificationsNoneOutlined />
            </IconButton>
            <Button
              id="demo-customized-button"
              aria-controls={op ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={op ? "true" : undefined}
           
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon className="profIcon" />}
              className="profBtn"
            >
              <Avatar alt="Travis Howard" src="/static/images/avatar/1.jpg" />
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={op}
              onClose={handleClose}
            >
                <MenuItem onClick={()=>{
          navigate("/")
        }} disableRipple>
          <EditIcon />
          Logout
        </MenuItem>
            </StyledMenu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          className="sideBarcomp"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <img src={logo} alt="" srcset="" className="logoimg mt-4 mb-4" />
            <IconButton onClick={handleDrawerClose} className="closeBtn">
             
              <CloseIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
            {/* {
              menuList.map((menu)=>{
                return( */}
                  <>
                  <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                  {menuList[0]?.MenuName==="Dashboard" && <img src={dashIcon} />}
                    </ListItemIcon>
                    <ListItemText primary={menuList[0]?.MenuName}/>
                  </ListItemButton>
                  </ListItem>
                  


                  {/* <ListItem disablePadding> */}
                  <ListItemButton onClick={handleMenuClick}>
        <ListItemIcon>
         <img src={menuIcon} alt="" srcset="" />
        </ListItemIcon>
        <ListItemText primary={menuList[2]?.MenuName} />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>









          
          <ListItemButton sx={{ pl: 3 }} onClick={handleCsClick}>
            <ListItemIcon>
            <img src={cliGearIcon} alt="" srcset="" />

            </ListItemIcon>
            
            <ListItemText primary={menuList[3]?.MenuName} />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
                
          <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[1]?.MenuName}/>

          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={handleTreatClick}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[8]?.MenuName}/>
          {open3 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
          
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[20]?.MenuName}/>

          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[21]?.MenuName}/>

          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[22]?.MenuName}/>

          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[23]?.MenuName}/>

          </ListItemButton>
          </List>
          </Collapse>



          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[9]?.MenuName}/>
         
          </ListItemButton>







          </List>
          </Collapse>








          <ListItemButton sx={{ pl: 3 }} onClick={handleUserClick}>
            <ListItemIcon>
            <img src={userGearIcon} alt="" srcset="" />

            </ListItemIcon>
            
            <ListItemText primary={menuList[4]?.MenuName} />
        {open4 ? <ExpandLess /> : <ExpandMore />}

          </ListItemButton>
          <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[10]?.MenuName}/>
         
          </ListItemButton>




          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[11]?.MenuName}/>
         
          </ListItemButton>




          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[12]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[13]?.MenuName}/>
         
          </ListItemButton>

          </List>
          </Collapse>



        </List>
      </Collapse>
                  {/* </ListItem> */}


                  <ListItem disablePadding>
                  <ListItemButton onClick={handleUserClick}>
                    <ListItemIcon>
                  <img src={lp} alt="" srcset="" />
                    </ListItemIcon>
                    <ListItemText primary={menuList[5]?.MenuName}/>
                  </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                  <img src={report} alt="" srcset="" />
                    </ListItemIcon>
                    <ListItemText primary={menuList[7]?.MenuName}/>
                  </ListItemButton>
                  </ListItem>

                
                  </>
                {/* )
              })
            } */}
          </List>
          {/* <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Drawer>
       
      </Box>
        </>
    );
}

export default Sidebar;