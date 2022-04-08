import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';
import bookcover from '../../Images/BookCover.jpg';
import axios from 'axios';

const AllBooks = ({list}) => {
    const booktest=[{
        "_id":11223,
      "bookname":'BookTets',
      "Bookauthor":'Ahmed',
      'isbn':111122,
      'catogory':"thriller"
    }]
  

    const deletebook =(id)=>{
        console.log("deleteign book")
        axios.delete('http://localhost:8000/admin/deletebook',{data:{"_id":id}})
        .then((result)=>{
            console.log('Dleeted Succesfulyl')
        })
        .catch((err)=>{
            console.log('Error Occured')
        })
    }
    return (
    <Box pt={5} pl={15}>
                    <Grid
            container
            pr={5}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            >
        <Button variant="contained">Add Book</Button>
        </Grid>       
        <Container>
            <Grid container spacing={2}>
            {booktest.map(book =>(
                      <Grid item md={3}>
                     
                              <Card sx={{ maxWidth: 350 }}>
                              <CardActionArea>
                                  <CardMedia
                                  component="img"
                                  height="200"
                                  image={book.bookimage}
                                  alt="Book Image"
                                  />
                                  <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                      {book.bookname}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                  {book.authorname}
                                  </Typography>
                                  </CardContent>
                              </CardActionArea>
                              <CardActions >
                                  <Button size="small" color="primary">
                                  View Book
                                  </Button>
                                  <Button size="small" color="primary"  onClick={()=>{deletebook(book._id)}}>
                                  <DeleteIcon /> 
                                  </Button>
                                  
                              </CardActions>
                              </Card> 
                    
                     </Grid>
                     ))} 
                 
            </Grid>
        
        </Container>
    </Box>
    
  )
}

export default AllBooks
