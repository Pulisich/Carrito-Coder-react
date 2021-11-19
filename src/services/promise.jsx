const data = [{
    "id" : 1,
    "name": "Funda A58",
    "price": "800",
    "stock": "10",
    "category": "Fundas"

},
{
    "id" : 2,
    "name": "Funda A52",
    "price": "800",
    "stock": "10",
    "category": "Fundas"


}
];

const getProducts = new Promise((resolve , reject)=>{
    setTimeout(() => {
    
        resolve(data);
    reject('Ooops! ¡Algo salió mal!');
        
    }, 2000);
    
})

export default getProducts