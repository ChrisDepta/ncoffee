'use client'

import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import ReactDOM from 'react-dom';

export type FormData = {
  name: string;
  email: string;
  message: string;
  privacyCheckbox: boolean;
};

interface ModalProps {
  onClose: () => void;
}

const PrivacyModal: FC<ModalProps> = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed top-36 w-96 h-auto flex items-center justify-center border border-norange outline-nbeige rounded-xl shadow-xl">
      <div className="bg-white p-6 rounded-xl">
        <p className="text-lg">
          Administratorem danych osobowych podanych w formularzu jest NCOFFEE z siedzibą przy ul. Sowiogórska 8c/6, 58-200 Dzierżoniów. Dane te będą przetwarzane w celu odpowiedzi na sprawę opisaną w formularzu. Podanie danych osobowych wskazanych w formularzu jest dobrowolne, ale ich niepodanie w zakresie adresu email uniemożliwia kontakt w sprawie załatwienia sprawy za pośrednictwem powyższego formularza. Powyższe dane nie są archiwizowane i nie będą używane w celach innych, niż udzielenie odpowiedzi na zapytanie zawarte w formularzu.
        </p>
        <button className="bg-norange border border-nbaige hover:bg-white hover:border-norange hover:text-norange transition-all text-white text-2xl font-bold w-auto px-6 mr-auto mt-6" onClick={onClose}>
          Zamknij
        </button>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handlePrivacyToggle = () => {
    setShowPrivacyModal(!showPrivacyModal);
  };

  const closePrivacyModal = () => {
    setShowPrivacyModal(false);
  };

  const onSubmit = (data: any) => {
    if (data.privacyCheckbox && !errors.name && !errors.email && !errors.message) {
      sendEmail(data);
      reset();
    } else {
      alert('Wypełnij wszystkie pola formularza oraz wyraź zgodę na przetwarzanie danych osobowych.');
    }
  };

  return (
    <div>
      <form className="text-xl xs:pt-8 lg:pt-36 xs:basis-screen lg:basis-1/4 h-auto flex flex-col justify-start xs:items-center lg:items-start " onSubmit={handleSubmit(onSubmit)}>
      <h3 className='text-2xl text-norange -ml-10 pb-8 font-bold lg:hidden '>Napisz do nas!</h3>
      <div className='mb-5'>
        <label htmlFor='name' className=' block text-base font-medium'>
          Imię i nazwisko:
        </label>
        <input
          type='text'
          placeholder='Wpisz swoje dane'
          className="mt-2 mb-4 w-96 border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
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
          className="mt-2 mb-4 w-96 border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
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
          className="mt-2 mb-4 w-96 border border-norange outline-nbeige rounded-xl p-1 shadow-xl"
          {...register('message', { required: true })}
        ></textarea>
      </div>
        {/* Checkbox for privacy consent */}
        <div className='mb-5'>
          <input type="checkbox" className="mr-4 mt-6" {...register('privacyCheckbox', { required: true })} />
          <label className='text-sm'>
            Zgoda na przetwarzanie danych osobowych{' '}
            <br />
            <span className=" ml-8 cursor-pointer text-norange hover:text-nbeige" onClick={handlePrivacyToggle}>
              {showPrivacyModal ? 'Czytaj mniej' : 'Czytaj więcej'}
            </span>
          </label>
          {showPrivacyModal && <PrivacyModal onClose={closePrivacyModal} />}
        </div>
          {/* Przycisk submit */}
      <div>
        <button className="bg-norange border border-nbaige hover:bg-white hover:border-norange hover:text-norange transition-all text-white text-2xl font-bold w-auto px-6 mr-auto mt-6 mb-12">
          Submit
        </button>
      </div>
      </form>

      {/* Container for modal portal */}
      <div id="modal-root"></div>
    </div>
  );
};

export default ContactForm;
