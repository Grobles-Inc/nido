function loadHubSpot() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = "hs-script-loader";
  script.async = true;
  script.defer = true;
  script.src = "//js-na1.hs-scripts.com/50255506.js";
  document.head.appendChild(script);

  // Clean up the event listeners once the script is loaded
  window.removeEventListener("scroll", loadHubSpot);
  window.removeEventListener("mousemove", loadHubSpot);
  window.removeEventListener("touchstart", loadHubSpot);
}

// Add event listeners to load the script on user interaction
window.addEventListener("scroll", loadHubSpot, { once: true });
window.addEventListener("mousemove", loadHubSpot, { once: true });
window.addEventListener("touchstart", loadHubSpot, { once: true });
