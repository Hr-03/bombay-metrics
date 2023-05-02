import React,{useState,useEffect} from "react";
import "../../Styles/Menu/Leads/PatientConversion.css";
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
import "../../Components/Sidebar.css";
import logo from "../../Assets/logo.png";
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
import { Avatar,Tooltip } from "@mui/material";
import { Card, Col, Row ,Modal,Form, Tabs, Tab, InputGroup} from "react-bootstrap";
import MaterialReactTable from "material-react-table";
// import "../../index.css";
import { Delete, Edit } from "@mui/icons-material";
import { AiOutlineEye} from "react-icons/ai";
import { BsSnow} from "react-icons/bs";
import {FaCheckCircle, FaEye, FaRegEdit} from "react-icons/fa";
import {MdCall} from "react-icons/md";
import {HiOutlineTrash,HiFire,HiUserAdd} from "react-icons/hi";
import {SiMicrosoftexcel} from "react-icons/si";
import {useNavigate} from "react-router-dom";
import dashIcon from "../../Assets/Dashboard.png";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import menuIcon from "../../Assets/Vector.png";
import gearIcon from "../../Assets/gear.png";
import userGearIcon from "../../Assets/userGear.png";
import cliGearIcon from "../../Assets/cset.png";
import lp from "../../Assets/lp.png";
import report from "../../Assets/reports.png";
import calendar from "../../Assets/calendar.png";

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

function PatientConversion(){
    const navigate=useNavigate();
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
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


  const [currentTab, setCurrentTab] = useState(0);







  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);



  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };



  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
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

  const [open1, setOpen1] = React.useState(false);

  const handleMenuClick = () => {
    setOpen1(!open1);
  };
  const [open2, setOpen2] = React.useState(false);

  const handleCsClick = () => {
    setOpen2(!open2);
  };
  
  const [open3, setOpen3] = React.useState(false);

  const handleTreatClick = () => {
    setOpen3(!open3);
  };
  const [open4, setOpen4] = React.useState(false);

  const handleUserClick = () => {
    setOpen4(!open4);
  };
  const [open5, setOpen5] = React.useState(false);

  const handleLpClick = () => {
    setOpen5(!open5);
  };
  const [open6, setOpen6] = React.useState(false);

  const handleApClick = () => {
    setOpen6(!open6);
  };

    return(
        <>
         <Box sx={{ display: 'flex' }}>
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
            <img src={logo} alt="" srcset="" className="logoimg mt-2 mb-2" />
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
                  <ListItemButton onClick={()=>navigate("/today-fup")}>
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
        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/branch")}>
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
          
          
        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/s&l")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[20]?.MenuName}/>

          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/wl")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[21]?.MenuName}/>

          </ListItemButton>


          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/ht")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[22]?.MenuName}/>

          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/homeopathy")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[23]?.MenuName}/>

          </ListItemButton>
          </List>
          </Collapse>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/lead-srcs")}>
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
        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/role")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[10]?.MenuName}/>
         
          </ListItemButton>




          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/access-perm")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[11]?.MenuName}/>
         
          </ListItemButton>




          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/dr-reg")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[12]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/emp-reg")}>
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


                  {/* <ListItem disablePadding> */}
                  <ListItemButton onClick={handleLpClick}>
                    <ListItemIcon>
                  <img src={lp} alt="" srcset="" />
                    </ListItemIcon>
                    <ListItemText primary={menuList[5]?.MenuName}/>
        {open5 ? <ExpandLess /> : <ExpandMore />}

                  </ListItemButton>
                  <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/enquiries")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[14]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/fup-entries")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[15]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/patients")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[16]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/up-leads")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[17]?.MenuName}/>
         
          </ListItemButton>
          </List>
          </Collapse>






          <ListItemButton onClick={()=>{
            handleApClick()
            navigate("/appmnt");
            }}>
                    <ListItemIcon>
                  <img src={calendar} alt="" srcset="" />
                    </ListItemIcon>
                    <ListItemText primary={menuList[6]?.MenuName}/>
        {open6 ? <ExpandLess /> : <ExpandMore />}

                  </ListItemButton>
                  <Collapse in={open6} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/book-apmt")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[18]?.MenuName}/>
         
          </ListItemButton>



          <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/view-apmt")}>
          <ListItemIcon>
            <img src="" alt="" srcset="" />
          </ListItemIcon>

          <ListItemText primary={menuList[19]?.MenuName}/>
         
          </ListItemButton>



         
          </List>
          </Collapse>
                  {/* </ListItem> */}
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
      <Main open={open}>
        <DrawerHeader />
       <Card className="m-1 mt-3 fup-crd p-3">
        <Row>
            <Col>
            <p className="ap-t">Patient</p>
            <hr />

            
            <Tabs variant="pills"  activeKey={currentTab}
                  id="justify-tab-example"
                  className="mb-3"
                  justify>
                <Tab eventKey={0} title="Personal Information">
                <Form>
                    <Row>
                        <Col xs={12} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">






                        <Row className="m-0 m-xs-3">
                            <Col lg={2} className="pe-0 px-0 px-lg-4">
                            
        <Form.Label className="mx-0 mx-lg-4" style={{whiteSpace:"nowrap"}}>Form No.</Form.Label>
                            </Col>
                            <Col lg={6} className="px-0 pe-0 pe-lg-2">
                            
        <Form.Control type="text" placeholder="" />
                            </Col>
                        </Row>
        
      </Form.Group>
                        </Col>






                        <Col xs={12} lg={6}>
                        <Row className="me-0 me-lg-4">
                            <Col xs={12} lg={6}>
        <Form.Label className="pc-no">Patient No.</Form.Label>
                            
                            </Col>
                            <Col xs={12} lg={6}>
        <Form.Control type="text" placeholder="" className=""/>
                            
                            </Col>
                        </Row>
                        </Col>
                    </Row>








                    <Row>
                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="" />
       
      </Form.Group>
                        </Col>

                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="" />
       
      </Form.Group>
                        </Col>
                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" placeholder="" />
       
      </Form.Group>
                        </Col>
                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enquiry Date</Form.Label>
        <Form.Control type="date" placeholder="" />
       
      </Form.Group>
                        </Col>
                    </Row>

                    <Row>

                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="" />
       
      </Form.Group>
                        </Col>

                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="" />
       
      </Form.Group>
                        </Col>

                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="" />
       
      </Form.Group>
                        </Col>

                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="" />
       
      </Form.Group>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>


                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>


                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>

                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telephone No.</Form.Label>
        <Form.Control type="tel" placeholder="" />
       
      </Form.Group>
                        </Col>
                    </Row>




                    <Row>
                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control type="tel" placeholder="" />
       
      </Form.Group>
                        </Col>



                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail ID</Form.Label>
        <Form.Control type="email" placeholder="" />
       
      </Form.Group>
                        </Col>



                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Clinic Name</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>



                        <Col md={3}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enquiry Source</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Profile Photo</Form.Label>
        <Form.Control type="file" placeholder="" />
       
      </Form.Group>
                      
                        </Col>
                        <Col md={6}>
                        <Button variant="">Upload Image</Button>
                        </Col>
                    </Row>




                    <Row className="text-center mt-4">
                        <Col>
                        <Button variant="" onClick={()=>setCurrentTab((prev) => prev + 1)}>Next</Button>
                        </Col>
                    </Row>
                </Form>
                </Tab>

                <Tab eventKey={1} title="Medical History">
                    <Form>
                        <Row>
                            <Col md={3}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Family Doctor’s Name</Form.Label>
        <Form.Control type="text" placeholder="" />
       
      </Form.Group>

                            </Col>


                            <Col md={3}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone/Telephone Number</Form.Label>
        <Form.Control type="tel" placeholder="" />
       
      </Form.Group>

                            </Col>

                            <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="" />
       
      </Form.Group>
                            </Col>
                            
                        </Row>

                        <Row className="mt-2">
                            <Col>
                            <Form.Label>Have you suffered or suffering  from any of the following :</Form.Label>

                            <Row>
                                <Col lg={1}>
                                
        <Form.Check type="checkbox" placeholder="" label="HB"/>
                                </Col>
                                <Col lg={1}>
        <Form.Check type="checkbox" placeholder="" label="THYROID"/>
                                
                                </Col>
                                <Col lg={1}>
                                
        <Form.Check type="checkbox" placeholder="" label="DM"/>
                                </Col>
                                <Col lg={1}>
                                
        <Form.Check type="checkbox" placeholder="" label="HT"/>
                                </Col>
                                <Col lg={1}>
        <Form.Check type="checkbox" placeholder="" label="PCOD"/>
                                
                                </Col>
                            </Row>

                            
                            </Col>
                        </Row>


                        <Row className="mt-4">
                          <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>List of Medicine you are taking currently, if any :</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="" />
       
      </Form.Group>
                          </Col>
                        </Row>

                        <Row className="mt-2">

                          <Col md={4}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Hair fall/ Dandruff/ Itching :</Form.Label>
        <Form.Select aria-label="Default select example">
      <option></option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
       
      </Form.Group>
                          </Col>


                          <Col md={4}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Since</Form.Label>
        <Form.Control type="text" placeholder="" />
      
       
      </Form.Group>
                          </Col>


                          <Col md={4}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Treatment Done Anywhere</Form.Label>
        <Form.Control type="text" placeholder="" />
      
       
      </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
        <Form.Label>If Women Patient :</Form.Label>

                    <Row>
                      <Col md={4}>
        <Form.Label>Menses:</Form.Label>
                      <Row>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="Regular"/>
                        </Col>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="Irregular"/>
                        </Col>
                      </Row>
                      </Col>

                      <Col md={4}>
        <Form.Label>Are you Pregnant:</Form.Label>
                      <Row>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="Yes"/>
                        
                        </Col>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="No"/>
                        
                        </Col>
                      </Row>
                      </Col>


                      <Col md={4}>
        <Form.Label>Delivery:</Form.Label>
                      <Row>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="Normal"/>
                        
                        </Col>
                        <Col>
                        <Form.Check type="radio" aria-label="radio 1" label="LSCS"/>
                        
                        </Col>
                      </Row>
                      </Col>
                      </Row>      
                          </Col>
                        </Row>

                        <Row className="mt-3">
                          <Col>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Treatment Explanation :</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="" />
       
      </Form.Group>
                          </Col>
                        </Row>

                        {/* <Row>
                          <Col>
        
                          <Row>
                            <Col lg={4}>
                            <Row>
                              <Col lg={1}>
        <Form.Label className="mt-2">Meal:</Form.Label>
                              
                              </Col>
                              <Col lg={11}>
        <Form.Control type="text" placeholder="" />
                              
                              </Col>
                            </Row>
                            </Col>

                            <Col lg={8}>
                            <Row>
                              <Col lg={2}>
        <Form.Label style={{whiteSpace:"nowrap"}} className="mx-5 px-5 mt-2">Diet Details:</Form.Label>
                              
                              </Col>
                              <Col lg={10}>
        <Form.Control type="text" placeholder="" />
                              
                              </Col>
                            </Row>
                            </Col>
                          </Row>
                          </Col>
                        </Row> */}




                   <Row>
                    
                    <Col>
                    <Form.Label>Diet :</Form.Label>

{inputList.map((x, i) => {
        return (
         <>
         <Row>
          <Col xs={12} md={6}>


          <Row>
                              <Col lg={1}>
        <Form.Label className="mt-2">Meal:</Form.Label>
                              
                              </Col>
                              <Col lg={8}>
        <Form.Control as="textarea" rows={2}  name="firstName"
              placeholder=""
              value={x.firstName}
              onChange={e => handleInputChange(e, i)} />
                              
                              </Col>
                            </Row>
          
            
          </Col>

          <Col xs={12} md={6}>

          <Row>
                              <Col lg={3}>
        <Form.Label style={{whiteSpace:"nowrap"}} className="mx-0 mx-lg-5 px-0 px-lg-5 mt-2">Diet Details:</Form.Label>
                              
                              </Col>
                              <Col lg={8}>
        <Form.Control as="textarea" rows={2} className="ml10"
              name="lastName"
              placeholder=""
              value={x.lastName}
              onChange={e => handleInputChange(e, i)} />
                              
                              </Col>
                            </Row>
          
            
          </Col>
          <Col>
          
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
          </Col>

          {/* <Col>
          
              {inputList.length - 1 === i && <button >Add</button>}
          </Col> */}
         </Row>
         <Row className="text-center m-5">
                          <Col>
                          {inputList.length - 1 === i &&<Button variant="" className="add-diet" onClick={handleAddClick}>Add more diet</Button>}
                          </Col>
                        </Row>
           
        </>
        );
      })}
                    
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                    </Col>
                    
                    </Row>     
























                        {/* <Row className="text-center m-5">
                          <Col>
                          <Button variant="" className="add-diet">Add more diet</Button>
                          </Col>
                        </Row> */}

                        <Row>
                          <Col>
                          <Button variant="" className="pc-back" onClick={()=>setCurrentTab((prev)=> prev - 1)}>Back</Button>
                          </Col>
                          <Col>
                          <Button variant="" className="pc-nxt" onClick={()=>setCurrentTab((prev)=> prev + 1)}>Next</Button>
                          </Col>
                        </Row>
                    </Form>
                </Tab>

                <Tab eventKey={2} title="Other Information">
                    <Form>
                      <Row>
                        <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Water Intake (Day) :</Form.Label>
       <InputGroup>
       
        <Form.Control type="text" placeholder="" />
        <InputGroup.Text id="basic-addon2">(in ltrs.)</InputGroup.Text>
       </InputGroup>
        
      </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sleep Duration :</Form.Label>
       <InputGroup>
       
        <Form.Control type="text" placeholder="" />
        <InputGroup.Text id="basic-addon2">(in hrs.)</InputGroup.Text>
       </InputGroup>
        
      </Form.Group>
                        </Col>
                        <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stress :</Form.Label>
       {/* <InputGroup> */}
       
        <Form.Control type="text" placeholder="" />
        {/* <InputGroup.Text id="basic-addon2">(in ltrs.)</InputGroup.Text> */}
       {/* </InputGroup> */}
        
      </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profession :</Form.Label>
       {/* <InputGroup> */}
       
        <Form.Control type="text" placeholder="" />
        {/* <InputGroup.Text id="basic-addon2">(in ltrs.)</InputGroup.Text> */}
       {/* </InputGroup> */}
        
      </Form.Group>
                        </Col>

                        <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation :</Form.Label>
       {/* <InputGroup> */}
       
        <Form.Control type="text" placeholder="" />
        {/* <InputGroup.Text id="basic-addon2">(in ltrs.)</InputGroup.Text> */}
       {/* </InputGroup> */}
        
      </Form.Group>
                        </Col>

                        <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        
        <Form.Label>Timing :</Form.Label>
       {/* <InputGroup> */}
       
        <Form.Control type="text" placeholder="" />
        {/* <InputGroup.Text id="basic-addon2">(in ltrs.)</InputGroup.Text> */}
       {/* </InputGroup> */}
        
      </Form.Group>
                        </Col>
                      </Row>


                      <Row>
                        <Col lg={4}>
        <Form.Label>Reason for weight loss :</Form.Label>
                        <Row>
                          <Col>
                          <Form.Check aria-label="option 1" label="Looks"/>
                          </Col>
                          <Col>
                          <Form.Check aria-label="option 1" label="Medical"/>
                          </Col>
                          <Col>
                          <Form.Check aria-label="option 1" label="Other"/>
                          </Col>
                        </Row>
                        </Col>

                        <Col lg={4}>
        <Form.Label>Reason for weight loss :</Form.Label>
                        <Row>
                          <Col>
                          <Form.Check aria-label="option 1" label="Married"/>
                          
                          </Col>
                          <Col>
                          <Form.Check aria-label="option 1" label="Unmarried"/>
                          
                          </Col>
                          <Col>
                          <Form.Check aria-label="option 1" label="Single"/>
                          
                          </Col>
                        </Row>
                        </Col>
                      </Row>


                      <Row className="mt-5">
                        <Col>
                        <Button variant="" className="pc-back" onClick={()=>setCurrentTab((prev)=>prev - 1)}>Back</Button>
                        </Col>
                        <Col>
                        <Button variant="" className="pc-nxt">Submit</Button>
                        </Col>
                      </Row>
                    </Form>
                </Tab>
            </Tabs>



            </Col>
        </Row>
       </Card>
      </Main>
    </Box>
        </>
    );
}

export default PatientConversion;