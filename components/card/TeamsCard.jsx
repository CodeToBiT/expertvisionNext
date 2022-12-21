import Image from "next/image";

const TeamsCard = (props) => {
  return (
    <>
      <div className={["d-grid align-self-stretch", props.clsa].join(" ")}>
        <div className="card-teams d-grid align-self-stretch">
          <div className="media-wrapper position-relative">
            <Image src="/images/profilebanner.png" alt="loading" priority="false" fill />
          </div>
          <div className="profile content">
            <div className="media-wrapper position-relative mb-4">
              <Image src={props.image} alt="loading" priority="false" fill />
            </div>

            <h3>{props.name}</h3>
            <div className="role my-4">
              <h4>Role</h4>
              <p>{props.role}</p>
            </div>
            <div className="description">
              <h4>Description</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;
