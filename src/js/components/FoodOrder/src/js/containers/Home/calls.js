import fetch from "isomorphic-fetch";

export const getInitData = ( ) => {
  console.log('getInitData called');
  return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits )
        .then( res => res);
}
