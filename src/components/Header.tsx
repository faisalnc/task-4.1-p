import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white text-black px-6 py-3 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="font-bold text-lg">DEV@Deakin</div>

        {/* Middle: Search bar */}
        <div className="flex items-center flex-1 mx-6 max-w-lg border border-gray-300 rounded bg-white px-3 py-1.5">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-sm placeholder-gray-400"
          />
        </div>

        {/* Right: Links */}
        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="hover:underline">
            Post
          </a>
          <a href="#" className="hover:underline">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
