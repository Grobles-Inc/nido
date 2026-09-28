// Carga lazy de HubSpot para reducir el impacto en la carga inicial.
// Se carga tras la primera interacción del usuario o, como respaldo, a los 3 segundos.
let hubspotLoaded = false;

function loadHubSpot() {
  if (hubspotLoaded) return;
  hubspotLoaded = true;

  ["scroll", "mousemove", "touchstart"].forEach((event) =>
    window.removeEventListener(event, loadHubSpot),
  );

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = "//js-na1.hs-scripts.com/50255506.js";
  document.head.appendChild(script);
}

["scroll", "mousemove", "touchstart"].forEach((event) =>
  window.addEventListener(event, loadHubSpot, { once: true }),
);

window.setTimeout(loadHubSpot, 3000);

export default loadHubSpot;
