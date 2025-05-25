import Image from "next/image";

export default function OrganizerCard({ src, name, role }: { src: string; name: string; role: string }) {
   return (
     <div className="text-center">
       <Image src={src} alt={name} width={120} height={120} className="rounded-full mx-auto" />
       <p className="font-medium mt-2">{name}</p>
       <p className="text-sm text-gray-600">{role}</p>
       <p className="text-blue-600 text-sm no-underline">View profile</p>
     </div>
   );
 }