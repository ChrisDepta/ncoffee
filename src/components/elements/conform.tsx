import React from "react";


export default function ConForm() {
    return (
        <form className="pt-36  basis-1/3 h-screen flex flex-wrap items-start justify-evenly shrink" action="submit">
            <input className="basis-full text-2xl bg-nbaige border border-white p-2" type="text" id="name" aria-required placeholder="Twoje imię"/>
            <input className="basis-full text-2xl bg-nbaige border border-white p-2" type="email" id="email" aria-required placeholder="Adres e-mail" />
            <input className="basis-full text-2xl bg-nbaige border border-white p-2" type="text" id="theme" placeholder="Podaj temat" />
            <textarea className="basis-full text-2xl bg-nbaige border border-white p-2" id="message" placeholder="Napisz wiadomość" rows={5} ></textarea>
            <p><input className="mr-4 mt-6" type="checkbox" />
            Administratorem danych osobowych podanych w formularzu jest
             NCOFFEE z siedzibą przy ul. Sowiogórska 8c/6, 58-200 Dzierżoniów.
              Dane te będą przetwarzane w celu odpowiedzi na sprawę opisaną w formularzu. 
              Podanie danych osobowych wskazanych w formularzu jest dobrowolne, ale ich 
              niepodanie w zakresie adresu email uniemożliwia kontakt w sprawie załatwienia 
              sprawy za pośrednictwem powyższego formularza. Powyższe dane nie są 
              archiwizowane i nie będą używane w celach innych, niż udzielenie odpowiedzi
               na zapytanie zawarte w formularzu.</p>
            <button className="bg-nbraun border border-nbaige text-nbaige text-2xl font-bold w-auto px-6 mr-auto mt-6 mb-12" type="submit">Wyślij</button>
        </form>
    )
}