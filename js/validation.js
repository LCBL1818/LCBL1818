function validation() {
  var x = document.forms["monFormulaire"]["prenom"].value;
  if (x == "") {
    alert("Prenom doit être remplie");
    return false;
  }
  var x = document.forms["monFormulaire"]["nom"].value;
  if (x == "") {
    alert("Nom doit être remplie");
    return false;
  }

  var x = document.forms["monFormulaire"]["ddn"].value;
  if (x == "") {
    alert("Date de naissance doit être remplie");
    return false;
  }
  var x = document.forms["monFormulaire"]["codereg"].value;
  if (x == "") {
    alert("Code regional doit être remplie");
    return false;
  }
  var x = document.forms["monFormulaire"]["numtel"].value;
  if (x == "") {
    alert("Numero doit être remplie");
    return false;
  }
  var x = document.forms["monFormulaire"]["email"].value;
  if (x == "") {
    alert("Email doit être remplie");
    return false;
  }
  var x = document.forms["monFormulaire"]["presentation"].value;
  if (x == "") {
    alert("Presentation doit être remplie");
    return false;
  }
  alert("Formulaire envoyé avec succès!")
  return true;
}
