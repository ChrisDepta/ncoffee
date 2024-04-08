interface AutoAnswerTemplateArgs {
	name: string;
	email: string;
	message: string;
  }
  
  export const autoAnswerTemplate = ({ name, email, message }: AutoAnswerTemplateArgs): string => `
  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="pl-PL">
  <head>
	<title></title>
	<!-- Reszta nagłówka -->
  </head>
  <body style="background-color: #222; margin: 0; padding: 0;">
	<!-- Zawartość przed treścią zmiennej -->
	<h1 style="margin: 0; color: #1e0e4b; direction: ltr; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; font-size: 30px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
	  <span class="tinyMce-placeholder">Witaj ${name}</span>
	</h1>
	<p style="color:#000;direction:ltr;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px">
	  <strong>Wysłałeś nam wiadomość o następującej treści:<strong/> <br/> ${message}
	</p>
	<p style="margin: 0; font-size: 12px ">
	  Jeśli to nie ty wysłałeś wiadomość z tego adresu email: ${email} <br/> Zgłoś to do nas pod adresem: biuro.ncoffee@gmail.com
	</p>
	<!-- Reszta szablonu -->
  </body>
  </html>
  `;