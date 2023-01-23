import Catalog from "../../components/Catalog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PeopleSaying from "../../components/PeopleSaying";
import './styles.scss';

export default function Home() {
    return (
        <>
            <header>
                <div className="container header-container">
                    <Header />
                </div>
            </header>
            <main>
                <section id="catalog">
                    <div className="container catalog-container">
                        <Catalog />
                    </div>
                </section>
                <section id="people-saying">
                    <div className="container people-saying-container">
                        <PeopleSaying />
                    </div>
                </section>
            </main>
            <footer>
                <div className="container footer-container">
                    <Footer />
                </div>
            </footer>
        </>
    );
}