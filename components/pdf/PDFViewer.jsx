"use client"

import { useEffect, useState } from "react";

import { Document, Page } from "react-pdf";
const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // Fetch the number of pages of the PDF asynchronously
    const fetchNumPages = async () => {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const temporaryUrl = URL.createObjectURL(blob);
      const pdfDocument = await pdfjsLib.getDocument(temporaryUrl);
      setNumPages(pdfDocument.numPages);
    };

    fetchNumPages();

    return () => {
      // Clean up any resources when the component unmounts
      URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
