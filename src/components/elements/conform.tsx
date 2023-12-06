'use client'

// Importe
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

// Definieren der FormData
export type FormData = {
  name: string;
  email: string;
  message: string;
  privacyCheckbox: boolean;
};

// Komponente des Formulars
const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Hinzugefügt: reset-Funktion
  } = useForm<FormData>();
  const [showPrivacyText, setShowPrivacyText] = useState(false);

  // Funktion zum Anzeigen/Verstecken des Texts zur Zustimmung zur Datenschutzrichtlinie
  const handlePrivacyToggle = () => {
    setShowPrivacyText(!showPrivacyText);
  };

  // Funktion zum Behandeln des Absendens des Formulars
  const onSubmit = (data: FormData) => {
    // Überprüfen, ob das Kontrollkästchen aktiviert ist und alle Felder ausgefüllt sind
    if (data.privacyCheckbox && !errors.name && !errors.email && !errors.message) {
      // Aufrufen der Funktion zum Senden der E-Mail
      sendEmail(data);
      
      // Hinzugefügt: Formular zurücksetzen
      reset();
    } else {
      // Hinzugefügt: Alert bei Fehler
      alert('Please fill in all required fields and agree to the privacy policy.');
    }
  };

  // Rendern des Formulars
  return (
    <form className="text-xl pt-36 basis-1/4 h-auto flex flex-col justify-start items-start " onSubmit={handleSubmit(onSubmit)}>
      {/* Imei und Nachname */}
      <div className='mb-5'>
        <label htmlFor='name' className=' block text-base font-medium'>
          Imię i nazwisko:
        </label>
        <input
          type='text'
          placeholder='Wpisz swoje dane'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('name', { required: true })}
        />
      </div>
      {/* Adres email */}
      <div className='mb-5'>
        <label htmlFor='email' className=' block text-base font-medium'>
          Adres email:
        </label>
        <input
          type='email'
          placeholder='Wpisz swój email'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('email', { required: true })}
        />
      </div>
      {/* Wiadomość */}
      <div className='mb-5'>
        <label htmlFor='message' className=' block text-base font-medium'>
          Wiadomość:
        </label>
        <textarea
          rows={4}
          placeholder='Wpisz swoją wiadomość'
          className="mt-2 mb-4 basis-full border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('message', { required: true })}
        ></textarea>
      </div>
      {/* Checkbox na zgodę na przetwarzanie danych osobowych */}
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
      {/* Tekst o zgodzie na przetwarzanie danych osobowych */}
      {showPrivacyText && (
        <p className='text-lg'>
          {/* ... (dein Text zur Datenschutzrichtlinie) */}
        </p>
      )}
      {/* Przycisk submit */}
      <div>
        <button className="bg-norange border border-nbaige hover:bg-white hover:border-norange hover:text-norange transition-all text-white text-2xl font-bold w-auto px-6 mr-auto mt-6 mb-12">
          Submit
        </button>
      </div>
    </form>
  );
};

// Export der Formularkomponente
export default ContactForm;
