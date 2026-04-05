import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface ComplaintRow {
  id: string;
  complaint: string;
  eye: string;
  duration: string;
  remark: string;
}

export default function ChiefComplaints() {
  const [rows, setRows] = useState<ComplaintRow[]>([
    {
      id: '1',
      complaint: 'Redness',
      eye: 'Right Eye',
      duration: '5 days',
      remark: 'Need to check retina',
    },
    {
      id: '2',
      complaint: 'Watering',
      eye: 'Both Eyes',
      duration: '2 days',
      remark: 'Need to analysis',
    },
  ]);

  const [newRow, setNewRow] = useState({
    complaint: '',
    eye: '',
    duration: '',
    remark: '',
  });

  const addNewRow = () => {
    if (newRow.complaint.trim() || newRow.eye.trim() || newRow.duration.trim() || newRow.remark.trim()) {
      setRows([
        {
          id: Date.now().toString(),
          ...newRow,
        },
        ...rows,
      ]);
      setNewRow({ complaint: '', eye: '', duration: '', remark: '' });
    }
  };

  const deleteRow = (id: string) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof ComplaintRow, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
      {/* Section Header */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px 16px', borderBottom: '1px solid #e0e0e0' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111' }}>Chief Complaints & History</h3>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
          <tr>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Complaint</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Eye</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Duration</th>
            <th style={{ padding: '8px 12px', textAlign: 'left', fontSize: '11px', fontWeight: '600', color: '#666' }}>Remark</th>
            <th style={{ padding: '8px 12px', textAlign: 'center', fontSize: '11px', fontWeight: '600', color: '#666', width: '40px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty input row for adding new complaint */}
          <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.complaint}
                onChange={(e) => setNewRow({ ...newRow, complaint: e.target.value })}
                placeholder="Enter complaint"
                style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
              />
            </td>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.eye}
                onChange={(e) => setNewRow({ ...newRow, eye: e.target.value })}
                placeholder="e.g., Right Eye"
                style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
              />
            </td>
            <td style={{ padding: '8px 12px' }}>
              <input
                type="text"
                value={newRow.duration}
                onChange={(e) => setNewRow({ ...newRow, duration: e.target.value })}
                placeholder="e.g., 5 days"
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

          {/* Existing complaint rows */}
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '8px 12px' }}>
                <input
                  type="text"
                  value={row.complaint}
                  onChange={(e) =>
                    updateRow(row.id, 'complaint', e.target.value)
                  }
                  placeholder="Enter complaint"
                  style={{ width: '100%', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '3px', fontSize: '12px' }}
                />
              </td>
              <td style={{ padding: '8px 12px' }}>
                <input
                  type="text"
                  value={row.eye}
                  onChange={(e) => updateRow(row.id, 'eye', e.target.value)}
                  placeholder="e.g., Right Eye"
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
                  placeholder="e.g., 5 days"
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
