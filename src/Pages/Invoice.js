import React,{useState,useEffect,useMemo} from 'react';
import "../Styles/Invoice.css";
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
import { Card, Col, Row ,Modal,Form, Table} from "react-bootstrap";
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

import { MdLogout } from 'react-icons/md';
import { BsPlus } from 'react-icons/bs';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import invoice from "../Assets/invoice.png";
import Swal from 'sweetalert2';
import addTmnt from "../Assets/addtmt.png";
import addColl from "../Assets/addcoln.png";


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
  


const Invoice = () => {

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

    const [patients, setPatients] = useState([]);

    const pUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/GetPatientList`;
    
    useEffect(()=>{
       fetch(pUrl)
       .then((res)=>res.json())
       .then((pnt)=>{
        console.log(pnt?.Data);
        setPatients(pnt?.Data);

       })
    },[])

    const [drs, setDrs] = useState([]);

const drUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/GetDoctorDetails/0`;
useEffect(()=>{
fetch(drUrl)
.then((res)=>res.json())
.then((getDr)=>{
  console.log(getDr.Data);
  setDrs(getDr.Data);
})
},[])

const [branchList, setBranchList] = useState([]);

const branchUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/GetClinicList/0/0`;

  useEffect(()=>{
    fetch(branchUrl)
    .then((res)=>res.json())
    .then((branch)=>{
      
      console.log(branch.Data);
      
      setBranchList(branch.Data);

    })

  },[])

  // const [patientid, setPatientid] = useState("");

  let patientid=sessionStorage.getItem("patientId");

  const [treatments, setTreatments] = useState([]);
  const tUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/GetPatientTreatment/${patientid}`;


useEffect(()=>{
    fetch(tUrl)
    .then((res)=>res.json())
    .then((treatmnt)=>{
      
      console.log(treatmnt.Data);
      
      setTreatments(treatmnt.Data);

    })

  },[patientid])
  let tPrice=sessionStorage.getItem("Price");


const [addInvoice, setAddInvoice] = useState({
  PatientID:"",
  DoctorID:"",
  ClinicID:"",
  PayDate:"",
  ObjInvoice:[]
})

 

  const handleChange=(e)=>{
    const newdata={...addInvoice};
    newdata[e.target.name]=e.target.value;
    setAddInvoice(newdata);
    console.log(newdata);
}
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
        //         a==="unChecked"?<img src="http://png.pngtree.com/png-vector/20191017/ourlarge/pngtree-cross-icon-flat-style-png-image_1811243.jpg" alt="" srcset="" width={50}/>:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
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
            add:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            edit:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            delete:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            view:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            download:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
           
          },
          {
            srNo: 2,
            role: "Doctor",
            menu:"User Settings",
            add:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            edit:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            delete:<img src="http://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
            view:<img src="http://flyclipart.com/thumb2/x-button-327024.png" width={50}/>,
            download:"unChecked"
            
          },
         
        ],
        []
      );



      const [todaysFollowup, setTodaysFollowup] = useState([]);


      let Role=sessionStorage.getItem("RoleId");

      let User=Role==="1"?0:sessionStorage.getItem("UserId")


      const tfUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/GetTodaysFollowupList/${User}`


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
  const menuUrl = `http://reviveapplication.com/ReviveAPI/Revive.svc/GetMenuAccess/${Role}`;
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

  // const [inputList, setInputList] = useState([{PatientID:"",DoctorID:"",ClinicID:"",TreatmentID:"", Cost: "" ,Discount:"",Tax:"",TotalCost:"",PayDate:""}]);


  // const [inputList, setInputList] = useState([{ TreatmentID: "", Price: "" ,Discount:"",Tax:"",Total:""}]);


  // const [selectedTreatment, setSelectedTreatment] = useState('');
  // const [treatmentCost, setTreatmentCost] = useState('');

//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];

    

//     list[index][name] = value;

//     let selectedValue = inputList[0].TreatmentID;
//     console.log(selectedValue);
//     setSelectedTreatment(selectedValue);

//     let selectedTreatmentObj = treatments.find(treatment => treatment?.TreatmentID==selectedValue);
//     console.log(selectedTreatmentObj);
//     if (selectedTreatmentObj) {
//       setTreatmentCost(selectedTreatmentObj.TreatmentCost);
//     } else {
//       setTreatmentCost('');
//     }

//     setInputList(list);
//     // console.log(inputList);
   
//     setAddPntTmt((pre)=>{
//       return{
//         ...pre,
//         ObjInvoice:inputList
//       }
//     })
// console.log("ascsd");
// console.log(patientid);

// //     inputList.map((meal,i)=>{
// //       let a=[];

// //       a.push(meal.firstName);

// // console.log(a);
// //     }) 
// // let a=document.getElementById("tmnt");
// // let t=a.options[a.selectedIndex].getAttribute('tprice');
// // console.log(t);
// // sessionStorage.setItem("Price",t)
//     console.log(addPntTmt);
// // console.log(patientid);




//   };


  // const handleRemoveClick = index => {
  //   const list = [...inputList];
  //   list.splice(index, 1);
  //   setInputList(list);
  // };

  // // handle click event of the Add button
  // const handleAddClick = () => {
  //   setInputList([...inputList, { TreatmentID: "", Price: "" ,Discount:"",Tax:"",Total:""}]);
  // };





  const [selectedTreatments, setSelectedTreatments] = useState([{ TreatmentID: '', Cost: '', Discount: '', Tax: '',TotalCost:'' }]);

  const handleTreatmentChange = (index, event) => {
    const { value } = event.target;
    const updatedTreatments = [...selectedTreatments];
    updatedTreatments[index].TreatmentID = value;
    updatedTreatments[index].Cost = treatments.find(t => t.TreatmentID == value)?.TreatmentCost || '';
    setSelectedTreatments(updatedTreatments);
    console.log(selectedTreatments);
    console.log(value);
    setAddInvoice((pre)=>{
            return{
              ...pre,
              ObjInvoice:updatedTreatments
            }
          })
console.log(addInvoice);
 
  // n.TotalAmount =addInvoice.ObjInvoice.reduce((sum, entity) => sum + parseFloat(entity.Cost), 0)
 
// console.log(totalAmount.toFixed(2));
  };

  const handleDiscountChange = (index, event) => {
    const { value } = event.target;
    const updatedTreatments = [...selectedTreatments];
    updatedTreatments[index].Discount = value;
    setSelectedTreatments(updatedTreatments);

    console.log(selectedTreatments);
    
    setAddInvoice((pre)=>{
      return{
        ...pre,
        ObjInvoice:updatedTreatments
      }
    })
console.log(addInvoice);
  };

  const handleTaxChange = (index, event) => {
    const { value } = event.target;
    const updatedTreatments = [...selectedTreatments];
    updatedTreatments[index].Tax = value;
    setSelectedTreatments(updatedTreatments);
    console.log(selectedTreatments);


    setAddInvoice((pre)=>{
      return{
        ...pre,
        ObjInvoice:updatedTreatments
      }
    })
console.log(addInvoice);
  };

  const handleTotalChange = (index, event) => {
    const { value } = event.target;
    const updatedTreatments = [...selectedTreatments];
    updatedTreatments[index].TotalCost = value;
    setSelectedTreatments(updatedTreatments);
    console.log(selectedTreatments);

    setAddInvoice((pre)=>{
      return{
        ...pre,
        ObjInvoice:updatedTreatments
      }
    })
console.log(addInvoice);
  };

  const handleAddTreatment = () => {
    setSelectedTreatments([...selectedTreatments, { TreatmentID: '', Cost: '', Discount: '', Tax: '',TotalCost:'' }]);
  };

  const handleRemoveTreatment = (index) => {
    const updatedTreatments = [...selectedTreatments];
    updatedTreatments.splice(index, 1);
    setSelectedTreatments(updatedTreatments);
  };








  let totalCost = selectedTreatments.reduce((sum, treatment) => sum + parseFloat(treatment.Cost), 0);
  let totalDiscount = selectedTreatments.reduce((sum, treatment) => sum + parseFloat(treatment.Discount), 0);
  let totalTax = selectedTreatments.reduce((sum, treatment) => sum + parseFloat(treatment.Tax), 0);
  let totaPaidAmount = selectedTreatments.reduce((sum, treatment) => sum + parseFloat(treatment.TotalCost), 0);




  const handleSubmitInvoice=(e)=>{
    e.preventDefault();

    const invoiceUrl=`http://reviveapplication.com/ReviveAPI/Revive.svc/AddNewInvoice`;


    
    fetch(invoiceUrl,{
      method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addInvoice)
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result);
      let collbtn=document.getElementById("addColl");
      if(result.Status===true){
        Swal.fire({
          icon:"success",
          title:"Added successfully!"
        })

        collbtn.style.display="block";
        
        
      }
    })
  }










  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    setAddInvoice((pre)=>{
      return{
        ...pre,
        PatientID:item.PatientID
      }
    })

    sessionStorage.setItem("patientId",item.PatientID);
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{item.Name}</span>
      </>
    )
  }




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
                              : ""
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
       <Card className="m-1 mt-3 ap-crd p-3">
        <Row>
            <Col>
            <p className="ap-t">Generate Invoice</p>
            <hr />
            {/* <Form> */}
                <Row>
                    <Col md={3}>
                    <Form.Label>Patient name</Form.Label>

<ReactSearchAutocomplete
className='autosrch'
items={patients}
onSearch={handleOnSearch}
onHover={handleOnHover}
onSelect={handleOnSelect}
onFocus={handleOnFocus}
autoFocus
formatResult={formatResult}
fuseOptions={{ keys: ["Name"] }}
// necessary, otherwise the results will be blank
resultStringKeyName="Name"
/>
                    </Col>
                    <Col md={3}>
                    <Form.Group>
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Select aria-label="Default select example" name='DoctorID' onChange={handleChange} style={{padding:"0.55rem"}}>
      <option></option>
      {
        drs.map((doctor,i)=>{
          return(
            <>
            
            <option value={doctor.UserID}>{doctor.Name}</option>
            </>
          )
        })
      }
      
    </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col md={3}>
                    <Form.Group>
                        <Form.Label>Clinic Name</Form.Label>
                        <Form.Select aria-label="Default select example" name='ClinicID' onChange={handleChange} style={{padding:"0.55rem"}}>
      <option></option>
      {
        branchList.map((branch,i)=>{
          return(
            <>
            
            <option value={branch.ClinicID}>{branch.ClinicName}</option>
            </>
          )
        })
      }
      
    </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col md={3}>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                       <Form.Control type='date' name='PayDate' onChange={handleChange} style={{padding:"0.55rem"}}/>
                    </Form.Group>
                    </Col>
                </Row>

                <p className='mt-4' style={{fontSize:"18px",fontWeight:"500",color:"#CC758E"}}>Treatment</p>

                {selectedTreatments.map((selectedTreatment, index) => {
        return (
            <>
                <Row className=''>
                    <Col md={3}>
                    <Form.Group>
                        <Form.Label>Treatment Name</Form.Label>
                        <Form.Select aria-label="Default select example" id='tmnt' name='TreatmentID' value={selectedTreatment.TreatmentID} onChange={(event) => handleTreatmentChange(index, event)}>
      <option></option>
      {treatments.map((treatment, index) => (
              <option key={index} value={treatment.TreatmentID}>
                {treatment.Treatment}
              </option>
            ))}
      
    </Form.Select>
                    </Form.Group>
                    </Col>

                    <Col md={2}>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                       <Form.Control type="text" readOnly value={selectedTreatment.Cost}/>
                    </Form.Group>
                    </Col>
                    {/* <Col md={2}>
                    <Form.Group>
                        <Form.Label>Paid Amount</Form.Label>
                       <Form.Control type='number' name='PaidAmount' value={x.PaidAmount} onChange={e => handleInputChange(e, i)}/>
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group>
                        <Form.Label>Invoice Amount</Form.Label>
                       <Form.Control type='number' name='InvoiceAmount' value={x.InvoiceAmount} onChange={e => handleInputChange(e, i)}/>
                    </Form.Group>
                    </Col> */}
                    <Col md={2}>
                    <Form.Group>
                        <Form.Label>Discount</Form.Label>
                       <Form.Control type="text" value={selectedTreatment.Discount} onChange={(event) => handleDiscountChange(index, event)}/>
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group>
                        <Form.Label>Tax</Form.Label>
                       <Form.Control type="text" value={selectedTreatment.Tax} onChange={(event) => handleTaxChange(index, event)}/>
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group>
                        <Form.Label>Total</Form.Label>
                       <Form.Control type="text" value={selectedTreatment.TotalCost} onChange={(event) => handleTotalChange(index, event)}/>
                    </Form.Group>
                    </Col>
                    <Col>
          
          {selectedTreatments.length !== 1 && <Button
            className="mr10"
            onClick={() => handleRemoveTreatment(index)}>Remove</Button>}
      </Col>
                </Row>

                </>
                )
                })}
                <Row className='mt-3'>
                    <Col>
                  <Button variant='' className='addT' onClick={handleAddTreatment}><BsPlus fontSize={30}/> Add Treatment</Button>
                    </Col>
                </Row>
            {/* </Form> */}
            <hr />
           
         <Table>
            <thead>
                <tr>
                    <th className='invTh'>Total Amount</th>
                    {/* <th className='invTh'>Invoice Amt(Current)</th>
                    <th className='invTh'>Invoice Amt(Previous)</th> */}
                    <th className='invTh'>Total Discount</th>
                    <th className='invTh'>Total Tax</th>
                    <th className='invTh'>Total Paid Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='invTh'>{totalCost.toFixed(2)}</td>
                    {/* <td className='invTh'></td>
                    <td className='invTh'></td> */}
                    <td className='invTh'>{totalDiscount.toFixed(2)}</td>
                    <td className='invTh'>{totalTax.toFixed(2)}</td>
                    <td className='invTh'>{totaPaidAmount.toFixed(2)}</td>
                </tr>
            </tbody>
         </Table>


<Row>
    <Col>
    <Button variant='' className='genIn p-2' onClick={handleSubmitInvoice}>Generate Invoice</Button>
    </Col>
    <Col>
    <Button variant='' className='addColl p-2' id='addColl' onClick={()=>navigate("/add-collection")} style={{display:"none"}}>Add Collection</Button>
    </Col>
</Row>
            </Col>
        </Row>
       </Card>
      </Main>
    </Box>
   </>
  )
}

export default Invoice