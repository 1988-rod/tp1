let voto_a_favor = 0
let voto_en_contra = 0
let continuar = true

while (continuar){
    
    let votacion = prompt("Ley de Protección Ambiental y Desarrollo Sostenible.\nIngrese su voto : \n1- Votar a favor : \n2- Votar en contra : \nTerminar la votación : 'esc' ");                                                                                         
    //! Despues de varios dias de intentos para hacer funcionar el prompt correctamente,busque la solucion y tuve que entender al null, y la variable true para desp asignarle false y salir del bucle.  
    if (votacion === null ){
        continuar = false
        
    }else if (votacion === "1"){
        voto_a_favor += 1

    }else if (votacion === "2"){
        voto_en_contra += 1

    }else if (votacion === "salir" ){
        continuar = false
        
    }else{
        alert("datos inválidos")
    }  
 }
console.log("Resultado final de votos a favor: "+ voto_a_favor)
console.log("Resultado final de votos en contra:"+ voto_en_contra)  



