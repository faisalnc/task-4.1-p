import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-black px-6 pt-4 pb-8 text-base">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-lg">
        {/* Explore */}
        <div>
          <h4 className="font-bold text-xl mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Questions</a></li>
            <li><a href="#" className="hover:underline">Articles</a></li>
            <li><a href="#" className="hover:underline">Tutorials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-xl mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="font-bold text-xl mb-3">Stay connected</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-white p-3 rounded-full shadow">
              <FaFacebookF className="text-black text-xl" />
            </a>
            <a href="#" className="bg-white p-3 rounded-full shadow">
              <FaTwitter className="text-black text-xl" />
            </a>
            <a href="#" className="bg-white p-3 rounded-full shadow">
              <FaInstagram className="text-black text-xl" />
            </a>
            <a href="#" className="bg-white p-3 rounded-full shadow">
              <FaPinterest className="text-black text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="text-center mt-10">
        <h4 className="font-bold text-xl">DEV@Deakin 2025</h4>
        <div className="flex justify-center gap-8 mt-3 text-lg">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}
