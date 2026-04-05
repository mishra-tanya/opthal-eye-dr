import { useState, useRef, useEffect } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';

interface EyeData {
  lens: string;
  fundus: string;
  media: string;
  pvd: string;
  opticDiscSize: string;
  cupDiscRatio: string;
  opticDisc: string;
  macula: string;
  peripheralRetina: string;
}

export default function FundusExam() {
  const [rightEye, setRightEye] = useState<EyeData>({
    lens: '',
    fundus: '',
    media: '',
    pvd: '',
    opticDiscSize: '',
    cupDiscRatio: '',
    opticDisc: '',
    macula: '',
    peripheralRetina: '',
  });

  const [leftEye, setLeftEye] = useState<EyeData>({
    lens: '',
    fundus: '',
    media: '',
    pvd: '',
    opticDiscSize: '',
    cupDiscRatio: '',
    opticDisc: '',
    macula: '',
    peripheralRetina: '',
  });

  const [showDrawingModal, setShowDrawingModal] = useState(false);

  const defaultValues: EyeData = {
    lens: 'Clear',
    fundus: 'Normal',
    media: 'Clear',
    pvd: 'Attached',
    opticDiscSize: '1.5mm',
    cupDiscRatio: '0.3',
    opticDisc: 'Pink with sharp margins',
    macula: 'Foveal reflex present',
    peripheralRetina: 'Normal',
  };

  const loadDefaultValues = (eye: 'right' | 'left') => {
    if (eye === 'right') {
      setRightEye(defaultValues);
    } else {
      setLeftEye(defaultValues);
    }
  };

  const resetValues = (eye: 'right' | 'left') => {
    const emptyData: EyeData = {
      lens: '',
      fundus: '',
      media: '',
      pvd: '',
      opticDiscSize: '',
      cupDiscRatio: '',
      opticDisc: '',
      macula: '',
      peripheralRetina: '',
    };
    if (eye === 'right') {
      setRightEye(emptyData);
    } else {
      setLeftEye(emptyData);
    }
  };

  const updateField = (eye: 'right' | 'left', field: keyof EyeData, value: string) => {
    if (eye === 'right') {
      setRightEye(prev => ({ ...prev, [field]: value }));
    } else {
      setLeftEye(prev => ({ ...prev, [field]: value }));
    }
  };

  const fieldLabels: (keyof EyeData)[] = ['fundus', 'lens', 'media', 'pvd', 'opticDiscSize', 'cupDiscRatio', 'opticDisc', 'macula', 'peripheralRetina'];
  const fieldDisplayNames: Record<string, string> = {
    fundus: 'Fundus',
    lens: 'Lens',
    media: 'Media',
    pvd: 'PVD',
    opticDiscSize: 'Optic Disc Size',
    cupDiscRatio: 'Cup / Disc Ratio',
    opticDisc: 'Optic Disc',
    macula: 'Macula',
    peripheralRetina: 'Peripheral Retina',
  };

  return (
    <>
      <div style={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
        {/* Section Header */}
        <div style={{ backgroundColor: '#f5f5f5', padding: '10px 16px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Fundus Exam</h3>
          {/* EMR Drawing Button - Top Left */}
          <button
            onClick={() => setShowDrawingModal(true)}
            style={{
              backgroundColor: '#0089AC',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Plus size={12} />
            EMR Fundus Drawing
          </button>
        </div>

        {/* Content - Three Columns */}
        <div style={{ padding: '12px 16px', overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr>
                {/* Column 1: Exam Names */}
                <th style={{ padding: '8px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#666', borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
                  Exam
                </th>
                {/* Column 2: Right Eye */}
                <th style={{ padding: '8px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#666', borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa', borderLeft: '1px solid #e0e0e0' }}>
                  <div style={{ marginBottom: '4px' }}>Right Eye</div>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button
                      onClick={() => loadDefaultValues('right')}
                      style={{
                        backgroundColor: '#0089AC',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: '600',
                      }}
                    >
                      N
                    </button>
                    <button
                      onClick={() => resetValues('right')}
                      style={{
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: '600',
                      }}
                    >
                      R
                    </button>
                  </div>
                </th>
                {/* Column 3: Left Eye */}
                <th style={{ padding: '8px', textAlign: 'center', fontSize: '12px', fontWeight: '600', color: '#666', borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa', borderLeft: '1px solid #e0e0e0' }}>
                  <div style={{ marginBottom: '4px' }}>Left Eye</div>
                  <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                    <button
                      onClick={() => loadDefaultValues('left')}
                      style={{
                        backgroundColor: '#0089AC',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: '600',
                      }}
                    >
                      N
                    </button>
                    <button
                      onClick={() => resetValues('left')}
                      style={{
                        backgroundColor: '#ef4444',
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '10px',
                        fontWeight: '600',
                      }}
                    >
                      R
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {fieldLabels.map((field, index) => (
                <tr key={field} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  {/* Field Name */}
                  <td style={{ padding: '8px', fontSize: '11px', fontWeight: '500', color: '#374151', backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
                    {fieldDisplayNames[field as string]}
                  </td>
                  {/* Right Eye Value */}
                  <td style={{ padding: '6px', borderLeft: '1px solid #e0e0e0', backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
                    <input
                      type="text"
                      value={rightEye[field]}
                      onChange={(e) => updateField('right', field, e.target.value)}
                      placeholder={defaultValues[field]}
                      style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                    />
                  </td>
                  {/* Left Eye Value */}
                  <td style={{ padding: '6px', borderLeft: '1px solid #e0e0e0', backgroundColor: index % 2 === 0 ? '#fafafa' : 'white' }}>
                    <input
                      type="text"
                      value={leftEye[field]}
                      onChange={(e) => updateField('left', field, e.target.value)}
                      placeholder={defaultValues[field]}
                      style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Canvas Drawing Modal */}
      {showDrawingModal && <CompactModalCanvasEditor onClose={() => setShowDrawingModal(false)} />}
    </>
  );
}

interface CanvasEditorProps {
  onClose: () => void;
}

function CompactModalCanvasEditor({ onClose }: CanvasEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<'pen' | 'eraser' | 'line' | 'circle' | 'rectangle' | 'ellipse' | 'text' | 'curve' | 'fill'>('pen');
  const [drawColor, setDrawColor] = useState('#000000');
  const [drawSize, setDrawSize] = useState(2);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('blank');
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [curvePoints, setCurvePoints] = useState<Array<{x: number, y: number}>>([]);

  const templates: Record<string, string> = {
    blank: 'Blank Canvas',
    retina_od: 'RETINA OD',
    retina_os: 'RETINA OS',
    cataract: 'RETINA OS CATARACT OD VWL',
  };

  const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080', '#008000', '#ffc0cb', '#a52a2a', '#808080'];
  const penSizes = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;
    setCtx(context);

    canvas.width = 680;
    canvas.height = 380;

    drawTemplate(context);
  }, [selectedTemplate]);

  const drawTemplate = (context: CanvasRenderingContext2D) => {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    if (selectedTemplate !== 'blank') {
      context.strokeStyle = '#ccc';
      context.lineWidth = 2;

      if (selectedTemplate === 'retina_od' || selectedTemplate === 'cataract') {
        context.beginPath();
        context.arc(200, 175, 80, 0, Math.PI * 2);
        context.stroke();
      }

      if (selectedTemplate === 'retina_os' || selectedTemplate === 'cataract') {
        context.beginPath();
        context.arc(450, 175, 80, 0, Math.PI * 2);
        context.stroke();
      }

      context.fillStyle = '#333';
      context.font = 'bold 12px Arial';
      context.fillText(templates[selectedTemplate], 20, 25);
    }

    context.strokeStyle = '#999';
    context.lineWidth = 1;
    context.strokeRect(0, 0, context.canvas.width, context.canvas.height);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ctx) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStartX(x);
    setStartY(y);
    setIsDrawing(true);

    if (tool === 'pen') {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === 'pen') {
      ctx.lineWidth = drawSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = drawColor;
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (tool === 'eraser') {
      ctx.clearRect(x - drawSize / 2, y - drawSize / 2, drawSize, drawSize);
    }
  };

  const endDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!ctx || !isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const endX = e.clientX - rect.left;
    const endY = e.clientY - rect.top;

    if (tool === 'line') {
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = drawSize;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    } else if (tool === 'circle' || tool === 'ellipse') {
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = drawSize;
      if (tool === 'circle') {
        const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        ctx.beginPath();
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.ellipse(startX, startY, Math.abs(endX - startX), Math.abs(endY - startY), 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else if (tool === 'rectangle') {
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = drawSize;
      ctx.strokeRect(startX, startY, endX - startX, endY - startY);
    } else if (tool === 'curve') {
      if (curvePoints.length > 0) {
        ctx.strokeStyle = drawColor;
        ctx.lineWidth = drawSize;
        ctx.beginPath();
        ctx.moveTo(curvePoints[0].x, curvePoints[0].y);
        for (let i = 1; i < curvePoints.length; i++) {
          ctx.quadraticCurveTo(curvePoints[i - 1].x, curvePoints[i - 1].y, curvePoints[i].x, curvePoints[i].y);
        }
        ctx.lineTo(endX, endY);
        ctx.stroke();
        setCurvePoints([]);
      }
    } else if (tool === 'text') {
      setShowTextInput(true);
    } else if (tool === 'pen') {
      ctx.closePath();
    }

    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!ctx) return;
    drawTemplate(ctx);
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'fundus_drawing.png';
    link.click();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '6px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        width: 'fit-content',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Top Toolbar */}
        <div style={{
          backgroundColor: '#0089AC',
          padding: '10px 12px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          borderBottom: '1px solid #999',
          color: 'white',
        }}>
          {/* Template Selector */}
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
            style={{
              padding: '6px 8px',
              border: '1px solid #0078a0',
              borderRadius: '3px',
              fontSize: '11px',
              cursor: 'pointer',
              backgroundColor: '#0089AC',
              color: 'white',
            }}
          >
            {Object.entries(templates).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>

          <div style={{ flex: 1 }}></div>

          {/* Action Buttons */}
          <button
            onClick={saveDrawing}
            style={{
              backgroundColor: '#0078a0',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            Save
          </button>

          <button
            onClick={saveDrawing}
            style={{
              backgroundColor: '#0078a0',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            Save as Template
          </button>

          <button
            onClick={clearCanvas}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '3px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            Clear
          </button>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              fontSize: '18px',
              padding: 0,
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', overflow: 'hidden' }}>
          {/* Left Toolbar */}
          <div style={{
            backgroundColor: '#e8e8e8',
            padding: '8px 4px',
            borderRight: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            justifyContent: 'flex-start',
          }}>
            {/* Tool Buttons - Small Size */}
            {[
              { id: 'pen', label: '✏️', title: 'Pen' },
              { id: 'eraser', label: '🧹', title: 'Eraser' },
              { id: 'line', label: '📏', title: 'Line' },
              { id: 'curve', label: '〰️', title: 'Curve' },
              { id: 'rectangle', label: '▭', title: 'Rectangle' },
              { id: 'circle', label: '⭕', title: 'Circle' },
              { id: 'ellipse', label: '⬭', title: 'Ellipse' },
              { id: 'text', label: 'T', title: 'Text' },
              { id: 'fill', label: '🪣', title: 'Fill' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTool(t.id as any);
                  if (t.id === 'text') setShowTextInput(true);
                }}
                title={t.title}
                style={{
                  padding: '3px 2px',
                  backgroundColor: tool === t.id ? '#0089AC' : '#d0d0d0',
                  color: tool === t.id ? 'white' : '#333',
                  border: '1px solid #999',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  width: '26px',
                  height: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {t.label}
              </button>
            ))}

            {/* Size Dropdown Button */}
            <div style={{ position: 'relative', marginTop: '4px' }}>
              <button
                onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                style={{
                  padding: '2px 2px',
                  backgroundColor: '#d0d0d0',
                  border: '1px solid #999',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontSize: '8px',
                  fontWeight: '600',
                  color: '#333',
                  width: '26px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {drawSize}px
              </button>

              {showSizeDropdown && (
                <div style={{
                  position: 'absolute',
                  bottom: 'calc(100% + 2px)',
                  left: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ddd',
                  borderRadius: '3px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  zIndex: 10,
                  minWidth: '50px',
                }}>
                  {penSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setDrawSize(size);
                        setShowSizeDropdown(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        textAlign: 'center',
                        backgroundColor: drawSize === size ? '#e0f2fe' : 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '10px',
                        color: drawSize === size ? '#0089AC' : '#333',
                        fontWeight: drawSize === size ? '600' : '400',
                        borderBottom: '1px solid #f0f0f0',
                      }}
                    >
                      {size}px
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Color Palette - Bottom Left */}
            <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', width: '40px' }}>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setDrawColor(color)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundColor: color,
                    border: drawColor === color ? '2px solid #333' : '1px solid #666',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                  title={color}
                />
              ))}
            </div>

            {/* Text Input - When Text Tool Selected */}
            {showTextInput && tool === 'text' && (
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', padding: '0 4px' }}>
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Text"
                  autoFocus
                  style={{
                    width: '100%',
                    padding: '4px',
                    fontSize: '10px',
                    border: '1px solid #999',
                    borderRadius: '2px',
                  }}
                />
                <button
                  onClick={() => {
                    if (ctx && textInput.trim()) {
                      ctx.fillStyle = drawColor;
                      ctx.font = `${Math.max(10, drawSize * 3)}px Arial`;
                      ctx.fillText(textInput, startX, startY);
                      setTextInput('');
                      setShowTextInput(false);
                    }
                  }}
                  style={{
                    padding: '3px',
                    fontSize: '9px',
                    backgroundColor: '#0089AC',
                    color: 'white',
                    border: 'none',
                    borderRadius: '2px',
                    cursor: 'pointer',
                  }}
                >
                  Add Text
                </button>
              </div>
            )}
          </div>

          {/* Canvas Area */}
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseLeave={endDrawing}
              style={{
                border: '1px solid #999',
                borderRadius: '2px',
                cursor: 'crosshair',
                backgroundColor: 'white',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
