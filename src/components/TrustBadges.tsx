const badges = [
  { icon: "👨‍⚕️", label: "Certified doctors" },
  { icon: "⭐", label: "500+ 5-Star Reviews" },
  { icon: "🏥", label: "1000+ Patients Treated" },
  { icon: "✈️", label: "Medical travel support" },
  { icon: "🗣️", label: "English-speaking staff" },
  { icon: "🔒", label: "No hidden fees" },
];

export default function TrustBadges() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 py-6 list-none p-0">
      {badges.map((b) => (
        <li
          key={b.label}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800"
        >
          <span aria-hidden="true">{b.icon}</span>
          <span>{b.label}</span>
        </li>
      ))}
    </ul>
  );
}
