// Business WhatsApp number in international format, digits only, for wa.me links.
export const WHATSAPP_NUMBER = "447587595536";

// The same number as it should appear on the page.
export const WHATSAPP_DISPLAY = "+44 7587595536";

export const whatsappLink = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : null;
