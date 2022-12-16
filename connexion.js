
function onError(error) {
	console.log(`Error: ${error}`);
}

function onGot(item) {
	var choix = "eleve";
	if (item.choix) {
		choix = item.choix;
	}
	if (document.URL.includes("cas.eclat-bfc.fr/login")) {
		document.getElementsByClassName("btn btn--naked js-wayftoggle btn--lg btn--as-link btn--full")[0].click();
		document.getElementById("idp-EDU").click();
		document.getElementById("button-submit").click();
	};

	if (document.URL.includes("educonnect.education.gouv.fr/idp/profile/SAML2/POST/SSO")) {
		document.getElementById("bouton_"+choix).click();
		document.getElementById("bouton_valider").click();
	};
}

var getting = browser.storage.sync.get("choix");
getting.then(onGot, onError);