// Set this to the business WhatsApp number in international format, digits only,
// for example "447700900123". Leave it empty and the WhatsApp links stay hidden.
export const WHATSAPP_NUMBER = "";

export const whatsappLink = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : null;
