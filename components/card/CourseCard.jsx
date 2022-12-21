import Image from "next/image";

const CourseCard = (props) => {
  return (
    <>
      <div className="card-courses br-24">
        <div className="media-wrapper position-relative">
          <Image src={props.imagepath} alt="loading" priority="false" fill/>
        </div>

        <div className="overlay">
          <h4>{props.course}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;