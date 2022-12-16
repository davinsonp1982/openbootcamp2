function numeroIf(numero){
  if (numero >0){
    return "es positivo"
  }
  else if (numero<0){
    return "es negativo"
  }
  else {
    return "es cero"
  }
}
//console.log (numeroIf(0))
function numeroWhile(numero){
    while (numero<3){
        numero++;
        //console.log(numero)
    }
    return numero;
}
numeroWhile(0)
function doWhile(numero){
    do 
      numero++;
      while (numero<3) 
      //console.log(numero)
    return numero;
}
doWhile(0)
for (let numeroFor=0;numeroFor<=3;numeroFor++){
        console.log(numeroFor)
      }
switch ("verano"){
  case ("verano"): console.log("la estacion es verano")
  break;
  case ("otoño") : console.log("la estacion es otoño")
  break;
  case ("primavera") :console.log ("la estacion es primavera")
  break;
  case ("inviero") : console.log ("la estacion es inviero" )
  break;
default : console.log ("no es una estacion")
}