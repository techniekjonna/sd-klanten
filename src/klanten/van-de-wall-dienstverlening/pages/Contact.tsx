import { useState } from 'react';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Contact = () => {
  const gold = config.colors.primary;
  const dark = '#0E0D0B';
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      {/* Page header */}
      <section className="relative py-28 text-white text-center bg-[#0E0D0B]">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: gold }}>
            Bereikbaar 24/7
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Contact</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Heeft u een vraag of wilt u een rit boeken? Wij reageren zo snel mogelijk.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 max-w-5xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: gold }}>
                  Onze gegevens
                </p>
                <div className="space-y-6">
                  {[
                    { label: 'Telefoon', value: config.contact.phone, href: `tel:${config.contact.phone}` },
                    { label: 'E-mail', value: config.contact.email, href: `mailto:${config.contact.email}` },
                    { label: 'Locatie', value: config.contact.address },
                    { label: 'Beschikbaar', value: '24 uur per dag, 7 dagen per week' },
                  ].map(({ label, value, href }) => (
                    <div key={label} className="border-l-2 border-[#B8972A]/30 pl-4">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="font-semibold text-sm hover:underline" style={{ color: dark }}>
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm" style={{ color: dark }}>{value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/31652065065"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 border border-[#B8972A] group hover:bg-[#B8972A] transition-colors"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-sm font-bold group-hover:text-[#0E0D0B] transition-colors" style={{ color: dark }}>
                    WhatsApp ons
                  </p>
                  <p className="text-xs text-gray-400 group-hover:text-[#0E0D0B]/70 transition-colors">Direct een bericht sturen</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="text-center py-20 border border-gray-100">
                  <div className="w-16 h-16 mx-auto mb-6 border-2 flex items-center justify-center text-2xl" style={{ borderColor: gold, color: gold }}>
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: dark }}>Bericht ontvangen!</h3>
                  <p className="text-gray-500 text-sm">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: gold }}>
                    Stuur een bericht
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-gray-500">Naam *</label>
                      <input
                        type="text"
                        required
                        value={form.naam}
                        onChange={(e) => setForm({ ...form, naam: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#B8972A] transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-gray-500">Telefoon</label>
                      <input
                        type="tel"
                        value={form.telefoon}
                        onChange={(e) => setForm({ ...form, telefoon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#B8972A] transition-colors"
                        placeholder="+31 6 ..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-gray-500">E-mailadres *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#B8972A] transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider mb-2 text-gray-500">Bericht *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.bericht}
                      onChange={(e) => setForm({ ...form, bericht: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 text-sm outline-none focus:border-[#B8972A] transition-colors resize-none"
                      placeholder="Uw vraag of ritdetails..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-bold uppercase tracking-widest text-[#0E0D0B] transition-opacity hover:opacity-90"
                    style={{ backgroundColor: gold }}
                  >
                    Verstuur Bericht →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * Verplichte velden. Uw gegevens worden nooit gedeeld.
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
