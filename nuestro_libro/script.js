
const nombreDeEl = 'Tiago';

const paginas = [
    {
        tipo: 'portada',
        etiqueta: 'Un regalo para ti',
        titulo: 'Sin buscarte,\nte encontré',
        texto: 'Hay historias que comienzan sin que nos demos cuenta. La nuestra empezó con una conversación cualquiera… y hoy es una de las partes más bonitas de mi vida.'
    },
    {
        tipo: 'capitulo',
        etiqueta: 'Capítulo 01 · El principio',
        titulo: 'Un día cualquiera en The Corner',
        parrafos: [
            'Hace aproximadamente un año y dos meses entré a Roblox, a un juego llamado The Corner. Aquel día estaba solo. No tenía un gran plan: simplemente quería encontrar a alguien con quien hablar y pasar un buen rato.',
            'Entonces te encontré. Estabas con otra persona y yo me senté a conversar con ustedes. Todavía recuerdo cómo intentaba hacer reír a todos con aquel programa emulador. Era uno de esos momentos sencillos que parecen pequeños cuando suceden, pero que con el tiempo adquieren un significado enorme.',
            'No sabía quién ibas a llegar a ser para mí. No imaginaba que una persona a la que conocí por casualidad terminaría ocupando un lugar tan especial en mi corazón.',
            'Y pensar que todo comenzó en una esquina de un videojuego…'
        ]
    },
    {
        tipo: 'capitulo',
        etiqueta: 'Capítulo 02 · Nuestra amistad',
        titulo: 'Las conversaciones que se quedaron conmigo',
        parrafos: [
            'Después de aquel día me agregaste y comenzamos a hablar. A veces por mensajes, otras por llamadas. No siempre estábamos presentes a cada momento, pero de alguna manera siempre encontrábamos algo que decirnos.',
            'En aquel entonces los dos teníamos nuestras propias vidas y nuestras relaciones. Éramos amigos, y aun así había algo muy bonito en la manera en que nos acompañábamos.',
            'Recuerdo especialmente tu forma de hablarme. Cuidabas las palabras, pensabas cómo decir las cosas y tratabas de que yo pudiera entenderte sin sentirme peor. No sé si alguna vez te diste cuenta de lo mucho que eso significaba para mí.',
            'Cuando te conocí estaba atravesando una etapa difícil. Y tú, con tu amabilidad, tu atención y esa manera tan tuya de escuchar, me regalaste momentos de alegría que todavía guardo con muchísimo cariño.'
        ]
    },
    {
        tipo: 'capitulo',
        etiqueta: 'Capítulo 03 · Algo cambió',
        titulo: 'Lo que no sabía cómo decirte',
        parrafos: [
            'Con el tiempo empecé a darme cuenta de que lo que sentía por ti era diferente. Me gustaba hablar contigo, me alegraba encontrarte y admiraba la persona que eras. Sin embargo, en ese momento yo tenía pareja y no quería confundirte ni hacer las cosas mal.',
            'Así que guardé aquellos sentimientos mientras nuestra amistad continuaba. Pasaron los meses, nuestras circunstancias cambiaron y, cuando ambos ya habíamos terminado nuestras relaciones anteriores, encontré el valor para contarte lo que había sentido.',
            'Hace unos meses me declaré. Hablamos de lo que había entre nosotros y poco a poco comenzamos a construir algo nuevo. Y hace aproximadamente un mes lo hicimos oficial.',
            'Me sigue pareciendo precioso que antes de llamarte mi pareja ya pudiera llamarte alguien importante en mi vida.'
        ]
    },
    {
        tipo: 'capitulo',
        etiqueta: 'Capítulo 04 · Lo que admiro de ti',
        titulo: 'La persona maravillosa que eres',
        parrafos: [
            'Me encanta tu manera de ser. Eres amable, atento, cariñoso y tienes un corazón enorme. Tienes una capacidad muy especial para encontrar palabras que reconfortan, incluso cuando tú también estás pasando por momentos complicados.',
            'Admiro que te preocupes por los demás, aunque a veces quisiera pedirte que te pusieras a ti primero. Me preocupa que te descuides, que te enfermes o que cargues demasiado por intentar ayudar a todos.',
            'Quiero que recuerdes que tú también mereces descansar. Mereces que te cuiden, que te escuchen y que te quieran con la misma ternura con la que tú quieres a los demás.',
            'No tienes que estar bien todos los días para ser increíble. Para mí eres una persona maravillosa incluso cuando te cuesta verlo.'
        ]
    },
    {
        tipo: 'capitulo',
        etiqueta: 'Capítulo 05 · Nuestros días',
        titulo: 'Lo bonito de estar contigo',
        parrafos: [
            'Me encantan las horas en las que hablamos sin darnos cuenta del tiempo. Me encanta poder sonreír contigo, reírnos de cualquier cosa y sentir esa alegría tan particular que aparece cuando estamos juntos.',
            'También sé que hay días en los que hablamos poco, o en los que la vida no nos deja coincidir como quisiéramos. Pero eso no borra lo que siento. No necesito que cada momento sea perfecto para valorar lo nuestro.',
            'Lo que más me gusta es que puedo ser yo contigo. Puedo contarte mis cosas, escucharte y seguir conociéndote, incluso después de todo este tiempo.',
            'Nuestra relación como pareja apenas está comenzando, pero el cariño que nos trajo hasta aquí lleva mucho más tiempo creciendo.'
        ]
    },
    {
        tipo: 'recuerdos',
        etiqueta: 'Pequeños tesoros',
        titulo: 'Momentos que guardo en mi corazón',
        recuerdos: [
            ['🎮 El primer encuentro', 'Aquel día en The Corner, cuando me senté a hablar contigo sin imaginar lo que vendría.'],
            ['💬 Nuestros mensajes', 'Las conversaciones que podían durar horas y que siempre me dejaban algo bonito.'],
            ['📞 Nuestras llamadas', 'Escucharnos, reírnos y sentirnos cerca incluso a través de una pantalla.'],
            ['💗 El día que me declaré', 'El momento en que por fin encontré el valor para decirte lo que sentía.'],
            ['✨ Nuestro comienzo', 'Cuando decidimos darle un nombre a lo que estábamos construyendo juntos.']
        ]
    },
    {
        tipo: 'carta',
        etiqueta: 'De mi corazón al tuyo',
        titulo: `Una carta para ti, ${nombreDeEl}`,
        parrafos: [
            'No sé si exista una forma perfecta de empezar esta carta, porque hay tantas cosas que quisiera decirte que a veces las palabras parecen quedarse cortas. Pero quiero intentarlo, porque mereces saber lo importante que eres para mí.',
            'Cuando pienso en nosotros, me hace sonreír recordar que todo comenzó de una manera tan inesperada. Yo solo entré a un juego buscando con quién conversar. No estaba buscando una historia de amor. No estaba esperando encontrar a alguien que me hiciera sentir tanto. Y, sin embargo, ahí estabas tú.',
            'Durante este último año he podido conocer a una persona que admiro profundamente. No solamente por lo cariñoso que eres, sino por tu paciencia, tu forma de escuchar y la delicadeza con la que eliges tus palabras. Hay personas que hablan por hablar; tú muchas veces has sabido decir justo lo que necesitaba escuchar.',
            'Quiero agradecerte por acompañarme en días que no fueron sencillos. Ha habido momentos en los que me he sentido cansado, perdido o sin fuerzas para seguir intentando las cosas. En medio de todo eso, tu compañía y tu ejemplo me han recordado que todavía existen motivos para sonreír y que vale la pena continuar buscando días mejores.',
            'No quiero que sientas que debes resolver mis problemas ni que tienes que estar siempre fuerte por mí. No te corresponde cargar con todo lo que me pasa. Lo que quiero decirte es algo mucho más sencillo: gracias por haber estado, por escucharme y por ser una presencia tan bonita en mi vida. Me has ayudado mucho más de lo que imaginas.',
            'A veces te miro y me pregunto cómo puedes ser tan bueno con los demás. Me encanta ese corazón que tienes, pero también deseo que aprendas a cuidarlo. Quiero que comas bien, que descanses, que te permitas sentirte mal cuando lo necesites y que no te olvides de ti por intentar sostener al mundo entero.',
            'Ojalá pudiera quitarte las preocupaciones y hacer que todo lo difícil se volviera más ligero. Sé que no puedo arreglarlo todo, pero sí quiero acompañarte, escucharte con paciencia y darte un lugar donde puedas sentirte querido, respetado y seguro para ser tú mismo.',
            'Me gustaría poder regalarte mil cosas, sorprenderte con detalles enormes y darte todo lo bonito que mereces. A veces me entristece no poder hacerlo como quisiera. Pero hoy quiero regalarte algo que sí tengo: mi tiempo, mis recuerdos y estas palabras que nacen de lo más sincero de mi corazón.',
            'Gracias por cada mensaje, por cada llamada, por las risas, por los silencios cómodos y hasta por los días en los que apenas podemos hablar. Gracias por haber sido mi amigo antes de ser mi pareja. Gracias por dejarme conocerte de verdad.',
            'No sé qué nos traerá el futuro y tampoco quiero prometerte una vida sin días difíciles. Lo que sí puedo prometerte es que quiero construir algo bonito contigo, aprender a quererte cada día mejor y celebrar tus alegrías sin olvidarme de acompañarte en tus momentos complicados.',
            'Eres una de las personas más maravillosas que he conocido. Mereces cosas buenas, tranquilidad, cariño y oportunidades para cumplir tus sueños. Y aunque a veces tú no lo veas, quiero recordarte lo valioso que eres.',
            'Te quiero muchísimo. Me alegra haberte encontrado, me alegra que nos hayamos conocido como amigos y me emociona que hoy podamos escribir juntos esta nueva parte de nuestra historia.',
            'Con todo mi cariño, para ti. ♡'
        ]
    },
    {
        tipo: 'final',
        etiqueta: 'Y esto apenas comienza…',
        titulo: 'Para ti, Tiago',
        texto: 'Si pudiera volver a aquel día en The Corner, volvería a sentarme a tu lado. Volvería a empezar aquella conversación. Porque, sin saberlo, ese día encontré a alguien que hoy quiero muchísimo.',
        cierre: 'Tiago, gracias por existir en mi historia. Te amo. ♡'
    }
];

// ELEMENTOS DEL PROGRAMA

const pagina = document.getElementById('page');
const anterior = document.getElementById('prevBtn');
const siguiente = document.getElementById('nextBtn');
const contador = document.getElementById('counter');
const progreso = document.getElementById('progressFill');

let indice = 0;
let intervaloFotos = null;

// CREAR ELEMENTOS

function elemento(etiqueta, clase, contenido) {
    const el = document.createElement(etiqueta);

    if (clase) {
        el.className = clase;
    }

    if (contenido !== undefined) {
        el.textContent = contenido;
    }

    return el;
}

// AGREGAR PÁRRAFOS

function agregarParrafos(destino, parrafos) {
    const caja = elemento('div', 'prose');

    parrafos.forEach(texto => {
        caja.appendChild(elemento('p', '', texto));
    });

    destino.appendChild(caja);
}

// MOSTRAR PÁGINA

function mostrarPagina() {
    const datos = paginas[indice];

    // Detener fotografías anteriores
    if (intervaloFotos !== null) {
        clearInterval(intervaloFotos);
        intervaloFotos = null;
    }

    // Limpiar contenido
    pagina.replaceChildren();

    // Corregir problema de pantalla blanca
    pagina.className = 'page';

    if (datos.tipo === 'carta') {
        pagina.classList.add('letter');
    }

    pagina.style.animation = 'none';
    pagina.style.opacity = '1';
    pagina.style.visibility = 'visible';
    pagina.style.transform = 'none';
    pagina.style.display = 'block';

    // Etiqueta superior
    pagina.appendChild(
        elemento('div', 'eyebrow', datos.etiqueta)
    );

    // Corazón inicial
    if (datos.tipo === 'portada') {
        pagina.appendChild(
            elemento('div', 'ornament', '♡')
        );
    }

    // IMÁGENES AUTOMÁTICAS

    if (
        ['portada', 'capitulo', 'final'].includes(datos.tipo) &&
        [0, 2, 4, 8].includes(indice)
    ) {
        const imagenes = [
            'imagenes/foto1.png',
            'imagenes/foto2.png',
            'imagenes/foto3.png',
            'imagenes/foto4.png',
            'imagenes/foto5.png'
        ];

        const foto = document.createElement('img');

        foto.className = 'anime-photo';
        foto.alt = 'Nuestros momentos especiales';
        foto.src = imagenes[0];

        pagina.appendChild(foto);

        let posicion = 0;

        intervaloFotos = setInterval(() => {
            posicion = (posicion + 1) % imagenes.length;
            foto.src = imagenes[posicion];
        }, 4000);
    }

    // TÍTULO

    const titulo = elemento(
        datos.tipo === 'portada' ? 'h1' : 'h2',
        '',
        datos.titulo
    );

    titulo.style.whiteSpace = 'pre-line';

    pagina.appendChild(titulo);

    // PÁRRAFOS

    if (datos.parrafos) {
        agregarParrafos(pagina, datos.parrafos);
    }

    // TEXTO

    if (datos.texto) {
        pagina.appendChild(
            elemento('p', 'subtitle', datos.texto)
        );
    }

    // RECUERDOS

    if (datos.tipo === 'recuerdos') {
        const lista = elemento('div', 'memory-list');

        datos.recuerdos.forEach(([tituloRecuerdo, descripcion]) => {
            const tarjeta = elemento('div', 'memory');

            tarjeta.appendChild(
                elemento('strong', '', tituloRecuerdo)
            );

            tarjeta.appendChild(
                elemento('p', '', descripcion)
            );

            lista.appendChild(tarjeta);
        });

        pagina.appendChild(lista);
    }

    // FINAL PARA TIAGO

    if (datos.tipo === 'final') {
        const corona = elemento('div', 'flower-heart');

        corona.setAttribute(
            'aria-label',
            'Un corazón de flores dedicado a Tiago'
        );

        const flor = elemento(
            'div',
            'flower-ring',
            '🌸 🌷 🌺 🌸 🌹 🌷 🌸'
        );

        const nombre = elemento(
            'div',
            'tiago-name',
            'Tiago'
        );

        const declaracion = elemento(
            'div',
            'tiago-love',
            'TE AMO ♡'
        );

        corona.append(flor, nombre, declaracion);

        pagina.appendChild(corona);

        pagina.appendChild(
            elemento('p', 'quote', datos.cierre)
        );

        const boton = elemento(
            'button',
            'cta',
            'Llenar de corazones ♡'
        );

        boton.addEventListener('click', () => {
            lanzarCorazones(35);
        });

        pagina.appendChild(boton);
    }

    // BOTÓN DE PORTADA

    if (datos.tipo === 'portada') {
        const boton = elemento(
            'button',
            'cta',
            'Abrir nuestro libro ♡'
        );

        boton.addEventListener('click', avanzar);

        pagina.appendChild(boton);
    }

    // CONTROLES

    anterior.disabled = indice === 0;
    siguiente.disabled = indice === paginas.length - 1;

    siguiente.textContent =
        indice === 0 ? 'Comenzar →' : 'Siguiente →';

    contador.textContent =
        `${indice + 1} / ${paginas.length}`;

    progreso.style.width =
        `${((indice + 1) / paginas.length) * 100}%`;
}

// AVANZAR

function avanzar() {
    if (indice < paginas.length - 1) {
        indice++;

        mostrarPagina();

        if (indice === paginas.length - 1) {
            lanzarCorazones(16);
        }

        desplazarAlLibro();
    }
}

// RETROCEDER

function retroceder() {
    if (indice > 0) {
        indice--;

        mostrarPagina();

        desplazarAlLibro();
    }
}

// DESPLAZAMIENTO

function desplazarAlLibro() {
    const libro = document.querySelector('.book');

    if (libro) {
        libro.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// BOTONES

siguiente.addEventListener('click', avanzar);
anterior.addEventListener('click', retroceder);

// TECLADO

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        avanzar();
    }

    if (e.key === 'ArrowLeft') {
        retroceder();
    }
});

// CORAZONES ANIMADOS

function lanzarCorazones(cantidad) {
    const capa = document.getElementById('hearts');

    if (!capa) {
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        const corazon = elemento(
            'span',
            'floating-heart',
            Math.random() > 0.5 ? '♥' : '♡'
        );

        corazon.style.left =
            `${Math.random() * 100}vw`;

        corazon.style.animationDelay =
            `${Math.random() * 2}s`;

        corazon.style.animationDuration =
            `${3 + Math.random() * 3}s`;

        capa.appendChild(corazon);

        corazon.addEventListener('animationend', () => {
            corazon.remove();
        });
    }
}

// MÚSICA

const musica = new Audio('musica.mp3');

musica.loop = true;
musica.volume = 0.5;

const botonMusica = document.getElementById('musicBtn');
const selectorMusica = document.getElementById('audioFile');

let audioTemporal = null;

// SELECCIONAR MÚSICA

if (selectorMusica) {
    selectorMusica.addEventListener('change', () => {
        const archivo = selectorMusica.files &&
            selectorMusica.files[0];

        if (!archivo) {
            return;
        }

        musica.pause();

        if (audioTemporal) {
            URL.revokeObjectURL(audioTemporal);
        }

        audioTemporal = URL.createObjectURL(archivo);

        musica.src = audioTemporal;
        musica.load();

        if (botonMusica) {
            botonMusica.textContent = '♫ Reproducir canción';
        }
    });
}

// BOTÓN DE MÚSICA

if (botonMusica) {
    botonMusica.addEventListener('click', async () => {
        if (!musica.paused) {
            musica.pause();

            botonMusica.textContent = '♫ Música: pausada';

            return;
        }

        try {
            await musica.play();

            botonMusica.textContent = '♫ Música: sonando';
        } catch {
            botonMusica.textContent = '♫ Elige tu canción abajo';

            if (selectorMusica) {
                selectorMusica.click();
            }
        }
    });
}

// INICIAR MÚSICA AL ABRIR EL LIBRO

function iniciarMusica() {
    if (musica.paused) {
        musica.currentTime = 0;

        musica.play().then(() => {
            if (botonMusica) {
                botonMusica.textContent = '♫ Música: sonando';
            }
        }).catch(() => {
            // El usuario puede iniciar la música con el botón.
        });
    }
}

// INICIAR EL PROGRAMA

function iniciarPrograma() {
    indice = 0;

    mostrarPagina();

    // Iniciar música al abrir el libro
    const botones = document.querySelectorAll('.cta');

    botones.forEach(boton => {
        if (boton.textContent.includes('Abrir nuestro libro')) {
            boton.addEventListener('click', iniciarMusica);
        }
    });
}

// ESPERAR A QUE EL HTML ESTÉ LISTO

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarPrograma);
} else {
    iniciarPrograma();
}
