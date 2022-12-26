import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAppContext } from '../context/state'

import Image from 'next/image'
import Link from 'next/link'

const PrivacyPolicy = () => {
    const context = useAppContext();
    
    const privacyDetail = router.query.privacyDetail;
    const [privacy, setPrivacy] = useState();
    const fetchPrivacy = async ()=> {
      const response = await fetch(
          [`https://admin.eve.edu.np/api/`, `page/${privacyDetail}`].join(""),
          {
              method: "GET",
              headers: {
                  "COntent-Type": "application/json",
              },
          },
      );
      const json = await response.json();

      setPrivacy(json.data);
    };

    useEffect(()=>{
        if(privacy == null){
            fetchPrivacy();
        }
    })
  return (
    <>
     <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{privacy && privacy.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src={privacy && privacy.image}
                  fill
                  alt="loading"
                  priority="false"
                  sized="(max-height: 445px)"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 sub">
              <div className="my-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: privacy && privacy.description,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Content</h3>
                {/* <ul>
                  {courses &&
                    courses.map((data, key) => {
                      return (
                        <li>
                          <Link
                            href={`/course/${data.slug}`}
                            className="more-link"
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
