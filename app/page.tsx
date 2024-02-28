import Services from "./Components/Services";
import { AboutUs } from "./Components/AboutUs";
import Header from "./Components/Header";

export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
        </header>

        <section id="about us" className="mb-16">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testymanials"></section>
        <footer></footer>
      </main>
    </>
  );
}
