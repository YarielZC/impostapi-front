export function formatCompactNumber(number: number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1 // Cuántos decimales quieres (ej: 1.5k)
  });
  
  return formatter.format(number)
}

