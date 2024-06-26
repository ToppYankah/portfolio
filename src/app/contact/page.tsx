"use client";
import { useLayoutEffect } from "react";
import ContactForm from "./form";

const ContactPage = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return <ContactForm />;
};

export default ContactPage;
