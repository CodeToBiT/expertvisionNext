import Image from "next/image";
import Head from "next/head";
import BlogCard from "../../components/card/BlogCard";


import { useEffect } from "react";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      blogs,
      settings,
    },
  };
}

const Blog = ({ blogs, settings }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }
  return (
    <>
      <Head>
        <title>{settings && settings.data.blogs_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.blogs_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.blogs_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="blogs my-5">
        <div className="container">
          <div className="blogs-intro my-5">
            <h1>Blogs and updates</h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  settings && settings.data.homepage_blog_section_description,
              }}
            ></div>
          </div>
          <div className="row">
            {blogs &&
              blogs.data.map((data, key) => {
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
