import { FileText, Copy, Download, Share2 } from 'lucide-react';

interface SectionFloatingButtonsProps {
  sectionName: string;
  sectionRef: React.RefObject<HTMLDivElement>;
  isEnabled: boolean;
  onEnable: () => void;
  onDisable: () => void;
}

export default function SectionFloatingButtons({
  sectionName,
  sectionRef,
  isEnabled,
  onEnable,
  onDisable,
}: SectionFloatingButtonsProps) {

  const handlePrintToPDF = () => {
    if (!sectionRef.current) return;

    const printWindow = window.open('', '', 'width=800,height=600');
    if (!printWindow) {
      alert('Failed to open print window. Please check popup settings.');
      return;
    }

    const clonedContent = sectionRef.current.cloneNode(true) as HTMLElement;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${sectionName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { border-collapse: collapse; width: 100%; margin: 10px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          <h2>${sectionName}</h2>
          ${clonedContent.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isEnabled ? '#0089AC' : '#cbd5e0',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    padding: '4px 5px',
    cursor: isEnabled ? 'pointer' : 'not-allowed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isEnabled ? 1 : 0.5,
    transition: 'all 0.2s ease',
    minWidth: '24px',
    height: '24px',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '3px',
        alignItems: 'center',
      }}
    >
      {!isEnabled ? (
        <button
          onClick={onEnable}
          style={{
            backgroundColor: '#0089AC',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            padding: '4px 5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '24px',
            height: '24px',
            fontSize: '12px',
            fontWeight: '600',
          }}
          title={`Enable ${sectionName} buttons`}
        >
          ⋮
        </button>
      ) : (
        <>
          <button
            onClick={handlePrintToPDF}
            style={buttonStyle}
            title="Print section to PDF"
          >
            <FileText size={12} />
          </button>

          <button
            onClick={() => {
              if (!sectionRef.current) return;
              const text = sectionRef.current.innerText;
              navigator.clipboard.writeText(text);
              alert('Copied to clipboard');
            }}
            style={buttonStyle}
            title="Copy section text"
          >
            <Copy size={12} />
          </button>

          <button
            onClick={() => alert('Download functionality coming soon')}
            style={buttonStyle}
            title="Download section"
          >
            <Download size={12} />
          </button>

          <button
            onClick={() => alert('Share functionality coming soon')}
            style={buttonStyle}
            title="Share section"
          >
            <Share2 size={12} />
          </button>
        </>
      )}
    </div>
  );
}
