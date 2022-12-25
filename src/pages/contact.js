import React from "react";
import Head from "next/head";
import { MdLocationOn } from "react-icons/md";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Form } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";

import { useAppContext } from "../context/state";
import { useEffect } from "react";

const Contact = () => {
  const context = useAppContext();
  const { settings, fetchSettings } = context;

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <>
    <Head>
        <title>Contact | Expert Vision</title>
        <meta name="description" content="Home" />
      </Head>
      <section className="contact-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-sm-12 my-4">
              <h1>Get in touch!</h1>
              <p>{settings && settings.contact_section_description}</p>
            </div>
            <div className="col-md-8 col-sm-12 my-4">
              <div className="row ">
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <MdLocationOn />
                    <h5>{settings && settings.site_location}</h5>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <FaEnvelope />
                    <h5>{settings && settings.site_email}</h5>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-12">
                  <Link href="/">
                    <FaPhoneAlt />

                    <h5>{settings && settings.site_contact}</h5>
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
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
                cur
              </p>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphone">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" placeholder="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicmessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" placeholder="message" />
                </Form.Group>

                <Button
                  variant="secondary"
                  type="submit"
                  className="text-white w-100 py-2 heading-6"
                >
                  Submit
                </Button>
              </Form>
            </div>
            <div className="col-md-5 col-sm-12 contact-image position-relative">
              <div className="overlay">
                <div className="overlay-right position-absolute">
                  <img src="/images/contactblue.png" alt="" />
                </div>
                <div className="overlay-left position-absolute">
                  <img src="/images/contactblue.png" alt="" />
                </div>
              </div>
              <div className="media-wrapper position-relative">
                <Image
                  src={settings && settings.contact_image}
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
