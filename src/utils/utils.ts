interface TemplateCalculoProps {
  parametro1: string | number;
  parametro2: number;
  parametro3: number;
}

function templateCalculo({ parametro1, parametro2, parametro3 }: TemplateCalculoProps) {
  let parametro1Valor = parametro1;
  let parametro2Valor = parametro2.toFixed(2);
  let parametro3Valor = (Math.round(parametro3)).toFixed(2);
  let texto = `${parametro1Valor} -> ${parametro2Valor} -> ${parametro3Valor}`;
  return texto;
}

interface CalculaMedidaProps {
  campoA: number;
  campoB: number;
  campoC: number;
}

export function CalculaMedida({campoA, campoB, campoC}: CalculaMedidaProps): string {
  let resultado = ((campoB * campoC) / campoA);
  let texto = templateCalculo({
    parametro1: campoC,
    parametro2: resultado,
    parametro3: resultado
  });
  // let texto = `${campoC} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}

interface TeoremaDePitagorasProps {
  hipotenusa: number;
  catetoA: number;
  catetoB: number;
}

export function CalculaTeoremaPitagoras({
  hipotenusa, catetoA, catetoB
}: TeoremaDePitagorasProps): string {
  // h^2 = ca^2 + cb^2
  let texto = '';
  if (hipotenusa === 0) {
    texto = calculoHipotenusa({ catetoA, catetoB });
  } else if (catetoA === 0) {
    texto = calculoCatetoA({ hipotenusa, catetoB });
  } else if (catetoB === 0) {
    texto = calculoCatetoB({ hipotenusa, catetoA });
  }
  return texto;
}

interface CalculoHipotenusaProps {
  catetoA: number;
  catetoB: number;
}

function calculoHipotenusa({ catetoA, catetoB }: CalculoHipotenusaProps): string {
  // h = raiz2(ca^2 + cb^2)
  let titulo = 'Hipotenusa';
  let resultado = Math.sqrt((Math.pow(catetoA, 2) + Math.pow(catetoB, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  // let texto = `${titulo} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}

interface CalculoCatetoAProps {
  hipotenusa: number;
  catetoB: number;
}

function calculoCatetoA({ hipotenusa, catetoB }: CalculoCatetoAProps): string {
  // ca = raiz2(h^2 - cb^2)
  let titulo = 'Cateto A';
  let resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoB, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  // let texto = `${titulo} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}

interface CalculoCatetoBProps {
  hipotenusa: number;
  catetoA: number;
}

function calculoCatetoB({ hipotenusa, catetoA }: CalculoCatetoBProps): string {
  // cb = raiz2(h^2 - ca^2)
  let titulo = 'Cateto B';
  let resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoA, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  // let texto = `${titulo} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}

interface PerimetroCirculoProps {
  valor: number;
}

export function CalculaPerimetroCirculo({ valor }: PerimetroCirculoProps): string {
  let resultado = (2 * Math.PI * valor);
  let texto = templateCalculo({
    parametro1: valor,
    parametro2: resultado,
    parametro3: resultado
  });
  // let texto = `${valor} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}

export const ajudaPerimetroCirculo = [
  {
    titulo: 'Formula:',
    lista: [
      'p = 2 * pi * r'
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Perimetro => p',
      'pi => 3,1415...',
      'Raio => r',
    ],
  },
];

export const ajudaCalculaMedida = [
  {
    titulo: 'Formula:',
    lista: [
      'a -------- b',
      'c -------- x',
      'x = (b*c)/a',
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Resultado => x',
      'Campo A => a',
      'Campo B => b',
      'Campo C => c',
    ],
  },
];

export const ajudaTeoremaPitagoras = [
  {
    titulo: 'Formulas:',
    lista: [
      'Calculo da Hipotenusa =>',
      'h = r2(p2(ca) + p2(cb))',
      'Calculo do Cateto A =>',
      'ca = r2(p2(h) - p2(cb))',
      'Calculo do Cateto B =>',
      'cb = r2(p2(h) - p2(ca))',
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Raiz 2 (Raiz Quadrada) => r2',
      'Potencia 2 (Quadrado) => p2',
      'Hipotenusa => h',
      'Cateto A => ca',
      'Cateto B => cb'
    ],
  },
];

// export function CalculaTeoremaPitagoras({
//   hipotenusa, catetoA, catetoB
// }: TeoremaDePitagorasProps): string {
//   // h^2 = ca^2 + cb^2
//   let resultado = 0;
//   let titulo = '';
//   let texto = '';
//   if (hipotenusa === 0) {
//     // h = raiz2(ca^2 + cb^2)
//     titulo = 'hipotenusa';
//     Math.sqrt((Math.pow(catetoA, 2) + Math.pow(catetoB, 2)));
//   } else if (catetoA === 0) {
//     // ca = raiz2(h^2 - cb^2)
//     titulo = 'cateto A';
//     Math.sqrt((Math.pow(catetoB, 2) - Math.pow(hipotenusa, 2)));
//   } else if (catetoB === 0) {
//     // cb = raiz2(h^2 - ca^2)
//     titulo = 'cateto B';
//     Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoA, 2)));
//   } 
//   texto = `${titulo} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
//   return texto;
// }