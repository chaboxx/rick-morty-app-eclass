

export const sumMatrix = ( matrix : number[] ) =>{

  let suma = 0;
  matrix.forEach(elemento=>{
    if ( elemento % 2 === 0 && elemento > 20 ){
      suma+=20;
      return;
    }
    suma+=elemento;
  });

  const getSum = ( callback : ( suma : number ) => void ) =>{
    callback(suma);
  }

  // MAS COMUN PERO NO SOLICITADO;
  // return {
  //   ejecutar
  // }

  return getSum;


}

// sumMatrix([1,2,3])(suma => console.log(suma))