//import { useNavigate } from 'react-router-dom'
//import catSrc from './cat.jpg'
//import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { Layout } from './Layout'
import meSrc from '../images/aboutMe.jpg'
import './Page.css'

export const AboutMe = () => {
    //const navigate = useNavigate()

    return (
        <>
            <Layout />
            <div className='textFormat'>
                <Typography variant="h3" gutterBottom>
                    Silvia
                </Typography>
                <img src={meSrc} alt="me" width="400" height="400"  />
                <Typography variant="body2" gutterBottom>
                    I enjoy coding and want to be a software developer or a data analyst,<br></br> 
                    so I chose computer science as my major. I would like to learn more <br></br> 
                    about how to build a complex website so that I will have more<br></br> 
                    opportunities to get a job after graduation. 
                    JavaScript is a popular <br></br>
                    technology to build a nice website, thus I registered for this course.<br></br>

                    I like traveling and trying new food in different places.<br></br>

                    When I am not studying, I cook food for my family and spend time<br></br>
                    with my senior cat, Lilly.
                </Typography>
            </div>
        </>
    )
}