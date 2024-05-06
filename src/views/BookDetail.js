import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

function BookDetail() {

    const location = useLocation();
    const book = location.state.book;
   
    // const c = [];
    // localStorage.setItem("carts", JSON.stringify(c))

    const handleClick = () => {
        console.log('called');
      const cart = JSON.parse(localStorage.getItem("carts"));
      console.log(cart);
      cart.push(book);
      console.log(cart);
      localStorage.setItem("carts", JSON.stringify(cart))
    }

  return (
    <div>
      <Card sx={{ width: 250 , padding: 4 , margin: 10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={book.cover_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {book.description}
          </Typography>
          <Typography variant="body1" color="text.secondary" >
          {book.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

 
        <Box size="small" >
          50$
        </Box>
 

        <Button size="small" color="primary" sx = {{paddingLeft: 12}} onClick={handleClick}>
         Add to Cart
        </Button>

      </CardActions>
    </Card>
    </div>
  )
}

export default BookDetail
