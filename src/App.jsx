import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  Menu, 
  X, 
  Stethoscope, 
  GraduationCap, 
  Info,
  ArrowRight,
  ArrowLeft,
  Scan,
  Move,
  FileText,
  Layers,
  Settings,
  Activity,
  Anchor,
  User,
  Maximize,
  AlertTriangle,
  CheckCircle,
  Droplet,
  PlayCircle,
  Sliders,   
  Wrench,    
  Microscope,
  Lightbulb 
} from 'lucide-react';

// --- CUSTOM ICONS ---
function HeartIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LungsIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 21c-3.3 0-6-3-6-7c0-4.5 4-9 6-9c2 0 2 1.5 2 3c0 1.5 0 5-2 13Z" />
      <path d="M16 21c3.3 0 6-3 6-7c0-4.5-4-9-6-9c-2 0-2 1.5-2 3c0 1.5 0 5 2 13Z" />
      <path d="M12 5v10" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  );
}

function ClamIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s.5-7 10-7 10 7 10 7" />
      <path d="M2 12s.5 7 10 7 10-7 10-7" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" opacity="0.6" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LiverIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Custom Oblong Liver with a sharp caudal tip on the right */}
      <path d="M3 9.5 C3 4 8 2.5 13 2.5 C18 2.5 22 4.5 23 7.5 C24 10.5 21.5 11.5 19 11.5 C15.5 11.5 14 14 12 16 C8.5 19 3 16 3 9.5 Z" />
    </svg>
  );
}

function BLinesIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21a9 9 0 0 0 4-7.5c0-4-3-7-7-7-1 0-2 .2-2.5 .6" />
      <path d="M7 21a9 9 0 0 1-4-7.5c0-4 3-7 7-7 1 0 2 .2 2.5 .6" />
      <path d="M12 7 v14" strokeWidth="1.5" />
      <path d="M8 10 l-1 11" strokeWidth="1.5" opacity="0.7" />
      <path d="M16 10 l1 11" strokeWidth="1.5" opacity="0.7" />
    </svg>
  );
}

function BasicsIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5 11C15.433 11 17 12.567 17 14.5V40L13.5 44L10 40V14.5C10 12.567 11.567 11 13.5 11ZM13.5 13C14.3284 13 15 13.6716 15 14.5V17H12V14.5C12 13.6716 12.6716 13 13.5 13ZM13.5 40.9628L12 39.2485V19H15V39.2485L13.5 40.9628Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M33 28C31.8954 28 31 28.8954 31 30V42C31 43.1046 31.8954 44 33 44H36C37.1046 44 38 43.1046 38 42V30C38 28.8954 37.1046 28 36 28H33ZM36 30H33V35H36V30ZM36 37H33V42H36V37Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M29 4H19V44H29V4ZM21 6H27V8H23V10H27V13H25V15H27V18H25V20H27V23H23V25H27V28H25V30H27V33H25V35H27V38H23V40H27V42H21V6Z" fill="currentColor"/>
    </svg>
  );
}

function PleuralEffusionIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M23 6.00013C23 6.00004 23 6 24 6H24.1761C24.2533 6 24.3233 6 24.3868 6C25 6.00001 25 6.00005 25 6.00013V20.5C25 21.8977 25.5641 22.4421 26.0039 22.6987C26.053 22.7273 26.1024 22.7533 26.1516 22.777C26.1506 22.6568 26.1493 22.5316 26.1479 22.4019L26.1479 22.4003C26.1101 18.8716 26.0365 11.9997 31.4753 11.9997C38.9259 11.9997 44.2478 38.0062 41.0547 40.6599C37.8615 43.3136 31.4753 41.7214 28.2822 38.5369C25.7042 35.9659 25.9272 29.9583 26.0873 25.6457L26.0874 25.6443C26.0971 25.3819 26.1067 25.1258 26.1153 24.8771C25.79 24.7962 25.3959 24.6595 24.9962 24.4263C24.6398 24.2184 24.2975 23.9442 24 23.5919C23.7026 23.9442 23.3603 24.2184 23.0039 24.4263C22.6041 24.6595 22.2101 24.7962 21.8848 24.8771C21.8934 25.1261 21.9029 25.3826 21.9127 25.6453C22.0728 29.9579 22.2959 35.9662 19.7179 38.5372C16.5247 41.7217 10.1385 43.3139 6.94536 40.6602C3.75222 38.0065 9.07413 12 16.5247 12C21.9636 12 21.89 18.8717 21.8522 22.4003C21.852 22.4166 21.8518 22.4328 21.8516 22.4489C21.8504 22.5619 21.8493 22.6714 21.8484 22.777C21.8977 22.7534 21.9471 22.7274 21.9962 22.6987C22.436 22.4421 23 21.8977 23 20.5V6.00013ZM31.4753 13.9997C30.5212 13.9997 29.9843 14.3002 29.6086 14.6869C29.1752 15.1331 28.8132 15.8507 28.559 16.8646C28.1141 18.6395 28.133 20.6819 28.1483 22.3293C28.1509 22.6142 28.1534 22.8874 28.1534 23.1453C28.1534 23.9053 28.1196 24.8153 28.0845 25.7621C28.0707 26.1349 28.0566 26.5133 28.0443 26.8905C27.9996 28.2657 27.9741 29.7055 28.0405 31.0982C28.1072 32.4985 28.2642 33.7835 28.5573 34.8596C28.8538 35.9483 29.2509 36.6784 29.6944 37.1208C30.9726 38.3954 32.9908 39.4251 35.0492 39.8243C37.0842 40.2189 38.7224 39.9269 39.6818 39.1969C39.6868 39.1857 39.6923 39.1726 39.6984 39.1574C39.7576 39.0095 39.8294 38.7554 39.8878 38.3683C40.0047 37.5933 40.035 36.5122 39.9562 35.1803C39.7995 32.5305 39.2286 29.1689 38.3268 25.8606C37.4216 22.5396 36.2173 19.3998 34.8521 17.1383C34.1688 16.0062 33.4951 15.1786 32.8703 14.6535C32.2518 14.1337 31.7935 13.9997 31.4753 13.9997ZM16.5247 14C17.4788 14 18.0158 14.3005 18.3914 14.6872C18.8248 15.1334 19.1868 15.851 19.441 16.8649C19.8859 18.6399 19.867 20.6822 19.8518 22.3296C19.8491 22.6146 19.8466 22.8877 19.8466 23.1456C19.8466 23.9056 19.8804 24.8156 19.9155 25.7624C19.9294 26.135 19.9434 26.5138 19.9557 26.8908C20.0005 28.266 20.0259 29.7058 19.9596 31.0985C19.8929 32.4988 19.7359 33.7838 19.4427 34.8599C19.1462 35.9486 18.7492 36.6787 18.3056 37.1211C17.0275 38.3957 15.0093 39.4254 12.9509 39.8246C10.9159 40.2192 9.27768 39.9272 8.31823 39.1972C8.31326 39.186 8.3077 39.1729 8.30162 39.1577C8.24241 39.0098 8.17061 38.7557 8.11224 38.3686C7.99539 37.5936 7.965 36.5125 8.0438 35.1806C8.20056 32.5308 8.77147 29.1692 9.67324 25.8609C10.5785 22.5399 11.7827 19.4001 13.1479 17.1386C13.8313 16.0065 14.5049 15.1789 15.1298 14.6538C15.7482 14.134 16.2065 14 16.5247 14Z" fill="currentColor"/>
    </svg>
  );
}

// --- DATA: CURRICULUM ---
const modules = [
  {
    id: 'basics',
    title: 'POCUS Basics',
    description: 'Definitions, Probes, Movements, and Conventions.',
    icon: BasicsIcon,
    color: 'emerald',
    sections: [
      {
        title: "The Basics",
        icon: Info,
        color: 'blue', 
        content: [
          { type: 'bold', text: "POCUS = Point-of-Care Ultrasound" },
          { type: 'text', text: "Defined as the acquisition, interpretation, and clinical integration of ultrasonographic imaging performed by a treating clinician at the patient’s bedside rather than by another healthcare provider." },
          { type: 'text', text: "POCUS is an inclusive term; it is not limited to any specialty, protocol, or organ system." }
        ]
      },
      {
        title: "Probes & Physics",
        icon: Scan,
        color: 'violet',
        content: [
          { type: 'text', text: "Sound travels from the probe into the body. Some sound is lost as heat or scattered away. Some sound reflects back to our probe. The sound that reflects back to the probe is interpreted by our machine and an image is displayed on our screen." },
          { type: 'info', text: "Low frequency probes have high penetration but poor resolution (you can see far but not very well)." },
          { type: 'info', text: "High frequency probes have low penetration but high resolution (you can see well but not very far)." },
          { type: 'subheader', text: "Curvilinear (Abdominal)" },
          { type: 'list', items: ["Low frequency probe", "Used for: free fluid in abdomen and pelvis, bladder, kidneys, lung ultrasound, AAA"] },
          { type: 'subheader', text: "Phased Array (Cardiac)" },
          { type: 'list', items: ["Low frequency probe that specializes in cardiac movement", "Used for: cardiac scans, lung ultrasound"] },
          { type: 'subheader', text: "Linear (Vascular)" },
          { type: 'list', items: ["High frequency probe", "Best for seeing things close to the surface (lung sliding, vessels, skin, superficial joints)"] }
        ]
      },
      {
        title: "Body Planes",
        icon: Layers,
        color: 'indigo',
        content: [
          { type: 'bold', text: "Coronal (Long axis / Longitudinal)" },
          { type: 'text', text: "Separates body anterior-posterior" },
          { type: 'bold', text: "Sagittal (Long axis / Longitudinal)" },
          { type: 'text', text: "Separates body left-right" },
          { type: 'bold', text: "Transverse (Short Axis)" },
          { type: 'text', text: "Separates body superior-inferior" },
          { type: 'divider' },
          { type: 'text', text: "Long Axis: Plane parallel to the maximum length of a structure" },
          { type: 'text', text: "Short Axis: Plane perpendicular to the maximum length of a structure" }
        ]
      },
      {
        title: "Probe Movements",
        icon: Move,
        color: 'rose',
        content: [
          { type: 'text', text: "There are 5 standard ways an ultrasound probe can be moved:" },
          { type: 'list', items: [
            "Sliding: Moving the probe about its long or short axis while keeping the angle between your probe and your structure (angle of insonation) constant (AKA translating)",
            "Fanning: Keeping the probe on a fixed point while changing the angle of insonation along the short axis of the probe (AKA sweeping / tilting)",
            "Rocking: Keeping the probe on a fixed point while changing the angle of insonation along the long axis of the probe (AKA angling)",
            "Rotating: Keeping the probe on a fixed point while moving clockwise or counter clockwise",
            "Compression: Applying pressure to the body on a fixed point with the probe"
          ]}
        ]
      },
      {
        title: "Conventions",
        icon: Settings,
        color: 'amber',
        content: [
          { type: 'text', text: "Convention = the agreed upon way we do something (reading left to right, driving on the right side of the road)." },
          { type: 'text', text: "Different people have different conventions. There are two POCUS imaging conventions:" },
          { type: 'subheader', text: "Radiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen LEFT", "Used for all POCUS applications except cardiac"] },
          { type: 'subheader', text: "Cardiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen RIGHT", "Used for Cardiac POCUS"] }
        ]
      },
      {
        title: "Documentation",
        icon: FileText,
        color: 'slate',
        content: [
          { type: 'text', text: "If you did not document it in the patient’s chart, it did not happen." },
          { type: 'list', items: [
            "Save your images on the machines.",
            "Document that a scan was performed for educational purposes in the patient’s chart.",
            "Document any findings as preliminary until reviewed with a supervisor."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-pleural',
    title: 'Lung: Pleural Effusion',
    description: 'Scanning for fluid, Spine Sign, and landmarks.',
    icon: PleuralEffusionIcon,
    color: 'violet', 
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen, 
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Dyspnea, Cough, Chest Pain", 
             "Trauma (FAST Scan), Respiratory Failure, Sepsis, Shock",
             "Procedural (Thoracentesis, Chest Tube)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear or Phased Array", "Preset: Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine, Semi-Supine, or Sitting", "Arm above head or across body"] },
          { type: 'subheader', text: "Landmarks" },
          { type: 'text', text: "External: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Liver/Spleen | Spine | Lung" },
          { type: 'info', text: "Area of Interest: Area cranial to diaphragm" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (Probe Marker toward head).",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best.",
            "Adjust depth to just past the spine.",
            "Slide probe cranial until diaphragm in view.",
            "Fan through medial diaphragm anteriorly to posteriorly until the diaphragm disappears."
          ]},
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-ple.mp4", 
            caption: "Technique: Pleural Effusion view prior to fanning"
          }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Anechoic area seen cranial to the diaphragm AND ≥ 1 of the following:" },
          
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-plueraleffusion.mp4", 
            caption: "Positive Scan: Pleural effusion with spine sign, solid lung floating, and lateral diaphragm visualized."
          },

          { type: 'list', items: [
            "Spine sign (Spine visible above diaphragm)",
            "Solid lung floating in effusion",
            "Lateral diaphragm visualized"
          ]},
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-curtain.mp4", 
            caption: "Negative Scan: The 'Curtain Sign' (Aerated lung obscuring abdominal contents)."
          },
          { 
            type: 'video', 
            url: "/videos/lus-right-z4-fan.mp4",
            caption: "Technique: Fanning through the medial diaphragm."
          },
          { type: 'list', items: [
            "No pleural effusion after fanning entire medial diaphragm anteriorly to posteriorly.",
            "The Curtain Sign can rule out a large pleural effusion."
          ]}
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'subheader', text: "Rib shadows in the way" },
          { type: 'list', items: ["Rotate probe toward bed into rib space", "Have patient take a breath in and hold to move structure out from under rib"] },
          { type: 'subheader', text: "Diaphragm not visualized well" },
          { type: 'list', items: [
            "Slide anteriorly then fan posteriorly",
            "Slide posteriorly then fan anteriorly",
            "Slide toward feet then rock toward head"
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, 
        color: 'sky',
        content: [
          { type: 'list', items: [
            "Loculated pleural effusions may be missed by standard pleural effusion scanning technique.",
            "The sensitivity for finding a pleural effusion will increase the more upright your patient is (free flowing fluid will be gravity dependent).",
            "The presence of a spine sign can also be seen in consolidated lung without pleural effusion.",
            "Mirror artifact can mimic lung pathology: a spine sign will NOT be present with mirror artifact but WILL be present with lung pathology."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-pneumothorax',
    title: 'Lung: Pneumothorax',
    description: 'Evaluating for lung sliding, lung point, and pneumothorax.',
    icon: LungsIcon,
    color: 'emerald', 
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen, 
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Chest Pain | Dyspnea", 
             "Respiratory Failure | Shock",
             "Trauma (EFAST Scan)",
             "Post Procedure (Thoracentesis, Chest Tube, CVL)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Linear | Curvilinear (EFAST)", "Preset: Lung | Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine"] },
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'text', text: "External: Most Anterior Aspect of Chest | Mid-Clavicular Line" },
          { type: 'text', text: "Internal: Visceral Parietal Pleural Interface (VPPI) | Ribs | Rib Shadows" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "VPPI of 2-3 of the most anterior rib spaces bilaterally" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in the most anterior rib space of the right or left chest (probe marker toward head).",
            "Adjust depth so that the VPPI, ribs, and rib shadows are in view.",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen.",
            "Fan the probe medially and laterally until the VPPI appears the clearest.",
            "Slide the probe superiorly or inferiorly to interrogate a total of 2-3 rib spaces.",
            "Repeat the above steps in the remaining hemithorax.",
            "If lung sliding is absent, slide the probe within the rib space laterally until a pathologic lung point is visualized."
          ]}
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Absence of lung sliding, lung pulse, and B-lines plus visualization of a pathological lung point." },
          { type: 'divider' },
          { type: 'header', text: "Negative Scan" },
          { type: 'list', items: [
            "Lung sliding present in 2-3 of the most anterior rib spaces bilaterally OR",
            "Lung pulse present in 2-3 of the most anterior rib spaces bilaterally OR",
            "B-lines present in 2-3 of the most anterior rib spaces bilaterally"
          ]}
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'subheader', text: "Trouble Visualizing Lung Sliding:" },
          { type: 'list', items: [
            "Decrease depth to optimize visualization of the VPPI.",
            "Decrease gain to optimize visualization of the VPPI.",
            "Rotate probe in the rib space to see more of the VPPI."
          ]},
          { type: 'subheader', text: "Differentiating Pathologic from Physiologic Lung Points:" },
          { type: 'list', items: [
            "Increase depth to attempt to visualize the underlying physiologic organ (liver, heart, spleen).",
            "Be aware of surface anatomy and expected location of organs / physiologic lung points."
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, 
        color: 'sky',
        content: [
          { type: 'list', items: [
            "Always fan medial and lateral to optimize visualization of the VPPI.",
            "Do not mistake physiologic lung points for pathologic lung points.",
            "If a patient is unstable, the absence of lung sliding, lung pulse, and B-lines may be sufficient to diagnose a pneumothorax in the right clinical context without identifying a pathologic lung point.",
            "If a patient is stable, the absence of lung sliding, lung pulse, and B-lines without visualization of a pathologic lung point is insufficient to diagnose a pneumothorax and further investigations are warranted.",
            "Absent lung sliding can be seen in multiple clinical contexts: Prior pleurodesis, Right mainstem intubation, Esophageal intubation in an apneic patient, Phrenic nerve palsy, Pleural adhesions from prior chest tube, Interstitial Lung Disease.",
            "Patients with a large pneumothorax may not have a visible pathologic lung point due to the size."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-interstitial',
    title: 'Lung: Interstitial Syndrome',
    description: 'Evaluating for B-Lines and coalescing artifacts.',
    icon: BLinesIcon,
    color: 'cyan',
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen,
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Chest Pain | Dyspnea | Cough", 
             "Respiratory Failure | Sepsis"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear | Phased Array", "Preset: Lung | Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine | Semi-Supine | Sitting"] },
          { type: 'subheader', text: "Landmarks" },
          { type: 'text', text: "External: Parasternal Line | Midclavicular Line | Anterior Axillary Line | Posterior Axillary Line | Inter-Nipple Line" },
          { type: 'text', text: "Internal: Visceral Parietal Pleural Interface (VPPI) | Ribs | Rib Shadows" },
          { type: 'image', url: "/images/lung-zones.jpg", caption: "Anatomy: Lung Zones" },
          { type: 'info', text: "Area of Interest: VPPI of ≥ 1 rib space in each lung zone" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "Zone 1" },
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in a rib space of the right hemithorax above the inter-nipple line (probe marker toward head).",
            "Adjust depth to ≥ 10cm past the VPPI.",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen.",
            "Fan the probe medially and laterally until the VPPI appears the clearest.",
            "Evaluate for presence of B-lines."
          ]},
          { type: 'header', text: "Zone 2" },
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in a rib space of the right hemithorax below the inter-nipple line (probe marker toward head).",
            "Adjust depth to ≥ 10cm past the VPPI.",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen.",
            "Fan the probe medially and laterally until the VPPI appears the clearest.",
            "Evaluate for presence of B-lines."
          ]},
          { type: 'header', text: "Zone 3" },
          { type: 'list', items: [
            "Place the probe in longitudinal between the anterior and posterior axillary line in a rib space of the right hemithorax above the inter-nipple line (probe marker toward head).",
            "Adjust depth to ≥ 10cm past the VPPI.",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen.",
            "Fan the probe anterior and posterior until the VPPI appears the clearest.",
            "Evaluate for presence of B-lines."
          ]},
          { type: 'header', text: "Zone 4" },
          { type: 'list', items: [
            "Place the probe in longitudinal between the anterior and posterior axillary line in a rib space of the right hemithorax below the inter-nipple line (probe marker toward head).",
            "Adjust depth to ≥ 10cm past the VPPI.",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen.",
            "Fan the probe anterior and posterior until the VPPI appears the clearest.",
            "Evaluate for presence of B-lines."
          ]},
          { type: 'bold', text: "Repeat above technique for the opposite hemithorax." },
          { type: 'video', url: "/videos/lus-sliding.mp4", caption: "Technique: Sliding to center the VPPI" },
          { type: 'video', url: "/videos/lus-fanning.mp4", caption: "Technique: Fanning to optimize the VPPI" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "≥ 3 B-lines present in a single rib space at any time throughout the respiratory cycle OR" },
          { type: 'video', url: "/videos/lus-b-lines.mp4", caption: "Positive Scan: B-Lines present" },
          { type: 'text', text: "Coalescing B-lines" },
          { type: 'video', url: "/videos/lus-coalescing.mp4", caption: "Positive Scan: Coalescing B-Lines" },
          { type: 'divider' },
          { type: 'header', text: "Negative Scan" },
          { type: 'text', text: "< 3 B-lines present in a single rib space at any time throughout the respiratory cycle" },
          { type: 'video', url: "/videos/lus-a-lines.mp4", caption: "Negative Scan: A-Lines present" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench,
        color: 'amber',
        content: [
          { type: 'subheader', text: "Trouble Visualizing the VPPI:" },
          { type: 'list', items: [
            "Fan the probe until the pleural line looks as “crisp” and hyperechoic as possible.",
            "Orient your sound so it is 90 degrees to the pleura by fanning."
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb,
        color: 'sky',
        content: [
          { type: 'list', items: [
            "The presence of an abnormal amount of B-lines has a differential diagnosis that extends beyond cardiogenic pulmonary edema. The clinical context and distribution of B-lines (unilateral vs bilateral, focal vs diffuse) will help you determine the cause.",
            "Do not mistake B-lines for a normal vertical artifact called a Z-line.",
            "Characteristics of B-lines: Arise from the VPPI, Hyperechoic, Vertical, Extend well into the far field (≥ 10cm beyond VPPI), Move with lung sliding, Typically erase A-lines.",
            "Lung presets will often start with inadequate depth to evaluate for B-lines. Do not forget to optimize your depth!"
          ]}
        ]
      }
    ]
  },
  {
    id: 'abd-free-fluid',
    title: 'Abdomen: Free Fluid',
    description: 'Scanning for free fluid in the abdomen and pelvis.',
    icon: LiverIcon,
    color: 'amber', 
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen, 
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Abdominal Pain | Abdominal Distention", 
             "Sepsis | Shock",
             "Trauma (FAST Scan)",
             "Procedural (Paracentesis)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear", "Preset: Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine | Semi-Supine", "Arm above head or across body"] },
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'subheader', text: "RUQ | LUQ" },
          { type: 'text', text: "External: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Liver / Spleen | Spine | Lung" },
          { type: 'subheader', text: "Pelvis (Male)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Prostate | Seminal Vesicles | Rectum" },
          { type: 'subheader', text: "Pelvis (Female)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Uterus | Vagina | Rectum" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "Right Upper Quadrant (RUQ):" },
          { type: 'text', text: "Hepatorenal Interface | Caudal Tip of Liver" },
          { type: 'bold', text: "Left Upper Quadrant (LUQ):" },
          { type: 'text', text: "Splenorenal Interface | Between Diaphragm and Spleen" },
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Rectovesicular Space" },
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Rectouterine Space (Pouch of Douglas) | Vesicouterine Space" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "Right Upper Quadrant (RUQ)" },
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head).",
            "Start with lots of depth.",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best.",
            "Adjust depth to just past the spine.",
            "Fan through the hepatorenal interface anteriorly to posteriorly.",
            "Slide inferiorly to identify the caudal tip of the liver.",
            "Fan through the caudal tip of the liver anteriorly to posteriorly."
          ]},
          { type: 'video', url: "/videos/ruq-fan.mp4", caption: "Technique: RUQ Fanning" },
          { type: 'video', url: "/videos/ruq-caudal-tip.mp4", caption: "Technique: RUQ Caudal Tip" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Left Upper Quadrant (LUQ)" },
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head).",
            "Start with lots of depth.",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best.",
            "Adjust depth to just past the spine.",
            "Fan through the splenorenal interface anteriorly to posteriorly.",
            "Slide cranially to identify the diaphragm.",
            "Fan through the medial diaphragm anterior to posterior until the diaphragm disappears."
          ]},
          { type: 'video', url: "/videos/luq-fan.mp4", caption: "Technique: LUQ Fanning" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Pelvis Transverse" },
          { type: 'list', items: [
            "Place probe in transverse just superior to the pubic symphysis (probe marker toward patient right).",
            "Start with lots of depth.",
            "Fan probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe inferior and superior until the bladder disappears in both directions."
          ]},
          
          { type: 'divider' },

          { type: 'header', text: "Pelvis Longitudinal" },
          { type: 'list', items: [
            "Place probe in longitudinal just superior to the pubic symphysis (probe marker toward head).",
            "Start with lots of depth.",
            "Rock probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe left and right until the bladder disappears in both directions."
          ]}
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'bold', text: "RUQ:" },
          { type: 'text', text: "Anechoic free fluid seen in hepatorenal interface or around the caudal tip of the liver." },
          { type: 'bold', text: "LUQ:" },
          { type: 'text', text: "Anechoic free fluid seen in splenorenal interface or between medial diaphragm and spleen." },
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectovesicular space." },
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectouterine space and/or the vesicouterine space." },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'bold', text: "RUQ:" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire hepatorenal interface anterior to posterior AND no anechoic free fluid around the caudal tip of the liver after fanning through the caudal tip anterior to posterior." },
          { type: 'video', url: "/videos/ruq-negative.mp4", caption: "Negative Scan: RUQ" },
          
          { type: 'bold', text: "LUQ:" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire splenorenal interface anterior to posterior AND no anechoic free fluid between the medial diaphragm and spleen after fanning through the medial diaphragm until it disappears." },
          { type: 'video', url: "/videos/luq-negative.mp4", caption: "Negative Scan: LUQ" },
          
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "No anechoic free fluid seen in the rectovesicular space after fanning through the bladder in both transverse and longitudinal." },
          
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "No anechoic free fluid seen in the rectouterine and vesicouterine space after fanning through the bladder in both transverse and longitudinal." }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'subheader', text: "Rib shadows in the way" },
          { type: 'list', items: ["Rotate probe toward bed into rib space.", "Have patient take a breath in and hold to move structure out from under rib."] },
          { type: 'subheader', text: "Diaphragm not visualized well" },
          { type: 'list', items: [
            "Slide anteriorly then fan posteriorly.",
            "Slide posteriorly then fan anteriorly.",
            "Slide toward feet then rock toward head."
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, 
        color: 'sky',
        content: [
          { type: 'list', items: [
            "POCUS cannot help you distinguish the type of fluid; clinical context is key.",
            "Free fluid is not always anechoic (e.g., clotted blood in hemoperitoneum).",
            "A negative FAST scan does not rule out an intra-abdominal injury.",
            "A negative FAST scan is not reliable in patients with a history of prior abdominal surgery.",
            "Do not mistake physiologically or pathologically fluid-filled organs for free fluid (e.g., gallbladder, fluid-filled bowel, or stomach).",
            "Do not mistake the seminal vesicle or prostate for free fluid.",
            "The female pelvis can contain a small amount of physiologic free fluid. Context is important; do not assume it is normal."
          ]}
        ]
      }
    ]
  }
];

// --- ROBUST VIDEO COMPONENT ---
// This component forces iOS to play nice with backgrounding
const VideoPlayer = ({ src, caption }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // 1. Initial Attempt
    const attemptPlay = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Autoplay prevented (low power mode or interaction needed)", err);
        }
      }
    };

    attemptPlay();

    // 2. The "Wake Up" Listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // App is back in foreground: Force Play
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src]);

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
      <div className="relative bg-black aspect-video flex items-center justify-center group">
         <video 
           ref={videoRef}
           src={src} 
           className="w-full h-full object-contain"
           controls       
           muted          
           playsInline    
           autoPlay       
           loop           
         />
      </div>
      {caption && (
        <div className="bg-slate-50 p-2 text-xs text-center text-slate-500 font-medium border-t border-slate-200">
          {caption}
        </div>
      )}
    </div>
  );
};

// --- COMPONENTS ---

const ContentBlock = ({ item, color }) => {
  switch (item.type) {
    case 'header':
      return <h4 className={`font-bold text-${color}-800 mt-4 mb-2 text-lg`}>{item.text}</h4>;
    
    case 'subheader':
      return <h4 className="font-bold text-slate-900 mt-3 mb-1 text-sm uppercase tracking-wide">{item.text}</h4>;

    case 'bold':
      return <p className="font-bold text-slate-800 mt-2">{item.text}</p>;
    case 'info':
      return (
        <div className={`bg-${color}-50 border-l-4 border-${color}-500 p-3 my-2 text-sm text-slate-700`}>
          {item.text}
        </div>
      );
    case 'list':
      return (
        <ul className="list-disc list-inside space-y-1 my-2 text-slate-600 text-sm">
          {item.items.map((li, idx) => <li key={idx} className="leading-relaxed pl-1">{li}</li>)}
        </ul>
      );
    case 'divider':
      return <hr className="my-6 border-slate-200" />;
    
    case 'video':
      // Using our new Robust Player
      return <VideoPlayer src={item.url} caption={item.caption} />;

    case 'image':
      return (
        <div className="my-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
          <div className="relative bg-slate-100 flex items-center justify-center">
             <img 
               src={item.url} 
               alt={item.caption || "Medical Reference"}
               className="w-full h-auto object-contain max-h-[60vh]"
             />
          </div>
          {item.caption && (
            <div className="bg-slate-50 p-2 text-xs text-center text-slate-500 font-medium border-t border-slate-200">
              {item.caption}
            </div>
          )}
        </div>
      );

    default:
      return <p className="text-slate-600 leading-relaxed my-2 text-sm">{item.text}</p>;
  }
};

const SectionCard = ({ section }) => {
  const Icon = section.icon || Info;
  const color = section.color || 'emerald'; 

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
      <div className={`bg-${color}-50 px-5 py-4 border-b border-${color}-100 flex items-center`}>
        <div className={`p-2 bg-white rounded-lg shadow-sm mr-3 text-${color}-600`}>
          <Icon size={20} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg">{section.title}</h3>
      </div>
      <div className="px-5 pb-5 pt-3">
        {section.content.map((block, idx) => (
          <ContentBlock key={idx} item={block} color={color} />
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function USaskPocusApp() {
  const [currentView, setCurrentView] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('module') ? 'module' : 'dashboard';
    } catch(e) {
      return 'dashboard';
    }
  });
  
  const [activeModuleId, setActiveModuleId] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('module') || null;
    } catch (e) {
      return null;
    }
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef(null);

  const activeModule = modules.find(m => m.id === activeModuleId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [activeModuleId]);

  const openModule = (id) => {
    setActiveModuleId(id);
    setCurrentView('module');
    setSidebarOpen(false);
    window.scrollTo(0, 0);
    
    try {
      const newUrl = `?module=${id}`;
      window.history.pushState({ view: 'module', id }, '', newUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  const goHome = () => {
    setCurrentView('dashboard');
    setActiveModuleId(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
    
    try {
      const cleanUrl = window.location.pathname;
      window.history.pushState({ view: 'dashboard' }, '', cleanUrl);
    } catch (e) {
      console.log('History API unavailable');
    }
  };

  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;
      if (state && state.view === 'module') {
        setActiveModuleId(state.id);
        setCurrentView('module');
      } else {
        setCurrentView('dashboard');
        setActiveModuleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 1. DASHBOARD VIEW
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col w-full">
        <header className="bg-emerald-900 text-white py-10 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GraduationCap size={180} />
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
             <div className="flex items-center space-x-2 mb-4">
               <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wide border border-white/20 text-emerald-100">
                 College of Medicine
               </span>
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">USask POCUS</h1>
             <p className="text-emerald-100 text-lg max-w-xl">
               Undergraduate Medical Education Point-of-Care Ultrasound Resource.
             </p>
          </div>
        </header>

        <main className="flex-1 px-6 py-10 w-full">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
              <BookOpen size={20} className="mr-2 text-emerald-700" />
              Quick Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:hover:shadow-md lg:hover:border-${mod.color}-400 active:scale-95 transition-all text-left group flex flex-col h-full relative overflow-hidden touch-manipulation z-10`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${mod.color}-50 flex items-center justify-center text-${mod.color}-700 mb-4 lg:group-hover:scale-110 transition-transform`}>
                    <mod.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{mod.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 flex-grow">{mod.description}</p>
                  
                  <div className={`flex items-center text-${mod.color}-700 text-sm font-bold mt-auto`}>
                    Learn More <ArrowRight size={16} className="ml-2 transition-transform lg:group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-500 text-xs">
          <p>© University of Saskatchewan • College of Medicine • v0.25</p>
        </footer>
      </div>
    );
  }

  // 2. MODULE VIEW
  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden w-full">
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-80 bg-emerald-900 text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:static lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-emerald-800 flex justify-between items-center shrink-0">
          <span className="font-bold text-lg tracking-tight">USask POCUS</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-emerald-300"><X size={24} /></button>
        </div>
        <nav className="p-4 flex-1 overflow-y-auto">
          <button onClick={goHome} className="flex items-center text-emerald-100 hover:text-white mb-8 w-full touch-manipulation">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </button>
          
          <div className="mb-4 px-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Quick Guides</h4>
            <div className="space-y-1">
              {modules.map(mod => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors touch-manipulation ${activeModuleId === mod.id ? `bg-${mod.color}-600 text-white shadow-md` : 'text-emerald-100 hover:bg-emerald-800/50'}`}
                >
                  {mod.title}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50/50">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate">{activeModule?.title}</h2>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <div className="max-w-3xl mx-auto space-y-6 pb-20">
            {activeModule && activeModule.sections ? (
              activeModule.sections.map((section, idx) => (
                <SectionCard key={idx} section={section} color={section.color || activeModule.color} />
              ))
            ) : (
              <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Content Coming Soon</h3>
                <p className="text-slate-500 mb-6">
                  Dr. K is currently curating the curriculum for this module. 
                </p>
                <div className="inline-flex items-center text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  <Info size={12} className="mr-2" />
                  Module ID: {activeModule?.id}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}