import { Layout } from '../components/Layout';
import { BookingWidget } from '../components/BookingWidget';
import { config } from '../config';

export const Bestellen = () => {
  const y = config.colors.primary;

  return (
    <Layout>
      {/* Page header */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rit Bestellen</h1>
          <p className="max-w-xl mx-auto" style={{ color: '#aaa' }}>
            Vul hieronder uw ritgegevens in. Wij nemen contact met u op voor bevestiging en definitieve prijs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-center mb-12" style={{ color: config.colors.dark }}>
            Hoe werkt het?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Vul het formulier in', desc: 'Geef uw van/naar adres, datum, tijd en aantal reizigers op.' },
              { step: '02', title: 'Wij bellen terug', desc: 'Onze medewerker neemt contact op voor bevestiging en prijs.' },
              { step: '03', title: 'Rit bevestigd', desc: 'Na uw akkoord wordt de rit ingepland in ons systeem.' },
              { step: '04', title: 'Comfortabel gereden', desc: 'Onze chauffeur staat voor u klaar op het afgesproken tijdstip.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black mx-auto mb-4"
                  style={{ backgroundColor: y, color: '#111' }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: config.colors.dark }}>{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct call */}
      <section className="py-12" style={{ backgroundColor: config.colors.dark }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-4 text-white">Liever direct bellen?</p>
          <a
            href={`tel:${config.contact.phone}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: y, color: '#111' }}
          >
            📞 {config.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </Layout>
  );
};
