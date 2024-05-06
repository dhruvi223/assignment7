import React, { useEffect } from 'react'
import { fetchbooks } from '../redux/action/bookActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [books, setBooks] = useState({});

  const dispatch = useDispatch();

  const handleClick=(b)=>{
    console.log(b);
    navigate('/bookdetail',{state:{book:b}});
      }

  useEffect(() => {
    dispatch(fetchbooks(setBooks));
  },[] );

  console.log(books);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
      {Object.keys(books).map((key) => <div key = {books[key].id}>
        <Grid >
      <Card sx={{ width: 250}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={books[key].cover_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {books[key].title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {books[key].author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

 
     <Button size="small" color="primary" onClick={()=>{handleClick(books[key])}}>
         View Book
        </Button>
 

      </CardActions>
    </Card>
    </Grid>

      </div>)}
      </Grid>
      </Box>
    </div>
  )
}

export default Home
