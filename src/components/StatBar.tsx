const stats = [
  { value: '1,200+', label: 'Trade businesses' },
  { value: '$0', label: 'Lead fees ever' },
  { value: '20km', label: 'Free discovery radius' },
  { value: '2 min', label: 'To get set up' },
];

export function StatBar() {
  return (
    <section className="bg-white px-5 py-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-4 py-7 ${
                i % 2 === 1 ? 'border-l border-gray-200' : ''
              } ${i >= 2 ? 'border-t border-gray-200 md:border-t-0' : ''} ${
                i > 0 ? 'md:border-l md:border-gray-200' : ''
              }`}
            >
              <span className="text-[clamp(28px,4vw,40px)] font-bold leading-tight tracking-tight text-primary">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
