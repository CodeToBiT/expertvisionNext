import Image from "next/image";
import TeamsCard from "../components/card/TeamsCard";

const Teams = () =>{
    const ourTeams = [
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
        {
          name: "Remilla Ty",
          image: "/images/profile.png",
          role: "Inspiring others to do their best work.",
          description: "The mask tool. It makes me feel like a magician.",
        },
      ];
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
            {ourTeams &&
              ourTeams.slice(0, 12).map((item) => {
                return (
                  <TeamsCard
                    clsa="col-md-4 col-xs-12"
                    name={item.name}
                    role={item.role}
                    image={item.image}
                    description={item.description}
                  />
                );
              })}
          </div>
        </div>
      </section>
        </>
    )
}

export default Teams;