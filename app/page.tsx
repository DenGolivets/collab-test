import Services from "./Components/Services";
import { AboutUs } from "./Components/AboutUs";
import Header from "./Components/Header";
import { Testymonials } from "./Components/Testymonials";
import ContactUs from "./Components/ContactUs";

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
        <section id="testymonials">
          <Testymonials />
        </section>
        <footer>
          <ContactUs />
        </footer>
      </main>
    </>
  );
}
