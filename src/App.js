import React from 'react';
import { jsPDF } from 'jspdf';

const generatePDF = async () => {
  const x = 10; // Posizione x dell'immagine e del testo
  const y = 12; // Posizione y iniziale dell'immagine e del testo
  const imageSize = 20; // Dimensione dell'immagine
  const textGap = 2; // Spazio tra l'immagine e il testo


    // Carica l'immagine come Base64
    
      // Crea il documento PDF
      const doc = new jsPDF({
        unit: 'mm',
        format: [85, 55],
        orientation: 'landscape'
      });

      
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const padding = 5;

  const borderRadius = 3;

  const rectX = padding;
  const rectY = padding;
  const rectWidth = pageWidth - (2 * padding);
  const rectHeight = pageHeight - (2 * padding);

  doc.setLineWidth(0.5);
  doc.setDrawColor(0);
  doc.setFillColor(255);
  doc.roundedRect(rectX, rectY, rectWidth, rectHeight, borderRadius, borderRadius, "FD");

  doc.addImage("https://www.shutterstock.com/image-vector/west-sumatra-indonesia-december-21-260nw-2403497721.jpg", 'jpg', doc.internal.pageSize.width - imageSize -8, 8, 20, 6); // Aggiungi l'immagine
      
      const base64Image = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC";
      doc.addImage(base64Image, 'JPEG', x, y + 5, imageSize, imageSize); // Aggiungi l'immagine Base64

      doc.setFontSize(6);
      doc.text("11111111", x + imageSize + textGap, y + imageSize / 2);
      doc.setFontSize(8);
      doc.text("Riccardo Lin", x + imageSize + textGap, (y + imageSize / 2) + 3);
      doc.setFontSize(6);
      doc.text("12/07/1999", x + imageSize + textGap, (y + imageSize / 2) + 6);
      doc.text("Developer", x + imageSize + textGap, (y + imageSize / 2) + 9);

      // Salva il PDF
      doc.save('documento.pdf');

};

const App = () => {
  return (
    <div className="App">
      <h1>Hello, jsPDF!</h1>
      <button onClick={generatePDF}>Genera PDF</button>
    </div>
  );
};

export default App;
