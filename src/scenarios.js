const scenarios = [
	{
		imageURL: require("./images/phish/01.png"),
		answer: false,
		tips: [
			'First of all, the sender\'s email address contains the company name and so does the domain! Unfortunately this is enough to fool some people. However, would an actual electricity company ever use a <a href="https://en.wikipedia.org/wiki/Top-level_domain">TLD</a> such as .info for their emails?',
			'Notice how the email is also riddled with grammar and spelling mistakes. Another thing to note is that this email has an impersonal greeting, "Dear Valued Customer". This is quite the red flag, especially for an electricity company demanding payment from their customers.',
			"Lastly, the premise of this email doesn't make much sense. An electricity company would usually send you an invoice by mail. However, if you have a paperless-billing, it would be a good idea to log into the energy company's website and check your invoices (don't click on any links in the email). A good word of advice is to call the company directly using their customer support number and inquire about this bill directly with them.",
		],
	},
	{
		imageURL: require("./images/legit/01.png"),
		answer: true,
		tips: [
			"Typically, phishing emails create a sense of urgency for the reader to get them to act as quickly as possible. This email doesn't seem to do so and it even gives the recipient the choice to ignore the email if they don't want to reset their password.",
			'This email greeted the recipient by their first name. Typically, phishing emails have impersonal greetings such as "Dear Customer" or "Dear User". Be wary of such greetings and when in doubt, toss it out!',
			"Lastly, the email seems to have been sent from a legit host name/username (noreply@picturely.ca). While there are ways that attackers can fake this, it is usually a good indicator that the email is legit (although you shouldn't rely solely on this prove an email's legitimacy).",
		],
	},
	{
		imageURL: require("./images/phish/02.png"),
		answer: false,
		tips: [
			'This type of phishing is particularly dangerous since the sender address seems to be completely legit (account@fisco.com). However, attackers can do something called <a href="https://en.wikipedia.org/wiki/Email_spoofing#Malicious_use_of_spoofing">email spoofing</a> to forge sender addresses. There is an element of negligence on Fisco\'s part for not implementing systems such as SPF, DKIM, and DMARC to protect their customers from email spoofing.',
			'Phishing scams typically try to frighten you by saying something has gone wrong and you need to resolve it by providing your information and doing something. In this case, their account has been "temporarily locked" and they need to click on a link to "get the access back immediatly".',
			'An official email would never include a hyperlink saying, "Please click Here" to perform an important action. Also, that URL definitely does not look like an official domain belonging to Fisco. If you were to click on it, it would probably lead you to a page imitating the official company webpage to get you to give them your information. The best course of action here would be to delete the email and if you\'re still in doubt, contact the support team and inquire about your account status with them.',
		],
	},
	{
		imageURL: require("./images/legit/02.png"),
		answer: true,
		tips: [
			"This email does not prompt the user to perform any unnecessary actions such as confirming that they want to enable Two Factor Authentication by logging in or anything. It's simply informing the user about a change that occurred on their account.",
			"Also, the email offers the recipient a way to resolve the issue if they didn't enable 2FA. It tells the user that they need to change their password immediately if they suspect that their account has been compromised. This is reasonable advice and doesn't seem like it's phishy.",
			"Lastly, the sender's email address is legit and the email body itself is free from any spelling or grammatical errors. This further reinforces the email's legitimacy.",
		],
	},
	{
		imageURL: require("./images/phish/03.png"),
		answer: false,
		tips: [
			"This is one of the oldest types of phishing attacks to exist, but the fact that it is so tempting for some users makes it really dangerous. Even though it includes the official Amazon logo, that alone does not guarantee the legitimacy of such ads.",
			'Typically when you click on a link like this one, the phishy website demands tons of personal information before you can receive the "prize". This should be a major red flag for you and you should never enter personal information on any website before verifying its legitimacy.',
			"In case like this, if it isn't obvious that you're faced with a phish, a good tip to follow is: if it looks too good to be true, it probably is.",
		],
	},
	{
		imageURL: require("./images/legit/03.png"),
		answer: true,
		tips: [
			"Lastly, the sender's email address is legit and the email body itself is free from any spelling or grammatical errors. This further reinforces the email's legitimacy.",
			'If you really like the deal that this bank is offering but aren\'t too sure about the legitimacy of this advertisement, a good technique would be to search up the offer name. In this case, if you searched up something along the lines of, "Fisco no monthly fee student account", you would (hopefully) land on the official Fisco website where you can learn more about the offer.',
		],
	},
	{
		imageURL: require("./images/phish/04.png"),
		answer: false,
		tips: [
			'This is clearly a phish as the email has way too many red flags. Firstly, emails that try to cause you to panic or act immediately or "URGENTLY" as stated in the subject are often phishing attempts.',
			"Another clear sign is the sender address. What kind of email is imfunpayment@gmail.com? Even the name itself hints at a laughable phishing attempt.",
			'Most importantly, the message makes no sense at all. Why would a random banker, whose client supposedly died of COVID-19, which is clearly irrelevant and a half-hearted attempt to somehow cause panic by including the name of a common (and relevant) cause of panic, want to give you a business supposedly worth $5 million? Also note the poor grammar ", Am banker" which is another common sign. Always consider the message, who its from, and whether what its saying could be possible or realistic.',
		],
	},
	{
		imageURL: require("./images/legit/04.png"),
		answer: true,
		tips: [
			"This is a common type of email where you are able to track your order. If you did not make such an order, from the said provider, Best Buy, and your shipment address does not match the listed one, it would be clear that it is a phish. Due to this reason this is unlikely a phish because its very easy for you to identify whether you did place this order or not, so phishers usually would not send such a bad phishing email.",
			"If you did make the order but you're still in doubt you can also double check and make sure the reference number in the email matches the actual number.",
			'Further, the sender address is legitimate as "canadapost.ca" is a legitimate domain and almost all big and recognized companies have security measures to prevent spoofing.',
			"As mentioned before, the nature of this email is unlikely a phish and as you can see the email is not aggressive at all. If you wish to track your parcel click on the link, only if you really want to, you're not really being asked to.",
		],
	},
	{
		imageURL: require("./images/phish/05.png"),
		answer: false,
		tips: [
			"The most obvious reason that this email is a phish is the fact that you are being asked to download and print out an invoice copy. Phishing emails will often ask you to download something which will be bundled with malware. Generally, you are rarely asked by legitimate companies to download things sent through email as in most cases whatever files you need to access can be accessed via your account on their platform. It doesn't help that the attachment itself looks quite shady with generic weird naming and it being a zip file, which is often another red flag.",
			"Despite the sender appearing to come from a legitimate Fedex domain, this still appears somewhat suspicious as a pretty general message such as this would usually not come from a random employee. It could be the employee is attempting to phish people or they were hacked, or it could be the result of spoofing, which is quite rare especially for big companies like Fedex with good security measures.",
			"However, the most important takeaways and signs are that you are being asked to download a zip file and the message doesn't really correspond to Fedex procedures as you are never asked to download a zip file just to print a receipt to bring to their office through email. Before you act on an email, think to yourself does this email really represent what the portrayed sender would ask me to do?",
		],
	},
	{
		imageURL: require("./images/legit/05.png"),
		answer: true,
		tips: [
			"At first glance this may seem like a phish. However, quite a few companies send these types of marketing emails.",
			"The sender's email address does not look very concerning. However, it is quite possible that a phisher will create a fake domain like this one for phishing purposes. A good idea is to perhaps research the company before continuing with any further action.",
			"A common way you can make sure is checking the address of the hyperlink to make sure you are being sent to a legitimate website. In this case, you are being sent to a subdomain of the official Cheapflights website which belongs to a legitimate company.",
		],
	},
];

export default scenarios;
