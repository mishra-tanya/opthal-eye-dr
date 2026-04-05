interface SidebarProps {
  selectedSections: string[];
  onSectionChange: (sections: string[]) => void;
  sectionItems: string[];
}

export default function Sidebar({ selectedSections, onSectionChange, sectionItems }: SidebarProps) {
  const isAllSelected = selectedSections.length === sectionItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      onSectionChange([]);
    } else {
      onSectionChange([...sectionItems]);
    }
  };

  const handleItemClick = (item: string) => {
    if (selectedSections.includes(item)) {
      onSectionChange(selectedSections.filter(s => s !== item));
    } else {
      onSectionChange([...selectedSections, item]);
    }
  };

  return (
    <aside style={{ position: 'fixed', left: 0, top: '120px', bottom: 0, width: '192px', backgroundColor: '#F5F5F5', borderRight: '1px solid #e0e0e0', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="scrollbar-hide">
      <div style={{ padding: '12px' }}>
        {/* Select All option */}
        <button
          onClick={handleSelectAll}
          style={{
            width: '100%',
            textAlign: 'left',
            padding: '8px 12px',
            borderRadius: '6px',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontWeight: '500',
            backgroundColor: isAllSelected ? '#E0F2FE' : 'transparent',
            color: isAllSelected ? '#0c4a6e' : '#374151',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <input
            type="checkbox"
            checked={isAllSelected}
            onChange={() => {}}
            style={{ width: '14px', height: '14px', cursor: 'pointer' }}
          />
          Select All
        </button>

        {/* Navigation items */}
        <nav>
          {sectionItems.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                borderRadius: '6px',
                marginBottom: '3px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: selectedSections.includes(item) ? '#E0F2FE' : 'transparent',
                color: selectedSections.includes(item) ? '#0c4a6e' : '#374151',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <input
                type="checkbox"
                checked={selectedSections.includes(item)}
                onChange={() => {}}
                style={{ width: '14px', height: '14px', cursor: 'pointer' }}
              />
              {item}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
