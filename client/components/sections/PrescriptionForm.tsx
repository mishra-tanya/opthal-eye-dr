import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface PrescriptionRow {
  id: string;
  medicineType: string;
  route: string;
  medicineName: string;
  dose: string;
  frequency: string;
  duration: string;
  startDate: string;
  endDate: string;
  remarks: string;
}

// Preset medicine groups - each button represents a group of medicines
const PRESET_MEDICINES: Record<string, PrescriptionRow[]> = {
  'HY&IT': [
    {
      id: Date.now().toString(),
      medicineType: 'HY&IT',
      route: 'Topical',
      medicineName: 'Hyaluronic Acid Eye Drop',
      dose: '1 drop',
      frequency: '4 times daily',
      duration: '30 days',
      startDate: '',
      endDate: '',
      remarks: ''
    },
    {
      id: (Date.now() + 1).toString(),
      medicineType: 'HY&IT',
      route: 'Topical',
      medicineName: 'Iteritinol Eye Drop',
      dose: '1 drop',
      frequency: '3 times daily',
      duration: '30 days',
      startDate: '',
      endDate: '',
      remarks: ''
    }
  ],
  'AGMT': [
    {
      id: Date.now().toString(),
      medicineType: 'AGMT',
      route: 'Topical',
      medicineName: 'Atropine Eye Drop',
      dose: '1 drop',
      frequency: '2 times daily',
      duration: '14 days',
      startDate: '',
      endDate: '',
      remarks: 'For cycloplegia'
    },
    {
      id: (Date.now() + 1).toString(),
      medicineType: 'AGMT',
      route: 'Topical',
      medicineName: 'Gentamicin Eye Drop',
      dose: '1 drop',
      frequency: 'Hourly',
      duration: '7 days',
      startDate: '',
      endDate: '',
      remarks: 'For infection'
    }
  ],
  'NRP': [
    {
      id: Date.now().toString(),
      medicineType: 'NRP',
      route: 'Topical',
      medicineName: 'Naphazoline Eye Drop',
      dose: '1 drop',
      frequency: '2 times daily',
      duration: '7 days',
      startDate: '',
      endDate: '',
      remarks: 'For redness'
    }
  ],
  'EVIL': [
    {
      id: Date.now().toString(),
      medicineType: 'EVIL',
      route: 'Topical',
      medicineName: 'Timolol Eye Drop',
      dose: '1 drop',
      frequency: '2 times daily',
      duration: '30 days',
      startDate: '',
      endDate: '',
      remarks: 'For IOP control'
    }
  ],
  'CPLS': [
    {
      id: Date.now().toString(),
      medicineType: 'CPLS',
      route: 'Topical',
      medicineName: 'Ciprofloxacin Eye Drop',
      dose: '1 drop',
      frequency: '4 times daily',
      duration: '7 days',
      startDate: '',
      endDate: '',
      remarks: 'Antibiotic'
    }
  ],
  'GATES': [
    {
      id: Date.now().toString(),
      medicineType: 'GATES',
      route: 'Topical',
      medicineName: 'Dorzolamide Eye Drop',
      dose: '1 drop',
      frequency: '3 times daily',
      duration: '30 days',
      startDate: '',
      endDate: '',
      remarks: 'For glaucoma'
    }
  ]
};

export default function PrescriptionForm() {
  const [rows, setRows] = useState<PrescriptionRow[]>([]);
  
  const [newRow, setNewRow] = useState<PrescriptionRow>({
    id: '',
    medicineType: '',
    route: '',
    medicineName: '',
    dose: '',
    frequency: '',
    duration: '',
    startDate: '',
    endDate: '',
    remarks: ''
  });

  const addPresetMedicines = (medicineGroup: string) => {
    const preset = PRESET_MEDICINES[medicineGroup];
    if (preset) {
      // Add new preset medicines with unique IDs
      const newPresets = preset.map((medicine) => ({
        ...medicine,
        id: Date.now().toString() + Math.random()
      }));
      setRows([...newPresets, ...rows]);
    }
  };

  const addNewRow = () => {
    if (newRow.medicineName.trim() || newRow.route.trim() || newRow.dose.trim()) {
      setRows([
        {
          id: Date.now().toString(),
          ...newRow,
        },
        ...rows,
      ]);
      setNewRow({
        id: '',
        medicineType: '',
        route: '',
        medicineName: '',
        dose: '',
        frequency: '',
        duration: '',
        startDate: '',
        endDate: '',
        remarks: ''
      });
    }
  };

  const deleteRow = (id: string) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const updateRow = (id: string, field: keyof PrescriptionRow, value: string) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e0e0e0', overflow: 'hidden' }}>
      {/* Section Header */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '10px 16px', borderBottom: '1px solid #e0e0e0' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', margin: '0 0 10px 0' }}>Prescription</h3>
        
        {/* Preset Medicine Buttons */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {Object.keys(PRESET_MEDICINES).map((medicineGroup) => (
            <button
              key={medicineGroup}
              onClick={() => addPresetMedicines(medicineGroup)}
              style={{
                backgroundColor: '#0089AC',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '11px',
                fontWeight: '600',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#006b87'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0089AC'}
            >
              {medicineGroup}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #e0e0e0' }}>
          <tr>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '60px' }}>Type</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '50px' }}>Route</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666' }}>Medicine Name</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '60px' }}>Dose</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '80px' }}>Frequency</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '60px' }}>Duration</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '70px' }}>Start Date</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '70px' }}>End Date</th>
            <th style={{ padding: '8px 6px', textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#666', maxWidth: '80px' }}>Remarks</th>
            <th style={{ padding: '8px 6px', textAlign: 'center', fontSize: '10px', fontWeight: '600', color: '#666', width: '40px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Empty input row for adding new prescription */}
          <tr style={{ borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.medicineType}
                onChange={(e) => setNewRow({ ...newRow, medicineType: e.target.value })}
                placeholder="Type"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.route}
                onChange={(e) => setNewRow({ ...newRow, route: e.target.value })}
                placeholder="Route"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.medicineName}
                onChange={(e) => setNewRow({ ...newRow, medicineName: e.target.value })}
                placeholder="Medicine Name"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.dose}
                onChange={(e) => setNewRow({ ...newRow, dose: e.target.value })}
                placeholder="Dose"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.frequency}
                onChange={(e) => setNewRow({ ...newRow, frequency: e.target.value })}
                placeholder="Frequency"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.duration}
                onChange={(e) => setNewRow({ ...newRow, duration: e.target.value })}
                placeholder="Duration"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="date"
                value={newRow.startDate}
                onChange={(e) => setNewRow({ ...newRow, startDate: e.target.value })}
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="date"
                value={newRow.endDate}
                onChange={(e) => setNewRow({ ...newRow, endDate: e.target.value })}
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px' }}>
              <input
                type="text"
                value={newRow.remarks}
                onChange={(e) => setNewRow({ ...newRow, remarks: e.target.value })}
                placeholder="Remarks"
                style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
              />
            </td>
            <td style={{ padding: '6px', textAlign: 'center' }}>
              <button
                onClick={addNewRow}
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', color: '#0089AC', backgroundColor: 'transparent', border: 'none', borderRadius: '2px', cursor: 'pointer', fontWeight: 'bold' }}
                title="Add new row"
              >
                <Plus size={14} />
              </button>
            </td>
          </tr>

          {/* Existing prescription rows */}
          {rows.map((row) => (
            <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.medicineType}
                  onChange={(e) => updateRow(row.id, 'medicineType', e.target.value)}
                  placeholder="Type"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.route}
                  onChange={(e) => updateRow(row.id, 'route', e.target.value)}
                  placeholder="Route"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.medicineName}
                  onChange={(e) => updateRow(row.id, 'medicineName', e.target.value)}
                  placeholder="Medicine Name"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.dose}
                  onChange={(e) => updateRow(row.id, 'dose', e.target.value)}
                  placeholder="Dose"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.frequency}
                  onChange={(e) => updateRow(row.id, 'frequency', e.target.value)}
                  placeholder="Frequency"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.duration}
                  onChange={(e) => updateRow(row.id, 'duration', e.target.value)}
                  placeholder="Duration"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="date"
                  value={row.startDate}
                  onChange={(e) => updateRow(row.id, 'startDate', e.target.value)}
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="date"
                  value={row.endDate}
                  onChange={(e) => updateRow(row.id, 'endDate', e.target.value)}
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px' }}>
                <input
                  type="text"
                  value={row.remarks}
                  onChange={(e) => updateRow(row.id, 'remarks', e.target.value)}
                  placeholder="Remarks"
                  style={{ width: '100%', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '2px', fontSize: '11px' }}
                />
              </td>
              <td style={{ padding: '6px', textAlign: 'center' }}>
                <button
                  onClick={() => deleteRow(row.id)}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', color: '#dc2626', backgroundColor: 'transparent', border: 'none', borderRadius: '2px', cursor: 'pointer' }}
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
