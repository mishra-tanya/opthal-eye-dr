import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface DiseaseRow {
  id: string;
  disease: string;
  duration: string;
  remark: string;
}

export default function SystemicDisease() {
  const [rows, setRows] = useState<DiseaseRow[]>([
    {
      id: '1',
      disease: 'Diabetes Mellitus',
      duration: '6 months',
      remark: 'Need observation',
    },
    {
      id: '2',
      disease: 'Valve Disease',
      duration: '1 year',
      remark: '',
    },
  ]);

  const [newRow, setNewRow] = useState({
    disease: '',
    duration: '',
    remark: '',
  });

  const addNewRow = () => {
    if (newRow.disease.trim() || newRow.duration.trim() || newRow.remark.trim()) {
      setRows([
        {
          id: Date.now().toString(),
          ...newRow,
        },
        ...rows,
      ]);
      setNewRow({ disease: '', duration: '', remark: '' });
    }
  };

  const deleteRow = (id: string) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof DiseaseRow, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e0e0e0', overflow: 'hidden', marginTop: '16px' }}>
      {/* Section Header */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px 16px', borderBottom: '1px solid #e0e0e0' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>Systemic Disease</h3>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
          <tr>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Select Disease</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Duration</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Remark</th>
            <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: '11px', fontWeight: '600', color: '#666', width: '40px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty input row for adding new disease */}
          <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.disease}
                onChange={(e) => setNewRow({ ...newRow, disease: e.target.value })}
                placeholder="Select disease"
                style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
              />
            </td>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.duration}
                onChange={(e) => setNewRow({ ...newRow, duration: e.target.value })}
                placeholder="e.g., 6 months"
                style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
              />
            </td>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.remark}
                onChange={(e) => setNewRow({ ...newRow, remark: e.target.value })}
                placeholder="Enter remarks"
                style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
              />
            </td>
            <td style={{ padding: '8px 12px', textAlign: 'center' }}>
              <button
                onClick={addNewRow}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', color: '#0089AC', backgroundColor: 'transparent', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}
                title="Add new row"
              >
                <Plus size={16} />
              </button>
            </td>
          </tr>

          {/* Existing disease rows */}
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px 12px' }}>
                <input
                  type="text"
                  value={row.disease}
                  onChange={(e) =>
                    updateRow(row.id, 'disease', e.target.value)
                  }
                  placeholder="Select disease"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
                />
              </td>
              <td style={{ padding: '8px 12px' }}>
                <input
                  type="text"
                  value={row.duration}
                  onChange={(e) =>
                    updateRow(row.id, 'duration', e.target.value)
                  }
                  placeholder="e.g., 6 months"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
                />
              </td>
              <td style={{ padding: '8px 12px' }}>
                <input
                  type="text"
                  value={row.remark}
                  onChange={(e) =>
                    updateRow(row.id, 'remark', e.target.value)
                  }
                  placeholder="Enter remarks"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
                />
              </td>
              <td style={{ padding: '8px 12px', textAlign: 'center' }}>
                <button
                  onClick={() => deleteRow(row.id)}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', color: '#dc2626', backgroundColor: 'transparent', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                  title="Delete row"
                >
                  <X size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
