import { ViewButton } from "../buttons/ButtonBox";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = (props) => {
  return (
    <>
      <div
        className={[
          "card-service align-self-stretch px-5 py-2 position-relative",
          props.clsa,
        ].join(" ")}
      >
        <Image
          src="/images/envelope.png"
          width={32}
          height={40}
          className="m-3"
          alt="loading"
          priority="false"
        />

        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <Link href="#" className="stretched-link"></Link>
      </div>
    </>
  );
};

export default ServiceCard;
