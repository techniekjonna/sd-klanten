import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

const service = config.services.find((s) => s.id === 'airport-service')!;

export const AirportService = () => {
  const ac = config.colors.accent;
  const dk = config.colors.dark;

  return (
    <Layout>
      <section className="py-16 text-white" style={{ backgroundColor: dk }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3">
            <Link to={config.basePath + '/diensten'} style={{ color: ac }} className="hover:underline">Diensten</Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">Airport service</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold">{service.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold mb-4" style={{ color: dk }}>Ontspannen naar uw vliegveld</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Wij monitoren uw vlucht zodat wij altijd op het juiste moment aanwezig zijn, ook bij vertraging. Ruime kofferruimte voor uw bagage is standaard aanwezig. U kunt rekenen op een vaste, vooraf bekende prijs zonder verrassingen.
              </p>

              <h3 className="font-extrabold text-lg mb-4" style={{ color: dk }}>Beschikbare luchthavens</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.airports!.map((airport, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-100"
                  >
                    <span className="text-xl">✈️</span>
                    <span className="text-sm font-medium text-gray-700">{airport}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: ac, color: dk }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="rounded-2xl p-7 sticky top-24"
                style={{ backgroundColor: ac + '22', border: `2px solid ${ac}` }}
              >
                <h3 className="font-extrabold text-lg mb-2" style={{ color: dk }}>
                  Airport transfer boeken
                </h3>
                <p className="text-sm text-gray-600 mb-5">
                  Bel ons 24/7 voor een vaste prijs op maat.
                </p>
                <a
                  href={`tel:${config.contact.phoneTel}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 font-bold rounded-xl text-white mb-3 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: dk }}
                >
                  📞 {config.contact.phone}
                </a>
                <Link
                  to={config.basePath + '/contact'}
                  className="flex items-center justify-center w-full py-3.5 font-bold rounded-xl border-2 transition-colors hover:bg-white text-sm"
                  style={{ borderColor: dk, color: dk }}
                >
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
