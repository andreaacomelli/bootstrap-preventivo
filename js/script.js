const dati = [ //creazione oggetto dati con valori undefined perché ancora non disponibili
	{
		nome: undefined,
		cognome: undefined,
		email: undefined,
    servizio: undefined,
    text: undefined,
    codice: undefined,
	},
]

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
  document.getElementById('PrezzoFinale').innerHTML = preventivo.toFixed() + " &euro;";
  return preventivo;
}

function calcoloPreventivo(servizio){
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
  console.log(preventivo)
  return preventivo;
}

const form = document.getElementById('form');
form.addEventListener('submit', datiUtente, calcoloPreventivo);

console.log(dati);