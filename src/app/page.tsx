import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import Tutorials from "@/components/Tutorials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="max-w-[1320px] mx-auto">
        <Articles />
        <Tutorials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
