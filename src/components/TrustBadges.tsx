export default function TrustBadges() {
  const badges = [
    { icon: "👨‍⚕️", label: "Board-Certified Doctors" },
    { icon: "⭐", label: "500+ 5-Star Reviews" },
    { icon: "🏥", label: "1000+ Patients Treated" },
    { icon: "✈️", label: "Medical Tourism Experts" },
    { icon: "🔒", label: "No Hidden Fees" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
          <span>{b.icon}</span>
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
