import { PageInfo } from './PageType'

interface PageViewProps extends PageInfo {}

export const PageView = ({
    id,
    name,
    type,
    moves,
    pictureURL,
    height,
    weight,
}: PageViewProps) => {
    return (
        <div style={{border:1, borderStyle:'solid',margin: '50px'}}>
            
            <div>
                {name}
            </div>
            <div>
                {type.slice(0,6).join(',')}
            </div>
            <div>
                {moves.slice(0,5).join(',')}
            </div>
            <div>
                <img height={50} width={50} src={pictureURL} alt=''/>
            </div> 
            <div>
                {height}
            </div>
            <div>
                {weight}
            </div>
        </div>
    )
}