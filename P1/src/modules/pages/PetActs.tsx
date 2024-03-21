import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export interface PetActsPros {
    title: string
    description: string
    imgSrc: string
}

export const PetActs = ({
    title, description, imgSrc
}: PetActsPros) => {

    return (
        <Paper>
            <div className='textFormat' >
                <Typography variant="h5" gutterBottom>
                        {title}
                </Typography>  
                <img  src={imgSrc} alt="img" width="550" height="400"  />
                <div className='desFormat'>{description}</div>
                
            </div>
            <Divider /> 
        </Paper>

        
        
    )
}