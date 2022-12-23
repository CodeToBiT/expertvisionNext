import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const url = "https://admin.evc.edu.np/api/";

export function AppWrapper({ children }) {
  const [countries, setCountries] = useState();
  const [blogs, setBlogs] = useState();
  const [courses, setCourses] = useState();
  const [testimonials, setTestimonials] = useState();
  const [ourteams, setOurteams] = useState();
  const [services, setServices] = useState();
  const [faqs, setFaqs] = useState();
  const [pages, setPages] = useState();
  const [socialmedias, setSocialmedias] = useState();
  const [sliders, setSliders] = useState();
  const [partners, setPartners] = useState();
  const [settings, setSettings] = useState();

  const fetchCountries = async () => {
    const response = await fetch([url, "countries"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "applicaiton/json",
      },
    });
    const json = await response.json();
    setCountries(json.data);
  };

  const fetchBlogs = async () => {
    const response = await fetch([url, "blogs"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setBlogs(json.data);
  };

  const fetchCourses = async () => {
    const response = await fetch([url, "courses"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setCourses(json.data);
  };

  const fetchTestimonials = async () => {
    const response = await fetch([url, "testimonials"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "applicaiton/json",
      },
    });
    const json = await response.json();
    setTestimonials(json.data);
  };

  const fetchOurteams = async () => {
    const response = await fetch([url, "ourteams"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setOurteams(json.data);
  };

  const fetchServices = async () => {
    const response = await fetch([url, "services"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setServices(json.data);
  };

  const fetchFaqs = async () => {
    const response = await fetch([url, "faqs"].join(""), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setFaqs(json.data);
  };

  const fetchPages = async () => {
    const response = await fetch([url, "pages"].join(""),{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setPages(json.data);
  };

  const fetchSocialmedias = async () => {
    const response = await fetch([url, "socialmedias"].join(""),{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setSocialmedias(json.data);
  };

  const fetchSliders = async () => {
    const response = await fetch([url, "sliders"].join(""),{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();
    setSliders(json.data);
  }

  const fetchPartners = async () => {
    const response = await fetch([url, "partners"].join(""),{
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const json = await response.json();
    setPartners(json.data);
  };
  const fetchSettings = async () => {
    const response = await fetch([url, "settings"].join(""),{
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const json = await response.json();
    setSettings(json.data);
  };

  return (
    <AppContext.Provider
        value={{
          countries,
          fetchCountries,
          blogs,
          fetchBlogs,
          courses,
          fetchCourses,
          testimonials,
          fetchTestimonials,
          ourteams,
          fetchOurteams,
          services,
          fetchServices,
          faqs,
          fetchFaqs,
          pages,
          fetchPages,
          socialmedias,
          fetchSocialmedias,
          sliders,
          fetchSliders,
          partners,
          fetchPartners,
          settings,
          fetchSettings,
        }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(){
  return useContext(AppContext);
}
