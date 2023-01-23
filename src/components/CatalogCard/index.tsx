import carImg from "../../assets/carro.svg";
import './styles.scss';

export default function CatalogCard() {
  return (
    <>
      <div className="catalog-card">
        <div className="catalog-card-image">
          <img src={carImg} alt="Carro imagem" />
        </div>
        <div className="catalog-card-name">
          <h3>Lorem ipsum dolor</h3>
        </div>
      </div>
    </>
  );
}
