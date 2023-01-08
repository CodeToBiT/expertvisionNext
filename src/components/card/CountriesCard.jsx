import Image from "next/image";
import Link from "next/link";

const CountriesCard = (props) => {
  return (
    <>
      <div className="card-countries br-24">
        <div className="media-wrapper position-relative">
          <Link href={`/country/${props.slug}`} className="stretched-link">
            <Image
              src={props.imagepath}
              alt="loading"
              priority="false"
              sizes="(max-height: 324px)"
              fill
            />
          </Link>
        </div>

        <div className="overlay py-3 px-4">
          <h4>{props.country}</h4>
        </div>
      </div>
    </>
  );
};

export default CountriesCard;
