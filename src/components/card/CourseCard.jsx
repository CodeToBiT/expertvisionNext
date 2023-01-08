import Image from "next/image";
import Link from "next/link";

const CourseCard = (props) => {
  return (
    <>
      <div className="card-courses br-24">
        <div className="media-wrapper position-relative">
          <Link href={`/course/${props.slug}`} className="stretched-link">
          <Image src={props.imagepath} alt="loading" priority="false" sizes="(max-height: 324px)" fill/>
          </Link>
        </div>

        <div className="overlay">
          <h4>{props.course}</h4>
          <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;