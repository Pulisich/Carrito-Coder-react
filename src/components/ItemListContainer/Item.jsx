import {Link} from 'react-router-dom';


const Item = ({product}) =>{
    console.log("Item: ", product)

    

    return(
       
            <Link to={`/item/${product.id}`}>
            
                <div className="Items">
                    
                    <h1>{product.id}</h1>
                        
                    <h2>{product.name}</h2>
                        
                    <img src={product.img} alt="" srcset="" />
                    
                    <h3>{product.price}</h3>
        
                    <h3>{product.category}</h3>
        
                    <h3>{product.stock}</h3>
            
                </div>
            
            </Link>
           
       
        
    )
}

export default Item