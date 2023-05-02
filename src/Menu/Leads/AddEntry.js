import React,{useState,useMemo,useEffect} from "react";
import "../../Styles/Menu/Leads/AddEntry.css";
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
import { Card, Col, Row ,Modal,Form} from "react-bootstrap";
import MaterialReactTable from "material-react-table";
// import "../../index.css";
import { Delete, Edit } from "@mui/icons-material";
import {FaCheckCircle, FaRegEdit} from "react-icons/fa";
import {HiOutlineTrash} from "react-icons/hi";
import {useNavigate} from "react-router-dom";
import { fn } from "jquery";
import $ from "jquery";
import Swal from "sweetalert2";
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





function AddEntry(){
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


    
  const [data, setData] = useState({
    FirstName:"",
    LastName:"",
    Occupation:"",
    EnquiryDate:"",
    Gender:"",
    Age:"",
    DateOfBirth:"",
    MobileNo:"",
    Email:"",
    Address1:"",
    Address2:"",
    CityId:"",
    StatesId:"",
    CountryId:"",
    Area:"null",
    Pincode:"null",
    ClinicID:"",
    EnquiryFor:"",
    EnquirySourceID:"",
    ConversationDetails:"",
    IsPatient:"",
    Rating:"",
    // LeadStatus:"",
    AssignedToUser:"",
    Actions:"null",
    IsActive:"1",
    CreatedBy:"1",
    CreationDate:"",
    IPAddress:"null",
    TelephoneNo:"",
    FollowUpDate:""

  })

  const [checked, setChecked] = useState({
    isSelCCountry: false,
    isSelPCountry: false,
    isSelCState: false,
    isSelPState: false,
    isSelCCity: false,
    isSelPCity: false,
  });

  const [countries, setCountries] = useState({
    currentCountries: [],
  });
  const [states, setStates] = useState({
    currentStates: [],
  });
  const [cities, setCities] = useState({
    currentCities: [],
  });


  function containsNumbers(str) {
    return /\d/.test(str);
  }



  let firstn=containsNumbers(data.fn)
  let lastn=containsNumbers(data.ln)

//   useEffect(()=>{

// console.log(firstn);
// console.log(lastn);

//   },[data])


//   const onchange=(e)=>{
   
//   }



const [clinics, setClinics] = useState([]);
const clinUrl="https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetClinicList/0/0";

useEffect(()=>{
fetch(clinUrl)
.then((res)=>res.json())
.then((clinic)=>{
  console.log(clinic.Data);
  setClinics(clinic.Data);
})
},[])










const getStates = async (countryId, cORp) => {
  let url = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetStateList/${countryId}`;
  let state = await (await fetch(url)).json();
  console.log(state.Data);
  if (cORp === "current") {
    setStates({
      ...states,
      currentStates: state.Data,
    });
  }
};

const getCities = async (stateId, cORp) => {
  let url = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetCityList/${stateId}`;
  let city = await (await fetch(url)).json();
  console.log(city.Data);
  if (cORp === "current") {
    setCities({
      ...cities,
      currentCities: city.Data,
    });
  }
};

const getCountries = async () => {
  let url = "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetCountryList";
  let country = await (await fetch(url)).json();
  console.log(country.Data.slice(0, 2));
  setCountries({
    ...countries,
    currentCountries: country.Data,
    // permCountries: country.Data.slice(0, 2),
  });
}
//   $(function(){
//     var dtToday = new Date();
 
//     var month = dtToday.getMonth() + 1;
//     var day = dtToday.getDate();
//     var year = dtToday.getFullYear();
//     if(month < 10)
//         month = '0' + month.toString();
//     if(day < 10)
//      day = '0' + day.toString();
//     var maxDate = year + '-' + month + '-' + day;
//     $('#inputdate').attr('min', maxDate);
// });









useEffect(()=>{
getCountries();
},[])


const handleIsPatient=(e)=>{
  const patient=document.getElementById("pnt");
  const followup=document.getElementById("flup");

  if(patient.checked){
    setData((pre)=>{
      return{
        ...pre,
        IsPatient:"1"
      }
    })
  }

  if(followup.checked){
    setData((pre)=>{
      return{
        ...pre,
        IsPatient:"0"
      }
    })
  }

 

let fupcol=document.getElementById("fupdate");

if(followup.checked){
  fupcol.style.display="block";
}
else{
  fupcol.style.display="none";
}

  console.log(data);

}


const handle=(e)=>{
  const newcred={...data}
    newcred[e.target.name]=e.target.value;

    setData(newcred);
    console.log(data);
    let fnid=document.getElementById("fn");
    let lnid=document.getElementById("ln");
    let fd=document.getElementById("fupDate");

    let pt=document.getElementById("pnt");
    let fp=document.getElementById("flup");

let followupDate=fd.value

    if(pt.checked){
      setData((pre)=>{
        return{
          ...pre,
          FollowUpDate:""
        }
      })
    }
    
    if(fp.checked){
      setData((pre)=>{
        return{
          ...pre,
          FollowUpDate:followupDate
        }
      })
    }

    if(firstn===true){
      
      fnid.style.display="block";
      

      // fnidval.style.display="block";
    }else{
      fnid.style.display="none";
    }
    lastn===true?lnid.style.display="block":lnid.style.display="none"
  

  switch (e.target.name) {
    case "CountryId": {
      setChecked((preData) => {
        return {
          ...preData,
          isSelCCountry: true,
          isSelCState: false,
          isSelCCity: false,
        };
      });
      getStates(e.target.value, "current");
      setCities((preData) => {
        return {
          ...preData,
          currentCities: [],
        };
      });
      setData((preData) => {
        return {
          ...preData,
          // CurrentCountryId: e.target.value,
          // CurrentStateId: "",
          // CurrentCityId: "",
        };
      });
      break;
    }
    case "StatesId": {
      setChecked((preData) => {
        return { ...preData, isSelCState: true, isSelCCity: false };
      });
      getCities(e.target.value, "current");
      setData((preData) => {
        return {
          ...preData,
          // CurrentCityId: "",
        };
      });
      break;
    }
    case "CityId": {
      setChecked((preData) => {
        return { ...preData, isSelCCity: true };
      });
      break;
    }
  }
}





const [doctors, setDoctors] = useState([]);

const drsUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetUserList`;
useEffect(()=>{
fetch(drsUrl)
.then((res)=>res.json())
.then((drs)=>{
  console.log(drs.Data); 
  setDoctors(drs.Data);
})
},[])



const [enqFor, setEnqFor] = useState([]);

const enqForUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetTreatmentList`;
useEffect(()=>{
  fetch(enqForUrl)
  .then((res)=>res.json())
  .then((enqF)=>{
    console.log(enqF.Data);
    setEnqFor(enqF.Data);
  })
},[])



const [enqSource, setEnqSource] = useState([]);

const enqSourceUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetLeadSourceList`;
useEffect(()=>{
fetch(enqSourceUrl)
.then((res)=>res.json())
.then((enqS)=>{
  console.log(enqS.Data);
  setEnqSource(enqS.Data);
})
},[])



const addEnqUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/AddNewEnquiry`;

const handleSubmit=(e)=>{
  e.preventDefault();

  fetch(addEnqUrl,{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((res)=>res.json())
  .then((result)=>{
    console.log(result);
    if(result.status===true){
      Swal.fire({
        icon:"success",
        title:"Added Successfully!",
        timer:2500
      })
      navigate("/enquiries");
    }else{
      Swal.fire({
        icon:"error",
        title:"Something went Wrong!"
      })
    }
  })
}







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
       <Card className="m-1 mt-3 ent-crd p-3">
        <Row>
            <Col>
            <p className="ent-t">Enquiry Form</p>
            <p className="note-t"><span className="req-f">Note: </span> Fields marked with * are mandatory to fill!</p>
            <hr />

          <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name <span className="req-f">*</span></Form.Label>
        <Form.Control type="text" placeholder="" name="FirstName" value={data.FirstName} className="fn" onChange={(e) => handle(e)} required/>
       <Form.Text className="req-f fnt" id="fn" style={{display:"none"}}>Use alphabets only!</Form.Text>
      </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name <span className="req-f">*</span></Form.Label>
        <Form.Control type="text" name="LastName" placeholder="" value={data.LastName} className="ln" onChange={(e) => handle(e)} required/>
       <Form.Text className="req-f fnt" id="ln" style={{display:"none"}}>Use alphabets only!</Form.Text>
        
      </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" placeholder="" name="Occupation" value={data.Occupation} onChange={(e) => handle(e)} />
        
      </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enquiry Date <span className="req-f">*</span></Form.Label>
        <Form.Control type="date" placeholder="" id="EnquiryDate" name="EnquiryDate" value={data.EnquiryDate} onChange={(e) => handle(e)} required/>
        
      </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="" name="Age" value={data.Age} onChange={(e) => handle(e)}/>
       
      </Form.Group>
                </Col>

                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date of birth <span className="req-f">*</span></Form.Label>
        <Form.Control type="date" placeholder="" name="DateOfBirth" value={data.DateOfBirth} onChange={(e) => handle(e)} required/>
       
      </Form.Group>
                </Col>

                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Select aria-label="Default select example" name="Gender" onChange={(e) => handle(e)}>
      <option></option>
      <option>Male</option>
      <option>Female</option>

    </Form.Select>
      </Form.Group>
                </Col>
            </Row>
            

            <Row>
                <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="" name="Address1" value={data.Address1} onChange={(e) => handle(e)}/>
       
      </Form.Group>
                </Col>

                <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control as="textarea" rows={2} placeholder="" name="Address2" value={data.Address2} onChange={(e) => handle(e)}/>
       
      </Form.Group>
                </Col>
            </Row>


            <Row>
            <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Select aria-label="Default select example" name="CountryId" value={data.CountryId} onChange={(e) => handle(e)}>
      <option></option>

      {
        countries.currentCountries && countries.currentCountries.map((country)=>{
            return(
              <>
              <option value={country?.CountryId} key={country?.CountryId}>{country?.CountryName}</option>
              
              </>
            )
        })
      }
     
    </Form.Select>
      </Form.Group>
                </Col>
                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Select aria-label="Default select example" name="StatesId" value={data.StatesId} onChange={(e) => handle(e)}>
      <option></option>


      {
        states.currentStates && states.currentStates.map((state)=>{
          return(
            <>
            
            <option value={state?.StateId} key={state?.StateId}>{state?.StateName}</option>
            </>
          )
        })
      }
      
    </Form.Select>
      </Form.Group>
                </Col>
                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Select aria-label="Default select example" name="CityId" value={data.CityId} onChange={(e) => handle(e)}>
      <option></option>
      {
        cities.currentCities && cities.currentCities.map((city)=>{
          return(
            <>
            
            <option value={city?.CityID} key={city?.CityID}>{city?.CityName}</option>
            </>
          )
        })
      }
    
    </Form.Select>
      </Form.Group>
                </Col>

                <Col lg={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telephone No.</Form.Label>
        <Form.Control type="tel" name="TelephoneNo" value={data.TelephoneNo} onChange={(e) => handle(e)}/>
      
      </Form.Group>
                </Col>
            </Row>


            <Row>
                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile No. <span className="req-f">*</span></Form.Label>
        <Form.Control type="tel" name="MobileNo" value={data.MobileNo} onChange={(e) => handle(e)} required/>
       
      </Form.Group>
                </Col>

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail ID<span className="req-f">*</span></Form.Label>
        <Form.Control type="email" name="Email" value={data.Email} onChange={(e) => handle(e)} required/>
      
      </Form.Group>
                </Col>
                

                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Clinic Name <span className="req-f">*</span></Form.Label>
        <Form.Select aria-label="Default select example" name="ClinicID" onChange={(e) => handle(e)} required>
      <option></option>

      {
        clinics && clinics.map((clinics)=>{
          return(
            <>
            <option value={clinics?.ClinicID} key={clinics?.ClinicID}>{clinics?.ClinicName}</option>
            
            </>
          )
        })
      }
     
    </Form.Select>
      </Form.Group>
                </Col>


                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Assign To <span className="req-f">*</span></Form.Label>
        <Form.Select aria-label="Default select example" name="AssignedToUser" value={data.AssignedToUser} onChange={(e) => handle(e)} required>
      <option></option>

      {
        doctors && doctors.map((doctors,i)=>{
          return(
            <>
          <option value={doctors?.UserID} key={i}>{doctors?.Name}</option>
            
            </>
          )
        })
      }
    
    </Form.Select>
      </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enquiry For <span className="req-f">*</span></Form.Label>
        <Form.Select aria-label="Default select example" name="EnquiryFor" value={data.EnquiryFor} onChange={(e) => handle(e)} required>
      <option></option>
      {
        enqFor && enqFor.map((enqf,i)=>{
          return(
            <>
          <option value={enqf?.TreatmentID} key={enqf?.TreatmentID}>{enqf?.Treatment}</option>
            
            </>
          )
        })
      }
     
    </Form.Select>
      </Form.Group>
                </Col>


                <Col md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enquiry Source</Form.Label>
        <Form.Select aria-label="Default select example" name="EnquirySourceID" value={data.EnquirySourceID} onChange={(e) => handle(e)}>
      <option></option>
    {

      enqSource && enqSource.map((enqs)=>{
        return(
          <>
          
          <option value={enqs?.LeadSourceID} key={enqs?.LeadSourceID}>{enqs?.LeadSource}</option>
          </>
        )
      })
    }
      
    </Form.Select>
      </Form.Group>
                </Col>


                <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Conversation Details</Form.Label>
        <Form.Control type="text" name="ConversationDetails" value={data.ConversationDetails} onChange={(e) => handle(e)}/>
      
      </Form.Group>
                </Col>

            </Row>

            <Row>
                <Col md={3}>
        <Form.Label>Patient/Follow up</Form.Label>

                <Row>
                    <Col> <Form.Check type="radio" name="IsPatient" id="pnt" aria-label="option 1" label="Patient" value="Patient" onChange={(e) => handleIsPatient(e)}/></Col>
                    <Col> <Form.Check type="radio" name="IsPatient" id="flup" aria-label="option 1" label="Follow Up" value="Follow Up" onChange={(e) => handleIsPatient(e)}/></Col>
                </Row>
                </Col>

                <Col md={3}>
        <Form.Label>Interest Level</Form.Label>

                <Row>
                    <Col> <Form.Check type="radio" name="Rating" aria-label="option 1" label="cold" value="cold" onChange={(e) => handle(e)}/></Col>
                    <Col> <Form.Check type="radio" name="Rating" aria-label="option 1" label="Warm" value="Warm" onChange={(e) => handle(e)}/></Col>
                    <Col> <Form.Check type="radio" name="Rating" aria-label="option 1" label="Hot" value="Hot" onChange={(e) => handle(e)}/></Col>
                </Row>
                </Col>
              
                <Col md={3}id="fupdate" style={{display:"none"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Followup date</Form.Label>
        <Form.Control type="date" name="FollowUpDate" id="fupDate" value={data.FollowUpDate} onChange={(e) => handle(e)}/>
      
      </Form.Group>
                </Col>
            </Row>


            <Row className="mt-5">
                <Col>
                <Button variant="" type="submit" className="ent-sub">Submit</Button>
                </Col>
                <Col>
                <Button variant="" type="reset" className="ent-res">Reset</Button>
                </Col>
            </Row>
          </Form>

          



            </Col>
        </Row>
       </Card>
      </Main>
    </Box>
        </>
    );
}


export default AddEntry;