import Image from "next/image";

export default function EventCard({ src, date, title }: { src: string; date: string; title: string }) {
   return (
     <div className="text-center">
       <Image src={src} alt={title} width={150} height={150} className="rounded-full mx-auto" />
       <p className="text-sm mt-2 font-bold">Speaker Session / Tech Talk</p>
       <p className="text-sm text-gray-600">{date}</p>
       <p className="text-blue-600 no-underline text-sm mt-1">{title}</p>
     </div>
   );
 }