export function whatsAppRedirect(phone: string) {
  let formattedPhone = phone.replace(/\D/g, '')
  formattedPhone =
    formattedPhone.substring(0, 2) === '55'
      ? formattedPhone
      : '55' + formattedPhone
  const whatsappLink = 'https://wa.me/' + formattedPhone

  window.open(whatsappLink, '_blank')
}
