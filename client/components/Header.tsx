import { User, Tag, Share2, Download, Printer, MoreVertical } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [currentTime, setCurrentTime] = useState('00:00 AM');
  const [currentDate, setCurrentDate] = useState('00/00/0000');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Format time
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      const displayHours = String(now.getHours() % 12 || 12).padStart(2, '0');
      const time = `${displayHours}:${minutes} ${ampm}`;

      // Format date
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const year = now.getFullYear();
      const date = `${month}/${day}/${year}`;

      setCurrentTime(time);
      setCurrentDate(date);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [activePage, setActivePage] = useState('Dashboard');
  const [activeFilter, setActiveFilter] = useState('Overall');

  const navItems = ['Dashboard', 'Reception', 'OPD', 'Counseling', 'OT', 'Others'];
  const filterItems = ['Overall', 'All Patients', 'Bookmarks', 'Regular Patient', 'Allergy', 'Orders'];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActivePage(item);
  };

  const handleFilterClick = (item) => {
    setActiveFilter(item);
  };

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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: '#0089AC', color: 'white' }}>
      {/* Top bar */}
      <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', borderBottom: '1px solid #0073A8' }}>
        {/* Logo */}
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>YOUR LOGO HERE</div>

        {/* Center Navigation */}
        <nav style={{ display: 'flex', gap: '20px' }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={(e) => handleNavClick(e, item)}
              style={{
                fontSize: '12px',
                fontWeight: '500',
                color: 'white',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 8px',
                borderBottom: activePage === item ? '2px solid white' : '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right side - Time and User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '12px', fontWeight: '600' }}>{currentTime}</div>
            <div style={{ fontSize: '10px' }}>{currentDate}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', fontWeight: '500' }}>Admin</div>
            </div>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#87CEEB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} style={{ color: '#0089AC' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary toolbar */}
      <div style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0', gap: '8px' }}>
        {filterItems.map((item) => (
          item === 'Allergy' ? (
            <button
              key={item}
              onClick={() => handleFilterClick(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: activeFilter === item ? 'white' : 'white',
                backgroundColor: activeFilter === item ? '#0089AC' : '#0089AC',
                border: 'none',
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: '11px',
                borderRadius: '3px',
                transition: 'all 0.3s ease',
                fontWeight: activeFilter === item ? '600' : '500',
                opacity: activeFilter === item ? 1 : 0.7
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = activeFilter === item ? '1' : '0.7';
              }}
            >
              ▼
              <div>Allergy</div>
            </button>
          ) : (
            <button
              key={item}
              onClick={() => handleFilterClick(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: activeFilter === item ? 'white' : 'white',
                backgroundColor: activeFilter === item ? '#0089AC' : '#0089AC',
                border: 'none',
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: '11px',
                borderRadius: '3px',
                transition: 'all 0.3s ease',
                fontWeight: activeFilter === item ? '600' : '500',
                opacity: activeFilter === item ? 1 : 0.7
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = activeFilter === item ? '1' : '0.7';
              }}
            >
              {item === 'Overall' || item === 'All Patients' ? '● ' : item === 'Bookmarks' ? '♡ ' : ''}{item}
            </button>
          )
        ))}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <button style={{ color: '#0089AC', backgroundColor: 'white', border: '1px solid #ddd', padding: '6px 8px', cursor: 'pointer', borderRadius: '3px', transition: 'all 0.3s ease', fontSize: '12px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
            }}
          >⊞</button>
          <button style={{ color: '#0089AC', backgroundColor: 'white', border: '1px solid #ddd', padding: '6px 8px', cursor: 'pointer', borderRadius: '3px', transition: 'all 0.3s ease', fontSize: '12px' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
            }}
          >⚙</button>
        </div>
      </div>

      {/* Patient Info Strip */}
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
    </header>
  );
}
