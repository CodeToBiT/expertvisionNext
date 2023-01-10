import React, { use } from "react";
import Head from "next/head";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseDownloads = await fetch([url, "downloads"].join(""));
  const downloads = await responseDownloads.json();

  return {
    props: {
      downloads,
    },
  };
}

const Download = ({ downloads }) => {
  return (
    <>
      <Head>
        <title>Epertvision - downloads</title>
      </Head>
      <section className="download">
        <div className="container">
          <table class="download-table col-lg-12 col-md-12">
            <thead class="download-head">
              <tr>
                <th rowSpan="4">Name</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody class="download-body">
              {downloads &&
                downloads.data.map((data, key) => {
                  return (
                    <tr key={key}>
                      <td>{data.name}</td>
                      <td>
                        <a
                          className="btn btn-primary"
                          data-fancybox="gallery"
                          data-src={data.url}
                          download={data.name}
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Download;
