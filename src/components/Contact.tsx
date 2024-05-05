'use client';

import Headline from './ui/headline';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import Spinner from './ui/spinner';
import toast from 'react-hot-toast';
import { Input, TextArea } from './ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Typography } from './ui/typography';
import Link from 'next/link';

const schema = z.object({
  name: z
    .string()
    .min(5, { message: 'Name must be longer than 5.' })
    .max(50, { message: 'Name is to long' }),
  email: z.string().email(),
  budget: z.string().optional(),
  message: z.string().max(400, { message: 'Message is to long' }).optional(),
  phone: z.string().optional(),
});

type FormType = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOk, setIsOk] = useState('');

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    setIsLoading(true);
    if (isOk !== '') return;
    const { budget, email, message, name, phone } = data;
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
        reset();
      });
  };

  return (
    <div className="h-screen w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]"></div>
      <Headline className="3xl:text-9xl max-w-3xl mx-auto self-start z-[2]">Contact Us</Headline>
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-[2] flex flex-col gap-4 3xl:self-center w-full"
        >
          <div className="hidden">
            <input
              className=""
              value={isOk}
              onChange={(e) => setIsOk(e.target.value)}
              id={''}
              placeholder={''}
            />
          </div>
          <div>
            <Input placeholder="Your Name" id="name" {...register('name')} />
            {errors.name?.message && (
              <Typography variant="p" className="text-destructive">
                {errors.name?.message}
              </Typography>
            )}
          </div>
          <div>
            <Input placeholder="Email" id="email" {...register('email')} />
            {errors.email?.message && (
              <Typography variant="p" className="text-destructive">
                {errors.email?.message}
              </Typography>
            )}
          </div>
          <div>
            <Input placeholder="Phone Number" id="phone" {...register('phone')} />
            {errors.phone?.message && (
              <Typography variant="p" className="text-destructive">
                {errors.phone?.message}
              </Typography>
            )}
          </div>
          <div>
            <Input placeholder="Budget Range" id="budget" {...register('budget')} />
            {errors.budget?.message && (
              <Typography variant="p" className="text-destructive">
                {errors.budget?.message}
              </Typography>
            )}
          </div>
          <div>
            <TextArea placeholder="Project Description" id="message" {...register('message')} />
            {errors.message?.message && (
              <Typography variant="p" className="text-destructive">
                {errors.message?.message}
              </Typography>
            )}
          </div>
          <button
            className="lg:col-span-2 3xl:col-auto text-lightest hover:bg-transparent hover:text-lightest hover:border-foreground hover:border-2 transition w-full text-xl font-extrabold bg-dark dark:bg-light border border-dark dark:text-dark rounded-xl focus:border-brand p-2.5 flex justify-center align-middle items-center 3xl:h-20"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Submit'}
          </button>
        </form>
        <div className="flex flex-col gap-1 w-full">
          <Link href="tel:+48691530536">
            <Typography className="hover-underline-animation" variant="h3" type="denike">
              Phone: +48 691-530-536
            </Typography>
          </Link>
          <Link href="mailto:acc.karolmaj@gmail.com">
            <Typography className="hover-underline-animation" variant="h3" type="denike">
              Email: acc.karolmaj@gmail.com
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
