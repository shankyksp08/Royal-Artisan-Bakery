import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { business } from '../config/business';
import {
  buildEnquiryMailto,
  validateContactForm,
  type ContactErrors,
} from '../utils/contactForm';

export default function Contact() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const input = {
      name: String(f.get('name') || ''),
      email: String(f.get('email') || ''),
      phone: String(f.get('phone') || ''),
      message: String(f.get('message') || ''),
    };
    const err = validateContactForm(input);
    setErrors(err);
    if (Object.keys(err).length) {
      setSent(false);
      return;
    }
    window.location.href = buildEnquiryMailto(business.email, input);
    setSent(true);
  };

  const field =
    'mt-1 w-full rounded-xl border border-ink/20 bg-white px-4 py-3 text-ink outline-none transition focus:border-copper';

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl bg-white p-6 shadow-soft sm:p-8"
      aria-label="Contact enquiry form"
    >
      <h3 className="text-3xl font-semibold text-espresso">Send an enquiry</h3>
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium">
          Name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} />
          {errors.name && <span className="text-xs text-red-700">{errors.name}</span>}
        </label>
        <label className="text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="text-xs text-red-700">{errors.email}</span>}
        </label>
        <label className="text-sm font-medium">
          Phone (optional)
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="text-sm font-medium">
          Message
          <textarea
            name="message"
            rows={4}
            className={field}
            aria-invalid={!!errors.message}
          />
          {errors.message && <span className="text-xs text-red-700">{errors.message}</span>}
        </label>
      </div>
      <button type="submit" className="btn btn-copper mt-6 w-full sm:w-auto">
        <Send size={16} /> Send enquiry
      </button>
      <p className="mt-3 text-xs text-ink/70" aria-live="polite">
        {sent
          ? 'Your email app should now open with your message ready to send.'
          : `This opens your email app addressed to ${business.email}.`}
      </p>
    </form>
  );
}
