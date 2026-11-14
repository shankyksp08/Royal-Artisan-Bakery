export type ContactField = 'name' | 'email' | 'message';
export type ContactErrors = Partial<Record<ContactField, string>>;

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function validateContactForm(input: ContactInput): ContactErrors {
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const errors: ContactErrors = {};

  if (name.length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (message.length < 10) {
    errors.message = 'Please write at least 10 characters.';
  }

  return errors;
}

export function buildEnquiryMailto(recipientEmail: string, input: ContactInput): string {
  const name = input.name.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();
  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\n${message}`;
  return `mailto:${recipientEmail}?subject=${encodeURIComponent('Website enquiry from ' + name)}&body=${encodeURIComponent(body)}`;
}
