import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function handleDownloadPDF() {
  console.log("download please");

  const input = document.getElementById("CVprototype");
  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    // Get the width and height of the input element
    const imgWidth = 210; // A4 size width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("downloaded-file.pdf");
  });
}
