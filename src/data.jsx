/////////////////IMAGENES PEQUENAS//////////////////////////////////////

// importar imagenes 7ma categoria pequenas
import Septima1 from './assets/img/Categorias/7ma/Septima1.png';
import Septima2 from './assets/img/Categorias/7ma/Septima2.png';
import Septima3 from './assets/img/Categorias/7ma/Septima3.png';

//importar imagenes 6ta categoria pequenas
import Sexta1 from './assets/img/Categorias/6ta/Sexta1.png'
import Sexta2 from './assets/img/Categorias/6ta/Sexta2.png'
import Sexta3 from './assets/img/Categorias/6ta/Sexta3.png'
import Sexta4 from './assets/img/Categorias/6ta/Sexta4.png'

//importar imagenes 5ta categoria pequenas
import Quinta1 from './assets/img/Categorias/5ta/Quinta1.png'
import Quinta2 from './assets/img/Categorias/5ta/Quinta2.png'
import Quinta3 from './assets/img/Categorias/5ta/Quinta3.png'

//importar imagenes 4ta categoria pequenas 
import Cuarta1 from './assets/img/Categorias/4ta/Cuarta1.png'
import Cuarta2 from './assets/img/Categorias/4ta/Cuarta2.png'

// importar imagenes suma8 pequenas (apartmentss)
import Sum81 from './assets/img/Categorias/suma8/sum81.png'
import Sum82 from './assets/img/Categorias/suma8/sum82.png'
import Sum83 from './assets/img/Categorias/suma8/sum83.png'

//Importar imagenes 3era y 4ta femenino pequenas (apartmentss)
import Fem1 from './assets/img/Categorias/feme/fem1.png'
import Fem2 from './assets/img/Categorias/feme/fem2.png'
import Fem3 from './assets/img/Categorias/feme/fem3.png'

//TOTAL= 18 imagenes

////////////////////////IMAGENES GRANDESSS////////////////////////////////

// importar imagenes 7ma categoria grandess
import Septima1LG from './assets/img/Categorias/7ma/Septima1LG.png';
import Septima2LG from './assets/img/Categorias/7ma/Septima2LG.png';
import Septima3LG from './assets/img/Categorias/7ma/Septima3LG.png';

//importar imagenes 6ta categoria grandes 
import Sexta1LG from './assets/img/Categorias/6ta/Sexta1LG.png'
import Sexta2LG from './assets/img/Categorias/6ta/Sexta2LG.png'
import Sexta3LG from './assets/img/Categorias/6ta/Sexta3LG.png'
import Sexta4LG from './assets/img/Categorias/6ta/Sexta4LG.png'

//importar imagenes 5ta categoria grandes
import Quinta1LG from './assets/img/Categorias/5ta/Quinta1LG.png'
import Quinta2LG from './assets/img/Categorias/5ta/Quinta2LG.png'
import Quinta3LG from './assets/img/Categorias/5ta/Quinta3LG.png'


//importar imagenes 4ta categoria grandes

import Cuarta1LG from './assets/img/Categorias/4ta/Cuarta1LG.png'
import Cuarta2LG from './assets/img/Categorias/4ta/Cuarta2LG.png'

// importar imagenes suma 8 grandess (apartmentss)
import Sum81LG from './assets/img/Categorias/suma8/sum81LG.png'
import Sum82LG from './assets/img/Categorias/suma8/sum82LG.png'
import Sum83LG from './assets/img/Categorias/suma8/sum83LG.png'

//Importar imaganes 3era y 4ta femenino grandes (apartmentss)
import Fem1LG from './assets/img/Categorias/feme/fem1LG.png'
import Fem2LG from './assets/img/Categorias/feme/fem2LG.png'
import Fem3LG from './assets/img/Categorias/feme/fem3LG.png'

//TOTAL= 18 imagenes


// importar imagenes de los organizadores
import organizador1 from './assets/img/organizadores/organizador1.png';
import organizador2 from './assets/img/organizadores/organizador2.png';
import organizador3 from './assets/img/organizadores/organizador3.png';
import organizador4 from './assets/img/organizadores/organizador4.png';
import organizador5 from './assets/img/organizadores/organizador5.png';
import organizador6 from './assets/img/organizadores/organizador6.png';
import organizador7 from './assets/img/organizadores/organizador7.png';
import organizador8 from './assets/img/organizadores/organizador8.png';
import organizador9 from './assets/img/organizadores/organizador9.png';
import organizador10 from './assets/img/organizadores/organizador10.png';
import organizador11 from './assets/img/organizadores/organizador11.png';
import organizador12 from './assets/img/organizadores/organizador12.png';

//objeto con la lista de meses
export const listaMeses = {
  Enero: 1,
  Feberero: 2,
  Marzo: 3,
  Abril: 4,
  Mayo: 5,
  Junio: 6,
  Julio: 7,
  Agosto: 8,
  September: 9,
  Octubre: 10,
  Noviembre: 11,
  Diciembre: 12,
}

export const torneosData = [
  {
    id: 1,
    categoria: '7ma',
    name: 'Americano By Lider Sport Center',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Septima1,
    imageLg: Septima1LG,
    club: 'Lider Sport Center',
    address: 'C.C. Lider, 1071, Caracas 1071, Miranda, Venezuela',
    fecha: '26/01/24',
    inscipcion: '50$ p/p',
    premio: '120$',
    hora: '6:00pm',
    duplas: '20',
    mes: 'Enero',
    organizador: {
      image: organizador1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    categoria: '7ma',
    name: 'Americano 7ma Categoria Venplay',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Septima2,
    imageLg: Septima2LG,
    club: 'Venplay - Cerro Verde',
    address: 'Urb. Los Naranjos, nivel azotea C.C. Cerro Verde',
    fecha: '02/02/2024',
    inscipcion: '60$ p/p',
    premio: '300$',
    hora: '7:30am',
    duplas: '14',
    mes: 'Febrero',
    organizador: {
      image: organizador2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    categoria: '7ma',
    name: 'Americano con Clinica de Padel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Septima3,
    imageLg: Septima3LG,
    club: 'Master Padel',
    address: 'Urb. Los Samanes diagonal al Colegio Americano',
    fecha: '31/01/24',
    inscipcion: '120$ Dupla',
    premio: '350$',
    hora: '7:30pm',
    duplas: '24',
    mes: 'Enero',
    organizador: {
      image: organizador3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    categoria: '6ta',
    name: 'Torneo Americano de Carnaval',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sexta1,
    imageLg: Sexta1LG,
    club: 'Club Padel Venezuela',
    address: 'Autopista Caracas - Guarenas, frente a entrada de USM',
    fecha: '09/02/24',
    inscipcion: '30$ p/p',
    premio: '120$',
    hora: '3:00pm',
    duplas: '20',
    mes: 'Febrero',
    organizador: {
      image: organizador4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    categoria: '6ta',
    name: 'Torneo Americano Bullpadel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sexta2,
    imageLg: Sexta2LG,
    club: 'Wild Padel (Avepane)',
    address: 'Avenida La Guairita, Benzecri de Benmergui, Calle Reyna',
    fecha: '15/03/24',
    inscipcion: '60$ p/p',
    premio: '300$',
    hora: '8:00 am',
    duplas: '24',
    mes: 'Marzo',
    organizador: {
      image: organizador5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    categoria: '6ta',
    name: 'Americano Padel 159',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sexta3,
    imageLg: Sexta3LG,
    club: 'Padel 159',
    address: 'Urb. San Luis - El Cafetal',
    fecha: '06/06/02',
    inscipcion: '30$ p/p',
    premio: '100$',
    hora: '6:00pm',
    duplas: '12',
    mes: 'Febrero',
    organizador: {
      image: organizador6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    categoria: '6ta',
    name: 'Americano Sabado San Luis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sexta4,
    imageLg: Sexta4LG,
    club: 'Centro San Luis',
    address: 'Urb. San Luis - El Cafetal',
    fecha: '23/03/24',
    inscipcion: '120$ Dupla',
    premio: '250$',
    hora: '8:00am',
    duplas: '20',
    mes: 'Marzo',
    organizador: {
      image: organizador7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    categoria: '5ta',
    name: 'Americano Pala Gigante',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Quinta1,
    imageLg: Quinta1LG,
    club: 'Club Libano',
    address: 'Avenida Rio de Oro, Caracas 1080, Miranda, Venezuela',
    fecha: '03/02/24',
    inscipcion: '100$ Dupla',
    premio: '320$',
    hora: '7:30pm',
    duplas: '20',
    mes: 'Febrero',
    organizador: {
      image: organizador8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    categoria: '5ta',
    name: 'Head Padel American Tournament',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Quinta2,
    imageLg: Quinta2LG,
    club: 'Capital Sports',
    address: 'Urb. Santa Fe, Caracas 1080, Miranda, Venezuela',
    fecha: '20/02/24',
    inscipcion: '100$ p/p',
    premio: '400$',
    hora: '7:00pm',
    duplas: '25',
    mes: 'Febrero',
    organizador: {
      image: organizador9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    categoria: '5ta',
    name: 'Liga de Padel Universitaria',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Quinta3,
    imageLg: Quinta3LG,
    club: 'U. Metropolitana',
    address: 'Autopista Caracas - Guarenas Ditribuidor metropolitano',
    fecha: '05/03/24 - 09/03/24',
    inscipcion: '30$ p/p',
    premio: '120$',
    hora: '5:00pm - 9:00pm',
    duplas: '24',
    mes: 'Marzo',
    organizador: {
      image: organizador10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    categoria: '4ta',
    name: 'Padel Action Americano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Cuarta1,
    imageLg: Cuarta1LG,
    club: 'Padel Venezuela Ucab',
    address: 'Avenida Teherán, Caracas 1020, Distrito Capital, Venezuela',
    fecha: '07/05/24',
    inscipcion: '50$ Dupla',
    premio: '200$ ',
    hora: '7:30pm',
    duplas: '12',
    mes: 'Mayo',
    organizador: {
      image: organizador11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    categoria: '4ta',
    name: 'Viborahaus Entre Panas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Cuarta2,
    imageLg: Cuarta2LG,
    club: 'Viborahaus La Boyera',
    address: 'Polideportivo La Boyera, Urbanizacion, Av. 3, Caracas 1083, Miranda, Venezuela',
    fecha: '04/05/24',
    inscipcion: '40$ p/p',
    premio: '150$',
    hora: '6:30pm',
    duplas: '12',
    mes: 'Mayo',
    organizador: {
      image: organizador12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    categoria: '3era Femenino',
    name: 'Woman Padel Power',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Fem1,
    imageLg: Fem1LG,
    club: 'Padel CMDLT',
    address: 'Centro Medico Docente La Trinidad, La boyera, Caracas',
    fecha: '28/04/24',
    inscipcion: '25$p/p',
    premio: '100$',
    hora: '9:00am',
    duplas: '8',
    mes: 'Abril',
    organizador: {
      image: organizador1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    categoria: '3era + 4ta Fem',
    name: 'Padel Experience',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Fem2,
    imageLg: Fem2LG,
    club: 'Blue Padel',
    address: ' Avenida Mara, C.C. Macaracuay Caracas',
    fecha: '05/05/24',
    inscipcion: '40$ Dupla',
    premio: '110$',
    hora: '8:30am',
    duplas: '12',
    mes: 'Mayo',
    organizador: {
      image: organizador2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    categoria: '4ta Femenino',
    name: 'Padel Wilson Pro Americano',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Fem3,
    imageLg: Fem3LG,
    club: 'CCS Padel ',
    address: 'Entre 5ta y, 2da avenida de, 6ta transversal, Los Palos Grandes, Miranda.',
    fecha: '04/07/24',
    inscipcion: '30$ p/p',
    premio: '100$',
    hora: '6:30pm',
    duplas: '10',
    mes: 'Julio',
    organizador: {
      image: organizador3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    categoria: 'Suma 8',
    name: 'Americano de Apertura Millenium Padel',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sum82,
    imageLg: Sum82LG,
    club: 'Millenium Padel',
    address: 'Av. Rómulo Gallegos, con Av. Principal de La Carlota, La Carlota, Caracas',
    fecha: '20/08/24',
    inscipcion: '100$ Dupla',
    premio: '300$',
    hora: '7:00pm',
    duplas: '14',
    mes: 'Agosto',
    organizador: {
      image: organizador4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    categoria: 'Suma 8',
    name: 'Americano Sub-23 de Caracas',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sum82,
    imageLg: Sum82LG,
    club: 'Blue Padel',
    address: ' Avenida Mara, C.C. Macaracuay, Distrito Capital',
    fecha: '30/06/24',
    inscipcion: '100$ Dupla',
    premio: '360$ ',
    hora: '6:00pm',
    duplas: '14',
    mes: 'Junio',
    organizador: {
      image: organizador5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    categoria: 'Suma 8',
    name: 'Alto Grande Tournament',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Sum83,
    imageLg: Sum83LG,
    club: 'Alto Grande',
    address: 'Carr. Nacional Guarenas - Guatire, Guatire 1221, Miranda',
    fecha: '30/03/24',
    inscipcion: '100$ Dupla',
    premio: '250$',
    hora: '7:00pm',
    duplas: '14',
    mes: 'Marzo',
    organizador: {
      image: organizador6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];
