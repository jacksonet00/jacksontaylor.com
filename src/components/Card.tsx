import Image from "next/image";

interface CardProps {
  iconPath: string;
  title: string;
  subtitle: string;
  description: string[];
}

export default function Card({
  iconPath,
  title,
  subtitle,
  description,
}: CardProps) {
  return (
    <div className="bg-slate-900 border-slate-800 border-4 p-4 w-[28rem] h-48 rounded-md flex flex-col">
      <div className="flex items-center">
        <Image
          src={iconPath}
          alt={`${title} ${subtitle} logo`}
          height={50}
          width={50}
          className="rounded-md mr-4"
        />
        <div className="flex-col">
          <h1 className="font-bold">{title}</h1>
          <h1>{subtitle}</h1>
        </div>
      </div>
      <div className="ml-[4.25rem] mt-2">
        <p>{description[0]}</p>
      </div>
    </div>
  );
}