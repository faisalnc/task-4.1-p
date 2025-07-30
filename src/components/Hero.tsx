export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white py-20 px-6 text-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to DEV@Deakin
      </h1>
      <p className="text-xl md:text-2xl">
        Secure Frontend Development with React
      </p>
    </section>
  );
}
