import { Grid, Typography } from '@mui/material'
import { maxWidth } from '@mui/system'
import React, { useState } from 'react'
import BookShelves from '../../Images/BookShelves.jpg'
import { TextField } from '@mui/material'
import { useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@material-ui/core/Box'
import { Button } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const Login = () => {

  const history = useHistory()
  const [email,Setemail]=React.useState('')
  const [Password,Setpassword]=React.useState('')
  
  const emailchange=(e)=>{
    Setemail(e.target.value)

  }
  const passwordchange=(e)=>{
    Setpassword(e.target.value)
    
  }
  const onlogin=()=>{
    
    const entry={
      "email":email,
      "password":Password
    }
    console.log(entry)
    axios.post('http://localhost:8000/',entry)
    .then((res)=>{
      console.log(res )
      if(res.data.success==false){
        console.log('Error Occured Email or Password is incorrect')
      }
      else{
            if(res.data.isadmin===true){
              history.push("/admin")
            }
            else
              {
                history.push("/user")
              }
        }
      
      
    })
    .catch((err)=>{
      console.log('Error Occured on Login')
    })
  }

  return (
    
        <Grid container xs={{height:'100vh'}}>
          
              <Grid item xs={6}>
                <img src={BookShelves} style={{maxWidth:"100%"},{height:"99vh"}}/>

              </Grid>

            <Grid item xs={6} mt={30} >
            
            
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Typography variant='h3' >Welcome to OnlineBookStore</Typography>
                  <Grid item xs={8} > 
                    <TextField
                        required
                        id="email"
                        label="email"
                        defaultValue=""
                        fullWidth
                        onChange={emailchange}
                      />   
                   </Grid> 
                    <Grid item xs={8}  >
                      <TextField
                        required
                        id="Password"
                        label="Password"
                        defaultValue=""
                        fullWidth
                        type='password'
                        onChange={passwordchange}
                      />
                      <Box mt={3}>
                      
                      <Button  variant='contained' onClick={onlogin}  fullWidth >Log In</Button>
                      
                      </Box>
                      <p>Don't Have an Account ? </p>
                      <Link to="/Register" style={{ textDecoration: 'none'}}>
                      <Button  variant='outlined'   >Register Here</Button>
                      </Link>
                    </Grid>      
                  
              </Grid>
                 
            </Grid>
            
        </Grid>

  )
}

export default Login
