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
import { Link } from '@mui/material'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const history = useHistory()

    const goBack = () => {
      history.goBack()
    }
    const [firstname,setfirstname]=useState('')
    
    const [email,setemail]=useState('')
    
    const [lastname,setlastname]=useState('')
    const [password,setpassword]=useState('')
    const [repassword,setrepassword] = useState('')
    
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
  
    const onregister=()=>{
        const newuser={
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password
        }
        axios.post('https://localhost:8000',newuser)
        .then((res)=>{

        })
        .catch((err)=>{
            console.log('Registering Failed')
        })
    }


  return (
    
        <Grid container xs={{height:'100vh'}}>
          
              <Grid item xs={6}>
                <img src={BookShelves} style={{maxWidth:"100%"},{height:"99vh"}}/>

              </Grid>

            <Grid item xs={6} mt={15} >
            
            
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                  <Container>
                    <Typography variant='h3'>Welcome to OnlineBookStore</Typography>   
                    <Typography variant='h6'>Please Fill in the Below Info</Typography>   
                    </Container>
                <Grid item xs={4} >
            
                
                <TextField
                  required
                  id="First Name"
                  label="First Name"
                  fullWidth
                  onChange={onfirstnamechange}
                />
            
                </Grid>
                <Grid item xs={4}>
                <TextField
                required
                id="LastName"
                label="LastName"
                fullWidth
                onChange={onlastnamechange}
                />
                </Grid>
            <Grid item xs={8}>
            <TextField
              required
              id="email"
              label="Email"
             onChange={onemailchange}
              fullWidth
           
              
            />
            </Grid>
            <Grid item xs={8}>
            <TextField
              required
              id="password"
              label="Password"
              fullWidth
              type='password'
              onClick={onpasswordchange}
            />

                    
            </Grid>
            <Grid item xs={8}>
            <TextField
              required
              id="confirmpassword"
              label="Confirm Password"
              onClick={onrepasswordchange}
              fullWidth
              type='password'
              
            />
            
                    <Box mt={3}>
                    <Button  variant='contained' onClick={onregister}  fullWidth >Register</Button>
                    </Box>
                      

                      <Box mt={3}>
                        <Link to="/" style={{ textDecoration: 'none'}}>
                          <Button  variant='outlined' onClick={goBack}>Back To Login ?  </Button>
                        </Link>
                      </Box>
                    </Grid>      
                  
              </Grid>
                 
            </Grid>
            
        </Grid>

  )
}

export default Login
