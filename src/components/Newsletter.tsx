export default function Newsletter() {
  return (
    <section className="bg-gray-200 px-4 py-6 flex justify-center">
      <form
        action="/subscribe"
        method="POST"
        className="flex items-center gap-2 w-full max-w-3xl"
      >
        <label className="font-bold text-black text-lg whitespace-nowrap">
          SIGN UP FOR OUR DAILY INSIDER
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-grow px-3 py-2 border border-black text-black placeholder-black rounded-sm"
        />
        <button
          type="submit"
          className="bg-teal-700 text-white px-4 py-2 rounded-sm hover:bg-teal-800"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
