import Image from "next/image";
import TeamsCard from "../components/card/TeamsCard";

import { useAppContext } from "../context/state";
import { useEffect } from "react";


const Teams = () => {
  const context = useAppContext();
  const { ourteams, fetchOurteams } = context;

  useEffect(() => {
    fetchOurteams();
  }, []);
  return (
    <>
      <section className="teams">
        <div className="container">
          <div className="teams-intro my-5">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat
            </p>
          </div>
          <div className="row">
            {ourteams &&
              ourteams.slice(0, 12).map((data, key) => {
                return (
                  <TeamsCard
                    clsa="col-md-4 col-xs-12"
                    name={data.name}
                    role={data.position}
                    image={data.image}
                    description={data.description}
                    key={key}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
