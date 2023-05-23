const ganancias = [300,200,150,700,1200,1000];

function sumarGanancias(array) {
   let resultado = 0;
   array.forEach(elemento => {
       resultado += elemento
   });
   return resultado
};

function sumarGananciasConReduce(array) {
   let resultado = array.reduce((acum,num) => { 
       console.log(acum,num)
   
    return acum + num
});
      return resultado
}