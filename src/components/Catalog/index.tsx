import CatalogCard from "../CatalogCard";
import './styles.scss';

export default function Catalog() {
  return (
    <>
      <div className="catalog-title">
        <h2>Venha nos visitar</h2>
      </div>
      <div className="catalog-cards">
        <CatalogCard />
        <CatalogCard />
      </div>
    </>
  );
}
