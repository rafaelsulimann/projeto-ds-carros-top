import PeopleSayingCard from "../PeopleSayingCard";
import './styles.scss';

export default function PeopleSaying() {
  return (
    <>
      <div className="people-saying-title">
        <h2>O que estão dizendo</h2>
      </div>
      <div className="people-saying-cards">
        <PeopleSayingCard />
        <PeopleSayingCard />
        <PeopleSayingCard />
        <PeopleSayingCard />
        <PeopleSayingCard />
      </div>
    </>
  );
}
