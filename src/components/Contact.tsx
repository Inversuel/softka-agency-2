'use client';

import Headline from './UI/Headline';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import Spinner from './UI/Spinner';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ContactFormProps {
  showBack?: boolean;
  className?: string;
}

const ContactForm = ({ showBack = false, className }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const twMergeClass = twMerge(
    'relative w-screen h-screen 3xl:max-w-8xl 3xl:self-center px-4 md:px-12 lg:px-24 flex flex-col justify-center',
    className
  );

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
    <section id="contactSection" className={twMergeClass}>
      {showBack && (
        <Link
          href="/"
          prefetch
          className="flex flex-row items-center justify-start gap-4 my-7 text-xl hover-underline-animation"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Go back
        </Link>
      )}
      <Headline className="3xl:text-9xl">Contact Us</Headline>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 3xl:self-center lg:grid lg:grid-cols-2 lg:row-auto 3xl:grid-cols-1 w-full"
      >
        <input
          placeholder="Your Name"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="phone"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Phone Number"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          className="bg-transparent border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark"
          placeholder="Budget Range"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
        />
        <textarea
          placeholder="Project Description"
          id="message"
          className="lg:col-span-2 3xl:col-auto bg-transparent border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark  3xl:h-40 3xl:p-4 3xl:pl-6"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className="lg:col-span-2 3xl:col-auto text-lightest hover:bg-transparent hover:text-lightest hover:border-white hover:border-2 transition w-full text-xl font-extrabold bg-dark dark:bg-light border border-dark dark:text-dark rounded-xl focus:border-brand p-2.5 flex justify-center align-middle items-center 3xl:h-20"
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
