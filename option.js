function saveOptions(e) {
	e.preventDefault();

	if (document.querySelector("#parent").checked){
		browser.storage.sync.set({choix: "responsable"});
	};
	if (document.querySelector("#eleve").checked){
		browser.storage.sync.set({choix: "eleve"});
	};
	setTimeout(function(){document.getElementById("submit").innerText="Enregistrer"}, 3000);
	document.getElementById("submit").innerText="Enregistré ✔";
};

function restoreOptions() {

	function setCurrentChoice(result) {
		if (result.choix==="responsable"){
			document.querySelector("#parent").checked=true;
			document.querySelector("#eleve").checked=false;
		};
		if (result.choix==="eleve"){
			document.querySelector("#parent").checked=false;
			document.querySelector("#eleve").checked=true;
		};
	}

	function onError(error) {
    console.log(`Error: ${error}`);
	}

	var getting = browser.storage.sync.get("choix");
	getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("#form").addEventListener("submit", saveOptions);
