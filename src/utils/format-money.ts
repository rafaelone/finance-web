export function formatMoney(money: string | number): string {
  const value = typeof money === 'string' ? Number(money) : money;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
