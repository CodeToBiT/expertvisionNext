import Image from "next/image";

const CountriesCard = (props) => {
  return (
    <>
      <div className="card-countries br-24">
        <div className="media-wrapper position-relative">
          <Image src={props.imagepath} alt="loading" priority="false"  fill/>
        </div>

        <div className="overlay py-3 px-4">
          <h4>{props.country}</h4>
        </div>
      </div>
    </>
  );
};

export default CountriesCard;
