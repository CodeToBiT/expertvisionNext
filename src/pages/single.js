import React from "react";
import Image from "next/image";
import Link from "next/link";

const Single = () => {
  return (
    <>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>Title</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src="/images/single.png"
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
                <h2>Sub heading</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus habitant ridiculus lectus molestie ac ut. Ipsum
                  elementum, integer sodales tincidunt auctor. Arcu sapien
                  lacus, viverra sed tincidunt varius. Egestas consequat arcu
                  morbi enim, ullamcorper viverra. Turpis eu purus proin eu
                  tincidunt. Nulla fusce ipsum gravida convallis mattis.
                  Malesuada vestibulum sed at senectus. Fames turpis rhoncus
                  feugiat nec sed nec, cras. Sem sit fermentum morbi libero,
                  elementum euismod libero sit euismod. Viverra odio quis nullam
                  blandit. Fermentum et ut porta non non. Nisl, turpis maecenas
                  sit pellentesque diam. Eget eu fusce egestas non. In egestas
                  ultricies auctor eu in aliquet non quam in. Sit magna odio
                  urna dignissim hendrerit. Quis amet, volutpat odio purus,
                  ultrices velit nunc et eget. Eget tincidunt ultrices dictum
                  imperdiet. Nisl adipiscing aliquam vitae ultricies. Orci
                  tincidunt venenatis eleifend morbi placerat commodo eget.
                </p>
              </div>
              <div className="my-3">
                <h2>Sub heading</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tempus habitant ridiculus lectus molestie ac ut. Ipsum
                  elementum, integer sodales tincidunt auctor. Arcu sapien
                  lacus, viverra sed tincidunt varius. Egestas consequat arcu
                  morbi enim, ullamcorper viverra. Turpis eu purus proin eu
                  tincidunt. Nulla fusce ipsum gravida convallis mattis.
                  Malesuada vestibulum sed at senectus. Fames turpis rhoncus
                  feugiat nec sed nec, cras. Sem sit fermentum morbi libero,
                  elementum euismod libero sit euismod. Viverra odio quis nullam
                  blandit. Fermentum et ut porta non non. Nisl, turpis maecenas
                  sit pellentesque diam. Eget eu fusce egestas non. In egestas
                  ultricies auctor eu in aliquet non quam in. Sit magna odio
                  urna dignissim hendrerit. Quis amet, volutpat odio purus,
                  ultrices velit nunc et eget. Eget tincidunt ultrices dictum
                  imperdiet. Nisl adipiscing aliquam vitae ultricies. Orci
                  tincidunt venenatis eleifend morbi placerat commodo eget.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
                <div className="more p-4">
                    <h3>More Content</h3>
                    <ul>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                        <li><Link href="#" className="more-link">More Content to explore...</Link></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;