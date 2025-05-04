import Image from "next/image";

export default function TechStack({ items }: { items: { name: string; icon: string }[] }) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="mb-4 text-lg font-semibold">Technology Stack</h3>
      <div className="grid grid-cols-3 gap-4">
        {items.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-center text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
