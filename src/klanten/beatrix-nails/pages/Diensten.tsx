import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { config } from '../config';
import type { NailCategory, NailServiceGroup } from '../types';

interface GroupProps {
  group: NailServiceGroup;
  primary: string;
  lightPink: string;
}

const ServiceGroup = ({ group, primary, lightPink }: GroupProps) => {
  const [open, setOpen] = useState(true);

  if (!group.collapsible) {
    return (
      <div>
        {group.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-3 border-b last:border-b-0"
            style={{ borderColor: lightPink }}
          >
            <span className="text-gray-700 text-sm">{item.name}</span>
            <span className="text-sm font-medium ml-4 flex-shrink-0" style={{ color: primary }}>
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left font-semibold text-sm rounded-xl px-4 transition-colors hover:opacity-90"
        style={{ backgroundColor: lightPink, color: config.colors.text }}
      >
        <span>{group.groupName}</span>
        <span className="text-lg transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ⌃
        </span>
      </button>
      {open && (
        <div className="px-4 pt-1">
          {group.items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
              style={{ borderColor: lightPink }}
            >
              <span className="text-gray-600 text-sm pl-2">{item.name}</span>
              <span className="text-sm font-medium ml-4 flex-shrink-0" style={{ color: primary }}>
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface CategoryPanelProps {
  category: NailCategory;
  primary: string;
  lightPink: string;
  text: string;
}

const CategoryPanel = ({ category, primary, lightPink, text }: CategoryPanelProps) => (
  <div className="bg-white rounded-3xl shadow-sm border-2 overflow-hidden" style={{ borderColor: lightPink }}>
    <div className="px-6 py-5 border-b" style={{ borderColor: lightPink, backgroundColor: lightPink }}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>
        <div>
          <h3 className="text-lg font-bold" style={{ color: text }}>{category.name}</h3>
          <p className="text-xs" style={{ color: primary }}>
            {category.count} {category.count === 1 ? 'categorie' : 'categorieën'}
          </p>
        </div>
      </div>
    </div>
    <div className="px-6 py-4 space-y-2">
      {category.groups.map((group, i) => (
        <ServiceGroup key={i} group={group} primary={primary} lightPink={lightPink} />
      ))}
    </div>
  </div>
);

export const Diensten = () => {
  const p = config.colors.primary;
  const [activeTab, setActiveTab] = useState<string>(config.serviceCategories[0].id);

  const activeCategory = config.serviceCategories.find((c) => c.id === activeTab)!;

  return (
    <Layout>
      {/* Page header */}
      <section
        className="relative py-24 text-white text-center overflow-hidden"
        style={{ backgroundColor: config.colors.text }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${config.about.galleryImages[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-60">Beatrix Nails & Beauty</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Onze Diensten</h1>
          <p className="max-w-xl mx-auto opacity-70">
            Professionele behandelingen voor perfecte nagels. Bekijk ons volledige aanbod hieronder.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <section className="py-8 bg-white border-b" style={{ borderColor: config.colors.primaryLight }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {config.serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="px-6 py-3 rounded-full text-sm font-semibold transition-all"
                style={
                  activeTab === cat.id
                    ? { backgroundColor: p, color: 'white' }
                    : { backgroundColor: config.colors.primaryLight, color: config.colors.text }
                }
              >
                {cat.icon} {cat.name} <span className="opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active category detail */}
      <section className="py-16" style={{ backgroundColor: '#fdf7fa' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <CategoryPanel
            category={activeCategory}
            primary={p}
            lightPink={config.colors.primaryLight}
            text={config.colors.text}
          />
        </div>
      </section>

      {/* All categories overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: config.colors.text }}>
            Volledig Overzicht
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {config.serviceCategories.map((cat) => (
              <CategoryPanel
                key={cat.id}
                category={cat}
                primary={p}
                lightPink={config.colors.primaryLight}
                text={config.colors.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: config.colors.lightPink }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: config.colors.text }}>
            Klaar voor een afspraak?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-gray-600">
            Neem contact op of bel direct voor een afspraak bij Beatrix Nails & Beauty in Sittard.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={config.basePath + '/contact'}
              className="inline-block px-10 py-4 font-semibold text-white rounded-full transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: p }}
            >
              Afspraak Maken
            </Link>
            <a
              href={`tel:${config.contact.phone}`}
              className="inline-block px-10 py-4 font-semibold rounded-full border-2 transition-colors hover:text-white hover:border-transparent"
              style={{ color: p, borderColor: p, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = p; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = p; }}
            >
              📞 Bel {config.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
