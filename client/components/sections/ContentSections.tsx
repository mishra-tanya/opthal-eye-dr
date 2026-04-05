import { Plus } from 'lucide-react';
import { useState } from 'react';
import PrescriptionForm from './PrescriptionForm';
import FundusExam from './FundusExam';

interface SectionProps {
  title: string;
  description?: string;
}

const sectionStyle = { backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e0e0e0', overflow: 'hidden', marginTop: '16px' };
const headerStyle = { backgroundColor: '#f5f5f5', padding: '10px 16px', borderBottom: '1px solid #e0e0e0', paddingRight: '160px', position: 'relative' as const };
const contentStyle = { padding: '12px 16px' };
const inputStyle = { width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' };
const textareaStyle = { width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px', fontFamily: 'inherit' };

export function SectionPlaceholder({ title, description }: SectionProps) {
  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>{title}</h3>
      </div>
      <div style={contentStyle}>
        <p style={{ color: '#666', marginBottom: '10px', fontSize: '12px' }}>
          {description || `Enter ${title} information here`}
        </p>
        <button style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#0089AC', color: 'white', padding: '6px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: '500' }}>
          <Plus size={14} />
          Add Entry
        </button>
      </div>
    </div>
  );
}

export function VisualAcuity() {
  const [vaData, setVaData] = useState({
    unaidedVision: { odDist: '', odNear: '', osDist: '', osNear: '' },
    visionWithPinhole: { odDist: '', odNear: '', osDist: '', osNear: '' },
    bcva: { odDist: '', odNear: '', osDist: '', osNear: '' },
    colorVision: { odDist: '', odNear: '', osDist: '', osNear: '' },
  });

  const vaOptions = ['6/6', '6/9', '6/12', '6/18', '6/24', '6/36', '6/60', 'CF', 'HM', 'PL', 'NPL'];

  const resetVA = () => {
    setVaData({
      unaidedVision: { odDist: '', odNear: '', osDist: '', osNear: '' },
      visionWithPinhole: { odDist: '', odNear: '', osDist: '', osNear: '' },
      bcva: { odDist: '', odNear: '', osDist: '', osNear: '' },
      colorVision: { odDist: '', odNear: '', osDist: '', osNear: '' },
    });
  };

  const setNormalValues = (testKey: keyof typeof vaData) => {
    setVaData({
      ...vaData,
      [testKey]: { odDist: '6/6', odNear: '6/6', osDist: '6/6', osNear: '6/6' },
    });
  };

  const resetTestRow = (testKey: keyof typeof vaData) => {
    setVaData({
      ...vaData,
      [testKey]: { odDist: '', odNear: '', osDist: '', osNear: '' },
    });
  };

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Visual Acuity</h3>
        <button
          onClick={resetVA}
          style={{ backgroundColor: '#ef4444', color: 'white', padding: '5px 12px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: '600' }}
        >
          Reset
        </button>
      </div>
      <div style={{ overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '10px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0' }}>Test Type</th>
              <th style={{ padding: '10px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '40px' }}>N</th>
              <th style={{ padding: '10px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '40px' }}>R</th>
              <th colSpan={2} style={{ padding: '10px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0' }}>Right Eye</th>
              <th colSpan={2} style={{ padding: '10px', textAlign: 'center', fontWeight: '600', color: '#666' }}>Left Eye</th>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '6px', textAlign: 'left', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>Dist</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>Near</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>Dist</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666' }}>Near</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: 'unaidedVision', label: 'Unaided Vision' },
              { key: 'visionWithPinhole', label: 'Vision With Pinhole' },
              { key: 'bcva', label: 'BCVA' },
              { key: 'colorVision', label: 'Colour Vision' },
            ].map((test) => (
              <tr key={test.key} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '10px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>
                  {test.label}
                </td>
                <td style={{ padding: '6px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                  <button
                    onClick={() => setNormalValues(test.key as keyof typeof vaData)}
                    style={{ backgroundColor: '#0089AC', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 8px', fontSize: '10px', fontWeight: '600', cursor: 'pointer', minWidth: '24px' }}
                  >
                    N
                  </button>
                </td>
                <td style={{ padding: '6px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                  <button
                    onClick={() => resetTestRow(test.key as keyof typeof vaData)}
                    style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 8px', fontSize: '10px', fontWeight: '600', cursor: 'pointer', minWidth: '24px' }}
                  >
                    R
                  </button>
                </td>
                {/* Right Eye - Dist */}
                <td style={{ padding: '6px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={vaData[test.key as keyof typeof vaData].odDist}
                    onChange={(e) =>
                      setVaData({
                        ...vaData,
                        [test.key]: { ...vaData[test.key as keyof typeof vaData], odDist: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '5px 4px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                  >
                    <option value="">SELECT</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                {/* Right Eye - Near */}
                <td style={{ padding: '6px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={vaData[test.key as keyof typeof vaData].odNear}
                    onChange={(e) =>
                      setVaData({
                        ...vaData,
                        [test.key]: { ...vaData[test.key as keyof typeof vaData], odNear: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '5px 4px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                  >
                    <option value="">SELECT</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                {/* Left Eye - Dist */}
                <td style={{ padding: '6px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={vaData[test.key as keyof typeof vaData].osDist}
                    onChange={(e) =>
                      setVaData({
                        ...vaData,
                        [test.key]: { ...vaData[test.key as keyof typeof vaData], osDist: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '5px 4px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                  >
                    <option value="">SELECT</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                {/* Left Eye - Near */}
                <td style={{ padding: '6px', textAlign: 'center' }}>
                  <select
                    value={vaData[test.key as keyof typeof vaData].osNear}
                    onChange={(e) =>
                      setVaData({
                        ...vaData,
                        [test.key]: { ...vaData[test.key as keyof typeof vaData], osNear: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '5px 4px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                  >
                    <option value="">SELECT</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AutoRefReading() {
  const [arrData, setArrData] = useState({
    unrelated: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
    dilated: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
    currentGlass: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
  });

  const sphereOptions = Array.from({ length: 51 }, (_, i) => {
    const val = -25 + i * 0.25;
    return val.toFixed(2);
  });
  const axisOptions = Array.from({ length: 181 }, (_, i) => i.toString());

  const resetARR = () => {
    setArrData({
      unrelated: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
      dilated: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
      currentGlass: { odSph: '', odCyl: '', odAxis: '', osSph: '', osCyl: '', osAxis: '' },
    });
  };

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Autorefractometer</h3>
        <button
          onClick={resetARR}
          style={{ backgroundColor: '#ef4444', color: 'white', padding: '5px 12px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: '600' }}
        >
          Reset
        </button>
      </div>
      <div style={{ overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0' }}>Reading Type</th>
              <th colSpan={3} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0' }}>Right Eye</th>
              <th colSpan={3} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666' }}>Left Eye</th>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '6px', textAlign: 'left', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>SPH</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>CYL</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>AXIS</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>SPH</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>CYL</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666' }}>Axis</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: 'unrelated', label: 'Unrelated' },
              { key: 'dilated', label: 'Dilated' },
              { key: 'currentGlass', label: 'Current Glass Prescription' },
            ].map((test) => (
              <tr key={test.key} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>{test.label}</td>
                <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].odSph}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], odSph: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {sphereOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].odCyl}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], odCyl: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {sphereOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].odAxis}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], odAxis: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {axisOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].osSph}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], osSph: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {sphereOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].osCyl}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], osCyl: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {sphereOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '4px' }}>
                  <select
                    value={arrData[test.key as keyof typeof arrData].osAxis}
                    onChange={(e) =>
                      setArrData({
                        ...arrData,
                        [test.key]: { ...arrData[test.key as keyof typeof arrData], osAxis: e.target.value },
                      })
                    }
                    style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                  >
                    <option value="">--</option>
                    {axisOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function GlassPrescription() {
  const [gpData, setGpData] = useState({
    prismBase: false,
    distant: { pdForm: '', form: '', odSph: '', odCyl: '', odAxis: '', odVs: '', osSph: '', osCyl: '', osAxis: '', osVs: '' },
    near: { pdForm: '', form: '', odSph: '', odCyl: '', odAxis: '', odVs: '', osSph: '', osCyl: '', osAxis: '', osVs: '' },
    globalForm: '',
    type: '',
    coating: '',
    material: '',
    remark: '',
  });

  const sphereOptions = Array.from({ length: 51 }, (_, i) => {
    const val = -25 + i * 0.25;
    return val.toFixed(2);
  });
  const axisOptions = Array.from({ length: 181 }, (_, i) => i.toString());

  const formOptions = ['Select Form', 'Full Rim', 'Semi Rim', 'Rimless'];
  const typeOptions = ['Select Type', 'Single Vision', 'Bifocal', 'Multifocal'];
  const coatingOptions = ['Select Coating', 'Anti-Glare', 'Anti-UV', 'Blue Light', 'No Coating'];
  const materialOptions = ['Select Material', 'Glass', 'Polycarbonate', 'CR-39', 'High Index'];

  const resetPrescription = () => {
    setGpData({
      prismBase: false,
      distant: { pdForm: '', form: '', odSph: '', odCyl: '', odAxis: '', odVs: '', osSph: '', osCyl: '', osAxis: '', osVs: '' },
      near: { pdForm: '', form: '', odSph: '', odCyl: '', odAxis: '', odVs: '', osSph: '', osCyl: '', osAxis: '', osVs: '' },
      globalForm: '',
      type: '',
      coating: '',
      material: '',
      remark: '',
    });
  };

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Glass Prescription</h3>
        <button
          onClick={resetPrescription}
          style={{ backgroundColor: '#ef4444', color: 'white', padding: '5px 12px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: '600' }}
        >
          Reset
        </button>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        {/* Prism/Base Checkbox */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '500', color: '#374151' }}>
            <input
              type="checkbox"
              checked={gpData.prismBase}
              onChange={(e) => setGpData({ ...gpData, prismBase: e.target.checked })}
              style={{ width: '16px', height: '16px', cursor: 'pointer' }}
            />
            Prism/Base
          </label>
        </div>

        {/* Lens Configuration */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Form</label>
            <select value={gpData.globalForm} onChange={(e) => setGpData({ ...gpData, globalForm: e.target.value })} style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}>
              {formOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Type</label>
            <select value={gpData.type} onChange={(e) => setGpData({ ...gpData, type: e.target.value })} style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}>
              {typeOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Coating</label>
            <select value={gpData.coating} onChange={(e) => setGpData({ ...gpData, coating: e.target.value })} style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}>
              {coatingOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Material</label>
            <select value={gpData.material} onChange={(e) => setGpData({ ...gpData, material: e.target.value })} style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}>
              {materialOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        {/* Prescription Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px', marginBottom: '16px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '6px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '70px' }}>Test Type</th>
              <th style={{ padding: '6px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '60px' }}>PD Form</th>
              <th style={{ padding: '6px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '80px' }}>Form</th>
              <th colSpan={6} style={{ padding: '6px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0' }}>Right Eye</th>
              <th colSpan={6} style={{ padding: '6px', textAlign: 'center', fontWeight: '600', color: '#666' }}>Left Eye</th>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '4px', textAlign: 'left', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>N</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>R</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>SPH</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>CYL</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>AXIS</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>V/S</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>N</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>R</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>SPH</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>CYL</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>AXIS</th>
              <th style={{ padding: '4px', textAlign: 'center', fontSize: '9px', fontWeight: '500', color: '#666' }}>V/S</th>
            </tr>
          </thead>
          <tbody>
            {/* Distant Row */}
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '10px' }}>Distant</td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={gpData.distant.pdForm} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, pdForm: e.target.value } })} placeholder="PD" style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.form} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, form: e.target.value } })} style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}>
                  <option value="">Select</option>
                  {formOptions.slice(1).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, distant: { ...gpData.distant, odSph: '0.00', odCyl: '0.00', odAxis: '0', odVs: '6/6' } })} style={{ backgroundColor: '#0089AC', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>N</button>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, distant: { ...gpData.distant, odSph: '', odCyl: '', odAxis: '', odVs: '' } })} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>R</button>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.odSph} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, odSph: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.odCyl} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, odCyl: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.odAxis} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, odAxis: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {axisOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={gpData.distant.odVs} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, odVs: e.target.value } })} placeholder="V/S" style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, distant: { ...gpData.distant, osSph: '0.00', osCyl: '0.00', osAxis: '0', osVs: '6/6' } })} style={{ backgroundColor: '#0089AC', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>N</button>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, distant: { ...gpData.distant, osSph: '', osCyl: '', osAxis: '', osVs: '' } })} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>R</button>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.osSph} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, osSph: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.osCyl} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, osCyl: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.distant.osAxis} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, osAxis: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {axisOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px' }}>
                <input type="text" value={gpData.distant.osVs} onChange={(e) => setGpData({ ...gpData, distant: { ...gpData.distant, osVs: e.target.value } })} placeholder="V/S" style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
              </td>
            </tr>

            {/* Near Row */}
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '10px' }}>Near</td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={gpData.near.pdForm} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, pdForm: e.target.value } })} placeholder="PD" style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.form} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, form: e.target.value } })} style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}>
                  <option value="">Select</option>
                  {formOptions.slice(1).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, near: { ...gpData.near, odSph: '0.00', odCyl: '0.00', odAxis: '0', odVs: '6/6' } })} style={{ backgroundColor: '#0089AC', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>N</button>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, near: { ...gpData.near, odSph: '', odCyl: '', odAxis: '', odVs: '' } })} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>R</button>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.odSph} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, odSph: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.odCyl} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, odCyl: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.odAxis} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, odAxis: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {axisOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={gpData.near.odVs} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, odVs: e.target.value } })} placeholder="V/S" style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, near: { ...gpData.near, osSph: '0.00', osCyl: '0.00', osAxis: '0', osVs: '6/6' } })} style={{ backgroundColor: '#0089AC', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>N</button>
              </td>
              <td style={{ padding: '4px', textAlign: 'center', borderRight: '1px solid #e0e0e0' }}>
                <button onClick={() => setGpData({ ...gpData, near: { ...gpData.near, osSph: '', osCyl: '', osAxis: '', osVs: '' } })} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 6px', fontSize: '9px', fontWeight: '600', cursor: 'pointer', minWidth: '20px' }}>R</button>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.osSph} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, osSph: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.osCyl} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, osCyl: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {sphereOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px', borderRight: '1px solid #e0e0e0' }}>
                <select value={gpData.near.osAxis} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, osAxis: e.target.value } })} style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
                  <option value="">--</option>
                  {axisOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </td>
              <td style={{ padding: '4px' }}>
                <input type="text" value={gpData.near.osVs} onChange={(e) => setGpData({ ...gpData, near: { ...gpData.near, osVs: e.target.value } })} placeholder="V/S" style={{ width: '100%', padding: '3px 3px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Remark */}
        <div>
          <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '4px' }}>Remark</label>
          <textarea value={gpData.remark} onChange={(e) => setGpData({ ...gpData, remark: e.target.value })} placeholder="Additional remarks" rows={3} style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px', fontFamily: 'inherit' }} />
        </div>
      </div>
    </div>
  );
}

export function LacrimalPatency() {
  const [lacrimalData, setLacrimalData] = useState({
    odSyringoing: '',
    osSyringoing: '',
  });

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Lacrimal Patency</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '120px' }}>Test Type</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>Right Eye</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderLeft: '1px solid #e0e0e0' }}>Left Eye</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>Syringoing</td>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <select
                  value={lacrimalData.odSyringoing}
                  onChange={(e) => setLacrimalData({ ...lacrimalData, odSyringoing: e.target.value })}
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                >
                  <option value="">SELECT</option>
                  <option value="Patent">Patent</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Partial">Partial</option>
                </select>
              </td>
              <td style={{ padding: '8px', borderLeft: '1px solid #e0e0e0' }}>
                <select
                  value={lacrimalData.osSyringoing}
                  onChange={(e) => setLacrimalData({ ...lacrimalData, osSyringoing: e.target.value })}
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                >
                  <option value="">SELECT</option>
                  <option value="Patent">Patent</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Partial">Partial</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function KeratometryReading() {
  const [keratometryData, setKeratometryData] = useState({
    odK1: '',
    odK1At: '',
    odK2: '',
    odK2At: '',
    osK1: '',
    osK1At: '',
    osK2: '',
    osK2At: '',
  });

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Keratometry Reading</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '100px' }}>Field</th>
              <th colSpan={4} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>Right Eye</th>
              <th colSpan={4} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderLeft: '1px solid #e0e0e0' }}>Left Eye</th>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '6px', textAlign: 'left', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>K1</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>@</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>K2</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>@</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>K1</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>@</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>K2</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666' }}>@</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}></td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.odK1} onChange={(e) => setKeratometryData({ ...keratometryData, odK1: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.odK1At} onChange={(e) => setKeratometryData({ ...keratometryData, odK1At: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.odK2} onChange={(e) => setKeratometryData({ ...keratometryData, odK2: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.odK2At} onChange={(e) => setKeratometryData({ ...keratometryData, odK2At: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.osK1} onChange={(e) => setKeratometryData({ ...keratometryData, osK1: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.osK1At} onChange={(e) => setKeratometryData({ ...keratometryData, osK1At: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={keratometryData.osK2} onChange={(e) => setKeratometryData({ ...keratometryData, osK2: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px' }}>
                <input type="text" value={keratometryData.osK2At} onChange={(e) => setKeratometryData({ ...keratometryData, osK2At: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SchirmersTest() {
  const [schirmersData, setSchirmersData] = useState({
    odMmIn: '',
    odMm: '',
    osMmIn: '',
    osMm: '',
  });

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Schirmer's Test / Pachy</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '100px' }}>Field</th>
              <th colSpan={2} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>Right Eye</th>
              <th colSpan={2} style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderLeft: '1px solid #e0e0e0' }}>Left Eye</th>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '6px', textAlign: 'left', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}></th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>mm in</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0' }}>mm</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>mm in</th>
              <th style={{ padding: '6px', textAlign: 'center', fontSize: '10px', fontWeight: '500', color: '#666' }}>mm</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}></td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input type="text" value={schirmersData.odMmIn} onChange={(e) => setSchirmersData({ ...schirmersData, odMmIn: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0' }}>
                <input type="text" value={schirmersData.odMm} onChange={(e) => setSchirmersData({ ...schirmersData, odMm: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input type="text" value={schirmersData.osMmIn} onChange={(e) => setSchirmersData({ ...schirmersData, osMmIn: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
              <td style={{ padding: '6px' }}>
                <input type="text" value={schirmersData.osMm} onChange={(e) => setSchirmersData({ ...schirmersData, osMm: e.target.value })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Diagnosis() {
  const [diagnosisData, setDiagnosisData] = useState({
    odICDCode: '',
    osICDCode: '',
  });

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Diagnosis</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '120px' }}>Field</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>Right Eye</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderLeft: '1px solid #e0e0e0' }}>Left Eye</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>ICD Code</td>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={diagnosisData.odICDCode}
                  onChange={(e) => setDiagnosisData({ ...diagnosisData, odICDCode: e.target.value })}
                  placeholder="ICD CODE"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '8px', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={diagnosisData.osICDCode}
                  onChange={(e) => setDiagnosisData({ ...diagnosisData, osICDCode: e.target.value })}
                  placeholder="ICD CODE"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Management() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);
  const [managementData, setManagementData] = useState({
    plan1: '',
    plan2: '',
    plan3: '',
  });

  // Default data mapping based on selected plan
  const planDefaults: Record<string, { plan1: string; plan2: string; plan3: string }> = {
    'medical': {
      plan1: 'Medications prescribed',
      plan2: 'Follow-up in 2 weeks',
      plan3: 'Patient education provided',
    },
    'surgical': {
      plan1: 'Surgical intervention scheduled',
      plan2: 'Pre-operative tests required',
      plan3: 'Post-operative care instructions',
    },
    'laser': {
      plan1: 'Laser treatment planned',
      plan2: 'Pre-treatment assessment done',
      plan3: 'Follow-up appointments scheduled',
    },
    'conservative': {
      plan1: 'Observation and monitoring',
      plan2: 'Lifestyle modifications advised',
      plan3: 'Regular review scheduled',
    },
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const plan = e.target.value;
    setSelectedPlan(plan);
    if (plan && planDefaults[plan]) {
      setManagementData(planDefaults[plan]);
    } else {
      setManagementData({ plan1: '', plan2: '', plan3: '' });
    }
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Management</h3>
      </div>
      <div style={contentStyle}>
        {/* Select Plan and Disclaimer Section */}
        <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '12px', fontWeight: '500', color: '#333' }}>Select plan of management</label>
            <select
              value={selectedPlan}
              onChange={handlePlanChange}
              style={{
                padding: '6px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '12px',
                minWidth: '150px',
              }}
            >
              <option value="">-- Select Plan --</option>
              <option value="medical">Medical Management</option>
              <option value="surgical">Surgical Management</option>
              <option value="laser">Laser Treatment</option>
              <option value="conservative">Conservative Management</option>
            </select>
          </div>

          {/* Disclaimer Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
            <input
              type="checkbox"
              id="disclaimer"
              checked={disclaimerChecked}
              onChange={(e) => setDisclaimerChecked(e.target.checked)}
              style={{ cursor: 'pointer' }}
            />
            <label htmlFor="disclaimer" style={{ fontSize: '12px', fontWeight: '500', color: '#333', cursor: 'pointer' }}>
              Disclaimer
            </label>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: '#0089AC',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              ↓
            </button>
          </div>
        </div>

        {/* Three Textboxes in One Row */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <textarea
            value={managementData.plan1}
            onChange={(e) => setManagementData({ ...managementData, plan1: e.target.value })}
            placeholder="No Previous Plan Found !!"
            rows={6}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'sans-serif',
              resize: 'vertical',
            }}
          />
          <textarea
            value={managementData.plan2}
            onChange={(e) => setManagementData({ ...managementData, plan2: e.target.value })}
            placeholder="No Previous Plan Found !!"
            rows={6}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'sans-serif',
              resize: 'vertical',
            }}
          />
          <textarea
            value={managementData.plan3}
            onChange={(e) => setManagementData({ ...managementData, plan3: e.target.value })}
            placeholder="No Previous Plan Found !!"
            rows={6}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'sans-serif',
              resize: 'vertical',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function Prescription() {
  return <PrescriptionForm />;
}

export function Advice() {
  const adviceTabs = ['RE VAG PL', 'LE PM', 'GLAUCOMADX', 'RE PREOP', 'RE OM', 'LE OM', 'RE Csl', 'LE PREOP', 'BE OM', 'LE Csl'];
  const followUpOptions = ['1D', '2D', '1W', '1M', '3M', '6M', '1Y'];

  const [instructions, setInstructions] = useState('');
  const [selectedTabs, setSelectedTabs] = useState<Record<string, boolean>>(
    adviceTabs.reduce((acc, tab) => ({ ...acc, [tab]: true }), {})
  );
  const [adviceData, setAdviceData] = useState({
    title: '',
    advice: '',
    eye: '',
    remark: '',
  });
  const [followUpData, setFollowUpData] = useState({
    selectedFollowUp: '',
    followUpTitle: '',
    amount: '',
    discount: '',
    finalAmount: '',
    referredDoctor: '',
  });

  const toggleTab = (tab: string) => {
    setSelectedTabs(prev => ({
      ...prev,
      [tab]: !prev[tab]
    }));
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Advice</h3>
      </div>
      <div style={contentStyle}>
        {/* Instructions Section */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '6px', display: 'block' }}>Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Enter instructions"
            rows={3}
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'sans-serif',
            }}
          />
        </div>

        {/* Advice Tabs */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {adviceTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => toggleTab(tab)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: selectedTabs[tab] ? '#0089AC' : '#e0e0e0',
                  color: selectedTabs[tab] ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  fontWeight: '600',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Advice Form Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', fontSize: '11px', fontWeight: '600' }}>Title</th>
                <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', fontSize: '11px', fontWeight: '600' }}>Advice</th>
                <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', fontSize: '11px', fontWeight: '600' }}>EYE</th>
                <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left', fontSize: '11px', fontWeight: '600' }}>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <select
                    value={adviceData.title}
                    onChange={(e) => setAdviceData({ ...adviceData, title: e.target.value })}
                    style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                  >
                    <option value="">Select Title</option>
                    <option value="glasses">Glasses</option>
                    <option value="contact">Contact Lens</option>
                    <option value="medication">Medication</option>
                  </select>
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <select
                    value={adviceData.advice}
                    onChange={(e) => setAdviceData({ ...adviceData, advice: e.target.value })}
                    style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                  >
                    <option value="">Select Advice</option>
                    <option value="wear">Wear continuously</option>
                    <option value="occasional">Wear occasionally</option>
                    <option value="custom">Custom Advice</option>
                  </select>
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <input
                    type="text"
                    value={adviceData.eye}
                    onChange={(e) => setAdviceData({ ...adviceData, eye: e.target.value })}
                    placeholder="-"
                    style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                  />
                </td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                  <input
                    type="text"
                    value={adviceData.remark}
                    onChange={(e) => setAdviceData({ ...adviceData, remark: e.target.value })}
                    placeholder="-"
                    style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Follow Up Section */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#333', marginBottom: '8px', display: 'block' }}>Follow Up</label>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
            {followUpOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFollowUpData({ ...followUpData, selectedFollowUp: option })}
                style={{
                  padding: '8px 14px',
                  backgroundColor: followUpData.selectedFollowUp === option ? '#0089AC' : '#e0e0e0',
                  color: followUpData.selectedFollowUp === option ? 'white' : '#333',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontWeight: '600',
                }}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Follow Up Title Section */}
          <div style={{ marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '4px', display: 'block' }}>Follow Up Title</label>
              <select
                value={followUpData.followUpTitle}
                onChange={(e) => setFollowUpData({ ...followUpData, followUpTitle: e.target.value })}
                style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px' }}
              >
                <option value="">Select Follow Title</option>
                <option value="review">Review</option>
                <option value="recheck">Recheck</option>
                <option value="surgery">Surgery</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '4px', display: 'block' }}>Referred Doctor</label>
              <input
                type="text"
                value={followUpData.referredDoctor}
                onChange={(e) => setFollowUpData({ ...followUpData, referredDoctor: e.target.value })}
                placeholder="Enter doctor name"
                style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
          </div>

          {/* Amount Section */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '4px', display: 'block' }}>Amount</label>
              <input
                type="text"
                value={followUpData.amount}
                onChange={(e) => setFollowUpData({ ...followUpData, amount: e.target.value })}
                placeholder="300"
                style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '4px', display: 'block' }}>Discount</label>
              <input
                type="text"
                value={followUpData.discount}
                onChange={(e) => setFollowUpData({ ...followUpData, discount: e.target.value })}
                placeholder="0"
                style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '11px', fontWeight: '600', color: '#333', marginBottom: '4px', display: 'block' }}>Final Amount</label>
              <input
                type="text"
                value={followUpData.finalAmount}
                onChange={(e) => setFollowUpData({ ...followUpData, finalAmount: e.target.value })}
                placeholder="300"
                style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gonioscopy() {
  const [gonioscopyData, setGonioscopyData] = useState({
    // Right Eye Sclera Spur
    odScleraSpurTop: '',
    odScleraSpurLeft: '',
    odScleraSpurRight: '',
    odScleraSpurBottom: '',
    // Right Eye Iris Root
    odIrisTop: '',
    odIrisLeft: '',
    odIrisRight: '',
    odIrisBottom: '',
    odRemark: '',
    // Left Eye
    osSelectTop: '',
    osSelectLeft: '',
    osSelectRight: '',
    osSelectBottom: '',
    osSelect2Top: '',
    osSelect2Left: '',
    osSelect2Right: '',
    osSelect2Bottom: '',
    osRemark: '',
  });

  const DirectionalInput = ({ label, topValue, bottomValue, leftValue, rightValue, onTopChange, onBottomChange, onLeftChange, onRightChange, isSelect = false }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
      <div style={{ width: '60px' }}>
        {isSelect ? (
          <select value={topValue} onChange={onTopChange} style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
            <option value="">Select</option>
          </select>
        ) : (
          <input type="text" value={topValue} onChange={onTopChange} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
        )}
      </div>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ width: '50px' }}>
          {isSelect ? (
            <select value={leftValue} onChange={onLeftChange} style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
              <option value="">Select</option>
            </select>
          ) : (
            <input type="text" value={leftValue} onChange={onLeftChange} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
          )}
        </div>
        <div style={{ width: '50px' }}>
          {isSelect ? (
            <select value={rightValue} onChange={onRightChange} style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
              <option value="">Select</option>
            </select>
          ) : (
            <input type="text" value={rightValue} onChange={onRightChange} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
          )}
        </div>
      </div>
      <div style={{ width: '60px' }}>
        {isSelect ? (
          <select value={bottomValue} onChange={onBottomChange} style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }}>
            <option value="">Select</option>
          </select>
        ) : (
          <input type="text" value={bottomValue} onChange={onBottomChange} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '9px' }} />
        )}
      </div>
    </div>
  );

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Gonioscopy</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        {/* RIGHT EYE SECTION */}
        <div style={{ marginBottom: '24px' }}>
          {/* Full Width Row with Buttons and Fields */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
            {/* Left Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '90px' }}>
              <h4 style={{ fontSize: '11px', fontWeight: '600', color: '#111', margin: '0 0 4px 0' }}>RIGHT EYE</h4>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Open</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Close</button>
              </div>
            </div>

            {/* Sclera Spur */}
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '10px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '4px', textAlign: 'center' }}>Sclera Spur</label>
              <DirectionalInput
                topValue={gonioscopyData.odScleraSpurTop}
                bottomValue={gonioscopyData.odScleraSpurBottom}
                leftValue={gonioscopyData.odScleraSpurLeft}
                rightValue={gonioscopyData.odScleraSpurRight}
                onTopChange={(e) => setGonioscopyData({ ...gonioscopyData, odScleraSpurTop: e.target.value })}
                onBottomChange={(e) => setGonioscopyData({ ...gonioscopyData, odScleraSpurBottom: e.target.value })}
                onLeftChange={(e) => setGonioscopyData({ ...gonioscopyData, odScleraSpurLeft: e.target.value })}
                onRightChange={(e) => setGonioscopyData({ ...gonioscopyData, odScleraSpurRight: e.target.value })}
              />
            </div>

            {/* Large Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '60px' }}>
              <div style={{ fontSize: '40px', color: '#0089AC', fontWeight: 'bold' }}>→</div>
            </div>

            {/* Iris Root Clo */}
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '10px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '4px', textAlign: 'center' }}>Iris Root Clo</label>
              <DirectionalInput
                topValue={gonioscopyData.odIrisTop}
                bottomValue={gonioscopyData.odIrisBottom}
                leftValue={gonioscopyData.odIrisLeft}
                rightValue={gonioscopyData.odIrisRight}
                onTopChange={(e) => setGonioscopyData({ ...gonioscopyData, odIrisTop: e.target.value })}
                onBottomChange={(e) => setGonioscopyData({ ...gonioscopyData, odIrisBottom: e.target.value })}
                onLeftChange={(e) => setGonioscopyData({ ...gonioscopyData, odIrisLeft: e.target.value })}
                onRightChange={(e) => setGonioscopyData({ ...gonioscopyData, odIrisRight: e.target.value })}
              />
            </div>

            {/* Right Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '90px' }}>
              <h4 style={{ fontSize: '11px', fontWeight: '600', color: '#111', margin: '0 0 4px 0', visibility: 'hidden' }}>.</h4>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Open</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Close</button>
              </div>
            </div>
          </div>

          {/* Remark */}
          <div style={{ marginBottom: '12px' }}>
            <label style={{ fontSize: '11px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '6px' }}>Remark</label>
            <textarea
              value={gonioscopyData.odRemark}
              onChange={(e) => setGonioscopyData({ ...gonioscopyData, odRemark: e.target.value })}
              placeholder="Remark"
              rows={2}
              style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px', fontFamily: 'inherit' }}
            />
          </div>
        </div>

        {/* LEFT EYE SECTION */}
        <div>
          {/* Full Width Row with Buttons and Fields */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '4px', border: '1px solid #e0e0e0' }}>
            {/* Left Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '90px' }}>
              <h4 style={{ fontSize: '11px', fontWeight: '600', color: '#111', margin: '0 0 4px 0' }}>LEFT EYE</h4>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Open</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Close</button>
              </div>
            </div>

            {/* Select 1 */}
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '10px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '4px', textAlign: 'center' }}>Select</label>
              <DirectionalInput
                topValue={gonioscopyData.osSelectTop}
                bottomValue={gonioscopyData.osSelectBottom}
                leftValue={gonioscopyData.osSelectLeft}
                rightValue={gonioscopyData.osSelectRight}
                onTopChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelectTop: e.target.value })}
                onBottomChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelectBottom: e.target.value })}
                onLeftChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelectLeft: e.target.value })}
                onRightChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelectRight: e.target.value })}
                isSelect={true}
              />
            </div>

            {/* Large Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '60px' }}>
              <div style={{ fontSize: '40px', color: '#0089AC', fontWeight: 'bold' }}>→</div>
            </div>

            {/* Select 2 */}
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '10px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '4px', textAlign: 'center' }}>Select</label>
              <DirectionalInput
                topValue={gonioscopyData.osSelect2Top}
                bottomValue={gonioscopyData.osSelect2Bottom}
                leftValue={gonioscopyData.osSelect2Left}
                rightValue={gonioscopyData.osSelect2Right}
                onTopChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelect2Top: e.target.value })}
                onBottomChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelect2Bottom: e.target.value })}
                onLeftChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelect2Left: e.target.value })}
                onRightChange={(e) => setGonioscopyData({ ...gonioscopyData, osSelect2Right: e.target.value })}
                isSelect={true}
              />
            </div>

            {/* Right Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '90px' }}>
              <h4 style={{ fontSize: '11px', fontWeight: '600', color: '#111', margin: '0 0 4px 0', visibility: 'hidden' }}>.</h4>
              <div style={{ display: 'flex', gap: '4px' }}>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Open</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '4px 10px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontSize: '10px', fontWeight: '600' }}>Close</button>
              </div>
            </div>
          </div>

          {/* Remark */}
          <div>
            <label style={{ fontSize: '11px', fontWeight: '500', color: '#666', display: 'block', marginBottom: '6px' }}>Remark</label>
            <textarea
              value={gonioscopyData.osRemark}
              onChange={(e) => setGonioscopyData({ ...gonioscopyData, osRemark: e.target.value })}
              placeholder="Remark"
              rows={2}
              style={{ width: '100%', padding: '6px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '11px', fontFamily: 'inherit' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExternalExam() {
  const [externalData, setExternalData] = useState({
    facialSymmetry: '',
    externalFace: '',
    headPosture: '',
    ocularPosition: '',
    ocularAlignment: '',
    rapidOd: '',
    rapidOs: '',
    ocularMotilityOd: '',
    ocularMotilityOs: '',
  });

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>External Exam</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '140px' }}>Exam Type</th>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666' }}>Findings</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>Facial Symmetry</td>
              <td style={{ padding: '8px' }}>
                <input type="text" value={externalData.facialSymmetry} onChange={(e) => setExternalData({ ...externalData, facialSymmetry: e.target.value })} placeholder="Symmetric on both side" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>External Face</td>
              <td style={{ padding: '8px' }}>
                <input type="text" value={externalData.externalFace} onChange={(e) => setExternalData({ ...externalData, externalFace: e.target.value })} placeholder="Normal" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>Head Posture</td>
              <td style={{ padding: '8px' }}>
                <input type="text" value={externalData.headPosture} onChange={(e) => setExternalData({ ...externalData, headPosture: e.target.value })} placeholder="Normal" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>Ocular Position</td>
              <td style={{ padding: '8px' }}>
                <input type="text" value={externalData.ocularPosition} onChange={(e) => setExternalData({ ...externalData, ocularPosition: e.target.value })} placeholder="Normal" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>Ocular Alignment</td>
              <td style={{ padding: '8px' }}>
                <input type="text" value={externalData.ocularAlignment} onChange={(e) => setExternalData({ ...externalData, ocularAlignment: e.target.value })} placeholder="Orthotropic" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>RAPD</td>
              <td style={{ padding: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '10px', color: '#666', display: 'block', marginBottom: '4px' }}>Right Eye</label>
                    <input type="text" value={externalData.rapidOd} onChange={(e) => setExternalData({ ...externalData, rapidOd: e.target.value })} placeholder="Normal Reaction to light" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', color: '#666', display: 'block', marginBottom: '4px' }}>Left Eye</label>
                    <input type="text" value={externalData.rapidOs} onChange={(e) => setExternalData({ ...externalData, rapidOs: e.target.value })} placeholder="Normal Reaction to light" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: '500', borderRight: '1px solid #e0e0e0' }}>Ocular Motility</td>
              <td style={{ padding: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div>
                    <label style={{ fontSize: '10px', color: '#666', display: 'block', marginBottom: '4px' }}>Right Eye</label>
                    <input type="text" value={externalData.ocularMotilityOd} onChange={(e) => setExternalData({ ...externalData, ocularMotilityOd: e.target.value })} placeholder="Full and Free in all directions" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', color: '#666', display: 'block', marginBottom: '4px' }}>Left Eye</label>
                    <input type="text" value={externalData.ocularMotilityOs} onChange={(e) => setExternalData({ ...externalData, ocularMotilityOs: e.target.value })} placeholder="Full and Free in all directions" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function SlitLampExam() {
  const [slitLampData, setSlitLampData] = useState({
    eyeLids: { od: '', os: '' },
    conjunctiva: { od: '', os: '' },
    sclera: { od: '', os: '' },
    cornea: { od: '', os: '' },
    anteriorChamber: { od: '', os: '' },
    iris: { od: '', os: '' },
    pupil: { od: '', os: '' },
  });

  const [showDrawingModal, setShowDrawingModal] = useState(false);

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Slit Lamp Exam</h3>
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
          EMR Drawing
        </button>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '120px' }}>SLE</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <div style={{ marginBottom: '4px' }}>Right Eye</div>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '3px 6px', borderRadius: '2px', border: 'none', cursor: 'pointer', fontSize: '9px', fontWeight: '600', marginRight: '2px' }}>N</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '3px 6px', borderRadius: '2px', border: 'none', cursor: 'pointer', fontSize: '9px', fontWeight: '600' }}>R</button>
              </th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderLeft: '1px solid #e0e0e0' }}>
                <div style={{ marginBottom: '4px' }}>Left Eye</div>
                <button style={{ backgroundColor: '#0089AC', color: 'white', padding: '3px 6px', borderRadius: '2px', border: 'none', cursor: 'pointer', fontSize: '9px', fontWeight: '600', marginRight: '2px' }}>N</button>
                <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '3px 6px', borderRadius: '2px', border: 'none', cursor: 'pointer', fontSize: '9px', fontWeight: '600' }}>R</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: 'eyeLids', label: 'Eye Lids' },
              { key: 'conjunctiva', label: 'Conjunctiva' },
              { key: 'sclera', label: 'Sclera' },
              { key: 'cornea', label: 'Cornea' },
              { key: 'anteriorChamber', label: 'Anterior Chamber' },
              { key: 'iris', label: 'Iris' },
              { key: 'pupil', label: 'Pupil' },
            ].map((item) => (
              <tr key={item.key} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>{item.label}</td>
                <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                  <input type="text" value={slitLampData[item.key as keyof typeof slitLampData].od} onChange={(e) => setSlitLampData({ ...slitLampData, [item.key]: { ...slitLampData[item.key as keyof typeof slitLampData], od: e.target.value } })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                </td>
                <td style={{ padding: '8px', borderLeft: '1px solid #e0e0e0' }}>
                  <input type="text" value={slitLampData[item.key as keyof typeof slitLampData].os} onChange={(e) => setSlitLampData({ ...slitLampData, [item.key]: { ...slitLampData[item.key as keyof typeof slitLampData], os: e.target.value } })} placeholder="-" style={{ width: '100%', padding: '4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DilatedExam() {
  const [dilatedData, setDilatedData] = useState({
    odPupilSize: '',
    osPupilSize: '',
    odLens: '',
    osLens: '',
  });

  const setNormalValuesOD = () => {
    setDilatedData({
      ...dilatedData,
      odPupilSize: '3.0',
      odLens: 'Clear',
    });
  };

  const resetValuesOD = () => {
    setDilatedData({
      ...dilatedData,
      odPupilSize: '',
      odLens: '',
    });
  };

  const setNormalValuesOS = () => {
    setDilatedData({
      ...dilatedData,
      osPupilSize: '3.0',
      osLens: 'Clear',
    });
  };

  const resetValuesOS = () => {
    setDilatedData({
      ...dilatedData,
      osPupilSize: '',
      osLens: '',
    });
  };

  return (
    <div style={sectionStyle}>
      <div style={{ ...headerStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '160px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: 0 }}>Post Dilated Exam</h3>
      </div>
      <div style={{ overflow: 'auto', padding: '12px 16px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
              <th style={{ padding: '8px', textAlign: 'left', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', width: '120px' }}>Exam Type</th>
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <div style={{ marginBottom: '4px' }}>Right Eye</div>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button
                    onClick={setNormalValuesOD}
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
                    onClick={resetValuesOD}
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
              <th style={{ padding: '8px', textAlign: 'center', fontWeight: '600', color: '#666', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <div style={{ marginBottom: '4px' }}>Left Eye</div>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button
                    onClick={setNormalValuesOS}
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
                    onClick={resetValuesOS}
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
            {/* Pupil Size Row */}
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>Pupil Size (in mm)</td>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={dilatedData.odPupilSize}
                  onChange={(e) => setDilatedData({ ...dilatedData, odPupilSize: e.target.value })}
                  placeholder="-"
                  style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                />
              </td>
              <td style={{ padding: '8px', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={dilatedData.osPupilSize}
                  onChange={(e) => setDilatedData({ ...dilatedData, osPupilSize: e.target.value })}
                  placeholder="-"
                  style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                />
              </td>
            </tr>

            {/* Lens Row */}
            <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', fontWeight: '500', fontSize: '11px' }}>Lens</td>
              <td style={{ padding: '8px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={dilatedData.odLens}
                  onChange={(e) => setDilatedData({ ...dilatedData, odLens: e.target.value })}
                  placeholder="-"
                  style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                />
              </td>
              <td style={{ padding: '8px', borderLeft: '1px solid #e0e0e0' }}>
                <input
                  type="text"
                  value={dilatedData.osLens}
                  onChange={(e) => setDilatedData({ ...dilatedData, osLens: e.target.value })}
                  placeholder="-"
                  style={{ width: '100%', padding: '4px 4px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '10px' }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
