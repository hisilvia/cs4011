import { Layout } from './Layout'
import { PetActs } from './PetActs'

import huntImg from '../images/hunting.jpg'
import readImg from '../images/reading.jpg'
import walkImg from '../images/walking.jpg'



export const Pets = () => {
    //const navigate = useNavigate()
    const petActs = [
        {
            title: 'Walking',
            description: 'I am taking a walk for a fun',
            imgSrc: walkImg,
        },
        {
            title: 'Reading',
            description: 'I am looking for one book',
            imgSrc: readImg,
        },
        {
            title: 'Hunting',
            description: 'I am hunting my favorate birds',
            imgSrc: huntImg,
        },
       
    ]

    return (
        <>   
            <Layout />
            <div className='textFormat'>
                {
                    petActs.map( (petact, index) => <PetActs key={index} {...petact} /> )
                }
            </div> 
        </>
    )
}