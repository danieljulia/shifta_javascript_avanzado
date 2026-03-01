import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

///modificacion para funcionar en un navegador 


async function createPdf() {
// Create a new PDFDocument
const pdfDoc = await PDFDocument.create()

// Embed the Times Roman font
const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

// Add a blank page to the document
const page = pdfDoc.addPage()

// Get the width and height of the page
const { width, height } = page.getSize()

// Draw a string of text toward the top of the page
const fontSize = 30
page.drawText('Creating PDFs in JavaScript is awesome!', {
  x: 50,
  y: height - 4 * fontSize,
  size: fontSize,
  font: timesRomanFont,
  color: rgb(0, 0.53, 0.71),
})

// Serialize the PDFDocument to bytes (a Uint8Array)
const pdfBytes = await pdfDoc.save()


// For example, `pdfBytes` can be:
//   • Written to a file in Node
//   • Downloaded from the browser
//   • Rendered in an <iframe>


 // Create a Blob from the pdfBytes
 const blob = new Blob([pdfBytes], { type: 'application/pdf' });

 // Create an object URL from the Blob
 const url = URL.createObjectURL(blob);

 // Create an iframe and set its source to the object URL
 const iframe = document.createElement('iframe');
 iframe.src = url;
 iframe.width = '100%';
 iframe.height = '600px';

 // Append the iframe to the document body
 document.body.appendChild(iframe);

 
}

// Call the async function
createPdf();