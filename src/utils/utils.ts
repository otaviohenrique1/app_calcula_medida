interface CalculaMedidaProps {
  campoA: number;
  campoB: number;
  campoC: number;
}

export function CalculaMedida({campoA, campoB, campoC}: CalculaMedidaProps): string {
  let resultado = ((campoB * campoC) / campoA);
  let texto = `${campoC} -> ${resultado.toFixed(2)} -> ${Math.round(resultado).toFixed(2)}`;
  return texto;
}