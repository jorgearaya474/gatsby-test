/**
 * Validate phone number
 * @param {string} phone
 * @returns
 */
const isPhoneValid = (phone) => {
  const phoneRegex = /^(\d{3}-\d{3}-\d{4}|\d{10})$/;
  return phoneRegex.test(phone);
};

export { isPhoneValid };
