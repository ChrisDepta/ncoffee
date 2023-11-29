'use client';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
  privacyCheckbox: boolean;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [showPrivacyText, setShowPrivacyText] = useState(false);

  const handlePrivacyToggle = () => {
    setShowPrivacyText(!showPrivacyText);
  };

  const onSubmit = (data: FormData) => {
    // Check if the privacy checkbox is checked and all fields are filled
    if (data.privacyCheckbox && !errors.name && !errors.email && !errors.message) {
      sendEmail(data);
    } else {
      // Handle error, e.g., display a message to the user
      console.error('Please fill in all required fields and agree to the privacy policy.');
    }
  };

  return (
    <form className="text-xl pt-36 basis-1/4 h-auto flex flex-col justify-start items-start " onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5'>
        <label htmlFor='name' className=' block text-base font-medium'>
        Imię i nazwisko:
        </label>
        <input
          type='text'
          placeholder='wpisz woje dane'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='email' className=' block text-base font-medium'>
          Adres email:
        </label>
        <input
          type='email'
          placeholder='wpisz swój email'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label htmlFor='message' className=' block text-base font-medium'>
          Wiadomość:
        </label>
        <textarea
          rows={4}
          placeholder='wpisz swoją wiadomość'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div className='mb-5'>
        <input
          type="checkbox"
          className="mr-4 mt-6"
          {...register('privacyCheckbox', { required: true })}
        />
        <label className='text-sm'>
          Zgoda na przetwarzanie danych osobowych{' '}
          <span className="cursor-pointer text-norange hover:text-nbeige" onClick={handlePrivacyToggle}>
            {showPrivacyText ? 'Czytaj mniej' : 'Czytaj więcej'}
          </span>
        </label>
      </div>
      {/* Privacy policy text */}
      {showPrivacyText && (
        <p className='text-lg'>
          {/* Privacy policy text */}
        </p>
      )}
      {/* Submit button */}
      <div>
        <button className="bg-norange border border-nbaige text-white text-2xl font-bold w-auto px-6 mr-auto mt-6 mb-12">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
