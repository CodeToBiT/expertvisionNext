import React, { use } from "react";
import Head from "next/head";
import { useAppContext } from "../context/state";
import { useEffect } from "react";

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
                <th rowspan="4">Name</th>
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
                        <a class="btn btn-primary" href={data.url} download>
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
