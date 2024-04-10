const dati = [{}] //creazione oggetto dati
const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]; //array con i codici sconto validi
const form = document.getElementById('form');

form.addEventListener('submit', datiUtente, calcoloPreventivo);

function datiUtente(e) {
	//disabilito la propagazione del submit
	e.preventDefault()
  // prendo gli input dal form
	const nome = document.getElementById('inputNome').value;
	const cognome = document.getElementById('inputCognome').value;
	const email = document.getElementById('inputEmail').value;
  const servizio = document.getElementById('InputTipologia').value;
  const text = document.getElementById('inputText').value;
  const codice = document.getElementById('InputCodice').value;
  
  if (!codiciValidi.includes(codice) && codice != '') { //controllo nel caso il codice non sia valido
    alert('Il codice "'  + codice + '" non è valido');
  }

  const regex = /^[a-zA-Z ]+$/; //espressione regolare per verificare che il nome e il cognome siano composti solo da questi caratteri 

  if (!regex.test(nome)) { //controllo validità nome | se i valori di regex esistono in nome ritorna false, altrimenti true 
    alert("Inserisci il tuo nome");
    return; // Interrompe l'esecuzione della funzione
  }

  if (!regex.test(cognome)) { //controllo validità cognome
    alert("Inserisci il tuo cognome");
    return;
  }

  if(email == ''){ //controllo validità email
    alert("inserisci la tua email");
    return;
  }

  //salvo gli input in un nuovo oggetto
	const InputDati = {
		nome: nome,
		cognome: cognome,
		email: email,
    servizio: servizio,
    text: text,
    codice: codice,
	}
  dati.push(InputDati); //pusho gli input nell'oggetto dati

  if(servizio != "Seleziona il tipo di lavoro"){ //controllo che il servizio inserito sia valido
    const preventivo = calcoloPreventivo(servizio, codice, codiciValidi);
    document.getElementById('PrezzoFinale').innerHTML = preventivo.toFixed(2) + " &euro;"; //print del preventivo nella pagina html
    return preventivo;
  }
  else alert("Inserisci il tipo di lavoro");
}

function calcoloPreventivo(servizio, codice, codiciValidi){ //funzione per calcolare il preventivo
  let preventivo;
  if (servizio === "1") {
    preventivo = 15.30 * 10;
  } else if (servizio === "2") {
    preventivo = 20.50 * 10;
  } else if (servizio === "3") {
    preventivo = 33.60 * 10;
  }
  
  if(codiciValidi.includes(codice)){ //calcolo sconto 
    preventivo = (preventivo * 25)/100; 
  }

  return preventivo;
}