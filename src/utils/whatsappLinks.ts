/**
 * WhatsApp Links Utility
 * Generates WhatsApp contact links for phone numbers
 */

export const whatsappNumbers = {
  mindcraft: '201275472765',
  didoStore: '201009744593',
  doctorsBox: '201142669070',
};

export const getWhatsAppLink = (phoneNumber: string, message: string = '') => {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}${message ? `?text=${encodedMessage}` : ''}`;
};

export const whatsappLinks = {
  mindcraft: getWhatsAppLink(whatsappNumbers.mindcraft, 'مرحباً، أريد الاستفسار عن دورات Mindcraft'),
  didoStore: getWhatsAppLink(whatsappNumbers.didoStore, 'مرحباً، أريد الاستفسار عن منتجات Dido Store'),
  doctorsBox: getWhatsAppLink(whatsappNumbers.doctorsBox, 'مرحباً، أريد الاستفسار عن Doctor\'s Box و Engineer\'s Box'),
};