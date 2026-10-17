import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { site } from '../../data/siteContent.js';
import { services } from '../../data/services.js';

const initial = { name: '', email: '', company: '', service: '', budget: '', details: '', website: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your work email.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, like name@company.com.';
  if (!v.service) e.service = 'Please choose a service, or “Not sure yet”.';
  if (v.details.trim().length < 20) e.details = 'Please tell us a little more — at least a sentence or two (20 characters).';
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: 'idle', message: '' });
  const summaryRef = useRef(null);
  const { email, formEndpoint } = site.contact;

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    const fieldError = validate(values)[name];
    setErrors((er) => ({ ...er, [name]: fieldError }));
  };

  const buildBody = () =>
    [
      `Name: ${values.name.trim()}`,
      `Email: ${values.email.trim()}`,
      `Company or website: ${values.company.trim() || '—'}`,
      `Service: ${values.service}`,
      `Estimated budget: ${values.budget.trim() || '—'}`,
      '',
      values.details.trim(),
    ].join('\n');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ kind: 'error', message: 'Please fix the highlighted fields and try again.' });
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (formEndpoint) {
      setStatus({ kind: 'sending', message: 'Sending…' });
      try {
        const res = await fetch(formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim(),
            service: values.service,
            budget: values.budget.trim(),
            message: values.details.trim(),
          }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus({ kind: 'success', message: 'Thank you — your message was sent. You will hear back by email.' });
        setValues(initial);
      } catch (err) {
        setStatus({
          kind: 'error',
          message: `Your message could not be sent.${email ? ` Please email ${email} directly.` : ' Please try again later.'}`,
        });
        requestAnimationFrame(() => summaryRef.current?.focus());
      }
      return;
    }

    if (email) {
      const subject = encodeURIComponent(`Project enquiry from ${values.name.trim()}`);
      const body = encodeURIComponent(buildBody());
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      setStatus({
        kind: 'info',
        message: 'Your email app should open with your message ready. Nothing has been sent yet — press send in your email app to deliver it.',
      });
      return;
    }

    setStatus({
      kind: 'error',
      message: 'This form is not connected to an inbox yet. (Site owner: set CONTACT_EMAIL or FORM_ENDPOINT — see the README.)',
    });
    requestAnimationFrame(() => summaryRef.current?.focus());
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    onBlur,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });
  const err = (name) =>
    errors[name] ? (
      <p className="form__error" id={`${name}-error`}>{errors[name]}</p>
    ) : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Project enquiry">
      <div
        ref={summaryRef}
        tabIndex={-1}
        role={status.kind === 'error' ? 'alert' : 'status'}
        aria-live="polite"
        className={status.message ? `form__status form__status--${status.kind === 'sending' ? 'info' : status.kind}` : 'sr-only'}
      >
        {status.message}
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="name">Name</label>
          <input type="text" autoComplete="name" required {...field('name')} />
          {err('name')}
        </div>
        <div className="form__field">
          <label htmlFor="email">Work email</label>
          <input type="email" autoComplete="email" required {...field('email')} />
          {err('email')}
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="company">Company or website <span className="form__opt">(optional)</span></label>
        <input type="text" autoComplete="organization" {...field('company')} />
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="service">Service of interest</label>
          <select required {...field('service')}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
            <option value="Not sure yet">Not sure yet</option>
          </select>
          {err('service')}
        </div>
        <div className="form__field">
          <label htmlFor="budget">Estimated budget <span className="form__opt">(optional)</span></label>
          <input type="text" placeholder="e.g. a range, or “not decided”" {...field('budget')} />
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="details">Project details</label>
        <textarea required {...field('details')} />
        {err('details')}
      </div>

      <div className="form__hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input type="text" tabIndex={-1} autoComplete="off" {...field('website')} aria-invalid={undefined} aria-describedby={undefined} />
      </div>

      <div>
        <button type="submit" className="btn btn--dark" disabled={status.kind === 'sending'}>
          {status.kind === 'sending' ? 'Sending…' : 'Send enquiry'}
          <Send className="btn__icon" size={18} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
