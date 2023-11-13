"use client";
import React, { useState } from 'react';


export default function ConForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Walidacja pól formularza
    if (!name || !email || !message) {
      alert('Proszę wypełnić wszystkie pola formularza.');
      return;
    }

    try {
      setIsSending(true);

      const response = await fetch('@/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      console.log(response);
      if (response.ok) {
        setIsSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Wysłanie wiadomości nie powiodło się.');
      }
    } catch (error) {
      console.error(error);
      alert('Wysłanie wiadomości nie powiodło się. Spróbuj ponownie później.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="pt-36  basis-1/3 h-screen flex flex-wrap items-start justify-evenly shrink"
        onSubmit={handleSubmit}>
      <input className="basis-full text-2xl bg-nbaige border border-white p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Twoje imię"
      />
      <input className="basis-full text-2xl bg-nbaige border border-white p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Adres e-mail"
      />
      <textarea className="basis-full text-2xl bg-nbaige border border-white p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Napisz wiadomość"
        rows={5}
      ></textarea>
      <p><input className="mr-4 mt-6" type="checkbox" />
            Administratorem danych osobowych podanych w formularzu jest
             NCOFFEE z siedzibą przy ul. Sowiogórska 8c/6, 58-200 Dzierżoniów.
              Dane te będą przetwarzane w celu odpowiedzi na sprawę opisaną w formularzu. 
              Podanie danych osobowych wskazanych w formularzu jest dobrowolne, ale ich 
              niepodanie w zakresie adresu email uniemożliwia kontakt w sprawie załatwienia 
              sprawy za pośrednictwem powyższego formularza. Powyższe dane nie są 
              archiwizowane i nie będą używane w celach innych, niż udzielenie odpowiedzi
               na zapytanie zawarte w formularzu.</p>
      <button className="bg-nbraun border border-nbaige text-nbaige text-2xl font-bold w-auto px-6 mr-auto mt-6 mb-12"
         type="submit" disabled={isSending}>
        {isSending ? 'Wysyłanie...' : 'Wyślij'}
      </button>
      {isSent && <p>Wiadomość została wysłana.</p>}
    </form>
  );
}
