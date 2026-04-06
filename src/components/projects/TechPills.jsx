import Color from 'color';

export default function TechPills({ tech, pillColor, variant = 'desktop' }) {
  const baseStyles = variant === 'mobile' ? 'text-md px-5 py-2' : 'px-5 py-3';

  return (
    <div className="flex flex-wrap md:flex-wrap-reverse gap-2 justify-center">
      {tech.map((t) => (
        <h1
          key={t}
          className={`${baseStyles} rounded-full font-medium`}
          style={{
            backgroundColor: pillColor,
            color: Color(pillColor).darken(0.55).hex(),
          }}
        >
          {t}
        </h1>
      ))}
    </div>
  );
}
