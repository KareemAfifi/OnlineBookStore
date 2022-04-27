import React from 'react'
//import { useContext } from 'react';
import AdminNavBar from '../../Components/Admin/AdminNavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';
import { useState,useEffect } from 'react';
import { Link } from '@mui/material';
import axios from 'axios'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputLabel } from '@mui/material';
//import { UserContext } from "../../Context/UserContext";
const AdminProfile = ({admin}) => {
 //   const { loggedUser, setLoggedUser } = useContext(UserContext);
    // const [firstname,setfirstname]=useState(loggedUser.user.firstname)
    // const [email,setemail]=useState(loggedUser.user.email)
    
    // const [lastname,setlastname]=useState(loggedUser.user.lastname)
    // const [password,setpassword]=useState(loggedUser.user.password)
    // const [repassword,setrepassword] = useState(loggedUser.user.password)
    const [firstname,setfirstname]=useState(admin.firstname)
    const [id,setid] =useState(admin._id)
    const [email,setemail]=useState(admin.email)
    
    const [lastname,setlastname]=useState(admin.lastname)
    const [password,setpassword]=useState(admin.password)
    const [repassword,setrepassword] = useState(admin.password)
    
    const onfirstnamechange=(event)=>{
        setfirstname(event.target.value)
    }

    const onemailchange=(event)=>{
        setemail(event.target.value)
    }
    const onlastnamechange=(event)=>{
        setlastname(event.target.value)
    }

    const onpasswordchange=(event)=>{
        setpassword(event.target.value)
    }

    const onrepasswordchange=(event)=>{
        setrepassword(event.target.value)
    }


    const savechanges=()=>{
        if(password !==repassword && firstname!=='' && lastname!=='' &&  email!=='' &&  password!==''){
            axios.post('http://localhost:8000/admin/updateuserprofile' , {data:{_id:id}})
            .then((res)=>{
                console.log('User Updated Successfully')
            })
            .catch((err)=>{console.log('User Was not Updated Successfully')})
        }
    }

  return (
       
<div>
      <AdminNavBar/>
      
      <Box mt={5} >
        <Typography variant='h4'>Admin Profile </Typography>
      <Container maxWidth='sm'>
        <Box sx={{ flexGrow: 1}} >
          <Grid container spacing={2}>
            <Grid item xs={6} >
            
                <TextField
                  required
                  id="First Name"
                  label="First Name"
                  defaultValue={firstname}
                  fullWidth
                  onChange={onfirstnamechange}
                />
            
            </Grid>
            <Grid item xs={6}>
            <TextField
              required
              id="LastName"
              label="LastName"
              defaultValue={lastname}
              fullWidth
              onChange={onlastnamechange}
           
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="email"
              label="Email"
             
              fullWidth
              defaultValue={email}
              onChange={onemailchange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="password"
              label="Password"
              fullWidth
              type='password'
              defaultValue={password}
              onChange={onpasswordchange}
            />

                    
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="confirmpassword"
              label="Confirm Password"
              
              fullWidth
              type='password'
              defaultValue={repassword}
              onChange={onrepasswordchange}
            />
            </Grid>

            <Grid item xs={12}>
             
            
            </Grid>
            
            
            <Grid container direction='row'   justifyContent='flex-end'>
                         <Link
                            
                            sx={{ display: 'flex', alignItems: 'center' }}
                                
                            href="/AllBooks"
                        >
                            <Button variant='contained' onClick={savechanges} >Save Changes</Button>
                        </Link>
            
            </Grid>
            
        </Grid>
      </Box>
      </Container>
     
      </Box>
      
     </div>
  )
}

export default AdminProfile
