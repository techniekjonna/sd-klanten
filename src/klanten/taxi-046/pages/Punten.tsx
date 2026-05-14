import { Layout } from '../components/Layout';
import { config } from '../config';

export const Punten = () => (
  <Layout>
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Onze Sterke Punten</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Waarom kiezen duizenden reizigers in Zuid-Limburg voor Taxi 046?
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.keyPoints.map((kp, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-transparent hover:border-black transition-all group">
              <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center text-lg font-black mb-5">
                {i + 1}
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">{kp.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{kp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black text-center mb-12 tracking-tight">Wat onze klanten zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.map(t => (
            <div key={t.id} className="bg-white rounded-xl p-7 border border-gray-200 hover:border-black transition-colors">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-bold text-sm">{t.name}</p>
                {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
