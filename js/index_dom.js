import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import contactFormValidations from "./validaciones_formulario.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  userDeviceInfo("user-device");
  contactFormValidations();
});

networkStatus();
