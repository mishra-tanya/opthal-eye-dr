import { useState, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PatientInfo from '../components/PatientInfo';
import ChiefComplaints from '../components/sections/ChiefComplaints';
import SystemicDisease from '../components/sections/SystemicDisease';
import FundusExam from '../components/sections/FundusExam';
import SectionFloatingButtons from '../components/SectionFloatingButtons';
import {
  SectionPlaceholder,
  VisualAcuity,
  AutoRefReading,
  GlassPrescription,
  Diagnosis,
  Management,
  Prescription,
  Advice,
  DilatedExam,
  LacrimalPatency,
  KeratometryReading,
  SchirmersTest,
  Gonioscopy,
  ExternalExam,
  SlitLampExam,
} from '../components/sections/ContentSections';

const sectionItems = [
  'Chief Complaints',
  'Systemic Disease',
  'Visual Acuity',
  'Auto Ref. Reading',
  'Glass Prescription',
  'Keratometry Reading',
  'Schirmer\'s / Pachy',
  'Tonometry (IOP)',
  'Gonioscopy',
  'External Exam',
  'Slit Lamp Exam',
  'Dilated Exam',
  'Fundus Exam',
  'Lacrimal Patency',
  'Diagnosis',
  'Management',
  'Prescription',
  'Advice',
];

export default function Index() {
  const [selectedSections, setSelectedSections] = useState(['Chief Complaints', 'Systemic Disease', 'Glass Prescription']);
  const [enabledFloatingSection, setEnabledFloatingSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleEnableFloatingButtons = (sectionName: string) => {
    setEnabledFloatingSection(sectionName);
  };

  const renderSectionComponent = (sectionName) => {
    switch (sectionName) {
      case 'Chief Complaints':
        return <ChiefComplaints key={sectionName} />;
      case 'Systemic Disease':
        return <SystemicDisease key={sectionName} />;
      case 'Visual Acuity':
        return <VisualAcuity key={sectionName} />;
      case 'Auto Ref. Reading':
        return <AutoRefReading key={sectionName} />;
      case 'Glass Prescription':
        return <GlassPrescription key={sectionName} />;
      case 'Keratometry Reading':
        return <KeratometryReading key={sectionName} />;
      case "Schirmer's / Pachy":
        return <SchirmersTest key={sectionName} />;
      case 'Tonometry (IOP)':
        return <SectionPlaceholder key={sectionName} title="Tonometry (IOP)" description="Intraocular Pressure measurements" />;
      case 'Gonioscopy':
        return <Gonioscopy key={sectionName} />;
      case 'External Exam':
        return <ExternalExam key={sectionName} />;
      case 'Slit Lamp Exam':
        return <SlitLampExam key={sectionName} />;
      case 'Dilated Exam':
        return <DilatedExam key={sectionName} />;
      case 'Fundus Exam':
        return <FundusExam key={sectionName} />;
      case 'Lacrimal Patency':
        return <LacrimalPatency key={sectionName} />;
      case 'Diagnosis':
        return <Diagnosis key={sectionName} />;
      case 'Management':
        return <Management key={sectionName} />;
      case 'Prescription':
        return <Prescription key={sectionName} />;
      case 'Advice':
        return <Advice key={sectionName} />;
      default:
        return <SectionPlaceholder key={sectionName} title={sectionName} />;
    }
  };

  const renderContent = () => {
    if (!Array.isArray(selectedSections)) {
      return <ChiefComplaints />;
    }
    return selectedSections.map(section => (
      <div
        key={section}
        ref={(el) => {
          if (el) sectionRefs.current[section] = el;
        }}
        style={{ position: 'relative', marginTop: '16px' }}
      >
        {/* Floating Buttons - Positioned Absolutely on Right Side of Header */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '12px',
            zIndex: 10,
            display: 'flex',
            gap: '4px',
            padding: '4px 8px',
            backgroundColor: 'white',
            borderRadius: '4px',
          }}
        >
          <SectionFloatingButtons
            sectionName={section}
            sectionRef={{ current: sectionRefs.current[section] }}
            isEnabled={enabledFloatingSection === section}
            onEnable={() => handleEnableFloatingButtons(section)}
            onDisable={() => setEnabledFloatingSection(null)}
          />
        </div>

        {/* Section Component */}
        {renderSectionComponent(section)}
      </div>
    ));
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f3f4f6' }}>
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div style={{ display: 'flex', flex: 1, paddingTop: '120px', overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar selectedSections={selectedSections} onSectionChange={setSelectedSections} sectionItems={sectionItems} />

        {/* Main Content */}
        <main style={{ flex: 1, marginLeft: '192px', overflowY: 'auto' }}>
          {/* Content Section */}
          <div style={{ padding: '12px 16px' }}>
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
