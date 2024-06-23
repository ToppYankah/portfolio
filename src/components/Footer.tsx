import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import { animateAvailableForWork } from "~/animations/global-animations";
import { PointerContext } from "~/context/custom-pointer-context";
import SectionLayout from "~/layouts/section-layout";
import NavLink from "./NavLink";
import { useModal } from "~/context/modal-context";
import ContactForm from "./modals/ContactForm";

const contacts: { label: string; link: string }[] = [
  {
    label: "tppyankah@gmail.com",
    link: "mailto:tppyankah@gmail.com",
  },
  {
    label: "+233593598615",
    link: "tel:+233593598615",
  },
];

const services: string[] = [
  "Mobile App Development",
  "Website Development",
  "UI/UX Design",
  "UI/UX Consultation",
];

const findMe: string[] = ["Haatso, Accra, Ghana", "GMT 00:00:00"];

export default function Footer() {
  const { showModal } = useModal();
  const { setHoveredLink } = useContext(PointerContext);

  const handleOpenContactForm = () => {
    showModal(<ContactForm />, "Contact");
  };

  return (
    <SectionLayout
      id="footer"
      darkMode
      minContent
      className="min-h-[70vh]"
      containerclassname="pt-1 max-h-[100vh] overflow-auto"
    >
      <AvailableForWork />
      <div className="my-20 flex">
        <div className="flex flex-col">
          <p className="text-xs uppercase text-light">Get In Touch</p>
          <p className="font-serif text-[clamp(30px,5vw,70px)] capitalize leading-[1.15em] text-light">
            Ready to build
            <br />
            the next
            <span
              onClick={handleOpenContactForm}
              onMouseEnter={() => setHoveredLink(true, null)}
              onMouseLeave={() => setHoveredLink(false, null)}
              className="bg-accent-deep ml-5 inline-block -translate-y-[clamp(0px,1vw,1rem)] cursor-pointer rounded-full px-[clamp(1rem,2vw,2rem)] py-[clamp(.3rem,2vw,1.25rem)] font-sans text-[clamp(20px,1.5vw,25px)] leading-[1em] text-dark"
            >
              Let's Go!
            </span>
            <br />
            Deal Breaker?
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 text-light">
        <div className="hidden flex-1 sm:flex"></div>
        <div className="flex min-w-[200px] flex-col gap-2">
          <p className="mb-1 text-xs font-bold uppercase">Services</p>
          {services.map((service) => (
            <span className="text-sm" key={service}>
              {service}
            </span>
          ))}
        </div>
        <div className="flex min-w-[200px] flex-col gap-2">
          <p className="mb-1 text-xs font-bold uppercase">Contact</p>
          {contacts.map((contact) => (
            <NavLink href={contact.link} key={contact.label}>
              {contact.label}
            </NavLink>
          ))}
          <Socials />
        </div>
        <div className="flex min-w-[200px] flex-col gap-2">
          <p className="mb-1 text-xs font-bold uppercase">Find Me</p>
          {findMe.map((info) => (
            <span className="text-sm" key={info}>
              {info}
            </span>
          ))}
        </div>
        <div className="flex min-w-[200px] self-end">
          <NavLink href="" className="mt-auto text-sm">
            Back to top
            {/* <ArrowArrow2Twotone className="ml-2" size={15} /> */}
          </NavLink>
        </div>
      </div>
    </SectionLayout>
  );
}

const Socials = () => {
  return (
    <div className="mt-auto flex translate-y-2 items-end">
      <div className="social-item">
        <SocialIcon
          url="https://github.com/ToppYankah"
          fgColor="var(--light-hex)"
          bgColor="#0000"
          network="github"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--light-hex)"
          bgColor="#0000"
          network="linkedin"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--light-hex)"
          bgColor="#0000"
          network="instagram"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
      <div className="social-item">
        <SocialIcon
          url="https://www.linkedin.com/in/kenneth-yankah/"
          fgColor="var(--light-hex)"
          bgColor="#0000"
          network="twitter"
          target="_blank"
          style={{ width: "20%", minWidth: 30, maxWidth: 40 }}
        />
      </div>
    </div>
  );
};

const AvailableForWork = () => {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      animateAvailableForWork();
    },
    { scope: scopeRef },
  );

  return (
    <div ref={scopeRef} className="mb-20 flex">
      {Array(20)
        .fill("Available for work")
        .map((text, i) => (
          <div key={text + i} className="part flex items-center text-light">
            <h1 className="text-md whitespace-nowrap font-alt font-bold uppercase leading-[1em]">
              {text}
            </h1>
            <div className="mx-8 overflow-hidden rounded-full bg-light p-1"></div>
          </div>
        ))}
    </div>
  );
};
