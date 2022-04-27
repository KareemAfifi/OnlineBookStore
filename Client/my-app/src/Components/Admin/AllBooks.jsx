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
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

import Modal from '@mui/material/Modal';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};




const AllBooks = ({list}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen=(id)=>{setOpen(true); setidviewed(id)}
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(2.0);
    const [idviewed,setidviewed] = React .useState(null)


    const [opendialog, setOpendialog] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        console.log('opening Delete')
        
        setOpendialog(true);
      };
    
      const handleClickClose = () => {
        setOpendialog(false);
      };


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
    <Box pt={5} >
                    <Grid
            container
            pr={5}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            >
        <Link to="/addbook" style={{ textDecoration: 'none'}}>
        <Button variant="contained">Add Book</Button>
        </Link>
        </Grid>       
        <Container>
            <Grid container spacing={2}>
            {list.map(book =>(
                      <Grid item md={3} key={book._id}>
                     
                              <Card sx={{ maxWidth: 350 }}>
                              <CardActionArea>
                                  <CardMedia
                                  component="img"
                                  height="250"
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
                                 <Grid container direction="row"justifyContent="space-between">
                                  <Button size="small" onClick={()=>{handleOpen(book._id)}} color="primary">
                                      View Book
                                  </Button>
                                    {/* Handling The Modal Here */}
                                    {list.filter(books => books._id===idviewed).map(displayed => (
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                       
                                        <Box sx={style}>
                                            
                                        <Grid>
                                        
                                            <Grid item>
                                                <img src={displayed.bookimage} width={"200px"} alt='Book Image'/>
                                            </Grid>

                                            
                                            <Grid item>
                                            <Typography id="modal-modal-title" variant="h4" component="h2">
                                            {displayed.bookname}
                                            </Typography>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                            {displayed.authorname} | {displayed.category} | {displayed.language}
                                            </Typography>

                                            
                                            <Typography component="legend">Book's Rating</Typography>
                                            <Rating name="read-only" value={book.rating /book.numberofrating } readOnly />
                                            </Grid>
                                       
                                        </Grid>
                                        
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        {displayed.bookdescription}
                                        </Typography>
                                        
                                        </Box>
                                       
                                    </Modal>
                                     ))}

                                   
                                    <Button size="small" color="primary"  onClick={handleClickOpen}>
                                    <DeleteIcon /> 
                                    </Button>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={opendialog}
                                            onClose={handleClickClose}
                                            aria-labelledby="responsive-dialog-title"
                                        >
                                            <DialogTitle id="responsive-dialog-title">
                                            Delete Book?
                                            </DialogTitle>
                                            <DialogContent>
                                            <DialogContentText>
                                                Are you sure you want to delete this book ?
                                            </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                            <Button autoFocus onClick={handleClickClose}>
                                                Cancel
                                            </Button>
                                            <Button onClick={()=>{deletebook(book._id)}} >
                                                Delete
                                            </Button>
                                            </DialogActions>
                                        </Dialog>
                                   </Grid>
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
