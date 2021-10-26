 
 /* Saber o numero total de alunos

 Percorrer de 0 número total de alunos...
 
    Se o número for 0, escrever "Zero"
    Se o número for impar, escrever ....
    Se o número for par, escrever ....
*/
 let numeroAlunos = 6;
    
  for(let contador = 0; contador < numeroAlunos; contador++) {
     console.log(contador) 

   if(contador == 0) {
       console.log(contador + "; Zero"); //Concatenando      
   } else if (contador % 2 == 1) {
       console.log( `${contador}: impar`); //interpolação
    } else {
      console.log("Par")
   } 
  }