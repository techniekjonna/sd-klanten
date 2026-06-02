import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    ophaallocatie: '',
    bestemming: '',
    datum: '',
    bericht: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Contact</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Neem contact op</h1>
          <p className="text-white/65 max-w-xl mx-auto text-sm leading-relaxed">
            Heeft u een vraag of wilt u een rit inplannen? Bel ons direct of stuur een bericht. Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: contact info */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: config.colors.text }}>Contactgegevens</h2>
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'Adres', value: config.contact.address, href: undefined },
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '🕐', label: 'Bereikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-2xl border-2 transition-all hover:shadow-sm"
                    style={{ borderColor: config.colors.light }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ backgroundColor: config.colors.light }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-sm hover:underline" style={{ color: config.colors.primary }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: config.colors.text }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA card */}
              <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: config.colors.primary }}>
                <p className="font-black text-base mb-1 text-white">Snel een taxi nodig?</p>
                <p className="text-white/55 text-xs mb-4">Bel ons direct — dag en nacht bereikbaar.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: config.colors.accent, color: config.colors.dark }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1l-2.2 2.22z" />
                  </svg>
                  {config.contact.phoneDisplay}
                </a>
              </div>

              {/* Maps embed */}
              <div className="mt-6 rounded-2xl overflow-hidden border-2" style={{ borderColor: config.colors.light }}>
                <iframe
                  title="TCS Kerkrade locatie"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5!2d6.0700!3d50.8666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b8a09f6b7c0d%3A0x1!2sLocht+75%2FA%2C+6466GT+Kerkrade!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: config.colors.text }}>Stuur een bericht</h2>
              {sent ? (
                <div className="text-center py-16 rounded-2xl border-2" style={{ borderColor: config.colors.light }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black mb-2" style={{ color: config.colors.text }}>Bericht verzonden!</h3>
                  <p className="text-gray-500 text-sm">Wij nemen zo spoedig mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={e => setForm({ ...form, naam: e.target.value })}
                        placeholder="Uw naam"
                        className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        style={{ borderColor: config.colors.light }}
                        onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                        onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Telefoon *</label>
                      <input
                        type="tel"
                        required
                        value={form.telefoon}
                        onChange={e => setForm({ ...form, telefoon: e.target.value })}
                        placeholder="06 - ..."
                        className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        style={{ borderColor: config.colors.light }}
                        onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                        onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="uw@email.nl"
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Ophaallocatie</label>
                    <input
                      type="text"
                      value={form.ophaallocatie}
                      onChange={e => setForm({ ...form, ophaallocatie: e.target.value })}
                      placeholder="Straat, huisnummer, woonplaats"
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Bestemming</label>
                    <input
                      type="text"
                      value={form.bestemming}
                      onChange={e => setForm({ ...form, bestemming: e.target.value })}
                      placeholder="Adres of luchthaven"
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Gewenste datum & tijd</label>
                    <input
                      type="datetime-local"
                      value={form.datum}
                      onChange={e => setForm({ ...form, datum: e.target.value })}
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Bericht</label>
                    <textarea
                      rows={4}
                      value={form.bericht}
                      onChange={e => setForm({ ...form, bericht: e.target.value })}
                      placeholder="Aanvullende informatie, vragen of wensen..."
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-white font-black rounded-xl uppercase tracking-widest text-sm transition-all hover:opacity-90 shadow-md"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    Bericht versturen
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Liever direct bellen?{' '}
                    <a href={`tel:${config.contact.phone}`} className="font-bold hover:underline" style={{ color: config.colors.accent }}>
                      {config.contact.phoneDisplay}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
