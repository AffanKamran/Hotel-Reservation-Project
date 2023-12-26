import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Details from '../components/Details'

const Hotel = () => (

<Container sx={{marginY: 15}}>
<Typography 
        variant='h4'
        component='h2'
        marginTop={5}
        marginBottom={3}
        >
          <Details/>
          <h1>Page Pending</h1>
        </Typography>

</Container>
);

export default Hotel;





