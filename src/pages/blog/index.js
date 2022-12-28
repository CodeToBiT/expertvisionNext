import Image from "next/image";
import Head from "next/head";
import BlogCard from "../../components/card/BlogCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Blog = () => {
  const context = useAppContext();

  const { blogs, fetchBlogs, settings, fetchSettings } = context;

  useEffect(() => {
    if (blogs == null) {
      fetchBlogs();
    }
    if (settings == null) {
      fetchSettings();
    }
  }, []);
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }
  return (
    <>
      <Head>
        <title>{settings && settings.blogs_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.blogs_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.blogs_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="blogs my-5">
        <div className="container">
          <div className="blogs-intro my-5">
            <h1>Blogs and updates</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat
            </p>
          </div>
          <div className="row">
            {blogs &&
              blogs.map((data, key) => {
                return (
                  <BlogCard
                    date={data.date}
                    slug={data.slug}
                    clsa="col-md-4 col-xs-12"
                    title={data.title}
                    imagepath={data.image}
                    content={data.short_description}
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

export default Blog;
