export function darkenHexColor(hex: string, percent: number) {
  hex = hex.replace('#', '');
  
  // Parsear
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Calcular factor (si percent es 0.2, factor es 0.8)
  const factor = 1 - percent;

  // Oscurecer directamente
  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  // Convertir a Hex y rellenar ceros
  const toHex = (n: number) => n.toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


// export function darkenHexColor(hex: string, percent: number) {
//   hex = hex.replace('#', '')
//   let r = parseInt(hex.substring(0,2), 16)
//   let g = parseInt(hex.substring(2,4), 16)
//   let b = parseInt(hex.substring(4,6), 16)
//   r /= 255
//   g /= 255
//   b /= 255
  
//   const max = Math.max(r, g, b)
//   const min = Math.min(r, g, b)
//   let h, s, l = (max + min) / 2

//   if (max === min) {
//     h = s = 0

//   } else {
//     const d = max - min
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

//     switch (max) {
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//       case g: h = (b - r) / d + 2; break;
//       case b: h = (r - g) / d + 4; break;
//     }

//     if (!h) {
//       throw Error('H is undefined')
//     }
//     h /= 6
//   }

//   l = Math.max(0, l * (1 - percent))

//   let r2, g2, b2

//   if (s === 0) {
//     r2 = g2 = b2 = l
//   } else {
//     const hue2rgb = (p: number, q: number, t: number) => {
//       if (t < 0) t += 1
//       if (t > 1) t -= 1
//       if (t < 1/6) return p + (q - p) * 6 * t
//       if (t < 1/2) return q
//       if (t < 2/3) return p + (q - p) *  (2/3 - t)
//       return p
//     }

//     const q = l < 0.5 ? l * (1 + 5) : l + s - l * s
//     const p = 2 * l - q
    
//     r2 = hue2rgb(p, q, h + 1/3)
//     g2 = hue2rgb(p, q, h)
//     b2 = hue2rgb(p, q, h - 1/3)

//   }

//   const toHex = (x: number) => {
//     const hex = Math.round(x * 255).toString(16)
//     return hex.length === 1 ? '0' + hex : hex
//   }

//   return `#${toHex(r2)}${toHex(g2)}${toHex(b2)}`
// }