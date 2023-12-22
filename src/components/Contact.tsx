import Headline from './UI/Headline';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import Spinner from './UI/Spinner';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      range: budget,
    };
    const emailJs = emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );
    toast
      .promise(
        emailJs,
        {
          loading: 'Sending...',
          success: <b>Success</b>,
          error: <b>Error</b>,
        },
        {
          position: 'top-right',
        }
      )
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
        setName('');
        setEmail('');
        setBudget('');
        setMessage('');
        setPhone('');
      });
  };

  return (
    <section className="relative w-screen my-20 lg:mb-40 px-4 md:px-12 lg:px-24">
      <Headline>Contact Us</Headline>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:row-auto"
      >
        <input
          placeholder="Your Name"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="phone"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Phone Number"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Budget Range"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
        />
        <textarea
          placeholder="Project Description"
          id="message"
          className="lg:col-span-2 bg-transparent border border-dark text-dark dark:text-lightest text-lg rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className="lg:col-span-2 text-lightest hover:bg-transparent hover:text-lightest hover:border-white hover:border-2 transition w-full text-xl font-extrabold bg-dark dark:bg-light border border-dark dark:text-dark rounded-xl focus:border-brand p-2.5 flex justify-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
