import React, { useState, useMemo, useEffect } from "react";
import "../../Styles/Menu/User Settings/AddDoctor.css";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import "../../Components/Sidebar.css";
import logo from "../../Assets/logo.png";
import {
  HelpOutlineOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
// import Divider from '@mui/material/Divider';
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar, Tooltip } from "@mui/material";
import { Card, Col, Row, Modal, Form, Table, Tabs, Tab } from "react-bootstrap";
import MaterialReactTable from "material-react-table";
// import "../../index.css";
import { Delete, Edit } from "@mui/icons-material";
import { FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import dashIcon from "../../Assets/Dashboard.png";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Collapse from "@mui/material/Collapse";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import menuIcon from "../../Assets/Vector.png";
import gearIcon from "../../Assets/gear.png";
import userGearIcon from "../../Assets/userGear.png";
import cliGearIcon from "../../Assets/cset.png";
import lp from "../../Assets/lp.png";
import report from "../../Assets/reports.png";
import calendar from "../../Assets/calendar.png";
import axios from "axios";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function AddDoctor() {
  const [addDoctor, setAddDoctor] = useState({
    UserID:"",
    FirstName: "",
    LastName: "",
    Gender: "",
    BirthDate: "",
    Nationality: "Indian",
    ClinicID: "",
    MobileNo: "",
    Email: "",
    Address1: "",
    Address2: "",
    CityId: "",
    StatesId: "",
    CountryId: "",
    Pincode: "",
    PersonalPhoto: "",
    PanCard: "",
    PanCardPhoto: "",
    IndemnityProofNumber: "",
    IndemnityProofPhoto: "",
    AadharCardNumber: "",
    AadharCardPhoto: "",
    RegistrationNumber: "",
    RegistrationPhoto: "",
    JoiningDate: "",
    
    DoctorType: "",
   
   
    InTime: "",
    OutTime: "",
    Username: "",
    Passwords: "",
    Actions: "",
    CreatedBy: "1",
    IPAddress: "",
  });
  const navigate = useNavigate();
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

let newuID=sessionStorage.getItem("newUserId");


  const [profInfo, setProfInfo] = useState([])

  const profInfoUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetDocProfInfo/${newuID}`;


  useEffect(()=>{
fetch(profInfoUrl)
.then((res)=>res.json())
.then((pinfo)=>{
  console.log(pinfo.Data);
  setProfInfo(pinfo.Data);
})
  },[profInfo])
  const columns = useMemo(
    () => [
      {
        accessorKey: "srNo",
        header: "Sr No.",
        muiTableHeadCellFilterTextFieldProps: { placeholder: "Sr.No." },
      },
      {
        accessorKey: "DoctorDegree",
        header: "Degree",
      },
      {
        accessorKey: "BoardOrUniversity",
        header: "University/College/Board",
      },
      //   {
      //     accessorKey: "specialty",
      //     header: "Specialty In?",
      //   },
      {
        accessorKey: "DegreeProofPhoto",
        header: "Degree Proof",
      },

      {
        accessorKey: "Specialty",
        header: "Speciality in",
      },

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

  const [data, setData] = useState(
    [
      {
        srNo: 1,
        degree: "Doctor of Medicine (MD)",
        university: "K. J. Somaiya Medical College & Research Centre",
        specialty: "implant",
        degreeProof: (
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            width={50}
          />
        ),
        // view:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
        // download:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
      },
      {
        srNo: 2,
        degree: "BDS",
        university: "K. J. Somaiya Medical College & Research Centre",
        specialty: "Crowning",
        degreeProof: (
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            width={50}
          />
        ),
        // view:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>,
        // download:<img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png" width={50}/>
      },
      //   {
      //     srNo: 2,
      //     Photo: (
      //       <img
      //         src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      //         width={150}
      //         height={120}
      //       />
      //     ),
      //     Name: "Dr. Bhavik Tutwala",
      //     mobileNumber: "95261663263",
      //     emailID: "bhaviktutwala@gmail.com",
      //     regDate: "16/02/2023",
      //     // view:<img src="https://flyclipart.com/thumb2/x-button-327024.png" width={50}/>,
      //     // download:"unChecked"
      //   },
    ],
    []
  );

  const [previewUrl62, setPreviewUrl62] = useState("");
  //   const [image662, setImage662] = useState(null);

  const [degProof, setDegProof] = useState(null);

  const [doc1, setDoc1] = useState(null);
  const [doc2, setDoc2] = useState(null);
  const [doc3, setDoc3] = useState(null);
  const [doc4, setDoc4] = useState(null);
  const [doc5, setDoc5] = useState(null);

  const handleFile662 = (e) => {
    // setImage662(e);
    setPreviewUrl62(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata
    setDegProof(e);
  };
  const [currentTab, setCurrentTab] = useState(0);

  const [previewUrl1, setPreviewUrl1] = useState("");
  const [previewUrl2, setPreviewUrl2] = useState("");
  const [previewUrl3, setPreviewUrl3] = useState("");
  const [previewUrl4, setPreviewUrl4] = useState("");
  const [previewUrl5, setPreviewUrl5] = useState("");

  const handleFile1 = (e) => {
    // setImage662(e);
    setPreviewUrl1(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata

    setDoc1(e);
  };

  const handleFile2 = (e) => {
    // setImage662(e);
    setPreviewUrl2(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata
    setDoc2(e);
  };

  const handleFile3 = (e) => {
    // setImage662(e);
    setPreviewUrl3(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata
    setDoc3(e);
  };

  const handleFile4 = (e) => {
    // setImage662(e);
    setPreviewUrl4(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata

    setDoc4(e);
  };

  const handleFile5 = (e) => {
    // setImage662(e);
    setPreviewUrl5(URL.createObjectURL(e));
    console.log(e);
    // setstate662(file);      to add in formdata

    setDoc5(e);
  };

  // -------------------------------------------------------formdata upload-----------------------------------------------------

  const [menuList, setMenuList] = useState([]);

  const menuUrl = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetMenuAccess/1`;
  useEffect(() => {
    fetch(menuUrl)
      .then((res) => res.json())
      .then((list) => {
        console.log(list.Data);
        setMenuList(list.Data);
      });
  }, []);

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
    let url =
      "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetCountryList";
    let country = await (await fetch(url)).json();
    console.log(country.Data.slice(0, 2));
    setCountries({
      ...countries,
      currentCountries: country.Data,
      // permCountries: country.Data.slice(0, 2),
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = (e) => {
    const newdata = { ...addDoctor };
    newdata[e.target.name] = e.target.value;
    setAddDoctor(newdata);
    console.log(newdata);

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
  };



  const handleSubmit=(e)=>{
    e.preventDefault();


    const submitUrl=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/AddNewUser`;

    fetch(submitUrl,{
      method:"POST",
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addDoctor)
    })
    .then((res)=>res.json())
    .then((drRes)=>{
      console.log(drRes);
    })
  }

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

  const [drType, setDrType] = useState([]);

  const drTypeUrl = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetDoctorType`;
  useEffect(() => {
    fetch(drTypeUrl)
      .then((res) => res.json())
      .then((dtype) => {
        console.log(dtype.Data);
        setDrType(dtype.Data);
      });
  }, []);

  const [branch, setBranch] = useState([]);
  const branchUrl = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetClinicList/0/0`;

  useEffect(() => {
    fetch(branchUrl)
      .then((res) => res.json())
      .then((branchRes) => {
        console.log(branchRes.Data);
        setBranch(branchRes.Data);
      });
  }, []);

  const [degree, setDegree] = useState([]);

  const degUrl = `https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/GetDoctorDegree`;

  useEffect(() => {
    fetch(degUrl)
      .then((res) => res.json())
      .then((degRes) => {
        console.log(degRes.Data);
        setDegree(degRes.Data);
      });
  }, []);

  const submitDoc1 = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("stream", doc1);

    await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let imgPath = res.data.data[0].imageurl;
        setAddDoctor((pre) => {
          return { ...pre, PersonalPhoto: imgPath };
        });

        console.log(addDoctor);
      });
  };

  const submitDoc2 = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("stream", doc2);

    await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let imgPath = res.data.data[0].imageurl;
        setAddDoctor((pre) => {
          return { ...pre, AadharCardPhoto: imgPath };
        });

        console.log(addDoctor);
      });
  };

  const submitDoc3 = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("stream", doc3);

    await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let imgPath = res.data.data[0].imageurl;
        setAddDoctor((pre) => {
          return { ...pre, PanCardPhoto: imgPath };
        });

        console.log(addDoctor);
      });
  };

  const submitDoc4 = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("stream", doc4);

    await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let imgPath = res.data.data[0].imageurl;
        setAddDoctor((pre) => {
          return { ...pre, RegistrationPhoto: imgPath };
        });

        console.log(addDoctor);
      });
  };

  const submitDoc5 = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("stream", doc5);

    await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        let imgPath = res.data.data[0].imageurl;
        setAddDoctor((pre) => {
          return { ...pre, IndemnityProofPhoto: imgPath };
        });

        console.log(addDoctor);
      });
  };





  const [addDocTab2, setAddDocTab2] = useState({
    DoctorDegree:"",
    DegreeProofPhoto:"",
    BoardOrUniversity:"",
    Specialty:[]
  })

  const handlecheck = (e) => {
    const { value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      setAddDocTab2((pre) => {
        return {
          ...pre,
          Specialty: [...pre.Specialty, value],
        };
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setAddDocTab2((pre) => {
        return {
          ...pre,
          Specialty: pre.Specialty.filter((e) => e !== value),
        };
      });
    }

    console.log(addDocTab2);
  };

  const handleTab2Change=(e)=>{
    const changedData = { ...addDocTab2 };
    changedData[e.target.name] = e.target.value;
    setAddDocTab2(changedData);
    console.log(changedData);

  }


  const submitTab2= async (e)=>{
    e.preventDefault();

    const fd=new FormData();

    if(degProof){

      fd.append("stream",degProof);

      await axios
      .post(
        "https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/UploadMultiplePhotos",
        fd,
        {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "Upload Progress:" +
                Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
                "%"
            );
          },
        }
      ).then((res)=>{
        console.log(res.data.data);
        let degP=res.data.data[0]?.imageurl;
        setAddDocTab2((pre)=>{
          return{
            ...pre,
            DegreeProofPhoto:degP
          }
        })
      })



      





      const Tab2Url=`https://orthosquare.infintrixindia.com/ReviveAPI/Revive.svc/AddDocProfInfo`;


      fetch(Tab2Url,{
        method:"POST",
          headers:{
            Accept: "application/json",
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(addDocTab2)
      })
      .then((res)=>res.json())
      .then((tab2Res)=>{
        console.log(tab2Res);
        let userid=tab2Res.UserID;

        sessionStorage.setItem("newUserId",userid);
        setAddDoctor((pre)=>{
          return{
            ...pre,
            UserID:userid
            
          }
        })
      })
    }
    else{
      alert("please select degree proof file!")
    }




    



  }

  return (
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
              <MenuItem
                onClick={() => {
                  navigate("/");
                }}
                disableRipple
              >
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
                <ListItemButton onClick={() => navigate("/today-fup")}>
                  <ListItemIcon>
                    {menuList[0]?.MenuName === "Dashboard" && (
                      <img src={dashIcon} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={menuList[0]?.MenuName} />
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
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/branch")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[1]?.MenuName} />
                      </ListItemButton>

                      <ListItemButton sx={{ pl: 4 }} onClick={handleTreatClick}>
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[8]?.MenuName} />
                        {open3 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>

                      <Collapse in={open3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => navigate("/s&l")}
                          >
                            <ListItemIcon>
                              <img src="" alt="" srcset="" />
                            </ListItemIcon>

                            <ListItemText primary={menuList[20]?.MenuName} />
                          </ListItemButton>

                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => navigate("/wl")}
                          >
                            <ListItemIcon>
                              <img src="" alt="" srcset="" />
                            </ListItemIcon>

                            <ListItemText primary={menuList[21]?.MenuName} />
                          </ListItemButton>

                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => navigate("/ht")}
                          >
                            <ListItemIcon>
                              <img src="" alt="" srcset="" />
                            </ListItemIcon>

                            <ListItemText primary={menuList[22]?.MenuName} />
                          </ListItemButton>

                          <ListItemButton
                            sx={{ pl: 4 }}
                            onClick={() => navigate("/homeopathy")}
                          >
                            <ListItemIcon>
                              <img src="" alt="" srcset="" />
                            </ListItemIcon>

                            <ListItemText primary={menuList[23]?.MenuName} />
                          </ListItemButton>
                        </List>
                      </Collapse>

                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/lead-srcs")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[9]?.MenuName} />
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
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/role")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[10]?.MenuName} />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/access-perm")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[11]?.MenuName} />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/dr-reg")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[12]?.MenuName} />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => navigate("/emp-reg")}
                      >
                        <ListItemIcon>
                          <img src="" alt="" srcset="" />
                        </ListItemIcon>

                        <ListItemText primary={menuList[13]?.MenuName} />
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
                <ListItemText primary={menuList[5]?.MenuName} />
                {open5 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/enquiries")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[14]?.MenuName} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/fup-entries")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[15]?.MenuName} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/patients")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[16]?.MenuName} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/up-leads")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[17]?.MenuName} />
                  </ListItemButton>
                </List>
              </Collapse>

              <ListItemButton
                onClick={() => {
                  handleApClick();
                  navigate("/appmnt");
                }}
              >
                <ListItemIcon>
                  <img src={calendar} alt="" srcset="" />
                </ListItemIcon>
                <ListItemText primary={menuList[6]?.MenuName} />
                {open6 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open6} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/book-apmt")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[18]?.MenuName} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    onClick={() => navigate("/view-apmt")}
                  >
                    <ListItemIcon>
                      <img src="" alt="" srcset="" />
                    </ListItemIcon>

                    <ListItemText primary={menuList[19]?.MenuName} />
                  </ListItemButton>
                </List>
              </Collapse>
              {/* </ListItem> */}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={report} alt="" srcset="" />
                  </ListItemIcon>
                  <ListItemText primary={menuList[7]?.MenuName} />
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
          <Card className="m-1 mt-3 add-dr-crd p-3">
            <Row>
              <Col>
                <p className="add-dr-t">Add New Doctor</p>
                <hr />

                {/* <Row className="p-5">
                <Col>
                <p className="text-center hpathy-nodata mb-1">No Data available</p>
                <p className="text-center hpathy-add-t">Click on add new to add treatments</p>

                    <Row className="text-center mt-5">
                        <Col>
                        
                <Button variant="" className="hpathy-btn">Add New</Button>
                        </Col>
                    </Row>
                </Col>
            </Row> */}

                <Tabs
                  variant="pills"
                  //   defaultActiveKey={currentTab}
                  activeKey={currentTab}
                  id="justify-tab-example"
                  className="mb-3"
                  justify
                >
                  <Tab eventKey={0} title="Personal Information">
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Doctor Type</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="DoctorType"
                              onChange={handleChange}
                            >
                              <option></option>
                              {drType.map((dt) => {
                                return (
                                  <>
                                    <option
                                      value={dt?.DoctorTypeID}
                                      key={dt?.DoctorTypeID}
                                    >
                                      {dt?.DoctorType}
                                    </option>
                                  </>
                                );
                              })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Branch</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="ClinicID"
                              onChange={handleChange}
                            >
                              <option></option>
                              {branch.map((b) => {
                                return (
                                  <>
                                    <option value={b.ClinicID} key={b.ClinicID}>
                                      {b.ClinicName}
                                    </option>
                                  </>
                                );
                              })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="FirstName"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="LastName"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                              type="tel"
                              placeholder=""
                              name="MobileNo"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder=""
                              name="Email"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder=""
                              name="Age"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder=""
                              name="BirthDate"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="Gender"
                              onChange={handleChange}
                            >
                              <option></option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder=""
                              name="JoiningDate"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              placeholder=""
                              name="Address1"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              placeholder=""
                              name="Address2"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="CountryId"
                              onChange={handleChange}
                            >
                              <option></option>

                              {countries.currentCountries &&
                                countries.currentCountries.map((country) => {
                                  return (
                                    <>
                                      <option
                                        value={country?.CountryId}
                                        key={country?.CountryId}
                                      >
                                        {country?.CountryName}
                                      </option>
                                    </>
                                  );
                                })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>State</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="StatesId"
                              onChange={handleChange}
                            >
                              <option></option>

                              {states.currentStates &&
                                states.currentStates.map((state) => {
                                  return (
                                    <>
                                      <option
                                        value={state?.StateId}
                                        key={state?.StateId}
                                      >
                                        {state?.StateName}
                                      </option>
                                    </>
                                  );
                                })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>City</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="CityId"
                              onChange={handleChange}
                            >
                              <option></option>
                              {cities.currentCities &&
                                cities.currentCities.map((city) => {
                                  return (
                                    <>
                                      <option
                                        value={city?.CityID}
                                        key={city?.CityID}
                                      >
                                        {city?.CityName}
                                      </option>
                                    </>
                                  );
                                })}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Area Pin Code</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder=""
                              name="Pincode"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>In Time</Form.Label>
                            <Form.Control
                              type="time"
                              placeholder=""
                              name="InTime"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Out Time</Form.Label>
                            <Form.Control
                              type="time"
                              placeholder=""
                              name="OutTime"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="Username"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={3}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder=""
                              name="Passwords"
                              onChange={handleChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="text-center mt-4">
                        <Col>
                          <Button
                            variant=""
                            className="dr-nxt-btn"
                            onClick={() => setCurrentTab((prev) => prev + 1)}
                          >
                            Next
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Tab>
                  <Tab eventKey={1} title="Professional Information">
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Degree</Form.Label>
                            <Form.Select
                              aria-label="Default select example"
                              name="DoctorDegree"
                              onChange={handleTab2Change}
                            >
                              <option></option>
                              {degree.map((d) => {
                                return (
                                  <>
                                    <option value={d.DegreeID} key={d.DegreeID}>
                                      {d.Name}
                                    </option>
                                  </>
                                );
                              })}
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>University/College/Board</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder=""
                              name="BoardOrUniversity"
                              onChange={handleTab2Change}
                            />
                          </Form.Group>
                        </Col>

                        <Col lg={4}>
                          <Row>
                            <Col lg={8}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Upload Degree Proof</Form.Label>
                                <Form.Control
                                  type="file"
                                  placeholder=""
                                  //   ref={fileInput62}
                                  name="DegreeProofPhoto"
                                  onChange={(e) =>
                                    handleFile662(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              {previewUrl62 ? (
                                previewUrl62 && (
                                  <img
                                    src={previewUrl62}
                                    alt="image"
                                    className="img-s mt-4"
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <img
                                  src="https://wallpaperaccess.com/full/1285952.jpg"
                                  alt="image"
                                  className="img-s mt-4"
                                  width={150}
                                  height={150}
                                />
                              )}
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col lg={6}>
                          <Form.Label>Specialty In?</Form.Label>
                          <Row>
                            <Col>
                              <Form.Check
                                aria-label="option 1"
                                name="Specialty"
                                value="Skin"
                                label="Skin"
                                onChange={handlecheck}
                              />
                            </Col>

                            <Col>
                              <Form.Check
                                aria-label="option 1"
                                name="Specialty"
                                value="Hair"
                                label="Hair"
                                onChange={handlecheck}
                              />
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                              <Form.Check
                                aria-label="option 1"
                                name="Specialty"
                                value="weight loss"
                                label="weight loss"
                                onChange={handlecheck}
                              />
                            </Col>

                            <Col>
                              <Form.Check
                                aria-label="option 1"
                                name="Specialty"
                                
                                value="fat loss"
                                label="fat loss"

                                onChange={handlecheck}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row className="text-center mt-4">
                        <Col>
                          <Button variant="" className="add-dr-btn" onClick={submitTab2}>
                            ADD
                          </Button>
                        </Col>
                      </Row>
                    </Form>

                    <Row className="mt-4">
                      <Col>
                        <MaterialReactTable
                          columns={columns}
                          data={profInfo}
                          initialState={{ showColumnFilters: true }} //show filters by default
                          muiTableHeadCellFilterTextFieldProps={{
                            sx: { m: "0.5rem 0", width: "100%" },
                            variant: "outlined",
                          }}
                          enableEditing
                          // onEditingRowSave={handleSaveRowEdits}
                          // onEditingRowCancel={handleCancelRowEdits}
                          renderRowActions={({ row, table }) => (
                            <Box sx={{ display: "flex", gap: "1rem" }}>
                              <Tooltip arrow placement="left" title="Edit">
                                <IconButton
                                  className="edit-btn"
                                  onClick={() => table.setEditingRow(row)}
                                >
                                  <FaRegEdit />
                                </IconButton>
                              </Tooltip>
                              <Tooltip arrow placement="right" title="Delete">
                                <IconButton
                                  color="error"
                                  // onClick={() => handleDeleteRow(row)}
                                >
                                  <HiOutlineTrash />
                                </IconButton>
                              </Tooltip>
                            </Box>
                          )}
                          //   renderTopToolbarCustomActions={() => (
                          //     <>
                          //     <Button
                          //       // color="secondary"
                          //       className="dr-btn"
                          //       onClick={() => {
                          //         // setCreateModalOpen(true);
                          //         // handleShowAddRole();
                          //         navigate("/add-dr")

                          //       }}
                          //       variant="contained"
                          //     >
                          //      Add New Doctor
                          //     </Button>

                          //     <Button
                          //     // color="secondary"
                          //     className="dr-up-btn mx-2"
                          //     onClick={() => {
                          //     // setCreateModalOpen(true);
                          //     // handleShowAddRole();
                          //     // navigate("/add-access")

                          //     }}
                          //     variant="contained"
                          //     >
                          //     Upload Excel
                          //     </Button>
                          //     </>

                          //   )}

                          positionActionsColumn="last"
                        />
                      </Col>
                    </Row>

                    <Row className="mt-4">
                      <Col>
                        <Button
                          variant=""
                          className="add-dr-back"
                          onClick={() => {
                            setCurrentTab((prev) => prev - 1);
                          }}
                        >
                          Back
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          variant=""
                          className="dr-nxt-btn"
                          onClick={() => {
                            setCurrentTab((prev) => prev + 1);
                          }}
                        >
                          Next
                        </Button>
                      </Col>
                    </Row>
                  </Tab>

                  <Tab eventKey={2} title="Documents">
                    <Form>
                      <Row className="m-1 mt-4">
                        <Col xs={12} lg={6}>
                          <Row>
                            <Col lg={5}>
                              <Form.Label className="">
                                Personal Photo
                              </Form.Label>
                              <Form.Group
                                controlId="formFile"
                                className="mt-3 pt-2"
                              >
                                <Form.Control
                                  type="file"
                                  name="PersonalPhoto"
                                  onChange={(e) =>
                                    handleFile1(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              <Row className="mt-4 pt-2">
                                <Col>
                                  <Button
                                    variant=""
                                    className="up-doc mt-4 mx-0 mx-lg-5"
                                    onClick={submitDoc1}
                                    // disabled={!doc1}
                                  >
                                    Upload Image
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={3}>
                              {previewUrl1 ? (
                                previewUrl1 && (
                                  <img
                                    src={previewUrl1}
                                    alt="image"
                                    className="img-s mt-4"
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <Row className="mt-2">
                                  <Col>
                                    <img
                                      src="https://wallpaperaccess.com/full/1285952.jpg"
                                      alt="image"
                                      className="img-s mt-5"
                                      // style={{float:"left"}}

                                      width={150}
                                      height={150}
                                    />
                                  </Col>
                                </Row>
                              )}
                            </Col>
                          </Row>

                          <Row className="mt-5 mb-0">
                            <Col lg={2}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Pan Card</Form.Label>
                              </Form.Group>
                            </Col>
                            <Col lg={9}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                  type="number"
                                  name="PanCard"
                                  className=""
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={5}>
                              <Form.Group controlId="formFile" className="mt-1">
                                <Form.Label className="">
                                  Pan card image
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="PanCardPhoto"
                                  onChange={(e) =>
                                    handleFile3(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              <Row className="mt-1 pt-2">
                                <Col>
                                  <Button
                                    variant=""
                                    className="up-doc mt-4 mx-0 mx-lg-5"
                                    onClick={submitDoc3}
                                  >
                                    Upload Image
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={3}>
                              {previewUrl3 ? (
                                previewUrl3 && (
                                  <img
                                    src={previewUrl3}
                                    alt="image"
                                    className="img-s mt-4"
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <Row className="mt-2">
                                  <Col>
                                    <img
                                      src="https://wallpaperaccess.com/full/1285952.jpg"
                                      alt="image"
                                      className="img-s mt-4"
                                      // style={{float:"left"}}

                                      width={150}
                                      height={150}
                                    />
                                  </Col>
                                </Row>
                              )}
                            </Col>
                          </Row>

                          <Row className="mt-5 mb-0">
                            <Col lg={2}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label style={{ whiteSpace: "nowrap" }}>
                                  Indemnity Proof
                                </Form.Label>
                              </Form.Group>
                            </Col>
                            <Col lg={9}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                  type="number"
                                  name="IndemnityProofNumber"
                                  className="iproof"
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={5}>
                              <Form.Group controlId="formFile" className="mt-1">
                                <Form.Label className="">
                                  Indemnity proof image
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="IndemnityProofPhoto"
                                  onChange={(e) =>
                                    handleFile5(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              <Row className="mt-1 pt-2">
                                <Col>
                                  <Button
                                    variant=""
                                    className="up-doc mt-4 mx-0 mx-lg-5"
                                    onClick={submitDoc5}
                                  >
                                    Upload Image
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={3}>
                              {previewUrl5 ? (
                                previewUrl5 && (
                                  <img
                                    src={previewUrl5}
                                    alt="image"
                                    className="img-s mt-2"
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <Row className="mt-2">
                                  <Col>
                                    <img
                                      src="https://wallpaperaccess.com/full/1285952.jpg"
                                      alt="image"
                                      className="img-s mt-4"
                                      // style={{float:"left"}}

                                      width={150}
                                      height={150}
                                    />
                                  </Col>
                                </Row>
                              )}
                            </Col>
                          </Row>
                        </Col>

                        <Col xs={12} lg={6}>
                          <Row>
                            <Col lg={2}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label style={{ whiteSpace: "nowrap" }}>
                                  Aadhaar Card
                                </Form.Label>
                              </Form.Group>
                            </Col>
                            <Col lg={10}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                  type="number"
                                  name="AadharCardNumber"
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={5}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="doc-lbl">
                                  Aadhaar card image
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="AadharCardPhoto"
                                  onChange={(e) =>
                                    handleFile2(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              <Row className="mt-2">
                                <Col>
                                  <Button
                                    variant=""
                                    className="up-doc mt-4 mx-0 mx-lg-5"
                                    onClick={submitDoc2}
                                  >
                                    Upload Image
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={3}>
                              {previewUrl2 ? (
                                previewUrl2 && (
                                  <img
                                    src={previewUrl2}
                                    alt="image"
                                    className="img-s mt-4"
                                    style={{ float: "right" }}
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <img
                                  src="https://wallpaperaccess.com/full/1285952.jpg"
                                  alt="image"
                                  className="img-s mt-4"
                                  style={{ float: "right" }}
                                  width={150}
                                  height={150}
                                />
                              )}
                            </Col>
                          </Row>

                          <Row className="mt-4">
                            <Col lg={2}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Registration</Form.Label>
                              </Form.Group>
                            </Col>
                            <Col lg={10}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control
                                  type="number"
                                  name="RegistrationNumber"
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={5}>
                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label className="doc-lbl">
                                  Certificate image
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  name="RegistrationPhoto"
                                  onChange={(e) =>
                                    handleFile4(e.target.files[0])
                                  }
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={4}>
                              <Row className="mt-2">
                                <Col>
                                  <Button
                                    variant=""
                                    className="up-doc mt-4 mx-0 mx-lg-5"
                                    onClick={submitDoc4}
                                  >
                                    Upload Image
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={3}>
                              {previewUrl4 ? (
                                previewUrl4 && (
                                  <img
                                    src={previewUrl4}
                                    alt="image"
                                    className="img-s mt-4"
                                    style={{ float: "right" }}
                                    width={150}
                                    height={150}
                                  />
                                )
                              ) : (
                                <img
                                  src="https://wallpaperaccess.com/full/1285952.jpg"
                                  alt="image"
                                  className="img-s mt-4"
                                  style={{ float: "right" }}
                                  width={150}
                                  height={150}
                                />
                              )}
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row className="mt-5">
                        <Col>
                          <Button
                            variant=""
                            className="add-dr-back"
                            onClick={() => {
                              setCurrentTab((prev) => prev - 1);
                            }}
                          >
                            Back
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant=""
                            className="add-dr-btn"
                            onClick={handleSubmit}
                          >
                            Submit
                          </Button>
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

export default AddDoctor;
