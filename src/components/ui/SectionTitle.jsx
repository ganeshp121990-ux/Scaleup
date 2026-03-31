export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-20">
      <h2 className="text-5xl font-semibold gradient-text">{title}</h2>
      <p className="text-gray-400 mt-4">{subtitle}</p>
    </div>
  );
}
