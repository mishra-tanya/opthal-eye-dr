import { MoreVertical, Share2, Download, Printer, Tag } from 'lucide-react';

export default function PatientInfo() {
  const patientData = {
    uhid: 'OP-001934',
    name: 'ASHWINI MOREPRINCIPAL NIRMAL',
    age: '45',
    gender: 'F',
    contact: '9812345678',
    address: 'XYZ COLONY, NAGPUR',
    allergy: 'No known allergies',
  };

  return (
    <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', padding: '8px 16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
        {/* Patient Details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto', gap: '16px', flex: 1 }}>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>UHID</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111' }}>{patientData.uhid}</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>Patient Name</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{patientData.name}</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>Age / Gender</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111' }}>{patientData.age}/{patientData.gender}</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>Contact</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111' }}>{patientData.contact}</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>Address</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111', maxWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{patientData.address}</div>
          </div>
          <div>
            <div style={{ fontSize: '9px', fontWeight: '500', color: '#999', letterSpacing: '0.5px' }}>Allergy</div>
            <div style={{ fontSize: '11px', fontWeight: '600', color: '#111', maxWidth: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{patientData.allergy}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '16px' }}>
          <button style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} title="Tag Patient">
            <Tag size={14} style={{ color: '#0089AC' }} />
          </button>
          <button style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} title="Share">
            <Share2 size={14} style={{ color: '#0089AC' }} />
          </button>
          <button style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} title="Download">
            <Download size={14} style={{ color: '#0089AC' }} />
          </button>
          <button style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} title="Print">
            <Printer size={14} style={{ color: '#0089AC' }} />
          </button>
          <button style={{ padding: '6px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }} title="More options">
            <MoreVertical size={14} style={{ color: '#0089AC' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
