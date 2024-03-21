//import { Link } from 'react-router-dom'
//import TextField from '@mui/material/TextField'

import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'



export const Navbar = () => {
    const navigate = useNavigate()

    return (
        <Paper style={{ textAlign: 'left', padding: '20px' }}>
             <div>
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={() => navigate('/aboutMe')}>About Me</Button>
                <Button onClick={() => navigate('/pets')}>Pets</Button>         
             </div>

        </Paper>
    )
}


// export const Navbar = () => {
//     return (
//         <>
//             <Link to="/">
//                 <button>Home</button>
//             </Link>

//             <Link to="/aboutMe">
//                 <button>About Me</button>
//             </Link>

//             <Link to="/pets">
//                 <button>Pets</button>
//             </Link>
//         </>
//     )
// }