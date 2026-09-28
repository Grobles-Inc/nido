import { WHATSAPP_NUMBER } from "../consts";

/**
 * Construye la URL de WhatsApp con el mensaje pre-llenado.
 */
export function buildWhatsAppUrl(lines: string[]): string {
  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Abre WhatsApp en una pestaña nueva con el mensaje enviado.
 */
export function openWhatsApp(lines: string[]): boolean {
  return Boolean(window.open(buildWhatsAppUrl(lines), "_blank", "noopener,noreferrer"));
}

/**
 * Muestra/oculta un mensaje de estado asociado a un formulario.
 */
export function setFormFeedback(
  element: HTMLElement | null,
  message: string,
  success: boolean,
  timeout = 8000,
): void {
  if (!element) return;
  element.textContent = message;
  element.style.backgroundColor = success ? "#34d399" : "#f87171";
  element.classList.remove("hidden");
  element.classList.toggle("text-white", true);
  window.setTimeout(() => element.classList.add("hidden"), timeout);
}
