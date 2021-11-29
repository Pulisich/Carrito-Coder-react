import {Link} from 'react-router-dom';


const Item = ({product}) =>{
    console.log("Item: ", product)

    

    return(
       
            <Link to={`/item/${product.id}`}>
            
                <div className="Items">
                    
                        
                    <h2>{product.name}</h2>
                        
                    <img src={product.img} alt="Foto Producto"/>
                    
                    
            
                </div>
            
            </Link>
           
       
        
    )
}

export default Item