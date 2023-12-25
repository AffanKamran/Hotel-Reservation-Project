import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {AccessTime} from "@mui/icons-material";
import Rating from './Rating';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import { styled } from '@mui/material/styles';
import theme from '../constants/theme';
import { useNavigate } from 'react-router-dom';
import InterestedIcon from "./InterestedIcon";

/*const MyStyledContainer = styled(Container)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
}));*/


const TourCard = ({tour}) =>{

    const navigate = useNavigate();

    const goToPage = () => {
        navigate('/Hotel');
    } ;

return <Grid item xs={3}>
    <ThemeProvider theme={theme}>
    <Paper elevation={3}>
        <img src={tour.image} alt='' className='img'></img>
        <Box padding={1}>
            <Typography variant='subtitle1' component='h2'>
                {tour.name}
            </Typography>

            <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <AccessTime sx={{
                    width: 12.5
                }}/>
            <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.duration}
            </Typography>
        </Box>

        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}
        marginTop={3}>
            <Rating />
            <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.rating}
            </Typography>
            <Typography variant='body3' component='p' marginLeft={1.5}>
                {tour.numberOfReviews}
            </Typography>
        </Box>
           
        <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
                From {tour.price} /-
            </Typography>
            <Button onClick={() => goToPage()}>Visit</Button>
            <InterestedIcon />
        </Box>
        </Box>
        
    </Paper>
    </ThemeProvider>
</Grid>

};

export default TourCard;