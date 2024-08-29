import CitiesCard from "./CitiesCard";

export default function Cities() {
  return (
    <>
      <div className="grid-container">
        <div className="cities-h1">Türkiye'nin her şehrindeyiz!</div>
      </div>
      <div className="city-list">
        <div className="cities-container">
          <CitiesCard
            srcLink="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-ankara.jpg?width=720"
            altLabel="Ankara"
            urlAddress="https://www.yemeksepeti.com/city/ankara"
          />
          <CitiesCard
            srcLink="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-antalya.jpg?width=720"
            altLabel="Antalya"
            urlAddress="https://www.yemeksepeti.com/city/antalya"
          />
          <CitiesCard
            srcLink="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-bursa.jpg?width=720"
            altLabel="Bursa"
            urlAddress="https://www.yemeksepeti.com/city/bursa"
          />
          <CitiesCard
            srcLink="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-istanbul.jpg?width=720"
            altLabel="İstanbul"
            urlAddress="https://www.yemeksepeti.com/city/istanbul"
          />
          <CitiesCard
            srcLink="https://images.deliveryhero.io/image/fd-tr/city-tile-tr/city-tile-izmir.jpg?width=720"
            altLabel="İzmir"
            urlAddress="https://www.yemeksepeti.com/city/istanbul"
          />
        </div>
      </div>
    </>
  );
}
