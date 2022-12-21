import Image from "next/image";
import BlogCard from "../components/card/BlogCard";

const Blog = () => {
  const blog = [
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog2.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog2.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog2.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
  ];

  return (
    <>
      <section className="blogs my-5">
        <div className="container">
          <div className="blogs-intro my-5">
            <h2>Blogs and updates</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat
            </p>
          </div>
          <div className="row">
            {blog &&
              blog.map((item, key) => {
                return (
                  <BlogCard
                    clsa="col-md-4 col-xs-12"
                    title={item.title}
                    imagepath={item.imagepath}
                    content={item.content}
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
