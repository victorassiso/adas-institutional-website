export function whatsAppRedirect(phone: string) {
  const whatsappLink = 'https://wa.me/' + phone

  window.open(whatsappLink, '_blank')
}
