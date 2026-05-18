import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const [form, setForm] = useState({ naam: '', telefoon: '', email: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="py-20 text-white" style={{ backgroundColor: config.colors.primary }}>
        <div className="container mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: config.colors.accent }}>Contact</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mt-3 mb-4">Neem contact op</h1>
          <p className="text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
            Heeft u een vraag of wilt u een rit inplannen? Bel ons direct of stuur een bericht.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: config.colors.text }}>Contactgegevens</h2>
              <div className="space-y-5">
                {[
                  { icon: '📞', label: 'Telefoon', value: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                  { icon: '✉️', label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                  { icon: '📍', label: 'Regio', value: config.contact.address, href: undefined },
                  { icon: '🕐', label: 'Bereikbaar', value: '24 uur per dag, 7 dagen per week', href: undefined },
                ].map(item => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-2xl border-2"
                    style={{ borderColor: config.colors.light }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ backgroundColor: config.colors.light }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-sm hover:underline" style={{ color: config.colors.primary }}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: config.colors.text }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl p-6" style={{ backgroundColor: config.colors.light }}>
                <p className="font-black text-lg mb-2" style={{ color: config.colors.text }}>Snel een taxi nodig?</p>
                <p className="text-gray-500 text-sm mb-4">Bel ons direct — wij zijn dag en nacht bereikbaar.</p>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  📞 {config.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-black mb-6" style={{ color: config.colors.text }}>Stuur een bericht</h2>
              {sent ? (
                <div className="text-center py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    <span className="text-white">✓</span>
                  </div>
                  <h3 className="text-xl font-black mb-2" style={{ color: config.colors.text }}>Bericht verzonden!</h3>
                  <p className="text-gray-500 text-sm">Wij nemen zo spoedig mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: 'naam', label: 'Naam *', type: 'text', placeholder: 'Voor- en achternaam', required: true },
                    { key: 'telefoon', label: 'Telefoon *', type: 'tel', placeholder: '06 - ...', required: true },
                    { key: 'email', label: 'E-mail', type: 'email', placeholder: 'uw@email.nl', required: false },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                        style={{ borderColor: config.colors.light }}
                        onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                        onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-1.5 text-gray-500">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={e => setForm({ ...form, bericht: e.target.value })}
                      placeholder="Uw vraag of opmerking..."
                      className="w-full border-2 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                      style={{ borderColor: config.colors.light }}
                      onFocus={e => (e.currentTarget.style.borderColor = config.colors.primary)}
                      onBlur={e => (e.currentTarget.style.borderColor = config.colors.light)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-xl uppercase tracking-widest text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: config.colors.primary }}
                  >
                    Bericht versturen
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
