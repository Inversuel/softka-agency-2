import ContactForm from '@/components/Contact';
import NextBreadcrumb from '@/components/breadcrumbs/NextBreadcrumb';
import React from 'react';

const ContactPage = () => {
  return (
    <section className="container">
      <NextBreadcrumb padding={false} />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
