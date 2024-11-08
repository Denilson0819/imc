let pesso= parseFloat (prompt("informe o seu peso"));
let altura= parseFloat (prompt("informe sua altura"));

  if (isNaN(peso) || isNaN(altura)|| peso<=0|| altura <=0){
       document.write ("por favor informe valores valido!!!");
  } else{
    let IMC= (peso/(altura*altura))
    document.write("o seu IMC é igual a: ")
    if (IMC>=18 && IMC<24.9){
    document.write("peso ideal")
    } else if(IMC>25 && IMC <28){
        
    }
  }