import Image from "next/image";
import Head from "next/head";
import TeamsCard from "../components/card/TeamsCard";

import { useAppContext } from "../context/state";
import { useEffect } from "react";

const Teams = () => {
  const context = useAppContext();
  const { ourteams, fetchOurteams } = context;

  useEffect(() => {
    if (ourteams == null) {
      fetchOurteams();
    }
  }, []);
  return (
    <>
      <Head>
        <title>Teams | Expert Vision</title>
        <meta name="description" content="Home" />
      </Head>
      <section className="teams">
        <div className="container">
          <div className="teams-intro my-5">
            <h1>Our Team</h1>
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
