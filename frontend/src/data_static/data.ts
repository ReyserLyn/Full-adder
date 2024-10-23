interface AdderData {
  title: string;
  description: string;
  image_url: string;
  sumType: string;
}

// Podemos y tenemos que generar más información
export const data: AdderData[] = [
  {
    title: 'Sumador de 1 Bit',
    image_url: 'https://es-academic.com/pictures/eswiki/70/Full_Adder.svg',
    description: 'Este sumador realiza la suma de dos bits y genera un bit de acarreo.',
    sumType: '1bit',
  },
  {
    title: 'Sumador de 4 Bits',
    image_url: 'https://cienciayt.com/wp-content/uploads/electronica/sistemas-digitales/sumador-c.png',
    description: 'Este sumador realiza la suma de números de 4 bits.',
    sumType: '4bit',
  },
  {
    title: 'Sumador de 8 Bits',
    image_url: 'https://www.researchgate.net/profile/Santiago-Perez-5/publication/282335835/figure/fig17/AS:668972387139595@1536506854827/Sumador-Restador-de-4-bits-en-complemento-a-dos.png',
    description: 'Este sumador realiza la suma de números de 8 bits.',
    sumType: '8bit',
  },
];
