import { FC, useMemo } from 'react';


interface Props {
  names : string[];
  order : "ASC" | "DES";
}


//HAY UNA RUTA EN "/extra-exercise-2" PARA PROBAR EL COMPONENTE
//SOLO DESCOMENTEN EN ./routes/Routes la ruta del componenete
export const ListNicknames : FC<Props> = ({ names, order = "DES" }) => {

  const namesOrdered = useMemo(
   ()=>{

    if ( order === "DES" ){
      return names.map(name=>name.trim()).filter(name=>!!name).sort((a,b)=>a.localeCompare(b));
    }
    return names.map(name=>name.trim()).filter(name=>!!name).sort((a,b)=>b.localeCompare(a));
   } 
  ,[ order, names ]);

  return (
    <div style={{padding:"20px"}}>
      <h5>Names Order : { order }</h5>
      <ul style={{marginTop:"10px"}}>
        
        {
          namesOrdered.map((name,index)=>(
            <li key={index}>{name}</li>
          ))
        }
      </ul>
    </div>
  )
}
