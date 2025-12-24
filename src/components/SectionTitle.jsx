export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl font-extrabold">
        <span className="text-orange-500">{title}</span>
      </h2>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
