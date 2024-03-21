

import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

import { Link } from 'react-router-dom'
import { Layout } from './Layout'
import loongImg from '../images/loong.png'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <Paper style={{ textAlign: 'left', padding: '20px' }}>
             <div>
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => navigate('/aboutMe')}>About Me</Button>
                <Button onClick={() => navigate('/pets')}>Pets</Button>  
             </div>

             <img src={loongImg} alt="img1" width="600" height="400"  /> 
              
             <h2 className='textFormat'>Welcome to Loong Year!</h2>
        </Paper>
    )
}