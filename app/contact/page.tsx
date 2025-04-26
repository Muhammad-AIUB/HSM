import ContactSection from "@/components/Homepage/ContactSection";
import { SectionTitleWithSub } from "@/components/Shared/SectionTitle/SectionTitle";

const ContactPage = () => {
  return (
    <div>
      <SectionTitleWithSub
        title="Contact"
        subTitle="We would love to hear from you! Whether for support or
              collaboration, feel free to reach out — just send us a message,
              and we will get back to you promptly."
      />

      <ContactSection version="contact" />
    </div>
  );
};

export default ContactPage;
