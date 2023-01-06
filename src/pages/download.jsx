import React, { use } from "react";
import Head from "next/head";
import { useAppContext } from "../context/state";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const Download = () => {
  const context = useAppContext();
  const { downloads, fetchDownloads } = context;

  useEffect(() => {
    if (downloads == null) {
      fetchDownloads();
    }
  }, [downloads]);
  return (
    <>
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
                downloads.map((data, key) => {
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
