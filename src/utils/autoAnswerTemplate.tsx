interface AutoAnswerTemplateArgs {
  name: string;
  email: string;
  message: string;
}

export const autoAnswerTemplate = ({
  name,
  email,
  message,
}: AutoAnswerTemplateArgs): string => `
  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="pl-PL">
  <head>
	<title></title>
	<style>
	  .link-button {
		display: inline-block;
		width: 10rem;
		height: 3rem;
		line-height: 3rem;
		border-radius: 2rem;
		color: #f48716; /* Pomarańczowy */
		background-color: white;
		font-weight: 900;
		letter-spacing: 2px;
		text-align: center;
		text-decoration: none;
		padding: 0 1rem;
	  }
  
	  .message-text {
		color: white; /* Ustawienie koloru tekstu na biały */
		background-color: #373F43; /* Tło */
		padding: 1rem;
		border-radius: 1rem;
		margin: 1rem 0;
	  }
  
	  .content-overlay {
		position: relative;
		color: white;
		font-size: 2rem;
		padding: 2rem;
		text-align: center; /* Wyśrodkowanie tekstu */
	  }
  
	  .background-image {
		width: 100%;
		object-fit: cover;
	  }
  
	  .link {
		color: #f48716; /* Pomarańczowy kolor tekstu */
		text-decoration: none; /* Usuwa podkreślenie */
	  }
	  
	  /* Dodatkowe style dla stanów linku */
	  .link:hover,
	  .link:active,
	  .link:visited {
		color: #f48716; /* Zachowaj pomarańczowy kolor tekstu */
		text-decoration: none; /* Upewnij się, że link nie jest podkreślony nawet po kliknięciu lub odwiedzeniu */
	  }
	</style>
  </head>
  <body style="background-color: white; margin: 0; padding: 0; display: flex; flex-direction: column; justify-content: start; align-items: center;">
	<div style="width: 60%; background-color: #373F43; padding: 2rem;">
	  <img src="https://ncoffee.vercel.app/_next/static/media/coffeeSlider.9de479e4.webp" alt="ncoffee slider" class="background-image">
	  <h1 style="color: #f48716; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 3rem; font-weight: 700; text-align: center;">
		Witaj ${name}
	  </h1>
	  <div class="message-text">
		<p class="message-text">Wysłałeś nam wiadomość o następującej treści:</p>
		<p style="font-size: 1.5rem;">${message}</p>
	  </div>
	  <p class="message-text">Jeśli to nie ty wysłałeś wiadomość z tego adresu email: <strong class="link">${email}</strong><br/> Zgłoś ten fakt do nas pod naszym adresem: <strong class="link">biuro.ncoffee@gmail.com</strong></p>
	  <div>
		<img src="https://ncoffee.vercel.app/_next/static/media/bgWaterHand.ef287525.webp" alt="ncoffee woda" class="background-image">
		<div class="content-overlay">
		  W ofercie posiadamy jeszcze inne produkty...
		  <p style="font-size: 1.3rem;">Serdecznie zapraszamy do sprawdzenia naszej oferty Wody oraz Soków. Bogate w minerały wody Kinga oraz Jurajska są świetnym uzupełnieniem codziennej zdrowej diety. A świeże soki są bogate w witaminy i zapewniają przepyszne orzeźwienie każdego dnia.</p>
		  <a href="https://ncoffee.vercel.app/water" class="link-button">zobacz</a>
		</div>
		<img src="https://ncoffee.vercel.app/_next/static/media/podium.22a29edf.webp" alt="ncoffee podium" class="background-image" style="margin-top: -4rem;">
	  </div>
	</div>
  </body>
  </html>
  

  `;
