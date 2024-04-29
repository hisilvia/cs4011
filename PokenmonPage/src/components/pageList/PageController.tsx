import { useState, useEffect, useCallback } from 'react'
import { PageView } from './PageView'
import axios from 'axios'
import { TextField, Button } from '@mui/material'
import { PageInfo } from './PageType'

interface PageInfoFromApi {
    id: number
    name: string
    types: {
        type: {
            name: string
        }
    }[]
    moves: {
        move: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
    }
    height: number
    weight: number
}

export const PageController = () => {
    const [inputValue, setInputValue] = useState('')

    const [pageInfo, setPageInfo] = useState<PageInfo>()

    const handleInputChange = (event:any) => {
        const value = event.target.value;
        // Check if the input is numeric or empty (to allow backspace functionality)
        if (value === '' || /^[0-9\b]+$/.test(value)) {
          setInputValue(value);
        }else alert('Invalid number/sign you typed is: '+ value)
    };
    

    const fetchPageInfo = useCallback( async(inputValue: string) => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
            //console.log(data)
   
            const pageInfoList: PageInfoFromApi = data
          
            //console.log('pageInfoList', pageInfoList)
            
            const newPageInfo: PageInfo = {
                
                    id: `${pageInfoList.id}`,
                    name: pageInfoList.name,
                    type: pageInfoList.types.map(typesObj =>typesObj.type.name),
                    moves: pageInfoList.moves.map(moveObj => moveObj.move.name),
                    pictureURL: pageInfoList.sprites.front_default,
                    height: `${pageInfoList.height}`,
                    weight: `${pageInfoList.weight}`,
                      
            }
    
            console.log(newPageInfo)
            setPageInfo(newPageInfo)
        } catch (e) {
           setPageInfo(undefined)
        }
       
    }, [])

    useEffect(() => {
        fetchPageInfo('1')

         //so [fetchPageInfo] replace to []
        // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [])

    return (
        <div>
            <TextField value={inputValue} onChange={handleInputChange} type='number'
                 
            />

            <Button 
                onClick={() => {
                    fetchPageInfo(inputValue)
                }}
                variant="contained"
                color="primary"
                style={{ marginTop: '10px' }}
            >
                Search
            </Button>
            <h3>Current value: {inputValue} </h3>

            This is where page goes
            <br />
            {
                pageInfo ? 
                    <PageView {...pageInfo}
                        // name={pageInfo.name} 
                        // type={pageInfo.type} 
                        // moves={pageInfo.moves}  
                        // pictureURL={pageInfo.pictureURL} 
                        // height={pageInfo.height}
                        // weight={pageInfo.weight}               
                    /> 
                    : 'Not Found'
            }

        </div>
    )
}