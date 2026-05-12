import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';

export const Rolstoeltaxi = () => (
  <Layout>
    <section
      className="py-16 text-white"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: config.colors.accent }}
          >
            ♿ Aangepast vervoer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rolstoeltaxi Sittard</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Veilig en waardig vervoer voor rolstoelgebruikers. Onze chauffeurs zijn getraind in het
            omgaan met rolstoelen en helpen u graag van deur tot deur.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: config.colors.primary }}>
              Vervoer met extra zorg
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bij Taxi Sittard begrijpen wij dat vervoer voor rolstoelgebruikers meer vraagt dan
              alleen een rit van A naar B. Wij bieden persoonlijke aandacht, geduld en een veilig
              voertuig dat is aangepast voor uw comfort.
            </p>
            <ul className="space-y-3">
              {[
                'Aangepast voertuig met rolstoelplaatsen',
                'Hulp bij instappen en uitstappen',
                'Begeleiding indien gewenst',
                'Vervoer naar ziekenhuis, specialist of dagbesteding',
                'Vaste chauffeur op aanvraag',
                'Discreet en respectvol',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: config.colors.accent }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-lg mb-4" style={{ color: config.colors.primary }}>
              Direct contact
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Voor rolstoelvervoer raden wij aan om vooraf even te bellen zodat wij alles goed
              kunnen afstemmen op uw situatie.
            </p>
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center justify-center gap-2 w-full py-4 font-bold text-white rounded-xl transition-opacity hover:opacity-90 mb-3"
              style={{ backgroundColor: config.colors.primary }}
            >
              📞 {config.contact.phoneDisplay}
            </a>
            <Link
              to={config.basePath + '/contact'}
              className="flex items-center justify-center gap-2 w-full py-4 font-bold rounded-xl border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: config.colors.accent, color: config.colors.primary }}
            >
              Online aanvragen →
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 text-center bg-white">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 max-w-lg mx-auto text-sm">
          Heeft u vragen over vergoedingen of verwijzingen via uw zorgverzekeraar?
          Neem contact op — wij helpen u verder met de juiste informatie.
        </p>
      </div>
    </section>
  </Layout>
);
