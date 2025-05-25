import Image from "next/image";
import Link from "next/link";
import EventCard from "../components/EventCard";
import OrganizerCard from "../components/OrganizerCard";

const eventImages = ["/event1.png", "/event1.png", "/event1.png", "/event1.png"];
const organizers = [
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg",
  "weihe.jpg"
];

export default function Home() {
  return (
    <div>
      {/* Header Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <Image
          src="/GDG-Bevy-ChapterBanner.jpg"
          alt="Header"
          width={1600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>

      {/* About Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about">
          <h2 className="text-4xl font-normal mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            Welcome to the Developer Student Club at TU Darmstadt! 🚀
          </p>
          <p className="text-gray-700 mb-4">
            Founded in 2024, our mission is to bridge the gap between theory and real-world application. We organize hands-on workshops, inspiring tech talks, and collaborative hackathons to empower students to build, learn, and connect.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're into AI, web development, data science, or simply curious about tech — we’re here to help you grow. We welcome students of all disciplines and skill levels. No experience required!
          </p>
          <p className="text-gray-700 mb-4">
            🔥 Join our community by clicking the "Join us" button above to receive updates on upcoming events, project opportunities, and our monthly newsletter.
          </p>
          <p className="text-gray-700 mb-4">
            💡 Interested in helping shape the club? Join our weekly meeting every Monday at 16:00 in Room A020, Robert-Piloty-Gebäude (S2|02).
          </p>
          <p className="text-gray-700">
            Collaborating to drive innovation, right here on campus! 
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-4">Upcoming events</h2>
          <p className="text-gray-700">There are currently no upcoming events. Please check again soon.</p>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-10">Past events</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {eventImages.map((src, index) => (
              <EventCard key={index} src={src} date="22. Mai 2025" title="Example event title" />
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-normal mb-10">Organizers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {organizers.map((src, i) => (
              <OrganizerCard key={i} src={`/${src}`} name="Organizer Name" role="Role" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-t-[0.5px] border-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium mb-8">
            Contact Us
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 text-sm text-gray-600 gap-4 items-start">
            <div className="flex justify-center sm:justify-start items-center space-x-2">
              <Image src="/logo4.png" alt="DSC Logo" width={35} height={35} />
              <p className="text-lg sm:text-xl font-semibold">Developer Student Club</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Quick Links</p>
              <ul className="space-y-1">
                <li><Link href="#">About DSCD</Link></li>
                <li><Link href="#">Upcoming Events</Link></li>
                <li><Link href="#">Privacy</Link></li>
              </ul>
            </div>

           <div className="flex flex-col items-center">
            <p className="font-semibold mb-2">Social</p>
            <div className="flex justify-center space-x-4">
              <Image src="/insta.png" alt="Instagram" width={28} height={28} className="object-contain" />
              <Image src="/linkedin.png" alt="LinkedIn" width={28} height={28} className="object-contain" />
              <Image src="/discord.png" alt="Discord" width={28} height={28} className="object-contain" />
            </div>
          </div>

          </div>
          <p className="text-xs mt-8">Developer Student Club Darmstadt · 2025</p>
        </div>
      </footer>
    </div>
  );
}
