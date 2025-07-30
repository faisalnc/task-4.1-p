import { tutorials } from "@/data/tutorials";
import { Star } from "lucide-react";

export default function Tutorials() {
  return (
    <section className="bg-gray-100 px-6 py-8">
      <h3 className="text-2xl text-black text-center font-semibold mb-6">Featured Tutorials</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {tutorials.map((t, i) => (
          <div key={i} className="bg-white rounded shadow p-4">
            <img src={t.image} alt={t.title} className="w-full h-40 object-cover rounded mb-4" />
            <h4 className="font-bold text-black mb-1">{t.title}</h4>
            <p className="text-sm text-gray-700">Description</p>
            <p className="text-xs text-gray-500 italic mb-2">{t.description}</p>
            <hr className="mb-3" />
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="mr-2 text-gray-700">{t.rating}</span>
              <span className="ml-auto text-gray-700 font-medium">Author: {t.username}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-6 rounded-full">
          See all tutorials
        </button>
      </div>
    </section>
  );
}
