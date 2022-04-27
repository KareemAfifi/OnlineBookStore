import React from 'react'
import AdminNavBar from '../../Components/Admin/AdminNavBar'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';
  import { useState,useEffect } from 'react';
  import axios from 'axios'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom' 
const AddBook = () => {

  const [bookname,setbookname]=useState('')
  const [bookauthor,setbookauthor]=useState('')
  const [isbn,setisbn]=useState('')
  const [category,setcategory]=useState('')
  const [language,setlanguage] = useState('')
  const [bookdescription, setbookdescription]=useState('')
  const [file, setSelectedFile] = useState('');
	const [isFilePicked, setIsFilePicked] = useState(false)
//CHANGING PARAMETERS

const history = useHistory()

const goBack = () => {
  history.goBack()
}
  const booknamechange=((e)=>{
    setbookname(e.target.value)
  });

  const bookauthorchange=((e)=>{
    setbookauthor(e.target.value)
  });

  const isbnchange=((e)=>{
    setisbn(e.target.value)
  });

  const categorychange=((e)=>{
    setcategory(e.target.value)
  });

  const languagechange=((e)=>{
    setlanguage(e.target.value)
  });
  const bookdescriptionchange=((e)=>{
    setbookdescription(e.target.value)
  });


  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};
  

	const handleSubmission =async (event) => {
    event.preventDefault()
     var book= {
        "bookname":bookname,
        "authorname":bookauthor,
        "isbn":isbn,
        "category":category,
        "language":language,
        "bookimage":file.name ,
        "bookdescription":bookdescription
     }
    console.log('Button Pressed')
    console.log(book)
    console.log(file.name)
    
    axios.post('http://localhost:8000/admin/addbook', book)
      .then((res)=>{
        console.log('Book Added Succesfully')
        goBack()
    })
    .catch((err)=>{console.log('Book was not Added Successfully')})

  };
  //--------------------------------
  return (
    
<div>
      <AdminNavBar/>
      <form encType ='multipart/form-data'>
      <Box mt={5} >
        <Typography variant='h4'>Add Book </Typography>
      <Container maxWidth='sm'>
        <Box sx={{ flexGrow: 1}} >
          <Grid container spacing={2}>
            <Grid item xs={6} >
            
                <TextField
                  required
                  id="Book's Name"
                  label="Book's Name"
                  defaultValue=""
                  fullWidth
                  onChange={booknamechange}
                />
            
            </Grid>
            <Grid item xs={6}>
            <TextField
              required
              id="Book's Author"
              label="Book's Author"
              defaultValue=""
              fullWidth
              onChange={bookauthorchange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="ISBN"
              label="ISBN"
              defaultValue=""
              fullWidth
              onChange={isbnchange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="Category"
              label="Category"
              defaultValue=""
              fullWidth
              onChange={categorychange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="Language"
              label="Language"
              defaultValue=""
              fullWidth
              onChange={languagechange}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              required
              id="bookdescription"
              label="Book Description"
              multiline
              rows={4}
              defaultValue=""
              fullWidth
              onChange={bookdescriptionchange}
              
            />
            </Grid>

            <Grid item xs={12}>
             
            <input type="file" name='bookimage'  onChange={changeHandler}  />
			{isFilePicked ? (
				<div>
					<p>Filename: {file.name}</p>
					<p>Filetype: {file.type}</p>
			
				</div>
			) : (
				<p>Select a file For The Book Cover</p>
			)}
          
            </Grid>
            
            
            <Grid container direction='row'   justifyContent='flex-end'>
              <Link to="/admin"  style={{ textDecoration: 'none'}}>
                <Button variant='contained' onClick={handleSubmission}>Add Book</Button>
              </Link>
            </Grid>
            
        </Grid>
      </Box>
      </Container>
     
      </Box>
      </form>
     </div>
  )
}

export default AddBook
