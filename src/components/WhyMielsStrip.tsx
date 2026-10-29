export default function WhyMielsStrip() {
  const pillars = [
    {
      num: '01',
      title: 'MADE IN SMALL BATCHES',
      desc: 'Thoughtfully prepared in little batches.',
      note: 'Never rushed, never mass-produced.',
    },
    {
      num: '02',
      title: 'FRESHLY MADE',
      desc: 'Fresh desserts for your sweetest moments.',
      note: 'Baked to order for optimal texture and aroma.',
    },
    {
      num: '03',
      title: 'MADE FOR SHARING',
      desc: 'Little treats worth giving and remembering.',
      note: 'With a personal typewritten letter in every box.',
    },
  ];

  return (
    <section className="py-20 bg-[#F1E9DB] border-y border-[#C8A783]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C8A783]/40">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 sm:p-10 ${
                idx === 0 ? 'md:pl-0' : idx === 2 ? 'md:pr-0' : ''
              }`}
            >
              <div>
                <span className="text-xs font-mono text-[#765039] block mb-3">
                  Pillar {pillar.num}
                </span>
                <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#29180F] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-editorial font-light text-[#4B2E1F] leading-snug mb-3">
                  “{pillar.desc}”
                </p>
              </div>
              <p className="text-xs font-typewriter text-[#765039] pt-4">
                {pillar.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
