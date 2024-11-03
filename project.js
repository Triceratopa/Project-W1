const navbar= document.getElementById('navbar')

window.addEventListener('scroll',function(){
    const scrollPosition=0
    if(window.scrollY>scrollPosition){
        navbar.classList.add('scrolled');

    }else{
        navbar.classList.remove('scrolled');
     
    }
})

// il codice sotto l'ho trovato e copiato, ovviamento l'ho messo come commento 
//perchè l'ho capito in parte e sarei capace di replicarlo solo in minima parte
// Stefano lo lascio qui come commento per magari riprovarci tra qualche tempo quando 
// JS magari mi diventa un po' più familiare


//window.onload = function() {
    // Seleziona tutti i path delle lettere "M" nel tuo SVG
    //var paths = document.querySelectorAll('svg path');
    
    // Numero di iterazioni in cui solo un path è disattivato
   // var maxIterations = 40;
    
    // Funzione per disattivare i path uno alla volta
  //  function deactivatePaths() {
   // var deactivatedCount = 0;
   // var deactivatedIndexes = []; // Array per memorizzare gli indici dei path disattivati
    //var interval = setInterval(function() {
        // Disattiva un solo path che non è già stato disattivato
      //  var randomIndex;
      //  do {
          //  randomIndex = Math.floor(Math.random() * paths.length);
       // } while (deactivatedIndexes.includes(randomIndex));
        
      //   paths[randomIndex].style.display = 'none';
      //   deactivatedCount++;
       //  deactivatedIndexes.push(randomIndex);
    
        // Se abbiamo disattivato il massimo numero di path, riattivali tutti uno alla volta
       //  if (deactivatedCount === maxIterations) {
     //        clearInterval(interval); // Interrompi il ciclo
      //       reactivatePaths(deactivatedIndexes); // Riattiva tutti i path uno alla volta
     //    }
  //   }, 100);
   //  }
    
    // Funzione per riattivare i path uno alla volta
  //   function reactivatePaths(indexes) {
   //  var reactivateCount = 0;
  //   var interval = setInterval(function() {
   //      if (reactivateCount < indexes.length) {
     //        var index = indexes[reactivateCount];
     //        paths[index].style.display = 'block';
    //         reactivateCount++;
       //   } else {
       //       clearInterval(interval); // Interrompi il ciclo
       //       // Avvia nuovamente il ciclo per disattivare i path
       //       setTimeout(deactivatePaths, 100);
        //  }
   //   }, 100);
    //  }
    
    // Avvia il ciclo per disattivare i path
    //  deactivatePaths();
    //  }//