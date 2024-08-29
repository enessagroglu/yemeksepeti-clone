export default function CitiesCard({ srcLink, altLabel, urlAddress }) {

  return (
    <>
      <div className="card">
        <a href={urlAddress}>
          <figure>
            <img
              src={srcLink}
              alt={altLabel}
            />
            <figcaption>
              <span>{altLabel}
              </span>
            </figcaption>
          </figure>
        </a>
      </div>
    </>
  );
}
