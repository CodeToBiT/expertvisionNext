import Image from "next/image";
import ServiceCard from "../components/card/ServiceCard";

const Services = () => {
    const services = [
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus onsectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae lectus vitae cursus consectetur duis cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
        },
        {
          title: "Service title",
          content:
            "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
        },
      ];

  return (
    <>
      <section className="services mb-5">
        <div className="container">
          <div className="services-intro my-5">
            <h2>Here we provide the services you need</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-10 m-auto col-sm-12 col-xs-12 shadow">
              <div className="row">
                {services &&
                  services.slice(0, 9).map((item) => {
                    return (
                      <ServiceCard
                        clsa="col-md-4 col-sm-6 col-xs-12"
                        title={item.title}
                        content={item.content}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;