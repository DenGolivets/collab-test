
import Services from "./Components/Services";
import { AboutUs } from "./components/AboutUs";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
      <main>
        <header>
          <Header />
        </header>

        <section id="about us">Hello World!</section>
        <section id="services">
          <Services />
        </section>
        <section id="testymanials"></section>
        <footer></footer>
      </main>
    </>
  );
}
