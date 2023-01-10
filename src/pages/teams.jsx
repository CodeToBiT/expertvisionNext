import Image from "next/image";
import Head from "next/head";
import TeamsCard from "../components/card/TeamsCard";

import { useEffect } from "react";
const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseOurteams = await fetch([url, "ourteams"].join(""));
  const ourteams = await responseOurteams.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      ourteams,
      settings,
    },
  };
}

const Teams = ({ ourteams, settings }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {settings && settings.data?.ourteams_seo_title
            ? settings && settings.data?.ourteams_seo_title
            : "Our Team - Expert Vision"}
        </title>
        <meta
          name="description"
          content={settings && settings.data?.ourteams_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data?.ourteams_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="teams">
        <div className="container">
          <div className="teams-intro my-5">
            <h1>Our Team</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: settings && settings.data?.ourteam_section_description,
              }}
            ></p>
          </div>
          <div className="row">
            {ourteams &&
              ourteams.data?.slice(0, 12).map((data, key) => {
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
