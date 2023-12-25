import Rating from '@mui/material/Rating';

const Ratings = () =>{
    return <Rating name="read-only" value={4.5} precision={0.5} readOnly size='small'/>
};

export default Ratings;