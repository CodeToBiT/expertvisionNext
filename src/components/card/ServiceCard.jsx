import { ViewButton } from "../buttons/ButtonBox";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = (props) => {
  return (
    <>
      <div
        className={[
          "d-grid align-self-stretch ",
          props.clsa,
        ].join(" ")}
      >
        <div className="card-service px-5 py-2 position-relative">
          <Image
            src="/images/envelope.png"
            width={32}
            height={40}
            className="m-3"
            alt="loading"
            sizes="(max-height: 40px)"
            priority="false"
          />

          <h3>{props.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
          <Link href={`/service/${props.slug}`} className="stretched-link"></Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
