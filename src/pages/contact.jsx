import React from "react";
import Head from "next/head";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState, Suspense } from "react";

const url = "https://admin.evc.edu.np/api/";

const initialState = {
  full_name: "",
  email: "",
  phone: "",
  message: "",
};

export async function getServerSideProps() {
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      settings,
    },
  };
}

const Contact = ({ settings }) => {
  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState("");

  const { full_name, email, phone, message } = formData;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://admin.evc.edu.np/api/inquiries", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setSuccess(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{settings && settings.data.contact_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.contact_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.contact_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="contact-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-12 my-4">
              <h1>Get in touch!</h1>
              <p>{settings && settings.data.contact_section_description}</p>
            </div>
            <div className="col-md-8 col-sm-12 my-4">
              <div className="row ">
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <MdLocationOn />
                    <h5>{settings && settings.data.site_location}</h5>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <FaEnvelope />
                    <h5>{settings && settings.data.site_email}</h5>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <FaPhoneAlt />

                    <h5>{settings && settings.data.site_contact}</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <div className="row contact-card justify-content-center">
            <div className="col-md-5 col-sm-12">
              <h3>Contact Us</h3>

              <div className="text-secondary heading-3 mt-4 ">{success}</div>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    name="full_name"
                    value={full_name}
                    onChange={onInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicmessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="message"
                    name="message"
                    value={message}
                    onChange={onInputChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="secondary"
                  type="submit"
                  onClick={handleSubmit}
                  className="text-white w-100 py-2 heading-6"
                >
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-md-5 col-sm-12 contact-image position-relative">
              <div className="overlay">
                <div className="overlay-right position-absolute">
                  <Image
                    src="/images/contactblue.png"
                    width={250}
                    height={150}
                    alt="loading"
                    sizes="(max-height: 612px)"
                    priority="false"
                  />
                  ;
                </div>
                <div className="overlay-left position-absolute">
                  <Image
                    src="/images/contactblue.png"
                    width={250}
                    height={150}
                    alt="loading"
                    sizes="(max-height: 612px)"
                    priority="false"
                  />
                  ;
                </div>
              </div>
              <div className="media-wrapper position-relative">
                <Image
                  src={
                    settings && settings.data.contact_image
                      ? settings.data.contact_image
                      : "/images/logo.png"
                  }
                  alt="loading"
                  priority="false"
                  sizes="(max-height: 612px)"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
