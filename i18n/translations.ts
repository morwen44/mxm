// app/i18n/translations.ts
export const translations = {
	es: {
		nav: {
			home: "Inicio",
			dressCode: "Vestimenta",
			travel: "Viaje",
			faq: "FAQ",
			registry: "Mesa de Regalos",
			rsvp: "RSVP",
		},
		invitation: {
			line1: "¡Nos casamos!",
			line2: "Y QUEREMOS CELEBRARLO JUNTOS",
			line3: "27.03.27",
			line4: "LA KIST HACIENDA",
			line5: "SAN CRISTÓBAL DE LAS CASAS, CHIAPAS",
			line6: "3:30PM - CEREMONIA",
			line7: "Cócteles y recepción a continuación",
			rsvp: "RSVP AQUÍ",
		},
		dressCode: {
			title: "Código de vestimenta",
			line1: "Formal de Noche",
			description: `Nos encantaría que se sumen a la atmósfera de la hacienda con un look elegante y sofisticado.

Trajes formales y vestidos largos son perfectos para la ocasión.

La celebración será en un patio con empedrado y áreas de pasto, por lo que recomendamos considerar zapatos adecuados para este tipo de superficie.

Nos inspiran los tonos vibrantes y saturados; sin embargo, siéntanse libres de vestir el color que más les favorezca y con el que se sientan espectaculares.`,
			tips: [
				"Tacones gruesos o bloque son más cómodos que stilettos.",
				"Evitar blanco, marfil, champagne, o tonos muy similares a vestidos de novia.",
				"San Cristóbal está a más de 2,000 metros de altitud: en cuanto se pone el sol en marzo, refresca. Una estola, un chal elegante o un saco/blazer son absolutamente recomendables para la noche.",
			],
		},
		travelTips: {
			title: "Tips de Viaje",

			flights: {
				title: "Vuelos",
				body: {
					first: "Volar a",
					aeropuerto: "Tuxtla Gutiérrez (TGZ)",
					p1: "— es el aeropuerto más cercano y con mayor número de conexiones nacionales.",
					h6_1: "Una vez en el aeropuerto, pueden tomar:",
					p2: "Taxi o transporte privado reservado por cuenta propia,",
					p3: "Servicio de transporte compartido (shuttle) disponible en el aeropuerto",
					h6_2: "(aproximadamente 1 hora y 15 minutos)",
				},
			},

			accommodation: {
				title: "Hospedaje",
				body: `San Cristóbal es una ciudad para caminar despacio y perderse entre calles empedradas.
 Les recomendamos hospedarse en el centro histórico o en barrios cercanos para disfrutar plenamente la experiencia.`,
				hotelsTitle: "Hoteles",
				hostelsTitle: "Hostales",
				hotels: [
					{ name: "Hotel Bo", url: "https://www.hotelbo.mx" },
					{ name: "Casa Lum Hotel Boutique", url: "https://casalum.com" },
					{ name: "Na Bolom", url: "https://www.nabolom.org" },
					{
						name: "Hotel Diego de Mazariegos",
						url: "https://diegodemazariegos.com/",
					},
				],
				discountHotelsText:
					"En los siguientes hoteles pueden utilizar nuestro código de reservación para una tarifa especial:",
				guideLinkText:
					"Haz clic aquí para ver la guía paso a paso de reservación",
				discountHotels: [
					{
						name: "Casa del Alma Hotel Boutique & Spa",
						url: "https://www.casadelalma.mx",
					},
					{
						name: "Hotel Sombra del Agua",
						url: "http://www.sombradelagua.com.mx",
					},

					{ name: "Sereno Hotel", url: "https://www.instagram.com/serenoah/" },
				],
				hostels: [
					{
						name: "Puerta Vieja",
						url: "https://puertaviejahostel.com/",
					},
					{
						name: "Hostal Qhia",
						url: "https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Qhi-Hostel/San-Cristobal-de-las-Casas/299243?from=2025-09-24&to=2025-09-25&guests=2",
					},
					{
						name: "Hostal Casa Gaia",
						url: "https://www.hostelworld.com/hostels/p/315403/hostal-casa-gaia/?utm_source=shared_property&utm_medium=clipboard&utm_campaign=315403&source=web_shared_property-315403",
					},
				],
				airbnbRecommendation:
					"También recomendamos explorar opciones en Airbnb si prefieren reservar un espacio privado o alquilar una casa entera para grupos grandes.",
			},
		},
		whatToDo: {
			title: "Qué hacer",
			recomendacionesTitle: "Recomendaciones",
			recomendaciones: [
				{
					name: "Restaurante Tarumba",
					description:
						"Excelente café de especialidad y un patio interior hermoso para desayunar.",
					url: "https://www.instagram.com/tarumba.mx/",
				},
				{
					name: "Tierra y Cielo",
					description:
						"Alta cocina regional chiapaneca por la Chef Marta Zepeda. Ideal para una cena especial.",
					url: "https://www.instagram.com/tierraycielorestaurante",
				},
				{
					name: "Restaurante Miura",
					description:
						"Foro cultural y tetería con una terraza que ofrece las mejores vistas del atardecer.",
					url: "https://www.instagram.com/miurasancris/",
				},
				{
					name: "Historico Café",
					description:
						"Tostador local enfocado en café de altura de Chiapas en un ambiente relajado.",
					url: "https://www.instagram.com/historicocafetostador/",
				},
			],
			activitiesTitle: "Actividades",
			activities: [
				"Caminar por el Andador Guadalupe y el Andador Eclesiástico, disfrutando del ambiente bohemio, músicos callejeros y galerías.",
				"Visitar el Mercado de Dulces y Artesanías para llevarse un recuerdo hecho a mano y probar los dulces típicos chiapanecos.",
				"Subir los casi 280 escalones hasta el Templo de San Cristobalito para una vista panorámica increíble de toda la ciudad.",
				"Conocer el Museo del Ámbar, ubicado en un hermoso ex-convento en el centro, para ver de cerca las piezas de resina fosilizada.",
				"Visitar el Centro de Textiles del Mundo Maya, junto a Santo Domingo, para apreciar el diseño y los colores de la ropa tradicional.",
			],
			extraTuxtla: {
				title: "De paso por Tuxtla (Extra)",
				note: "Ideas si llegan o salen por el aeropuerto de Tuxtla. Algunas actividades requieren varias horas, así que recomendamos planearlas como excursión o añadir una noche extra en la zona.",
				items: [
					{
						title: "Cañón del Sumidero & Chiapa de Corzo",
						description:
							"Una de las excursiones más importantes de la región. El recorrido en lancha por el cañón suele tomar varias horas y se realiza desde Chiapa de Corzo, un Pueblo Mágico donde vale la pena comer y pasear un poco. Es ideal como actividad de medio día o día completo, no como parada rápida de camino.",
					},
					{
						title: "Parque de la Marimba & centro de Tuxtla",
						description:
							"Perfecto si tienen unas horas en Tuxtla antes de seguir el viaje. El parque cobra vida por la tarde y noche con música en vivo y ambiente local. Es una buena forma de bajar el ritmo después del vuelo o antes de continuar hacia San Cristóbal.",
					},
				],
			},
		},

		faq: {
			title: "Preguntas Frecuentes",
			sections: [
				{
					category: "Confirmación de Asistencia",
					items: [
						{
							q: "¿Cuál es la fecha límite para confirmar mi asistencia?",
							a: "Por favor, confírmanos tu asistencia a más tardar el 31 de Octubre 2026 para que podamos finalizar los detalles con nuestros proveedores.",
						},
						{
							q: "¿Cómo confirmo mi asistencia?",
							a: "Puedes confirmar tu asistencia directamente aquí en nuestra página web, yendo a la pestaña que dice 'RSVP'.",
						},
						{
							q: "¿Puedo traer un acompañante?",
							a: "Si tienes un acompañante contemplado, su nombre vendrá detallado en el formulario o habrá un espacio para que lo incluyas. Por cuestiones de capacidad, solo podemos recibir a las personas indicadas.",
						},

						{
							q: "¿Qué debo hacer si mis planes cambian?",
							a: "Entendemos que los planes de viaje pueden cambiar. Si tus planes cambian después de confirmar tu asistencia, por favor actualiza tu RSVP directamente con la novia via WhatsApp.",
						},
					],
				},
				{
					category: "Lugar y Logística",
					items: [
						{
							q: "¿Cuál es la dirección de la ceremonia y la recepción?",
							a: "Tanto la ceremonia como la recepción se llevarán a cabo en La Kist Hacienda, ubicada en San Cristóbal de las Casas, Chiapas.",
							mapEmbed:
								"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.908445188916!2d-92.65341842264378!3d16.73141942136648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed459b43901f83%3A0x46532eaec7f32841!2sHacienda%20La%20Kist!5e0!3m2!1sen!2sde!4v1774632742440!5m2!1sen!2sde",
						},
						{
							q: "¿La ceremonia será en interiores o al aire libre?",
							a: "La ceremonia será en interior, seguida de una recepción en el jardín / terraza.",
						},
						{
							q: "¿Habrá servicio de transporte/desplazamiento?",
							a: "No contaremos con transporte oficial ni servicio de traslado personalizado. Sin embargo, es fácil moverse en taxi dentro de la zona.",
						},
					],
				},
				{
					category: "Código de vestimenta",
					items: [
						{
							q: "¿Cuál es el código de vestimenta?",
							a: "Nos encantaría que nos acompañen con atuendos de estilo Etiqueta rigurosa. Para los hombres, esto significa usar traje oscuro (la corbata es opcional). Para las mujeres, opciones como vestidos largos, vestidos midi elegantes o conjuntos formales de pantalón son ideales.",
						},
						{
							q: "¿Qué tipo de calzado es más adecuado para el lugar?",
							a: "Gran parte del evento será sobre empedrado, por lo que sugerimos zapatos de tacón grueso o bloque para las mujeres, o calzado muy cómodo para disfrutar sin problema.",
						},
						{
							q: "¿Debo traer algo adicional?",
							a: "Nuestra boda será en San Cristóbal de las Casas en marzo. Aunque durante el día el sol es muy agradable, al estar en la montaña la temperatura baja considerablemente por la noche y puede llegar a hacer bastante frío. Les recomendamos mucho traer un abrigo, una chaqueta cálida o un chal grueso para que disfruten de la velada cómodamente.",
						},
					],
				},
				{
					category: "Viajes y alojamiento",
					items: [
						{
							q: "¿A qué aeropuerto debo volar?",
							a: "El aeropuerto más cercano a San Cristóbal de las Casas es el Aeropuerto Internacional Ángel Albino Corzo (TGZ) en Tuxtla Gutiérrez, Chiapas. Está a aproximadamente 1 hora y cuarto de San Cristóbal en auto.",
						},
						{
							q: "¿Dónde debo alojarme?",
							a: "Sugerimos buscar hoteles o Airbnb en la zona de San Cristóbal de las Casas. En la sección de Tips de Viajes de nuestra web te dejamos un par de hoteles recomendados.",
						},
						{
							q: "¿Tienen reservas de hotel o códigos de descuento?",
							a: "Sí, contamos con el código especial MONSEANDMICHI. Pueden utilizarlo al reservar directamente en Casa del Alma, Sereno Hotel y Sombra del Agua.",
						},
						{
							q: "¿Cuál es la mejor manera de moverse?",
							a: "Desde el aeropuerto de Tuxtla Gutiérrez, puedes tomar un taxi seguro, contratar un servicio de transporte compartido (shuttle) o alquilar un auto para subir a San Cristóbal. Una vez instalados en San Cristóbal, el centro de la ciudad se recorre fácilmente a pie, y los taxis locales son económicos y prácticos para distancias cortas.",
						},
					],
				},
				{
					category: "Programa del día",
					items: [
						{
							q: "¿A qué hora debo llegar a la ceremonia?",
							a: "Por favor, llega unos 30 minutos antes. Queremos hacer mucho hincapié en que la ceremonia comenzará EXACTAMENTE a la hora indicada en la invitación. Llegar con anticipación te permitirá encontrar tu lugar cómodamente sin interrumpir el inicio.",
						},
						{
							q: "¿Cuándo se espera que termine el día?",
							a: "La música y la celebración terminarán oficialmente a las 2:00 a.m.",
						},
					],
				},
				{
					category: "Etiqueta de redes sociales",
					items: [
						{
							q: "¿Puedo tomar fotos durante la ceremonia?",
							a: "Queremos que nuestra ceremonia sea un momento completamente unplugged. Les pedimos amablemente no tomar fotos, videos ni levantar sus teléfonos durante la ceremonia y dejar que nuestro fotógrafo profesional capture ese momento.",
						},
						{
							q: "¿Debo publicar en redes sociales?",
							a: "¡Nos encanta la idea de que guarden recuerdos de este día! Tómense todas las selfies que quieran y capturen los hermosos detalles del lugar. Solo tenemos una petición muy especial: para que todos se sientan 100% cómodos, especialmente quienes nos visitan desde Alemania (donde la cultura de privacidad es muy distinta), les pedimos de corazón no tomar ni publicar fotos donde salgan otras personas de frente. ¡Gracias por ayudarnos a crear un ambiente de confianza donde todos podamos relajarnos y disfrutar!",
						},
					],
				},
				{
					category: "Regalos",
					items: [
						{
							q: "¿Dónde está su registro de regalos?",
							a: "Para nosotros, el hecho de que hagan el viaje para acompañarnos es el mejor regalo y no es necesario nada más. Sin embargo, si desean tener un detalle con nosotros, lo apreciamos muchísimo. Hemos optado por tener una única opción: un fondo para nuestro futuro. Para facilitar las aportaciones desde México y evitar el rechazo de tarjetas internacionales, hemos configurado un enlace directo y seguro a través de PayPal en nuestra página.",
						},
						{
							q: "¿Puedo llevar el regalo a la boda?",
							a: "Por la logística de los vuelos y el espacio en las maletas de todos, les pedimos amablemente que utilicen las opciones en línea de nuestra web en lugar de traer regalos físicos o cajas al evento. ¡Una tarjeta con sus buenos deseos es más que suficiente si desean entregar algo en mano!",
						},
						{
							q: "¿Puedo enviar el regalo más tarde?",
							a: "¡Claro que sí! Nuestro fondo de luna de miel permanecerá abierto incluso después del gran día.",
						},
					],
				},
				{
					category: "Comida y asistencia",
					items: [
						{
							q: "¿Qué tipo de comida habrá?",
							a: "Serviremos un delicioso menú estilo buffet. Habrá una excelente variedad de platillos, asegurándonos de que todos disfruten y encuentren algo que les encante.",
						},
						{
							q: "¿Qué pasa si tengo restricciones dietéticas?",
							a: "Queremos que todos disfruten al máximo. Cuando llenes tu formulario de confirmación de asistencia (RSVP), por favor anota cualquier alergia o restricción severa para que la cocina lo tenga en cuenta.",
						},
						{
							q: "¿Con quién puedo contactar si tengo otras preguntas?",
							a: "Si tienes alguna duda sobre vuelos, alojamiento o cualquier otro detalle, manda un mensaje directo a nuestra wedding planner Dana Balbuena al +52 961 239 0494, y con gusto te ayudará.",
						},
					],
				},
			],
		},
		rsvp: {
			greeting: "Hola",
			title: "¿Nos vemos en la boda?",
			attendanceLabel:
				"Por favor, ayúdanos confirmando tu asistencia antes del 31 de Octubre, 2026.",
			description:
				"Por favor, ayúdanos confirmando tu asistencia antes del 30 de Septiembre, 2026.",

			yesOption: "¡Claro que sí!",
			noOption: "Lamentablemente no",
			confirmAttendeesLabel: "Confirmar asistentes:",
			plusOnePlaceholder: "Nombre del acompañante",
			dietaryLabel: "Alergias o restricciones alimenticias",
			messageLabel: "Mensaje para los novios",
			submitButton: "Enviar Confirmación",
			sending: "Enviando...",
			success: "¡Gracias! Tu respuesta ha sido guardada.",
			error: "Hubo un error. Inténtalo de nuevo o contáctanos.",
		},
		registry: {
			title: "Mesa de Regalos",
			intro: `SU PRESENCIA
ES EL REGALO MÁS IMPORTANTE
PARA NOSOTROS`,
			description:
				"Si además desean hacernos un regalo, pueden apoyarnos con nuestra luna de miel o contribuir a nuestro hogar.",
			fundTitle: "LUNA DE MIEL & FONDO PARA EL HOGAR",
			fundLinkLabel: "Contribuir a nuestra Luna de Miel", // "Transferencia al fondo" made prettier
			fundLinkUrl: "https://www.paypal.me/michaelhaerle57", // Swap this for your actual Wise link
		},
	},
	de: {
		nav: {
			home: "Home",
			travel: "Anreise",
			dressCode: "Dresscode",
			registry: "Hochzeitsliste",
			rsvp: "RSVP",
			faq: "FAQ",
		},
		invitation: {
			line1: "Mit großer Freude",
			line2: "LADEN WIR ZU UNSERER HOCHZEIT EIN",
			line3: "27.03.27",
			line4: "LA KIST HACIENDA",
			line5: "SAN CRISTÓBAL DE LAS CASAS, MEXIKO",
			line6: "15:30 UHR - TRAUUNG",
			line7: "Anschließend Cocktails und Empfang",
			rsvp: "RSVP HIER",
		},
		dressCode: {
			title: "Dresscode",
			line1: "Formelle Abendgarderobe",
			description: `Wir würden uns freuen, wenn ihr die Atmosphäre der Hacienda mit einem eleganten und stilvollen Look unterstreicht. Da unsere mexikanischen Gäste erfahrungsgemäß „all out“ gehen und sich besonders schick machen, laden wir euch ein, diesen glamourösen Rahmen mit uns zu teilen.

Klassische, dunkle Anzüge und bodenlange Abendkleider sind für diesen Anlass ideal und unterstreichen den festlichen Glanz des Abends.

Die Feier findet in einem Innenhof mit Kopfsteinpflaster und auf Rasenflächen statt. Wir empfehlen daher, das Schuhwerk entsprechend anzupassen, damit ihr die Nacht unbeschwert durchtanzen könnt.

Für unsere Feier lassen wir uns von einer lebendigen, farbenfrohen Palette inspirieren. Fühlt euch jedoch völlig frei, die Farbe zu tragen, die euch am besten steht und in der ihr euch fantastisch fühlt.`,
			tips: [
				"Schuhe mit Blockabsatz sind für den Boden besser geeignet und bequemer als Stilettos.",
				"Bitte vermeidet Weiß, Elfenbein, Champagner oder ähnliche Töne sowie Farben, die leicht mit einem Brautkleid assoziiert werden könnten.",
				"San Cristóbal liegt auf über 2.000 Metern Höhe: Sobald die Sonne im März untergeht, wird es kühl. Eine Stola, ein eleganter Schal oder ein Sakko sind für den Abend unbedingt empfehlenswert.",
			],
		},
		travelTips: {
			title: "Anreisetipps",

			flights: {
				title: "Flüge",
				body: {
					first: "Flug nach",
					aeropuerto: "Tuxtla Gutiérrez (TGZ)",
					p1: "— das ist der nächstgelegene Flughafen mit den meisten nationalen Verbindungen.",
					h6_1: "Vom Flughafen aus habt ihr folgende Möglichkeiten:",
					p2: "Taxi oder privat organisierter Transfer,",
					p3: "Shuttle-Service vom Flughafen",
					h6_2: "(Fahrzeit ca. 1 Stunde und 15 Minuten)",
				},
			},

			accommodation: {
				title: "Unterkünfte",
				body: `San Cristóbal ist eine Stadt, die man am besten gemütlich zu Fuß erkundet und sich in den Kopfsteinpflasterstraßen verliert.
 Wir empfehlen euch, im historischen Zentrum oder in den angrenzenden Vierteln zu übernachten, um das Flair der Stadt in vollen Zügen genießen zu können.`,
				hotelsTitle: "Hotels",
				hostelsTitle: "Hostels",
				hotels: [
					{ name: "Hotel Bo", url: "https://www.hotelbo.mx" },
					{ name: "Casa Lum Hotel Boutique", url: "https://casalum.com" },
					{ name: "Na Bolom", url: "https://www.nabolom.org" },
					{
						name: "Hotel Diego de Mazariegos",
						url: "https://diegodemazariegos.com/",
					},
				],
				discountHotelsText:
					"In den folgenden Hotels könnt ihr mit unserem Code zu einem Sondertarif buchen.",
				guideLinkText:
					"Klickt hier für die Schritt-für-Schritt Buchungsanleitung",
				discountHotels: [
					{
						name: "Casa del Alma Hotel Boutique & Spa",
						url: "https://www.casadelalma.mx",
					},
					{
						name: "Hotel Sombra del Agua",
						url: "http://www.sombradelagua.com.mx",
					},

					{ name: "Sereno Hotel", url: "https://www.instagram.com/serenoah/" },
				],
				hostels: [
					{
						name: "Puerta Vieja",
						url: "https://puertaviejahostel.com/",
					},
					{
						name: "Hostal Qhia",
						url: "https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Qhi-Hostel/San-Cristobal-de-las-Casas/299243?from=2025-09-24&to=2025-09-25&guests=2",
					},
					{
						name: "Hostal Casa Gaia",
						url: "https://www.hostelworld.com/hostels/p/315403/hostal-casa-gaia/?utm_source=shared_property&utm_medium=clipboard&utm_campaign=315403&source=web_shared_property-315403",
					},
				],
				airbnbRecommendation:
					"Wir empfehlen auch, eigene Airbnbs zu buchen, falls ihr eine private Unterkunft oder ein ganzes Haus für eine größere Gruppe bevorzugt.",
			},
		},
		whatToDo: {
			title: "Unternehmungen",
			recomendacionesTitle: "Empfehlungen",
			recomendaciones: [
				{
					name: "Restaurante Tarumba",
					description:
						"Exzellenter Spezialitätenkaffee und ein wunderschöner Innenhof zum Frühstücken.",
					url: "https://www.instagram.com/tarumba.mx/",
				},
				{
					name: "Tierra y Cielo",
					description:
						"Gehobene regionale Küche aus Chiapas von Chefköchin Marta Zepeda. Ideal für ein besonderes Abendessen.",
					url: "https://www.instagram.com/tierraycielorestaurante",
				},
				{
					name: "Restaurante Miura",
					description:
						"Kulturzentrum und Teehaus mit einer Terrasse, die den besten Blick auf den Sonnenuntergang bietet.",
					url: "https://www.instagram.com/miurasancris/",
				},
				{
					name: "Historico Café",
					description:
						"Lokale Rösterei mit Fokus auf Hochlandkaffee aus Chiapas in entspannter Atmosphäre.",
					url: "https://www.instagram.com/historicocafetostador/",
				},
			],
			activitiesTitle: "Aktivitäten",
			activities: [
				"Entlang des Andador Guadalupe und des Andador Eclesiástico spazieren und die böhmische Atmosphäre, Straßenmusiker und Galerien genießen.",
				"Den Süßigkeiten- und Handwerksmarkt besuchen, um ein handgemachtes Souvenir mitzunehmen und typische Süßigkeiten aus Chiapas zu probieren.",
				"Die knapp 280 Stufen zum Templo de San Cristobalito hinaufsteigen, um einen unglaublichen Panoramablick auf die ganze Stadt zu haben.",
				"Das Bernsteinmuseum in einem wunderschönen ehemaligen Kloster im Zentrum besuchen, um die versteinerten Harzstücke aus der Nähe zu betrachten.",
				"Das Textilzentrum der Maya-Welt neben Santo Domingo besuchen, um das Design und die Farben der traditionellen Kleidung zu sehen.",
			],
			extraTuxtla: {
				title: "Unterwegs in Tuxtla (Extra)",
				note: "Ideen für die An- oder Abreise über den Flughafen Tuxtla. Einige Aktivitäten dauern mehrere Stunden, daher empfehlen wir, sie als Halbtagesausflug oder mit zusätzlicher Übernachtung einzuplanen.",
				items: [
					{
						title: "Cañón del Sumidero & Chiapa de Corzo",
						description:
							"Einer der wichtigsten Ausflüge der Region. Die Bootstour durch den Canyon dauert mehrere Stunden und startet in Chiapa de Corzo, einem Pueblo Mágico, das sich ideal für eine Mahlzeit und einen kurzen Spaziergang eignet. Am besten als Halbtages- oder Ganztagesausflug einplanen, nicht als kurzer Zwischenstopp.",
					},
					{
						title: "Parque de la Marimba & Zentrum von Tuxtla",
						description:
							"Eine gute Option, wenn ihr ein paar Stunden in Tuxtla habt, bevor ihr weiterreist. Am späten Nachmittag und Abend füllt sich der Park mit Live-Musik und lokaler Atmosphäre. Ideal, um nach dem Flug anzukommen oder vor der Weiterreise nach San Cristóbal zu entspannen.",
					},
				],
			},
		},

		faq: {
			title: "Häufig gestellte Fragen (FAQ)",
			sections: [
				{
					category: "Zusage & Rückmeldung",
					items: [
						{
							q: "Bis wann muss ich spätestens zu- oder absagen?",
							a: "Bitte gebt uns bis spätestens zum 31. Oktober 2026 Bescheid, damit wir die Details mit unseren Dienstleistern finalisieren können.",
						},
						{
							q: "Wie bestätige ich meine Teilnahme?",
							a: "Bitte gib uns deine Zu- oder Absage direkt hier auf unserer Webseite im Bereich „RSVP“.",
						},
						{
							q: "Kann ich eine Begleitperson mitbringen?",
							a: "Falls eine Begleitperson für dich vorgesehen ist, ist ihr Name oder ein Platzhalter in deiner Einladung aufgeführt. Aus Kapazitätsgründen können wir leider nur die namentlich genannten Gäste empfangen.",
						},
						{
							q: "Was soll ich tun, wenn sich meine Pläne ändern?",
							a: "Wir verstehen, dass sich Reisepläne ändern können. Sollten sich nach eurer Rückmeldung Änderungen ergeben, bitten wir euch, dem Bräutigam so bald wie möglich via WhatsApp bescheid zu geben.",
						},
					],
				},
				{
					category: "Ort & Logistik",
					items: [
						{
							q: "Wie lautet die Adresse der Trauung und der Feier?",
							a: "Sowohl die Trauung als auch die Feier finden in der La Kist Hacienda in San Cristóbal de las Casas, Chiapas, statt.",
							mapEmbed:
								"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.908445188916!2d-92.65341842264378!3d16.73141942136648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed459b43901f83%3A0x46532eaec7f32841!2sHacienda%20La%20Kist!5e0!3m2!1sen!2sde!4v1774632742440!5m2!1sen!2sde",
						},
						{
							q: "Findet die Trauung drinnen oder im Freien statt?",
							a: "Die Trauung findet im Innenbereich statt, gefolgt von der Feier im Garten- und Terrassenbereich.",
						},
						{
							q: "Gibt es einen Shuttle-Service?",
							a: "Wir bieten keinen offiziellen Shuttle-Service oder persönlichen Transfer an. Taxis sind vor Ort jedoch leicht verfügbar.",
						},
					],
				},
				{
					category: "Dresscode",
					items: [
						{
							q: "Was ist der Dresscode?",
							a: "Wir würden uns freuen, wenn ihr in formeller Kleidung erscheint. Für die Herren bedeutet dies ein dunkler Anzug (Krawatte ist optional). Für die Damen sind Optionen wie lange Kleider, elegante Midikleider oder festliche Hosenanzüge ideal.",
						},
						{
							q: "Welches Schuhwerk ist für den Veranstaltungsort am besten geeignet?",
							a: "Ein großer Teil der Feier findet auf Kopfsteinpflaster statt. Wir empfehlen daher den Damen Schuhe mit Blockabsatz oder allgemein sehr bequemes Schuhwerk, damit ihr das Fest problemlos genießen könnt.",
						},
						{
							q: "Sollte ich noch etwas zusätzlich mitbringen?",
							a: "Unsere Hochzeit findet im März in San Cristóbal de las Casas statt. Auch wenn die Sonne tagsüber sehr angenehm ist, kühlt es in den Bergen nachts deutlich ab und es kann ziemlich kalt werden. Wir empfehlen euch dringend, einen Mantel, eine warme Jacke oder eine dicke Stola mitzubringen, damit ihr den Abend gemütlich genießen könnt.",
						},
					],
				},
				{
					category: "Reise & Unterkünfte",
					items: [
						{
							q: "An welchen Flughafen sollte ich fliegen?",
							a: "Der nächstgelegene Flughafen zu San Cristóbal de las Casas ist der internationale Flughafen Ángel Albino Corzo (TGZ) in Tuxtla Gutiérrez, Chiapas. Von dort aus sind es mit dem Auto etwa eine Stunde und 15 Minuten bis nach San Cristóbal.",
						},
						{
							q: "Wo sollte ich übernachten?",
							a: "Wir empfehlen euch, nach Hotels oder Airbnbs direkt in San Cristóbal de las Casas zu suchen. In der Rubrik 'Anreisetipps' auf unserer Website haben wir bereits einige Hotelempfehlungen für euch zusammengestellt.",
						},
						{
							q: "Gibt es Hotelkontingente oder Rabattcodes?",
							a: "Ja, wir haben den speziellen Rabattcode MONSEMICHI. Dieser gilt für Direktbuchungen im Casa del Alma, Sereno Hotel und Sombra del Agua.",
						},
						{
							q: "Wie bewege ich mich am besten vor Ort fort?",
							a: "Vom Flughafen Tuxtla Gutiérrez aus könnt ihr ein offizielles Taxi nehmen, einen Shuttle-Service (Sammeltaxi) buchen oder einen Mietwagen für die Fahrt nach San Cristóbal mieten. Sobald ihr in San Cristóbal seid, lässt sich das Stadtzentrum sehr gut zu Fuß erkunden. Für kürzere Strecken sind lokale Taxis oder private Fahrdienste zudem günstig und praktisch.",
						},
					],
				},
				{
					category: "Tagesablauf",
					items: [
						{
							q: "Wann sollte ich zur Trauung erscheinen?",
							a: "Bitte sei etwa 30 Minuten vor Beginn da. Wir möchten betonen, dass die Trauung pünktlich zur auf der Einladung angegebenen Zeit beginnt. Wenn du frühzeitig ankommst, kannst du in Ruhe deinen Platz finden, ohne den Beginn zu stören.",
						},
						{
							q: "Wann endet die Feier voraussichtlich?",
							a: "Die Musik und die Feier enden offiziell um 02:00 Uhr morgens.",
						},
					],
				},
				{
					category: "Social-Media-Etikette",
					items: [
						{
							q: "Darf ich während der Trauung Fotos machen?",
							a: "Wir wünschen uns eine vollständig unplugged Trauung. Bitte verzichtet während der Zeremonie auf Fotos, Videos und darauf, eure Handys hochzuhalten, und lasst unseren professionellen Fotografen diesen Moment festhalten.",
						},
						{
							q: "Darf ich Fotos in den sozialen Netzwerken posten?",
							a: "Wir freuen uns sehr, wenn ihr eure persönlichen Erinnerungen an diesen Tag festhaltet! Macht gerne so viele Selfies und Aufnahmen von der Kulisse, wie ihr möchtet. Wir haben jedoch eine herzliche Bitte: Um die Privatsphäre all unserer Gäste zu wahren, bitten wir euch, keine Fotos in sozialen Netzwerken zu teilen, auf denen andere Personen deutlich zu erkennen sind. Vielen Dank, dass ihr uns helft, eine vertraute Atmosphäre zu schaffen, in der sich jeder wohlfühlt!",
						},
					],
				},
				{
					category: "Geschenke",
					items: [
						{
							q: "Wo findet man eure Geschenkeliste?",
							a: "Für uns ist es das schönste Geschenk, dass ihr die weite Reise auf euch nehmt, um diesen Tag mit uns zu verbringen. Wer uns dennoch eine zusätzliche Freude machen möchte, kann dies gerne über unseren 'Zukunfts-Fonds' direkt hier auf der Website tun.",
						},
						{
							q: "Kann ich ein Geschenk direkt zur Hochzeit mitbringen?",
							a: "Da wir mit dem Flugzeug anreisen und unser Gepäck nur begrenzt Platz bietet, möchten wir euch herzlich bitten, auf Geschenke vor Ort zu verzichten. Falls ihr uns eine Freude machen möchtet, nutzt dafür gerne die Online-Optionen auf unserer Website. Über eine persönliche Karte mit euren Glückwünschen freuen wir uns natürlich immer sehr.",
						},
						{
							q: "Kann ich ein Geschenk auch erst später senden?",
							a: "Natürlich! Unser Hochzeits-Fonds bleibt auch nach dem großen Tag noch für euch geöffnet.",
						},
					],
				},
				{
					category: "Verpflegung & Kontakt",
					items: [
						{
							q: "Welches Essen wird es geben?",
							a: "Wir servieren ein köstliches Buffet mit einer großen Auswahl an verschiedenen Gerichten, sodass für jeden Geschmack etwas dabei ist.",
						},
						{
							q: "Was ist, wenn ich Nahrungsmittelunverträglichkeiten habe?",
							a: "Wir möchten, dass alle Gäste das Essen in vollen Zügen genießen können. Bitte gib bei deiner Rückmeldung (RSVP) eventuelle Allergien oder Unverträglichkeiten an, damit die Küche dies bei der Planung berücksichtigen kann.",
						},
						{
							q: "An wen kann ich mich bei weiteren Fragen wenden?",
							a: "Solltest du Fragen zu Flügen, Unterkünften oder anderen Details haben, schreibe bitte eine Nachricht an unsere Wedding Plannerin Dana Balbuena unter +52 961 239 0494. Sie hilft dir gerne weiter.",
						},
					],
				},
			],
		},
		rsvp: {
			greeting: "Hallo",
			title: "feiern wir zusammen?",
			attendanceLabel:
				"Bitte bestätige deine Teilnahme bis zum 31. Oktober 2026.",
			description:
				"Bitte bestätige deine Teilnahme bis zum 30. September 2026.",

			yesOption: "Ja, sehr gerne!",
			noOption: "Komme(n) leider nicht",
			confirmAttendeesLabel: "Teilnehmer bestätigen:",
			plusOnePlaceholder: "Name der Begleitperson",
			dietaryLabel: "Allergien oder Ernährungseinschränkungen",
			messageLabel: "Nachricht an das Brautpaar",
			submitButton: "Bestätigung absenden",
			sending: "Wird gesendet...",
			success: "Vielen Dank! Deine Antwort wurde gespeichert.",
			error: "Es gab einen Fehler. Bitte versuche es erneut.",
		},
		registry: {
			title: "Geschenke",
			intro: `EURE ANWESENHEIT
IST FÜR UNS DAS GRÖSSTE GESCHENK`,
			description:
				"Wenn ihr uns etwas schenken möchtet, freuen wir uns sehr über eine Unterstützung für unsere Hochzeitsreise oder unseren gemeinsamen Start ins Zuhause.",
			fundTitle: "FLITTERWOCHEN & ZUKUNFTS-FONDS",
			fundLinkLabel: "Flitterwochen-Fonds unterstützen",
			fundLinkUrl: "https://www.paypal.me/michaelhaerle57", // Swap this for your actual Wise link
		},
	},
	en: {
		nav: {
			home: "Home",
			dressCode: "Dress Code",
			travel: "Travel",
			faq: "FAQ",
			rsvp: "RSVP",
			registry: "Registry",
		},
		invitation: {
			line1: "With great joy,",
			line2: "WE INVITE YOU TO JOIN US TO CELEBRATE OUR WEDDING",
			line3: "27.03.27",
			line4: "LA KIST HACIENDA",
			line5: "SAN CRISTÓBAL DE LAS CASAS, MEXICO",
			line6: "4:00 PM - CEREMONY",
			line7: "Cocktails and reception to follow",
			rsvp: "RSVP HERE",
		},
		dressCode: {
			title: "Dress Code",
			line1: "Formal Evening Attire",
			description: `We would love for you to join the hacienda's atmosphere with an elegant and sophisticated look.

Formal suits and floor-length dresses are perfect for the occasion.

The celebration will take place in a courtyard with cobblestones and grassy areas, so we recommend considering appropriate footwear for these surfaces.

We are inspired by deep, earthy tones and warm metallics; however, please feel free to wear whichever color suits you best and makes you feel spectacular.`,
			tips: [
				"Block heels or wedges are more comfortable than stilettos.",
				"Please avoid white, ivory, champagne, or any shades very similar to the bridal gowns.",
				"March in San Cristóbal can get cool at night; a shawl or light jacket is recommended.",
			],
		},
		travelTips: {
			title: "Travel Tips",

			flights: {
				title: "Flights",
				body: {
					first: "Fly to",
					aeropuerto: "Tuxtla Gutiérrez (TGZ)",
					p1: "— this is the nearest airport with the most domestic connections.",
					h6_1: "Once at the airport, you can take:",
					p2: "Taxi or privately arranged transportation,",
					p3: "Shared shuttle services available at the airport",
					h6_2: "(approximately 1 hour and 15 minutes)",
				},
			},

			accommodation: {
				title: "Accommodation",
				body: `San Cristóbal is a city meant for walking slowly and getting lost among its cobblestone streets.
 We recommend staying in the historic center or nearby neighborhoods to fully enjoy the experience.`,
				hotelsTitle: "Hotels",
				hostelsTitle: "Hostels",
				hotels: [
					{ name: "Hotel Bo", url: "https://www.hotelbo.mx" },
					{ name: "Casa Lum Hotel Boutique", url: "https://casalum.com" },
					{ name: "Na Bolom", url: "https://www.nabolom.org" },
					{
						name: "Hotel Diego de Mazariegos",
						url: "https://diegodemazariegos.com/",
					},
				],
				discountHotelsText:
					"You can book with our special discount code at the following hotels.",
				guideLinkText: "Click here to view the step-by-step reservation guide",
				discountHotels: [
					{
						name: "Casa del Alma Hotel Boutique & Spa",
						url: "https://www.casadelalma.mx",
					},
					{
						name: "Hotel Sombra del Agua",
						url: "http://www.sombradelagua.com.mx",
					},

					{ name: "Sereno Hotel", url: "https://www.instagram.com/serenoah/" },
				],
				hostels: [
					{
						name: "Puerta Vieja",
						url: "https://puertaviejahostel.com/",
					},
					{
						name: "Hostal Qhia",
						url: "https://www.spanish.hostelworld.com/pwa/hosteldetails.php/Qhi-Hostel/San-Cristobal-de-las-Casas/299243?from=2025-09-24&to=2025-09-25&guests=2",
					},
					{
						name: "Hostal Casa Gaia",
						url: "https://www.hostelworld.com/hostels/p/315403/hostal-casa-gaia/?utm_source=shared_property&utm_medium=clipboard&utm_campaign=315403&source=web_shared_property-315403",
					},
				],
				airbnbRecommendation:
					"We also highly recommend booking your own Airbnb if you prefer a private space or renting a whole house for a larger group.",
			},
		},
		whatToDo: {
			title: "Things to Do",
			recomendacionesTitle: "Recommendations",
			recomendaciones: [
				{
					name: "Restaurante Tarumba",
					description:
						"Great specialty coffee and a beautiful courtyard for breakfast.",
					url: "https://www.instagram.com/tarumba.mx/",
				},
				{
					name: "Tierra y Cielo",
					description:
						"High-end regional Chiapan cuisine by Chef Marta Zepeda. Perfect for a special dinner.",
					url: "https://www.instagram.com/tierraycielorestaurante",
				},
				{
					name: "Restaurante Miura",
					description:
						"Cultural venue and tea house with a terrace offering the best sunset views in the city.",
					url: "https://www.instagram.com/miurasancris/",
				},
				{
					name: "Historico Café",
					description:
						"Local roastery and café focused on high-altitude Chiapas coffee in a relaxed setting.",
					url: "https://www.instagram.com/historicocafetostador/",
				},
			],
			activitiesTitle: "Activities",
			activities: [
				"Walk along the Andador Guadalupe and Andador Eclesiástico, enjoying the bohemian atmosphere, street musicians, and galleries.",
				"Visit the Sweets and Crafts Market to take home a handmade souvenir and try typical Chiapas candies.",
				"Climb the nearly 280 steps to the Templo de San Cristobalito for an incredible panoramic view of the whole city.",
				"Visit the Amber Museum, located in a beautiful former convent downtown, to see the fossilized resin pieces up close.",
				"Visit the Mayan World Textile Center, next to Santo Domingo, to appreciate the design and colors of traditional clothing.",
			],
			extraTuxtla: {
				title: "On the way through Tuxtla (Extra)",
				note: "Ideas for arrivals or departures via Tuxtla airport. Some activities take several hours, so we recommend planning them as a half-day excursion or with an additional overnight stay.",
				items: [
					{
						title: "Sumidero Canyon & Chiapa de Corzo",
						description:
							"One of the most important excursions in the region. The boat tour through the canyon takes several hours and departs from Chiapa de Corzo, a Magical Town that is perfect for a meal and a short walk. Best experienced as a half-day or full-day trip, not a quick stop.",
					},
					{
						title: "Marimba Park & downtown Tuxtla",
						description:
							"A good option if you have a few hours in Tuxtla before continuing your journey. In the late afternoon and evening, the park comes alive with live music and a local atmosphere. Ideal for slowing down after a flight or before heading to San Cristóbal.",
					},
				],
			},
		},

		faq: {
			title: "Frequently Asked Questions",
			sections: [
				{
					category: "RSVP & Confirmation",
					items: [
						{
							q: "What is the deadline to RSVP?",
							a: "Kindly RSVP by September 30, 2026 so we may finalize arrangements with our vendors.",
						},
						{
							q: "How do I RSVP?",
							a: "You can RSVP directly here on our website by visiting the 'RSVP' tab.",
						},
						{
							q: "Can I bring a plus one?",
							a: "If a plus one has been included for you, their name will be listed on your invitation. Due to capacity constraints, we can only accommodate the guests specifically named.",
						},
						{
							q: "Are children invited?",
							a: "This is an intimate celebration designed for adults. We kindly ask for your understanding.",
						},
						{
							q: "What should I do if my plans change?",
							a: "We understand that travel plans can change. If you need to update your RSVP after the deadline due to unforeseen circumstances, please contact our wedding planner via WhatsApp: Dana Balbuena +52 961 239 0494",
						},
					],
				},
				{
					category: "Location & Logistics",
					items: [
						{
							q: "What is the address for the ceremony and reception?",
							a: "Both the ceremony and the reception will be held at La Kist Hacienda, located in San Cristóbal de las Casas, Chiapas.",
							mapEmbed:
								"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.908445188916!2d-92.65341842264378!3d16.73141942136648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed459b43901f83%3A0x46532eaec7f32841!2sHacienda%20La%20Kist!5e0!3m2!1sen!2sde!4v1774632742440!5m2!1sen!2sde",
						},
						{
							q: "Will the ceremony be indoors or outdoors?",
							a: "The ceremony will take place indoors, followed by the celebration in the garden and terrace area.",
						},
						{
							q: "Will there be transportation provided?",
							a: "We will not provide official transportation or personalized transfer services. However, taxis are easy to arrange in the area.",
						},
					],
				},
				{
					category: "Dress Code",
					items: [
						{
							q: "What is the dress code?",
							a: "We would love for you to join us in Formal Evening attire. For men, this means wearing a dark suit (tie is optional). For women, options such as floor-length dresses, elegant midi dresses, or formal pant suits are ideal.",
						},
						{
							q: "What type of footwear is most suitable for the venue?",
							a: "A large part of the event will take place on cobblestones, so we suggest block heels or wedges for women, or very comfortable footwear to ensure you can enjoy the celebration without any trouble.",
						},
						{
							q: "Should I bring anything extra?",
							a: "Our wedding will be in San Cristóbal de las Casas in March. While the sun is very pleasant during the day, the temperature drops considerably at night in the mountains and it can get quite cold. We highly recommend bringing a coat, a warm jacket, or a thick shawl so you can enjoy the evening comfortably.",
						},
					],
				},
				{
					category: "Travel & Accommodation",
					items: [
						{
							q: "Which airport should I fly into?",
							a: "The closest airport to San Cristóbal de las Casas is the Ángel Albino Corzo International Airport (TGZ) in Tuxtla Gutiérrez, Chiapas. It is approximately 1 hour and 15 minutes from San Cristóbal by car.",
						},
						{
							q: "Where should I stay?",
							a: "We suggest looking for hotels or Airbnbs in the San Cristóbal de las Casas area. In the 'Travel Tips' section of our website, we have provided a few recommended hotels.",
						},
						{
							q: "Do you have hotel blocks or discount codes?",
							a: "Yes, we have the special discount code MONSEANDMICHI. You can use this code when booking directly with Casa del Alma, Sereno Hotel, and Sombra del Agua.",
						},
						{
							q: "What is the best way to get around?",
							a: "From the Tuxtla Gutiérrez airport, you can take a secure taxi, book a shared shuttle service, or rent a car for the drive up to San Cristóbal. Once settled in San Cristóbal, the city center is easily explored on foot, and local taxis are affordable and practical for short distances.",
						},
					],
				},
				{
					category: "Wedding Day",
					items: [
						{
							q: "What time should I arrive for the ceremony?",
							a: "Please arrive about 30 minutes early. We want to emphasize that the ceremony will begin EXACTLY at the time indicated on the invitation. Arriving early will allow you to find your seat comfortably without interrupting the start.",
						},
						{
							q: "When is the celebration expected to end?",
							a: "The music and the celebration will officially end at 2:00 a.m.",
						},
						{
							q: "Are there any pre- or post-wedding events that guests are invited to?",
							a: "Yes, we will have a welcome toast on Friday night.",
						},
					],
				},
				{
					category: "Photos & Privacy",
					items: [
						{
							q: "Can I take photos during the ceremony?",
							a: "We want our ceremony to be a fully unplugged moment. We kindly ask that you refrain from taking photos or videos and keep your phones away during the ceremony, allowing our professional photographer to capture this moment.",
						},
						{
							q: "Should I post on social media?",
							a: "We love the idea of you capturing memories of this day! Take as many selfies as you want and capture the beautiful details of the venue. We only have one very special request: to make everyone feel 100% comfortable, especially those visiting us from Germany (where the privacy culture is very different), we ask from the heart that you refrain from taking or posting photos where other people are facing the camera. Thank you for helping us create an environment of trust where we can all relax and enjoy!",
						},
					],
				},
				{
					category: "Gifts",
					items: [
						{
							q: "Where is your gift registry?",
							a: "For us, the fact that you are making the trip to join us is the best gift of all, and nothing else is necessary. However, if you wish to honor us with a gift, we would deeply appreciate it. We have chosen a single option: a fund for our future. To make contributions simple and secure, we have set up a direct link on our website.",
						},
						{
							q: "Can I bring a gift to the wedding?",
							a: "Due to flight logistics and limited suitcase space for everyone, we kindly ask that you use the online options on our website instead of bringing physical gifts or boxes to the event. A card with your well wishes is more than enough if you would like to hand something over in person!",
						},
						{
							q: "Can I send a gift later?",
							a: "Of course! Our honeymoon fund will remain open even after the big day.",
						},
					],
				},
				{
					category: "Food & Assistance",
					items: [
						{
							q: "What kind of food will be served?",
							a: "We will serve a delicious buffet-style menu. There will be an excellent variety of dishes, ensuring that everyone enjoys and finds something they love.",
						},
						{
							q: "What if I have dietary restrictions?",
							a: "We want everyone to enjoy themselves to the fullest. When you fill out your RSVP form, please note any allergies or severe dietary restrictions so the kitchen can take them into account.",
						},
						{
							q: "Who can I contact if I have other questions?",
							a: "If you have any questions regarding flights, accommodation, or any other details, please send a direct message to our Wedding Planner, Dana Balbuena, at +52 961 239 0494, and she will be happy to help you.",
						},
					],
				},
			],
		},
		rsvp: {
			greeting: "Hello",
			title: "Will you join us?",
			description:
				"Please help us by confirming your attendance before September 30th, 2026.",
			attendanceLabel: "Will you attend?",
			yesOption: "I'll be there!",
			noOption: "Regretfully, I can't make it",
			confirmAttendeesLabel: "Confirm attendees:",
			plusOnePlaceholder: "Plus one name",
			dietaryLabel: "Allergies or dietary restrictions",
			messageLabel: "Message for the couple",
			submitButton: "Send Confirmation",
			sending: "Sending...",
			success: "Thank you! Your response has been saved.",
			error: "There was an error. Please try again or contact us.",
		},
		registry: {
			title: "Gift Registry",
			intro: `YOUR PRESENCE
IS THE MOST IMPORTANT GIFT
FOR US`,
			description:
				"If you would like to give us a gift, we would be very happy about a contribution to our honeymoon or our shared home.",
			fundTitle: "HONEYMOON & HOME FUND",
			fundLinkLabel: "Contribute to our Honeymoon",
			fundLinkUrl: "https://www.paypal.me/michaelhaerle57", // Swap this for your actual Wise link
		},
	},
};
