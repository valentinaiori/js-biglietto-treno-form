const bottoneCalcola = document.getElementById('create');

 bottoneCalcola.addEventListener('click',
      function() {

        // qui recupero le informazioni inserite dall'utente
        const datiPersonaliElemento = document.getElementById('person-info');
        const datiPersonali = datiPersonaliElemento.value;
        
        const kmPercorsiElemento = document.getElementById('kilometers');
        const kmPercorsi = kmPercorsiElemento.value;
    
        const etaElemento = document.getElementById('age');
        const etaPersonale = etaElemento.value;


        // da qui calcolo il costo del biglietto

        let prezzoBiglietto = kmPercorsi * 0.21;

        if (etaPersonale < 18) {
            prezzoBiglietto = prezzoBiglietto * 0.8;
        } else if (etaPersonale >= 65) {
            prezzoBiglietto = prezzoBiglietto * 0.6;
        }

        prezzoBiglietto = prezzoBiglietto.toFixed(2);

        // inserimento costo biglietto nella pagina web 

        const costoBigliettoElemento = document.getElementById('costo-biglietto')
        costoBigliettoElemento.innerHTML = prezzoBiglietto

        // inserimento nome nella pagina web

        const nomePasseggeroElemento = document.getElementById('dati-passeggero')
        nomePasseggeroElemento.innerHTML = datiPersonali
      }
)



const bottoneAnnulla = document.getElementById('cancel')
bottoneAnnulla.addEventListener('click',
      function() {

        // cancellazione costo biglietto e nome passeggero sulla pagina web
        const costoBigliettoElemento = document.getElementById('costo-biglietto')
        costoBigliettoElemento.innerHTML = ''

        const nomePasseggeroElemento = document.getElementById('dati-passeggero')
        nomePasseggeroElemento.innerHTML = ''

        

}

)

