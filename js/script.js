const dati = [{}] //creazione oggetto dati

const codiciValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];


function datiUtente(e) {
	//disabilito la propagazione del submit
	e.preventDefault()
  // prendo gli input dal form
	const nome = document.getElementById('inputNome').value 
	const cognome = document.getElementById('inputCognome').value 
	const email = document.getElementById('inputEmail').value 
  const servizio = document.getElementById('InputTipologia').value 
  const text = document.getElementById('inputText').value
  const codice = document.getElementById('InputCodice').value 
  

  if (!codiciValidi.includes(codice) && codice != '') {
    alert('Codice non valido!');
    return; // Interrompe l'esecuzione della funzione
  }

  //salvo gli input in un nuovo oggetto
	const nuoviDati = {
		nome: nome,
		cognome: cognome,
		email: email,
    servizio: servizio,
    text: text,
    codice: codice,
	}
  console.log(nuoviDati);
  dati.push(nuoviDati); //pusho gli input nell'oggetto dati

  const preventivo = calcoloPreventivo(servizio);
  document.getElementById('PrezzoFinale').innerHTML = preventivo.toFixed(2) + " &euro;";
  return preventivo;
}

function calcoloPreventivo(servizio, codice){ //funzione per calcolare il preventivo
  let nomeServizio;
  if (servizio === "1") {
    nomeServizio = "frontend";
  } else if (servizio === "2") {
    nomeServizio = "backend";
  } else if (servizio === "3") {
    nomeServizio = "analisi";
  }

  let preventivo 
  if(nomeServizio == "frontend"){
    preventivo = 15.30 * 10;
  }
  else if (nomeServizio == "backend"){
    preventivo = 20.50 * 10;
  }
  else if(nomeServizio =="analisi"){
    preventivo = 33.60 * 10;
  }
  
  if(codice == "YHDNU32" || "JANJC63" || "PWKCN25" || "SJDPO96" || "POCIE24"){ //calcolo sconto 
    preventivo = (preventivo * 25)/100; 
  }

  return preventivo;
}

const form = document.getElementById('form');
form.addEventListener('submit', datiUtente, calcoloPreventivo);