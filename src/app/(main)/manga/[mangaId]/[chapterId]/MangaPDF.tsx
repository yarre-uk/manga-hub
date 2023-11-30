'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import bytesToFile from '@/shared/utils/bytesToImage';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type MangaPDFProps = {
  chapter: string;
};

function MangaPDF({ chapter }: MangaPDFProps) {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Document
      options={{
        standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
      }}
      onLoadSuccess={onDocumentLoadSuccess}
      file={bytesToFile(chapter, 'application/pdf')}
      className="flex w-min flex-col gap-10"
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export default MangaPDF;
