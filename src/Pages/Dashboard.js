import React,{useEffect,useState,useMemo} from 'react';
import "../Styles/Dashboard.css";
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
import "../Components/Sidebar.css";
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
import { Avatar,Tooltip } from "@mui/material";
import { Card, Col, Row ,Modal,Form} from "react-bootstrap";
import MaterialReactTable from "material-react-table";
// import "../../index.css";
import { Delete, Edit } from "@mui/icons-material";
import {FaCheckCircle, FaRegEdit} from "react-icons/fa";
import {HiOutlineTrash} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import dashIcon from "../Assets/Dashboard.png";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
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
import calendarap from "../Assets/calendar.png";

import {CgArrowLongRight} from "react-icons/cg";
import tl from "../Assets/totalLeads.png";
import cl from "../Assets/convertedLeads.png";
import ul from "../Assets/unconvertedLeads.png";
import hl from "../Assets/hotLeads.png";
import drs from "../Assets/doctors.png";
import emps from "../Assets/employees.png";
import branches from "../Assets/branch.png";
import { MdLogout } from 'react-icons/md';
import addTmnt from "../Assets/addtmt.png";
import addColl from "../Assets/addcoln.png";

import invoice from "../Assets/invoice.png";


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
  

const Dashboard = () => {

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



    const columns = useMemo(
        () => [
        //   {
        //     accessorKey: "srNo",
        //     header: "Sr No.",
        //     muiTableHeadCellFilterTextFieldProps: { placeholder: "Sr.No." },
            
        //   },
          {
            accessorKey: "Name",
            header: "Name",
          },
          {
            accessorKey: "EnquiryFor",
            header: "Enquiry For",
          },
          {
            accessorKey: "EnquiryType",
            header: "Enquiry Type",
          },
          {
            accessorKey: "EnquiryDate",
            header: "Enquiry Date",
            Cell:({cell})=>{
                let ed=cell.getValue()
                return(
                    <>
                    <div>{ed.split(" ")[0]}</div>
                    </>
                )
            }
          },
          {
            accessorKey: "MobileNo",
            header: "Mobile No.",
          },
          {
            accessorKey: "SourceType",
            header: "Source",
          },
          {
            accessorKey: "FollowUpDate",
            header: "FollowUp Date",
            Cell:({cell})=>{
                let fd=cell.getValue()
                return(
                    <>
                    <div>{fd.split(" ")[0]}</div>
                    </>
                )
            }
          },
        //   {
        //     accessorKey: "download",
        //     header: "Download",
        //     Cell:({cell})=>{
        //         let a=cell.getValue();
        //         return(
        //         a==="unChecked"?<img src="https://png.pngtree.com/png-vector/20191017/ourlarge/pngtree-cross-icon-flat-style-png-image_1811243.jpg" alt="" srcset="" width={50}/>:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
        //       )          }
        //   },
        //   {
        //     accessorKey: "address",
        //     header: "Address",
        //   },
        //   {
        //     accessorKey: "location",
        //     header: "Location",
        //   },
        //   {
        //     accessorKey: "phoneNo",
        //     header: "Phone No.",
        //   },
        //   {
        //     accessorKey: "responsiblePerson",
        //     header: "Responsible Person",
        //   },
          // {
          //   accessorKey: 'gender',
          //   header: 'Gender',
          //   filterFn: 'equals',
          //   filterSelectOptions: [
          //     { text: 'Male', value: 'Male' },
          //     { text: 'Female', value: 'Female' },
          //     { text: 'Other', value: 'Other' },
          //   ],
          //   filterVariant: 'select',
          // },
          // {
          //   accessorKey: 'age',
          //   header: 'Age',
          //   filterVariant: 'range',
          // },
          // {
          //   accessorKey: 'actions',
          //   header: 'Actions',
    
          // },
        ],
        []
      );
    
      const [data,setData] = useState([
       
          {
            srNo: 1,
            role: "Admin",
            menu:"Clinic Settings",
            add:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            edit:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            delete:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            view:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            download:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
           
          },
          {
            srNo: 2,
            role: "Doctor",
            menu:"User Settings",
            add:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            edit:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            delete:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            view:<img src="https://flyclipart.com/thumb2/x-button-327024.png" width={50}/>,
            download:"unChecked"
            
          },
         
        ],
        []
      );



      const [todaysFollowup, setTodaysFollowup] = useState([]);


      let Role=sessionStorage.getItem("RoleId");

      let User=Role==="1"?0:sessionStorage.getItem("UserId")


      const tfUrl=`https://reviveapplication.com/ReviveAPI/Revive.svc/GetTodaysFollowupList/${User}`


      useEffect(()=>{
        fetch(tfUrl)
        .then((res)=>res.json())
        .then((tf)=>{
            console.log(tf.Data);
            setTodaysFollowup(tf.Data);
        })
      },[])




      const [parentMenu, setparentMenu] = useState([]);

      const [mainMenu, setmainMenu] = useState([]);
    
      const [clinicSetting, setclinicSetting] = useState([]);
    
      const [treatmentMenu, settreatmentMenu] = useState([]);
    
      const [userSetting, setuserSetting] = useState([]);
    
      const [lpMenu, setlpMenu] = useState([]);
    
      const [apmntMenu, setapmntMenu] = useState([]);
    
      const [reportMenu, setreportMenu] = useState([]);
    
      const [menuList, setMenuList] = useState([]);
    
      //  let Role=sessionStorage.getItem("RoleId");
  const menuUrl = `https://reviveapplication.com/ReviveAPI/Revive.svc/GetMenuAccess/${Role}`;
      useEffect(() => {
        fetch(menuUrl)
          .then((res) => res.json())
          .then((list) => {
            console.log(list.Data);
            setMenuList(list.Data);
    
            setparentMenu(list.Data.filter((parent, i) => parent.Parent === 0));
            // console.log(list.Data.filter((parent,i)=>parent.Parent===0));
    
            setmainMenu(list.Data.filter((main, i) => main.Parent === 3));
            // console.log(list.Data.filter((main,i)=>main.Parent===3));
    
            setlpMenu(list.Data.filter((lp, i) => lp.Parent === 6));
            // console.log(list.Data.filter((lp,i)=>lp.Parent===6));
    
            setreportMenu(list.Data.filter((rpt, i) => rpt.Parent === 8));
            // console.log(list.Data.filter((rpt,i)=>rpt.Parent===8));
    
            setclinicSetting(list.Data.filter((cs, i) => cs.Parent === 4));
            // console.log(list.Data.filter((cs,i)=>cs.Parent===4);
    
            setuserSetting(list.Data.filter((user, i) => user.Parent === 5));
            // console.log(list.Data.filter(((user,i)=>user.Parent===5)));
    
            settreatmentMenu(list.Data.filter((treat, i) => treat.Parent === 9));
            // console.log(list.Data.filter((treat,i)=>treat.Parent===9));
    
            setapmntMenu(list.Data.filter((apmnt, i) => apmnt.Parent === 7));
            // console.log(list.Data.filter((apmnt,i)=>apmnt.Parent===7));
          });
      }, []);
    

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
  const [open7, setOpen7] = React.useState(false);

  const handleReportClick = () => {
    setOpen7(!open7);
  };



  return (
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
          <MdLogout/>
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
            <>
              {parentMenu?.map((parent, i) => {
                return (
                  <>
                    <ListItemButton
                      key={i}
                      onClick={() => {
                         if (parent?.MenuName === "Menu") {
                          handleMenuClick();
                        } else if (parent?.MenuName === "Leads/Patients") {
                          handleLpClick();
                        } else if (parent?.MenuName === "Reports") {
                          handleReportClick();
                        } else if (parent?.MenuName === "Appointment") {
                          handleApClick();
                        }
                        else if(parent?.MenuName === "Invoice"){
                          navigate("/invoice")
                        }
                        else if(parent?.MenuName === "Add Patients Treatment"){
                          navigate("/add-treatment")
                        }
                        else if(parent?.MenuName === "Add Collection"){
                          navigate("/add-collection")
                        }
                        else if(parent?.MenuName === "Consultation Invoice"){
                          navigate("/add-consult-inv")
                        }
                      }}
                    >
                      <ListItemIcon>
                        <img
                          src={`${
                            parent?.MenuName === "Dashboard"
                              ? dashIcon
                              : parent?.MenuName === "Menu"
                              ? menuIcon
                              : parent?.MenuName === "Leads/Patients"
                              ? lp
                              : parent?.MenuName === "Reports"
                              ? report
                              : parent?.MenuName === "Appointment"
                              ? calendarap
                              : parent?.MenuName === "Invoice"
                              ? invoice
                              : parent?.MenuName === "Add Patients Treatment"
                              ? addTmnt
                              : parent?.MenuName === "Add Collection"
                              ? addColl
                              : parent?.MenuName === "Consultation Invoice"
                              ? invoice
                              :""
                          }`}
                        />
                      </ListItemIcon>
                      <ListItemText primary={parent?.MenuName} />
                      {parent?.MenuName === "Menu" ? (
                        open1 ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : parent?.MenuName === "Leads/Patients" ? (
                        open5 ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : parent?.MenuName === "Reports" ? (
                        open7 ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : parent?.MenuName === "Appointment" ? (
                        open6 ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )
                      ) : (
                        ""
                      )}
                    </ListItemButton>
                    {parent?.MenuName === "Menu" ||
                    parent?.MenuName === "Leads/Patients" ||
                    parent?.MenuName === "Reports" ||
                    parent?.MenuName === "Appointment" ? (
                      <Collapse
                        in={
                          parent?.MenuName === "Menu"
                            ? open1
                            : parent?.MenuName === "Leads/Patients"
                            ? open5
                            : parent?.MenuName === "Reports"
                            ? open7
                            : parent?.MenuName === "Appointment"
                            ? open6
                            : ""
                        }
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {parent?.MenuName === "Menu"
                            ? mainMenu?.map((main, i) => {
                                return (
                                  <>
                                    <ListItemButton
                                      sx={{ pl: 3 }}
                                      onClick={() => {
                                        if (
                                          main?.MenuName === "Clinic Settings"
                                        ) {
                                          handleCsClick();
                                        } else if (
                                          main?.MenuName === "User Settings"
                                        ) {
                                          handleUserClick();
                                        }
                                      }}
                                    >
                                      <ListItemIcon>
                                        <img src={`${main?.MenuName === "Clinic Settings"?cliGearIcon:main?.MenuName === "User Settings"?userGearIcon:""}`} alt="" srcset="" />
                                      </ListItemIcon>

                                      <ListItemText primary={main?.MenuName} />
                                      {main?.MenuName === "Clinic Settings" ? (
                                        open2 ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        )
                                      ) : main?.MenuName === "User Settings" ? (
                                        open4 ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        )
                                      ) : (
                                        ""
                                      )}
                                    </ListItemButton>

                                    {main?.MenuName === "Clinic Settings" ||
                                    main?.MenuName === "User Settings" ? (
                                      <Collapse
                                        in={
                                          main?.MenuName === "Clinic Settings"
                                            ? open2
                                            : main?.MenuName === "User Settings"
                                            ? open4
                                            : ""
                                        }
                                        timeout="auto"
                                        unmountOnExit
                                      >
                                        <List component="div" disablePadding>
                                          {main?.MenuName === "Clinic Settings"
                                            ? clinicSetting?.map((cs, i) => {
                                                return (
                                                  <>
                                                    <ListItemButton
                                                      sx={{ pl: 4 }}
                                                      onClick={() => {
                                                        if (
                                                          cs?.MenuName ===
                                                          "Treatment"
                                                        ) {
                                                          handleTreatClick();
                                                        }
                                                        else if(cs?.MenuName==="Branch"){
                                                          navigate("/branch")
                                                        }
                                                        else if(cs?.MenuName==="LeadSource"){
                                                          navigate("/lead-srcs")
                                                        }
                                                      }}
                                                    >
                                                      <ListItemIcon>
                                                        {/* <img src="" alt="" srcset="" /> */}
                                                      </ListItemIcon>

                                                      <ListItemText
                                                        primary={cs?.MenuName}
                                                      />

                                                      {cs?.MenuName ===
                                                      "Treatment" ? (
                                                        open3 ? (
                                                          <ExpandLess />
                                                        ) : (
                                                          <ExpandMore />
                                                        )
                                                      ) : (
                                                        ""
                                                      )}
                                                    </ListItemButton>
                                                    {cs?.MenuName ==
                                                    "Treatment" ? (
                                                      <Collapse
                                                        in={
                                                          cs?.MenuName ===
                                                          "Treatment"
                                                            ? open3
                                                            : ""
                                                        }
                                                        timeout="auto"
                                                        unmountOnExit
                                                      >
                                                        <List
                                                          component="div"
                                                          disablePadding
                                                        >
                                                          {cs?.MenuName ===
                                                          "Treatment"
                                                            ? treatmentMenu?.map(
                                                                (treat, i) => {
                                                                  return (
                                                                    <>
                                                                      <ListItemButton
                                                                        sx={{
                                                                          pl: 4,
                                                                        }}

                                                                        onClick={()=>{
                                                                          if(treat?.MenuName==="Skin and Laser"){
                                                                            navigate("/s&l")
                                                                          }
                                                                          else if(treat?.MenuName==="Weight Loss"){
                                                                            navigate("/wl")
                                                                          }
                                                                          else if(treat?.MenuName==="Hair"){
                                                                            navigate("/ht")
                                                                          }
                                                                          else if(treat?.MenuName==="Homeopathy"){
                                                                            navigate("/homeopathy")
                                                                          }
                                                                        }}
                                                                      >
                                                                        <ListItemIcon>
                                                                          {/* <img src="" alt="" srcset="" /> */}
                                                                        </ListItemIcon>

                                                                        <ListItemText
                                                                          primary={
                                                                            treat?.MenuName
                                                                          }
                                                                        />
                                                                      </ListItemButton>
                                                                    </>
                                                                  );
                                                                }
                                                              )
                                                            : ""}
                                                        </List>
                                                      </Collapse>
                                                    ) : (
                                                      ""
                                                    )}
                                                  </>
                                                );
                                              })
                                            : main?.MenuName === "User Settings"
                                            ? userSetting?.map((user, i) => {
                                                return (
                                                  <>
                                                    <ListItemButton
                                                      sx={{ pl: 4 }}
                                                      onClick={()=>{
                                                        if(user?.MenuName==="Role"){
                                                          navigate("/role")
                                                        }
                                                        else if(user?.MenuName==="Access Permission"){
                                                          navigate("/access-perm")
                                                        }
                                                        else if(user?.MenuName==="Doctor Registration"){
                                                          navigate("/dr-reg")
                                                        }
                                                        else if(user?.MenuName==="Employee Registration"){
                                                          navigate("/emp-reg")
                                                        }
                                                      }}
                                                    >
                                                      <ListItemIcon>
                                                        {/* <img src="" alt="" srcset="" /> */}
                                                      </ListItemIcon>

                                                      <ListItemText
                                                        primary={user?.MenuName}
                                                      />
                                                    </ListItemButton>
                                                  </>
                                                );
                                              })
                                            : ""}
                                        </List>
                                      </Collapse>
                                    ) : (
                                      ""
                                    )}
                                  </>
                                );
                              })
                            : parent?.MenuName === "Leads/Patients"
                            ? lpMenu?.map((lp, i) => {
                                return (
                                  <>
                                    <ListItemButton sx={{ pl: 3 }} onClick={()=>{
                                      if(lp?.MenuName==="Lead Entry"){
                                        navigate("/enquiries")
                                      }
                                      else if(lp?.MenuName==="FollowUp Entry"){
                                        navigate("/fup-entries")
                                      }
                                      else if(lp?.MenuName==="Patients/Customers"){
                                        navigate("/patients")
                                      }
                                      else if(lp?.MenuName==="Upload Leads"){
                                        navigate("/up-leads")
                                      }
                                    }}>
                                      <ListItemIcon>
                                        {/* <img src={cliGearIcon} alt="" srcset="" /> */}
                                      </ListItemIcon>

                                      <ListItemText primary={lp?.MenuName} />
                                      {/* {open5 ? <ExpandLess /> : <ExpandMore />} */}
                                    </ListItemButton>
                                  </>
                                );
                              })
                            : parent?.MenuName === "Reports"
                            ? reportMenu?.map((rpt, i) => {
                                return (
                                  <>
                                     <ListItemButton sx={{ pl: 3 }} onClick={()=>{
                                      if(rpt?.MenuName==="Enquiry To Patient Conversions"){
                                        navigate("/e2p")
                                      }
                                      else if(rpt?.MenuName==="Patients Treatment"){
                                        navigate("/pntdtl")
                                      }
                                      else if(rpt?.MenuName==="Clinic Wise Collection"){
                                        navigate("/clinic-collection")
                                      }
                                      else if(rpt?.MenuName==="Doctor Wise Collection"){
                                        navigate("/doctor-collection")
                                      }
                                      else if(rpt?.MenuName==="Patient Wise Collection"){
                                        navigate("/patient-collection")
                                      }
                                      else if(rpt?.MenuName==="Leadsource Wise Enquiries"){
                                        navigate("/lsrc")
                                      }
                                      else if(rpt?.MenuName==="Consultation Report"){
                                        navigate("/consult-rpt")
                                      }
                                    }}>
                                      <ListItemIcon>
                                        {/* <img src={cliGearIcon} alt="" srcset="" /> */}
                                      </ListItemIcon>

                                      <ListItemText primary={rpt?.MenuName} />
                                      {/* {open7 ? <ExpandLess /> : <ExpandMore />} */}
                                    </ListItemButton>
                                  </>
                                );
                              })
                            : parent?.MenuName === "Appointment"
                            ? apmntMenu?.map((apmnt, i) => {
                                return (
                                  <>
                                    <ListItemButton sx={{ pl: 3 }} onClick={()=>{
                                      if(apmnt?.MenuName==="Book Appointment"){
                                        navigate("/appmnt")
                                      }
                                      else if(apmnt?.MenuName==="View Appointment"){
                                        navigate("/view-apmt")
                                      }
                                    }}>
                                      <ListItemIcon>
                                        {/* <img src={cliGearIcon} alt="" srcset="" /> */}
                                      </ListItemIcon>

                                      <ListItemText primary={apmnt?.MenuName} />
                                      {/* {open7 ? <ExpandLess /> : <ExpandMore />} */}
                                    </ListItemButton>
                                  </>
                                );
                              })
                            : ""}
                        </List>
                      </Collapse>
                    ) : (
                      ""
                    )}
                  </>
                );
              })}
            </>
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
      <Row className="mt-3">
        <Col>
        <p className="userGreet">Welcome Dr. Pankti</p>

        <Row>
          <Col>
          <Card>
            <p className="p-3 lCount">Lead Count</p>
            <Row className="m-3 mt-0">
              <Col md={3} style={{borderRight:"1px solid black"}}>
              <Row>
                <Col md={6}>
                <p className='mx-3 mb-0 lTitle1'>Total Leads</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                </Col>

                <Col md={6} className="mt-3">
                <p className="mx-4 countL1">150</p>
                <img src={tl} alt="" srcset="" />
                </Col>
              </Row>
              </Col>
              <Col md={3} style={{borderRight:"1px solid black"}}>
              <Row>
                <Col md={6}>
                <p className='mx-3 mb-0 lTitle2'>Converted Leads</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                </Col>

                <Col md={6} className="mt-3">
                <p className="mx-4 px-2 countL2">120</p>
                <img src={cl} alt="" srcset="" />
                </Col>
              </Row>
              </Col>
               <Col md={3} style={{borderRight:"1px solid black"}}>
              <Row>
                <Col md={6}>
                <p className='mx-3 mb-0 lTitle3'>Unconverted Leads</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                </Col>

                <Col md={6} className="mt-3">
                <p className="mx-5 px-4 countL3">20</p>
                <img src={ul} alt="" srcset="" />
                </Col>
              </Row>
              </Col> 
              <Col md={3}>
              <Row>
                <Col md={6}>
                <p className='mx-3 mb-0 lTitle4'>Hot Leads</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                </Col>

                <Col md={6} className="mt-3">
                <p className="mx-4 px-3 countL4">20</p>
                <img src={hl} alt="" srcset="" />
                </Col>
              </Row>
              </Col>
            </Row>
          </Card>
          </Col>
        </Row>


        <Row className="mt-4">
          <Col md={7}>
          <Row>
            <Col md={4}>
            <Card className="p-3 me-0 me-md-5">
              <Row>
                <Col>

                  <Row>
                    <Col md={4}>
                    
                <Card>
                  <img src={drs} alt="" srcset="" width={50} height={50} className="m-auto mt-2 mb-2"/>
                </Card>
                    </Col>
                    <Col md={8}>
                    <p>20</p>
                    </Col>
                  </Row>
                <p>Total Doctors</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                
                </Col>
                
              </Row>
            </Card>
            </Col>
            <Col md={4}>
            <Card className="p-3 me-0 me-md-5">
              <Row>
                <Col>

                  <Row>
                    <Col md={4}>
                    
                <Card>
                  <img src={drs} alt="" srcset="" width={50} height={50} className="m-auto mt-2 mb-2"/>
                </Card>
                    </Col>
                    <Col md={8}>
                    <p>20</p>
                    </Col>
                  </Row>
                <p>Total Doctors</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                
                </Col>
                
              </Row>
            </Card>
            </Col>
            <Col md={4}>
            <Card className="p-3 me-0 me-md-5">
              <Row>
                <Col>

                  <Row>
                    <Col md={4}>
                    
                <Card>
                  <img src={drs} alt="" srcset="" width={50} height={50} className="m-auto mt-2 mb-2"/>
                </Card>
                    </Col>
                    <Col md={8}>
                    <p>20</p>
                    </Col>
                  </Row>
                <p>Total Doctors</p>
                <Button variant="">view all <span className="mx-2"><CgArrowLongRight/></span></Button>
                
                </Col>
                
              </Row>
            </Card>
            </Col>
          </Row>
          </Col>
          <Col md={5}>
           <Card>
            <p>Lead Sources</p>
            
           </Card>
          </Col>
        </Row>
        </Col>
      </Row>
      </Main>
    </Box>
    </>
  )
}

export default Dashboard