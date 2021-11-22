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


},
{
    "id" : 3,
    "name": "Funda A52 Siliconada",
    "price": "1200",
    "stock": "10",
    "category": "Fundas"


},
{
    "id" : 4,
    "name": "Funda A20S Marvel",
    "price": "1000",
    "stock": "10",
    "category": "Fundas"


},
{
    "id" : 5,
    "name": "Funda Iphone Original",
    "price": "1500",
    "stock": "20",
    "category": "Fundas"


},
{
    "id" : 6,
    "name": "Cargador tipo 'C' turbo",
    "price": "1200",
    "stock": "6",
    "category": "Cargadores"


},
{
    "id" : 7,
    "name": "Vidrio templado estándar",
    "price": "220",
    "stock": "200",
    "category": "Templados"


},
{
    "id" : 8,
    "name": "Vidrio templado 5D",
    "price": "770",
    "stock": "150",
    "category": "Templados"


},
{
    "id" : 9,
    "name": "Auriculares Bluetooth",
    "price": "3500",
    "stock": "5",
    "category": "Auriculares"


},
{
    "id" : 10,
    "name": "Pop-Sockets",
    "price": "600",
    "stock": "30",
    "category": "Accesorios"


},
{
    "id" : 11,
    "name": "Auriculares Unicornio",
    "price": "3500",
    "stock": "1",
    "category": "Auriculares"


}
];

const getProducts = new Promise((resolve , reject)=>{
    setTimeout(() => {
    
        resolve(data);
    reject('Ooops! ¡Algo salió mal!');
        
    }, 2000);
    
});

export default getProducts