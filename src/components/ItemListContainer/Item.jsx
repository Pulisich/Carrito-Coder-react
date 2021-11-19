import { Fragment } from "react"
import ItemCount from "./ItemCount"

const Item = (props) =>{
    console.log(props)

    return(
        <Fragment>
            <h1>Funda Samsung A58</h1>
            <ItemCount stock= {10} initial={1}></ItemCount>
        </Fragment>
        
    )
}

export default Item