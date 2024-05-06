import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

const cart = JSON.parse(localStorage.getItem("carts"));
console.log(cart);

const handleClick = (id) => {

    const items = JSON.parse(localStorage.getItem("carts"));
    const items23 = items.filter(item => console.log(item.id));
    console.log(id);

    const items2 = items.filter(item => item.id !== id);
    console.log(items2);
    // console.log(cart2);
    // localStorage.setItem("carts", JSON.stringify(cart2));
}

function Viewcart() {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
      {Object.keys(cart).map((key) => <div key = {cart[key].id}>
        <Grid >
      <Card sx={{ width: 250}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cart[key].title}
          </Typography>
          <Typography gutterBottom variant="body3" component="div">
            +
          </Typography>
          <Typography gutterBottom variant="body3" component="div">
             -
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

 
     <Button size="small" color="primary" onClick={handleClick(cart[key].id)}>
         Remove Item
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

export default Viewcart
