# Ophthalmic Dashboard - Backend API Documentation

## Overview
This document outlines all required APIs for the ophthalmic examination and patient management system.

---

## 1. PATIENT MANAGEMENT APIs

### 1.1 Create Patient
**Endpoint:** `POST /api/patients`
**Authentication:** Required
**Description:** Create a new patient record

**Request Payload:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "age": "number",
  "gender": "string (M/F/Other)",
  "phoneNumber": "string",
  "email": "string",
  "address": "string",
  "dateOfBirth": "ISO 8601 date",
  "patientId": "string (unique identifier)",
  "medicalHistory": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "patientId": "string",
  "message": "Patient created successfully"
}
```

---

### 1.2 Get Patient Details
**Endpoint:** `GET /api/patients/:patientId`
**Authentication:** Required
**Description:** Retrieve patient information

**Response:**
```json
{
  "status": "success",
  "data": {
    "patientId": "string",
    "firstName": "string",
    "lastName": "string",
    "age": "number",
    "gender": "string",
    "phoneNumber": "string",
    "email": "string",
    "address": "string",
    "dateOfBirth": "ISO 8601 date",
    "medicalHistory": "string",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
}
```

---

### 1.3 Update Patient
**Endpoint:** `PUT /api/patients/:patientId`
**Authentication:** Required
**Description:** Update patient information

**Request Payload:**
```json
{
  "firstName": "string (optional)",
  "lastName": "string (optional)",
  "age": "number (optional)",
  "gender": "string (optional)",
  "phoneNumber": "string (optional)",
  "email": "string (optional)",
  "address": "string (optional)",
  "medicalHistory": "string (optional)"
}
```

---

## 2. EXAMINATION RECORDS APIs

### 2.1 Create Examination Record
**Endpoint:** `POST /api/examinations`
**Authentication:** Required
**Description:** Create a new examination record for a patient

**Request Payload:**
```json
{
  "patientId": "string",
  "examinationDate": "ISO 8601 date",
  "examinationType": "string (enum: COMPREHENSIVE, FOLLOW_UP, URGENT)",
  "examinationNotes": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "examinationId": "string",
  "message": "Examination record created successfully"
}
```

---

### 2.2 Get Examination Record
**Endpoint:** `GET /api/examinations/:examinationId`
**Authentication:** Required
**Description:** Retrieve complete examination record

**Response:**
```json
{
  "status": "success",
  "data": {
    "examinationId": "string",
    "patientId": "string",
    "examinationDate": "ISO 8601 date",
    "examinationType": "string",
    "examinationNotes": "string",
    "createdAt": "ISO 8601 timestamp",
    "updatedAt": "ISO 8601 timestamp"
  }
}
```

---

## 3. CHIEF COMPLAINTS & SYSTEMIC DISEASE APIs

### 3.1 Save Chief Complaints
**Endpoint:** `POST /api/examinations/:examinationId/chief-complaints`
**Authentication:** Required
**Description:** Save chief complaints for examination

**Request Payload:**
```json
{
  "complaints": [
    {
      "complaint": "string (e.g., 'Blurred vision')",
      "duration": "string (e.g., '2 weeks')",
      "severity": "string (MILD/MODERATE/SEVERE)"
    }
  ],
  "history": "string (additional history details)"
}
```

**Response:**
```json
{
  "status": "success",
  "recordId": "string",
  "message": "Chief complaints saved successfully"
}
```

---

### 3.2 Save Systemic Disease
**Endpoint:** `POST /api/examinations/:examinationId/systemic-disease`
**Authentication:** Required
**Description:** Save systemic disease information

**Request Payload:**
```json
{
  "diabetes": {
    "present": "boolean",
    "type": "string (TYPE1/TYPE2/GESTATIONAL)",
    "duration": "string",
    "controlStatus": "string (CONTROLLED/UNCONTROLLED)"
  },
  "hypertension": {
    "present": "boolean",
    "duration": "string",
    "medications": "string"
  },
  "cardiacDisease": {
    "present": "boolean",
    "type": "string",
    "details": "string"
  },
  "otherDiseases": "string",
  "medications": "string",
  "allergies": "string"
}
```

---

## 4. VISUAL ACUITY & REFRACTION APIs

### 4.1 Save Visual Acuity
**Endpoint:** `POST /api/examinations/:examinationId/visual-acuity`
**Authentication:** Required
**Description:** Save visual acuity measurements

**Request Payload:**
```json
{
  "rightEye": {
    "uncorrected": "string (e.g., 6/6, 6/9)",
    "pinhole": "string (optional)",
    "corrected": "string (optional)"
  },
  "leftEye": {
    "uncorrected": "string",
    "pinhole": "string (optional)",
    "corrected": "string (optional)"
  },
  "notes": "string (optional)"
}
```

---

### 4.2 Save Auto Refraction Reading
**Endpoint:** `POST /api/examinations/:examinationId/auto-refraction`
**Authentication:** Required
**Description:** Save automated refraction measurements

**Request Payload:**
```json
{
  "rightEye": {
    "sphere": "number (e.g., -2.5)",
    "cylinder": "number (e.g., -1.0)",
    "axis": "number (0-180)",
    "axialLength": "number (mm)"
  },
  "leftEye": {
    "sphere": "number",
    "cylinder": "number",
    "axis": "number",
    "axialLength": "number"
  },
  "measurementDate": "ISO 8601 timestamp",
  "machineModel": "string"
}
```

---

### 4.3 Save Glass Prescription
**Endpoint:** `POST /api/examinations/:examinationId/glass-prescription`
**Authentication:** Required
**Description:** Save eyeglass prescription details

**Request Payload:**
```json
{
  "prismBase": "boolean",
  "distance": {
    "rightEye": {
      "sphere": "number",
      "cylinder": "number",
      "axis": "number",
      "prismPower": "number (optional)",
      "prismBase": "string (optional)"
    },
    "leftEye": {
      "sphere": "number",
      "cylinder": "number",
      "axis": "number",
      "prismPower": "number (optional)",
      "prismBase": "string (optional)"
    },
    "pd": "number (pupillary distance)"
  },
  "near": {
    "rightEye": {
      "sphere": "number",
      "cylinder": "number",
      "axis": "number"
    },
    "leftEye": {
      "sphere": "number",
      "cylinder": "number",
      "axis": "number"
    },
    "pd": "number"
  },
  "prescriptionDate": "ISO 8601 date",
  "validityPeriod": "number (months)"
}
```

---

## 5. CORNEAL & OCULAR MEASUREMENTS APIs

### 5.1 Save Keratometry Reading
**Endpoint:** `POST /api/examinations/:examinationId/keratometry`
**Authentication:** Required
**Description:** Save corneal curvature measurements (K readings)

**Request Payload:**
```json
{
  "rightEye": {
    "k1": {
      "value": "number (diopters)",
      "axis": "number (degrees)"
    },
    "k2": {
      "value": "number (diopters)",
      "axis": "number (degrees)"
    }
  },
  "leftEye": {
    "k1": {
      "value": "number",
      "axis": "number"
    },
    "k2": {
      "value": "number",
      "axis": "number"
    }
  },
  "measurementDate": "ISO 8601 timestamp",
  "machineModel": "string"
}
```

---

### 5.2 Save Schirmer's Test & Pachymetry
**Endpoint:** `POST /api/examinations/:examinationId/schirmers-pachy`
**Authentication:** Required
**Description:** Save tear film and corneal thickness measurements

**Request Payload:**
```json
{
  "schirmersTest": {
    "rightEye": {
      "mm": "number (5mm strip, 5 minutes)"
    },
    "leftEye": {
      "mm": "number"
    }
  },
  "pachymetry": {
    "rightEye": {
      "mm": "number (central corneal thickness)"
    },
    "leftEye": {
      "mm": "number"
    }
  },
  "measurementDate": "ISO 8601 timestamp"
}
```

---

### 5.3 Save Lacrimal Patency
**Endpoint:** `POST /api/examinations/:examinationId/lacrimal-patency`
**Authentication:** Required
**Description:** Save lacrimal drainage system patency assessment

**Request Payload:**
```json
{
  "rightEye": {
    "status": "string (PATENT/BLOCKED/PARTIAL)",
    "findings": "string (optional)"
  },
  "leftEye": {
    "status": "string",
    "findings": "string (optional)"
  },
  "testMethod": "string (e.g., 'Syringging')",
  "notes": "string (optional)"
}
```

---

## 6. TONOMETRY (IOP) API

### 6.1 Save Intraocular Pressure
**Endpoint:** `POST /api/examinations/:examinationId/tonometry`
**Authentication:** Required
**Description:** Save IOP measurements

**Request Payload:**
```json
{
  "measurementTime": "ISO 8601 timestamp",
  "rightEye": {
    "iopValue": "number (mmHg)",
    "method": "string (APPLANATION/REBOUND/PNEUMATIC)"
  },
  "leftEye": {
    "iopValue": "number",
    "method": "string"
  },
  "centralCorneaThickness": {
    "rightEye": "number (optional)",
    "leftEye": "number (optional)"
  },
  "notes": "string (optional)"
}
```

---

## 7. GONIOSCOPY API

### 7.1 Save Gonioscopy
**Endpoint:** `POST /api/examinations/:examinationId/gonioscopy`
**Authentication:** Required
**Description:** Save angle assessment findings

**Request Payload:**
```json
{
  "rightEye": {
    "scleraSpur": {
      "top": "string (0-4 grade)",
      "left": "string (0-4 grade)",
      "right": "string (0-4 grade)",
      "bottom": "string (0-4 grade)"
    },
    "irisRoot": {
      "top": "string (0-4 grade)",
      "left": "string (0-4 grade)",
      "right": "string (0-4 grade)",
      "bottom": "string (0-4 grade)"
    }
  },
  "leftEye": {
    "scleraSpur": {
      "status": "string (OPEN/CLOSED/NARROW)"
    },
    "irisRoot": {
      "status": "string"
    }
  },
  "goniolensUsed": "string (e.g., '4-mirror, 3-mirror')",
  "remarks": "string (optional)"
}
```

---

## 8. EXTERNAL EXAMINATION API

### 8.1 Save External Exam
**Endpoint:** `POST /api/examinations/:examinationId/external-exam`
**Authentication:** Required
**Description:** Save external eye examination findings

**Request Payload:**
```json
{
  "facialSymmetry": "string",
  "externalFace": "string",
  "headPosture": "string",
  "ocularPosition": "string",
  "ocularAlignment": "string",
  "rapidAffluxDilation": {
    "rightEye": "string (NORMAL/ABNORMAL)",
    "leftEye": "string"
  },
  "ocularMotility": {
    "rightEye": "string (FREE/LIMITED)",
    "leftEye": "string"
  },
  "motilityDetails": "string (optional)"
}
```

---

## 9. SLIT LAMP EXAMINATION API

### 9.1 Save Slit Lamp Exam
**Endpoint:** `POST /api/examinations/:examinationId/slit-lamp`
**Authentication:** Required
**Description:** Save anterior segment examination findings

**Request Payload:**
```json
{
  "eyeLids": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "conjunctiva": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "sclera": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "cornea": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "anteriorChamber": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "iris": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "pupil": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "emrDrawings": {
    "rightEye": "string (base64 image or URL, optional)",
    "leftEye": "string (base64 image or URL, optional)"
  }
}
```

---

## 10. DILATED EXAMINATION API

### 10.1 Save Dilated Exam
**Endpoint:** `POST /api/examinations/:examinationId/dilated-exam`
**Authentication:** Required
**Description:** Save post-dilation examination findings

**Request Payload:**
```json
{
  "rightEye": {
    "pupilSize": "number (mm)",
    "lens": "string (CLEAR/CATARCT/OPACITIES/etc)"
  },
  "leftEye": {
    "pupilSize": "number",
    "lens": "string"
  },
  "dilatationAgent": "string (e.g., 'Tropicamide 1%')",
  "dilatationTime": "ISO 8601 timestamp"
}
```

---

## 11. FUNDUS EXAMINATION API

### 11.1 Save Fundus Exam
**Endpoint:** `POST /api/examinations/:examinationId/fundus-exam`
**Authentication:** Required
**Description:** Save posterior segment examination findings

**Request Payload:**
```json
{
  "mediaOpacity": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "discAppearance": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "cdRatio": {
    "rightEye": "number (0.0-1.0)",
    "leftEye": "number"
  },
  "macula": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "vessels": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "periphery": {
    "rightEye": "string",
    "leftEye": "string"
  },
  "emrDrawings": {
    "rightEye": "string (base64 image or URL, optional)",
    "leftEye": "string (base64 image or URL, optional)"
  }
}
```

---

## 12. DIAGNOSIS API

### 12.1 Save Diagnosis
**Endpoint:** `POST /api/examinations/:examinationId/diagnosis`
**Authentication:** Required
**Description:** Save ICD-10 diagnosis codes

**Request Payload:**
```json
{
  "diagnosisList": [
    {
      "icdCode": "string (e.g., H52.001)",
      "icdDescription": "string (e.g., 'Myopia - Right eye')",
      "severity": "string (MILD/MODERATE/SEVERE, optional)",
      "notes": "string (optional)"
    }
  ],
  "primaryDiagnosis": "string (ICD code of primary diagnosis)",
  "clinicalNotes": "string (optional)"
}
```

---

## 13. MANAGEMENT API

### 13.1 Save Management Plan
**Endpoint:** `POST /api/examinations/:examinationId/management`
**Authentication:** Required
**Description:** Save management plans for examination

**Request Payload:**
```json
{
  "selectedPlan": "string (e.g., 'medical', 'surgical', 'laser', 'conservative')",
  "plans": {
    "plan1": "string (Medical management details)",
    "plan2": "string (Follow-up details)",
    "plan3": "string (Patient education/instructions)"
  },
  "disclaimerAcknowledged": "boolean",
  "startDate": "ISO 8601 date",
  "expectedDuration": "string (e.g., '2 weeks')"
}
```

---

## 14. PRESCRIPTION API

### 14.1 Save Prescription
**Endpoint:** `POST /api/examinations/:examinationId/prescription`
**Authentication:** Required
**Description:** Save medication prescriptions

**Request Payload:**
```json
{
  "prescriptionList": [
    {
      "medicationName": "string (e.g., 'Timolol 0.5%')",
      "genericName": "string",
      "dosage": "string (e.g., '1 drop twice daily')",
      "frequency": "string",
      "duration": "string (e.g., '4 weeks')",
      "eye": "string (RIGHT/LEFT/BOTH)",
      "instructions": "string",
      "precautions": "string"
    }
  ],
  "prescriptionDate": "ISO 8601 date",
  "validUntil": "ISO 8601 date"
}
```

---

## 15. ADVICE API

### 15.1 Save Advice & Follow-up
**Endpoint:** `POST /api/examinations/:examinationId/advice`
**Authentication:** Required
**Description:** Save patient advice and follow-up schedule

**Request Payload:**
```json
{
  "instructions": "string (general instructions to patient)",
  "selectedAdviceTabs": ["RE VAG PL", "LE PM", "GLAUCOMADX"], // all selected by default
  "adviceTable": {
    "title": "string (e.g., 'Glasses', 'Contact Lens')",
    "advice": "string (e.g., 'Wear continuously')",
    "eye": "string (optional)",
    "remark": "string (optional)"
  },
  "followUp": {
    "interval": "string (1D/2D/1W/1M/3M/6M/1Y)",
    "followUpTitle": "string (e.g., 'Review', 'Recheck')",
    "referredDoctor": "string (doctor name)",
    "amount": "number",
    "discount": "number",
    "finalAmount": "number",
    "followUpDate": "ISO 8601 date (calculated based on interval)"
  }
}
```

---

## 16. UTILITY & LOOKUP APIs

### 16.1 Get ICD Codes
**Endpoint:** `GET /api/lookups/icd-codes?search=:keyword`
**Authentication:** Required
**Description:** Search ICD-10 diagnosis codes

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "code": "H52.001",
      "description": "Myopia - Right eye",
      "category": "string"
    }
  ]
}
```

---

### 16.2 Get Medications
**Endpoint:** `GET /api/lookups/medications?search=:keyword`
**Authentication:** Required
**Description:** Search medication database

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": "string",
      "name": "Timolol",
      "genericName": "Timolol Maleate",
      "strengths": ["0.25%", "0.5%"],
      "category": "Beta-blocker"
    }
  ]
}
```

---

## 17. EXPORT & REPORT APIs

### 17.1 Export Examination Report
**Endpoint:** `GET /api/examinations/:examinationId/export?format=:format`
**Authentication:** Required
**Query Parameters:** `format` (pdf, docx, json)
**Description:** Export examination report in specified format

**Response:** Binary file (PDF/DOCX) or JSON

---

### 17.2 Print Examination
**Endpoint:** `POST /api/examinations/:examinationId/print`
**Authentication:** Required
**Description:** Generate printable examination report

**Request Payload:**
```json
{
  "includeDiagrams": "boolean",
  "includePhotographs": "boolean",
  "sections": ["visual-acuity", "refraction", "diagnosis", "management"]
}
```

---

## 18. AUDIT & HISTORY APIs

### 18.1 Get Examination History
**Endpoint:** `GET /api/patients/:patientId/examination-history`
**Authentication:** Required
**Description:** Get all examination records for a patient

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "examinationId": "string",
      "examinationDate": "ISO 8601 date",
      "examinationType": "string",
      "createdBy": "string (doctor name)",
      "summary": "string (brief summary)"
    }
  ]
}
```

---

### 18.2 Get Examination Audit Log
**Endpoint:** `GET /api/examinations/:examinationId/audit-log`
**Authentication:** Required
**Description:** Get all changes made to examination record

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "timestamp": "ISO 8601 timestamp",
      "action": "string (CREATE/UPDATE/DELETE)",
      "changedBy": "string (user email)",
      "changes": {
        "fieldName": {
          "oldValue": "string",
          "newValue": "string"
        }
      }
    }
  ]
}
```

---

## 19. AUTHENTICATION APIs

### 19.1 User Login
**Endpoint:** `POST /api/auth/login`
**Description:** Authenticate user

**Request Payload:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "status": "success",
  "token": "string (JWT)",
  "user": {
    "userId": "string",
    "email": "string",
    "name": "string",
    "role": "string (DOCTOR/NURSE/RECEPTIONIST/ADMIN)"
  }
}
```

---

### 19.2 User Logout
**Endpoint:** `POST /api/auth/logout`
**Authentication:** Required
**Response:**
```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

---

### 19.3 Refresh Token
**Endpoint:** `POST /api/auth/refresh`
**Description:** Get new JWT token using refresh token

**Request Payload:**
```json
{
  "refreshToken": "string"
}
```

---

## ERROR RESPONSES

All endpoints follow standard error response format:

```json
{
  "status": "error",
  "code": "string (ERROR_CODE)",
  "message": "string",
  "details": {} (optional)
}
```

### Common Error Codes:
- `UNAUTHORIZED`: Authentication required or token invalid
- `FORBIDDEN`: User doesn't have permission
- `NOT_FOUND`: Resource not found
- `VALIDATION_ERROR`: Invalid input data
- `DUPLICATE_RECORD`: Duplicate entry exists
- `INTERNAL_ERROR`: Server error

---

## DATABASE SCHEMA SUGGESTIONS

### Patients Table
```sql
CREATE TABLE patients (
  id UUID PRIMARY KEY,
  patientId VARCHAR(50) UNIQUE,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  dateOfBirth DATE,
  age INT,
  gender ENUM('M', 'F', 'Other'),
  phoneNumber VARCHAR(20),
  email VARCHAR(255),
  address TEXT,
  medicalHistory TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

### Examinations Table
```sql
CREATE TABLE examinations (
  id UUID PRIMARY KEY,
  patientId UUID REFERENCES patients(id),
  examinationDate DATE,
  examinationType ENUM('COMPREHENSIVE', 'FOLLOW_UP', 'URGENT'),
  examinationNotes TEXT,
  createdBy UUID,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

### Examination Details Table (for each section)
```sql
CREATE TABLE visual_acuity (
  id UUID PRIMARY KEY,
  examinationId UUID REFERENCES examinations(id),
  rightEyeUncorrected VARCHAR(20),
  rightEyePinhole VARCHAR(20),
  rightEyeCorrected VARCHAR(20),
  leftEyeUncorrected VARCHAR(20),
  leftEyePinhole VARCHAR(20),
  leftEyeCorrected VARCHAR(20),
  notes TEXT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);
```

---

## AUTHENTICATION & SECURITY

1. **JWT Token**: All authenticated endpoints require `Authorization: Bearer <token>` header
2. **Token Expiry**: Access tokens expire in 1 hour, refresh tokens in 30 days
3. **Role-Based Access Control**: Different endpoints available based on user role
4. **Data Encryption**: Sensitive patient data should be encrypted at rest
5. **HIPAA Compliance**: Ensure patient data privacy and audit logging

---

## RATE LIMITING

- **Free tier**: 100 requests/hour per user
- **Premium tier**: 1000 requests/hour per user
- **Burst limit**: 10 requests/minute

---

## VERSIONING

- Current API Version: `v1`
- Endpoints: `/api/v1/...`

---

## NOTES FOR BACKEND DEVELOPER

1. All dates should be in ISO 8601 format
2. All timestamps should include timezone information
3. Numeric values for IOP, refraction etc. should support 2 decimal places
4. Store imaging data (EMR drawings) as Base64 or URLs
5. Implement proper indexing on frequently queried fields (patientId, examinationId)
6. Add database constraints for data integrity
7. Implement soft delete for audit trail purposes
8. Add API documentation using Swagger/OpenAPI
9. Implement comprehensive logging for debugging
10. Add request validation middleware
11. Implement pagination for list endpoints (default: 20, max: 100)
12. Add filtering, sorting, and search capabilities
13. Implement caching for lookup data (ICD codes, medications)
14. Consider implementing GraphQL as alternative API layer

---

## FRONTEND-BACKEND DATA FLOW

1. User fills examination form in UI
2. Frontend collects data in component state
3. User submits → Frontend validates data
4. If valid → POST request to backend with examination data
5. Backend validates, stores in database
6. Returns success/error response
7. Frontend updates UI with response
8. Data persists for future retrieval via GET endpoints
9. User can edit existing record → PUT request
10. Changes are logged in audit table
