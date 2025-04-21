function getElementWidth(content, padding, border) {
    // "Npx" → N sayısını almak için parseFloat kullanılır
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
  
    // Toplam genişlik hesaplanır (border-box varsayımıyla)
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  
    return `${totalWidth}px`;
  }
