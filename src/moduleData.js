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
  Lightbulb,
  Code2
} from 'lucide-react';

export const modules = [
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/making_an_image.mp4", caption: "Making an image" },
          { type: 'subheader', text: "Curvilinear (Abdominal)" },
          { type: 'list', items: ["Low frequency probe", "Used for: free fluid in abdomen and pelvis, bladder, kidneys, lung ultrasound, AAA"] },
          { type: 'subheader', text: "Phased Array (Cardiac)" },
          { type: 'list', items: ["Low frequency probe that specializes in cardiac movement", "Used for: cardiac scans, lung ultrasound"] },
          { type: 'subheader', text: "Linear (Vascular)" },
          { type: 'list', items: ["High frequency probe", "Best for seeing things close to the surface (lung sliding, vessels, skin, superficial joints)"] },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/probes.png", caption: "Probes" },
          { type: 'info', text: "Low frequency probes have high penetration but poor resolution (you can see far but not very well)" },
          { type: 'info', text: "High frequency probes have low penetration but high resolution (you can see well but not very far)" }
        ]
      },
      {
        title: "Body Planes",
        icon: Layers,
        color: 'indigo',
        content: [
          { type: 'text', text: "The images acquired during various POCUS applications will generally be acquired in 1 of 2 longitudinal planes and/or the transverse plane of the body. Conversely we are sometimes interested in acquiring an image demonstrating the long or short axis of a particular structure." },
          { type: 'bold', text: "Coronal (Long Axis / Longitudinal)" },
          { type: 'text', text: "Separates body anterior-posterior" },
          { type: 'bold', text: "Sagittal (Long Axis / Longitudinal)" },
          { type: 'text', text: "Separates body left-right" },
          { type: 'bold', text: "Transverse (Short Axis)" },
          { type: 'text', text: "Separates body superior-inferior" },
          { type: 'divider' },
          { type: 'bold', text: "Long Axis: Plane parallel to the maximum length of a structure" },
          { type: 'bold', text: "Short Axis: Plane perpendicular to the maximum length of a structure" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/anatomical_planes.png", caption: "Anatomical Planes" }
        ]
      },
      {
        title: "Probe Movements",
        icon: Move,
        color: 'rose',
        content: [
          { type: 'text', text: "There are 5 standard ways an ultrasound probe can be moved." },
          { type: 'bold', text: "Sliding:" },
          { type: 'text', text: "Moving the probe about its long or short axis while keeping the angle between your probe and your structure (angle of insonation) constant (AKA translating)" },
          { type: 'bold', text: "Fanning:" },
          { type: 'text', text: "Keeping the probe on a fixed point while changing the angle of insonation along the short axis of the probe (AKA sweeping / tilting)" },
          { type: 'bold', text: "Rocking:" },
          { type: 'text', text: "Keeping the probe on a fixed point while changing the angle of insonation along the long axis of the probe (AKA angling)" },
          { type: 'bold', text: "Rotating:" },
          { type: 'text', text: "Keeping the probe on a fixed point while moving clockwise or counter clockwise" },
          { type: 'bold', text: "Compression:" },
          { type: 'text', text: "Applying pressure to the body on a fixed point with the probe" },
          { type: 'image', url: "", caption: "Probe Movements" },
          { type: 'text', text: "The ultrasound probe is moved with respect to standard anatomic directions:" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/anatomical_directions.png", caption: "Anatomical Directions" }
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
          { type: 'list', items: ["Screen marker appears on screen RIGHT", "Used for Cardiac POCUS"] },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/conventions.png", caption: "Conventions" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/screen_anatomy.png", caption: "Screen Anatomy" }
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
    id: 'abd-free-fluid',
    title: 'Free Fluid Abdomen and Pelvis',
    description: 'Scanning for free fluid in the abdomen and pelvis.',
    icon: SpleenIcon,
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/abdo_ruq_external_internal_landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/luq_external_internal_landmarks.mp4", caption: "LUQ External Internal Landmarks" },
          { type: 'subheader', text: "Pelvis (Male)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Prostate | Seminal Vesicles | Rectum" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/male_pelvis_transverse_longitudinal_internal_landmarks.mp4", caption: "Male Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'subheader', text: "Pelvis (Female)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Uterus | Vagina | Rectum" },
          { type: 'video', url: "", caption: "Female Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "Right Upper Quadrant (RUQ):" },
          { type: 'text', text: "Hepatorenal Interface | Caudal Tip of Liver" },
          { type: 'bold', text: "Left Upper Quadrant (LUQ):" },
          { type: 'text', text: "Splenorenal Interface | Between Diaphragm and Spleen" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_luq_area_of_interest.mp4", caption: "RUQ LUQ Area of Interest" },
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Rectovesicular Space" },
          { type: 'video', url: "", caption: "Male Pelvis Transverse Longitudinal Area of Interest" },
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Rectouterine Space (Pouch of Douglas) | Vesicouterine Space" },
          { type: 'video', url: "", caption: "Female Pelvis Transverse Longitudinal Area of Interest" }
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_fanning_interface.mp4", caption: "RUQ Fanning Interface" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_fanning_caudal_tip_of_liver.mp4", caption: "RUQ Fanning Caudal Tip of Liver" },
          
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/luq_fanning_interface_and_medial_diaphragm.mp4", caption: "LUQ Fanning Interface and Medial Diaphragm" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Pelvis Transverse" },
          { type: 'list', items: [
            "Place probe in transverse just superior to the pubic symphysis (probe marker toward patient right).",
            "Start with lots of depth.",
            "Fan probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe inferior and superior until the bladder disappears in both directions."
          ]},
          { type: 'video', url: "", caption: "Pelvis Transverse Probe Starting Position" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/male_pelvis_transverse_fanning.mp4", caption: "Male Pelvis Transverse Fanning" },
          { type: 'video', url: "", caption: "Female Pelvis Transverse Fanning" },
          
          { type: 'divider' },

          { type: 'header', text: "Pelvis Longitudinal" },
          { type: 'list', items: [
            "Place probe in longitudinal just superior to the pubic symphysis (probe marker toward head).",
            "Start with lots of depth.",
            "Rock probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe left and right until the bladder disappears in both directions."
          ]},
          { type: 'video', url: "", caption: "Pelvis Longitudinal Probe Starting Position" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/male_pelvis_longitudinal_fanning.mp4", caption: "Male Pelvis Longitudinal Fanning" },
          { type: 'video', url: "", caption: "Female Pelvis Longitudinal Fanning" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Negative Scan" },
          { type: 'bold', text: "RUQ:" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire hepatorenal interface anterior to posterior AND no anechoic free fluid around the caudal tip of the liver after fanning through the caudal tip anterior to posterior. (See scanning technique clips)" },
          
          { type: 'bold', text: "LUQ:" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire splenorenal interface anterior to posterior AND no anechoic free fluid between the medial diaphragm and spleen after fanning through the medial diaphragm until it disappears. (See scanning technique clips)" },
          
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "No anechoic free fluid seen in the rectovesicular space after fanning through the bladder in both transverse and longitudinal. (See scanning technique clips)" },
          
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "No anechoic free fluid seen in the rectouterine and vesicouterine space after fanning through the bladder in both transverse and longitudinal. (See scanning technique clips)" },
          
          { type: 'divider' },

          { type: 'header', text: "Positive Scan" },
          { type: 'bold', text: "RUQ:" },
          { type: 'text', text: "Anechoic free fluid seen in hepatorenal interface or around the caudal tip of the liver" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_positive_scan_free_fluid_large_amount.mp4", caption: "RUQ Positive Scan Free Fluid Large Amount" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_positive_scan_small_amount_caudal_tip.mp4", caption: "RUQ Positive Scan Small Amount Caudal Tip" },
          
          { type: 'bold', text: "LUQ:" },
          { type: 'text', text: "Anechoic free fluid seen in splenorenal interface or between medial diaphragm and spleen" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/luq_positive_scan_free_fluid_large_amount.mp4", caption: "LUQ Positive Scan Free Fluid Large Amount" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/luq_positive_scan_free_fluid_small_amount.mp4", caption: "LUQ Positive Scan Free Fluid Small Amount" },
          
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectovesicular space" },
          { type: 'video', url: "", caption: "Male Pelvis Transverse Positive Scan Free Fluid" },
          { type: 'video', url: "", caption: "Male Pelvis Longitudinal Positive Scan Free Fluid" },
          
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectouterine space and/or the vesicouterine space" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/female_pelvis_transverse_positive_scan_free_fluid.mp4", caption: "Female Pelvis Transverse Positive Scan Free Fluid" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/female_pelvis_longitudinal_positive_scan_free_fluid.mp4", caption: "Female Pelvis Longitudinal Positive Scan Free Fluid" }
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
            "POCUS can not help you distinguish the type of fluid, clinical context is key.",
            "Free fluid is not always anechoic (clotted blood in hemoperitoneum).",
            "A negative FAST scan does not rule out an intra-abdominal injury.",
            "A negative FAST scan is not reliable in patients with a history of prior abdominal surgery.",
            "Do not mistake physiologically or pathologically fluid filled organs for free fluid (gallbladder, fluid filled bowel or stomach).",
            "Do not mistake the seminal vesicle or prostate for free fluid.",
            "The female pelvis can contain a small amount of physiologic free fluid, context is important, do not assume it is normal."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-pleural',
    title: 'Pleural Effusion',
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
             "Dyspnea | Cough | Chest Pain", 
             "Trauma (FAST Scan) | Respiratory Failure | Sepsis | Shock",
             "Procedural (Thoracentesis | Chest Tube)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear | Phased Array", "Preset: Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine | Semi-Supine | Sitting", "Arm above head or across body"] },
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'text', text: "External Landmarks: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'text', text: "Internal Landmarks: Kidney | Diaphragm | Liver / Spleen | Spine | Lung" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/ruq_external_internal_landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "Area cranial to diaphragm" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/area_of_interest.mp4", caption: "Area of Interest" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head).",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best.",
            "Adjust depth to just past the spine.",
            "Slide probe cranial until diaphragm in view.",
            "Fan through medial diaphragm anteriorly to posteriorly until the diaphragm disappears."
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/starting_view_before_fanning.mp4", caption: "Starting view before fanning" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/fanning_through_medial_diaphragm.mp4", caption: "Fanning Through Medial Diaphragm" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Anechoic area seen cranial to the diaphragm and ≥ 1 of the following:" },
          { type: 'list', items: [
            "Spine sign",
            "Solid lung floating in effusion",
            "Lateral diaphragm visualized"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/positive_scan_large_pleural_effusion_and_solid_lung.mp4", caption: "Positive Scan - Large Pleural Effusion and Solid Lung" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/positive_scan_small_pleural_effusion.mp4", caption: "Positive Scan - Small Pleural Effusion" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'list', items: [
            "No pleural effusion after fanning entire medial diaphragm anteriorly to posteriorly until it disappears (see scanning technique)",
            "The curtain sign can rule out a large pleural effusion"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/curtain_sign.mp4", caption: "Curtain sign" }
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
            "Mirror artifact can mimic lung pathology, a spine sign will not be present with mirror artifact but will be present with lung pathology."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-pneumothorax',
    title: 'Pneumothorax',
    description: 'Evaluating for lung sliding, lung point, and pneumothorax.',
    icon: PneumothoraxIcon,
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
             "Post Procedure (Thoracentesis | Chest Tube | CVL)"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Linear | Curvilinear (EFAST)", "Preset: Lung | Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine"] },
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'text', text: "External: Most Anterior Aspect of Chest | Mid-Clavicular Line" },
          { type: 'text', text: "Internal: Visceral Parietal Pleural Interface (VPPI) | Ribs | Rib Shadows | A-Lines (if present)" },
          { type: 'video', url: "", caption: "Probe Starting Position" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/internal_landmarks.mp4", caption: "Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "VPPI of 2-3 of the most anterior rib spaces bilaterally" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/area_of_interest_PTX.mp4", caption: "Area of Interest" }
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
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/negative_scan_lung_sliding.mp4", caption: "Negative Scan Lung Sliding" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/negative_scan_lung_pulse.mp4", caption: "Negative Scan Lung Pulse" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Absence of lung sliding, lung pulse, and B-lines PLUS visualization of a pathological lung point." },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/no_lung_sliding.mp4", caption: "No Lung Sliding" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/pathologic_lung_point.mp4", caption: "Pathologic Lung Point" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'list', items: [
            "Lung sliding present in 2-3 of the most anterior rib spaces bilaterally (see scanning technique) OR",
            "Lung pulse present in 2-3 of the most anterior rib spaces bilaterally (see scanning technique) OR",
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
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/physiologic_lung_point_cardiac_lung_point.mp4", caption: "Physiologic Lung Point - Cardiac Lung Point" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/physiologic_lung_point_liver_lung_point.mp4", caption: "Physiologic Lung Point - Liver Lung Point" }
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
            "Absent lung sliding can be seen in multiple clinical contexts:"
          ]},
          { type: 'sublist', items: [
            "Prior pleurodesis",
            "Right mainstem intubation",
            "Esophageal intubation in an apneic patient",
            "Phrenic nerve palsy",
            "Pleural adhesions from prior chest tube",
            "Interstitial Lung Disease"
          ]},
          { type: 'list', items: [
            "Patients with a large pneumothorax may not have a visible pathologic lung point due to the size."
          ]}
        ]
      }
    ]
  },
  {
    id: 'lung-interstitial',
    title: 'Interstitial Lung Syndrome (B-Lines)',
    description: 'Evaluating the B-Lines in Lung Zones.',
    icon: InterstitialIcon,
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
          { type: 'text', text: "Internal: Visceral Parietal Pleural Interface (VPPI) | Ribs | Rib Shadows | A-lines (if present)" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/lung_zones.png", caption: "Anatomy: Lung Zones" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/internal_landmarks_ILS.mp4", caption: "Internal Landmarks" },
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/sliding_to_center_the_vppi.mp4", caption: "Sliding to center the VPPI" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/fanning_to_optimize_vppi.mp4", caption: "Fanning to optimize VPPI" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "≥ 3 B-lines present in a single rib space at any time throughout the respiratory cycle OR" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/b_lines.mp4", caption: "B-Lines" },
          { type: 'text', text: "Coalescing B-lines" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/coalescing_b_lines.mp4", caption: "Coalescing B-Lines" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/coalescing_b_lines_making_white_lung.mp4", caption: "Coalescing B-Lines Making White Lung" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'text', text: "< 3 B-lines present in a single rib space at any time throughout the respiratory cycle" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/normal_a_lines.mp4", caption: "Normal A-Lines" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench,
        color: 'amber',
        content: [
          { type: 'subheader', text: "Trouble Visualizing the VPPI:" },
          { type: 'list', items: [
            "Fan the probe until the the pleural line looks as “crisp” and hyperechoic as possible.",
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
            "The presence of an abnormal amount of B-lines has a differential diagnosis that extends beyond cardiogenic pulmonary edema, the clinical context and distribution of B-lines (unilateral vs bilateral, focal vs diffuse) will help you determine the cause.",
            "Do not mistake B-lines for a normal vertical artifact called a Z-line, remember the following characteristics of B-lines:"
          ]},
          { type: 'sublist', items: [
            "Arise from the VPPI",
            "Hyperechoic",
            "Vertical",
            "Extend well into to the far field (≥ 10cm beyond VPPI)",
            "Move with lung sliding",
            "Typically erase A-lines"
          ]},
          { type: 'list', items: [
            "Lung presets will often start with inadequate depth to evaluate for B-lines, do not forget to optimize your depth."
          ]}
        ]
      }
    ]
  },
  {
    id: 'cardiac',
    title: 'Cardiac',
    description: 'Evaluating for Pericardial Effusion, LV/RV Systolic Function, and RV Size.',
    icon: HeartIcon,
    color: 'rose',
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen,
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
            "Chest Pain | Dyspnea | Cough",
            "Trauma (FAST Scan)",
            "Respiratory Failure | Shock"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: [
            "Transducer: Phased Array",
            "Preset: Cardiac | Focused Cardiac",
            "Convention: Cardiology"
          ]},
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: [
            "Supine | Semi-Supine | Left Lateral Decubitus"
          ]},
          
          { type: 'divider' },
          
          { type: 'header', text: "Landmarks" },
          { type: 'bold', text: "Parasternal Long Axis (PLAX | PSL)" },
          { type: 'text', text: "External: Left Sternal Border | Rib Spaces 2-5" },
          { type: 'text', text: "Internal: Right Ventricle | Left Ventricle | Mitral Valve | Aortic Valve | Ascending Aorta | Pericardium | Left Atrium | Interventricular Septum" },
          { type: 'video', url: "", caption: "PLAX External Internal Landmarks" },
          
          { type: 'bold', text: "Apical Four Chamber (A4C)" },
          { type: 'text', text: "External: Inferolateral to Left Nipple" },
          { type: 'text', text: "Internal: Right Ventricle | Left Ventricle | Mitral Valve | Tricuspid Valve | Pericardium | Left Atrium | Right Atrium | Interventricular Septum" },
          { type: 'video', url: "", caption: "A4C External Internal Landmarks" },
          
          { type: 'bold', text: "Subcostal / Subxiphoid (SC | SX)" },
          { type: 'text', text: "External: Midline | Between Umbilicus and Xiphoid Process" },
          { type: 'text', text: "Internal: Right Ventricle | Left Ventricle | Mitral Valve | Tricuspid Valve | Pericardium | Left Atrium | Right Atrium | Interventricular Septum | Liver | Diaphragm" },
          { type: 'video', url: "", caption: "SC External Internal Landmarks" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "Parasternal Long Axis (PLAX | PSL):" },
          { type: 'list', items: [
            "Posterior Pericardium | Descending Thoracic Aorta (Pericardial Effusion)",
            "Inside Walls of Left Ventricle | Anterior Mitral Valve Leaflet (LV Systolic Function)",
            "Right Ventricle | Ascending Aorta | Left Atrium (RV Size)"
          ]},
          
          { type: 'bold', text: "Apical Four Chamber (A4C):" },
          { type: 'list', items: [
            "Pericardium | Descending Thoracic Aorta (if visible) (Pericardial Effusion)",
            "Inside Walls of Left Ventricle | Anterior Mitral Valve Leaflet (LV Systolic Function)",
            "Left Ventricle | Right Ventricle | Interventricular Septum | Tricuspid Valve (RV Size \\ Systolic Function)"
          ]},
          
          { type: 'bold', text: "Subcostal / Subxiphoid (SC | SX):" },
          { type: 'list', items: [
            "Pericardium | Right Ventricle | Interventricular Septum (Pericardial Effusion)",
            "Inside Walls of Left Ventricle | Anterior Mitral Valve Leaflet (LV Systolic Function)",
            "Tricuspid Valve Annulus (RV Systolic Function)"
          ]}
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "Parasternal Long Axis (PLAX | PSL)" },
          { type: 'list', items: [
            "Place probe perpendicular to chest along the left sternal border between the ribs (Rib spaces 2-5) with probe marker pointing toward the right shoulder",
            "Slide superior-inferior between rib spaces until the best view of the heart is seen",
            "Adjust depth to just past the descending thoracic aorta",
            "Slide probe toward sternum to center the RV on the screen",
            "Fan probe to visualize MV and AV",
            "Fan probe to see LV at widest diameter",
            "Rotate probe to see LV in its longest axis",
            "Rock probe to make LV as horizontal as possible",
            "See troubleshooting section for tips"
          ]},
          
          { type: 'header', text: "Apical Four Chamber (A4C)" },
          { type: 'list', items: [
            "Place probe under the left nipple with probe marker pointing toward 3 o-clock | patient left | the bed with your sound directed toward the right shoulder",
            "Slide the probe medial-lateral and superior-inferior to find the apex of the heart",
            "Slide the probe medial-lateral to center the LV on the screen",
            "Fan the probe superior to see the atria",
            "Rotate the probe to visualize the RV",
            "Rock the probe to make the interventricular septum vertical on the screen",
            "See troubleshooting section for tips"
          ]},
          
          { type: 'header', text: "Subcostal / Subxiphoid (SC | SX)" },
          { type: 'list', items: [
            "Place the probe perpendicularly on the patient in the midline between the xiphoid process and the umbilicus with the probe marker pointed toward 3 o-clock",
            "Fan the probe superiorly while maintaining good probe contact with the skin",
            "Slide the probe superiorly until the liver and heart are seen on the screen",
            "Fan the probe superior-inferior to visualize all four chambers and the TV and MV",
            "Rock the probe to center the heart on the screen",
            "See troubleshooting section for tips"
          ]}
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Pericardial Effusion" },
          { type: 'bold', text: "Positive For Pericardial Effusion:" },
          { type: 'list', items: [
            "PLAX: anechoic fluid collection seen tracking anterior to the descending thoracic aorta",
            "A4C: anechoic fluid collection seen around the heart (difficult to distinguish from pleural effusion in this view)",
            "SC: anechoic fluid seen between the RV and the diaphragm"
          ]},
          { type: 'bold', text: "Negative for Pericardial Effusion:" },
          { type: 'list', items: [
            "No fluid collections seen in areas listed above",
            "Please note to rule out a pericardial effusion with a single subcostal view the RV and the interventricular septum “7-sign” must be fanned through from anterior to posterior. This is paramount in the setting of an EFAST scan for hemopericardium"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/plax_no_pce_vs_pce.mp4", caption: "PLAX No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/a4c_no_pce_vs_pce.mp4", caption: "A4C No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/sc_no_pce_vs_pce.mp4", caption: "SC No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/sc_pce_fanning_posterior.mp4", caption: "SC PCE Seen When Fanning Posterior" },
          
          { type: 'divider' },
          
          { type: 'header', text: "LV Systolic Function" },
          { type: 'bold', text: "Normal LV Systolic Function:" },
          { type: 'list', items: [
            "PLAX: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm",
            "A4C: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm",
            "SC: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm"
          ]},
          { type: 'bold', text: "LV Systolic Dysfunction:" },
          { type: 'list', items: [
            "PLAX: fractional shortening <30%, EPSS >1cm",
            "A4C: fractional shortening <30%, EPSS >1cm",
            "SC: fractional shortening <30%, EPSS >1cm"
          ]},
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/plax_fractional_shortening.png", caption: "PLAX Fractional Shortening" },
          { type: 'video', url: "", caption: "PLAX EPSS" },
          { type: 'video', url: "", caption: "PLAX Normal vs Severely Abnormal LV Systolic Function" },
          { type: 'video', url: "", caption: "A4C Normal vs Severely Abnormal LV Systolic Function" },
          { type: 'video', url: "", caption: "SC Normal vs Severely Abnormal LV Systolic Function" },
          
          { type: 'divider' },
          
          { type: 'header', text: "RV Size \\ Systolic Function" },
          { type: 'bold', text: "RV Enlarged \\ RV Systolic Function Reduced:" },
          { type: 'list', items: [
            "PLAX: RV takes up more than ⅓ of right side of screen compared with ascending aorta and left atrium. Not used for RV systolic function.",
            "A4C: RV the same size or bigger than the LV. TAPSE subjectively abnormal (approximately <1.7cm).",
            "SC: Not used for RV size. TAPSE subjectively abnormal (approximately <1.7cm)."
          ]},
          { type: 'bold', text: "RV Normal Size \\ RV Systolic Function Normal:" },
          { type: 'list', items: [
            "PLAX: RV, Ascending Aorta, and Left atrium all take up ⅓ of right side of screen. Not used for RV systolic function.",
            "A4C: RV is smaller than the LV. TAPSE subjectively normal (approximately ≥1.7cm).",
            "SC: Not used for RV size. TAPSE subjectively normal (approximately ≥1.7cm)."
          ]},
          { type: 'video', url: "", caption: "Qualitative RV Size" },
          { type: 'video', url: "", caption: "TAPSE" },
          { type: 'video', url: "", caption: "PLAX Normal RV Size vs Enlarged RV" },
          { type: 'video', url: "", caption: "A4C Normal RV vs Abnormal RV" },
          { type: 'video', url: "", caption: "SC Normal RV vs Abnormal RV" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench,
        color: 'amber',
        content: [
          { type: 'subheader', text: "General considerations:" },
          { type: 'text', text: "Within each view, different probe movements will help you accomplish different goals. A combination of probe movements within the acoustic window will usually be needed to obtain an adequate view. If a probe movement takes you out of your rib space or acoustic window, your next step is to get back into the rib space / acoustic window." },
          
          { type: 'subheader', text: "PLAX:" },
          { type: 'list', items: [
            "Make sure patient’s left arm is behind their head, this opens up the rib spaces",
            "Consider having the patient completely supine or in left lateral decubitus position",
            "Sliding medially: helps center the RV on the screen and make the LV more horizontal",
            "Fanning inferior-superior: helps visualize the valves and find the widest diameter of the LV",
            "Rotating: helps ensure the LV is visualized in its longest axis (more like a rectangle than a circle)",
            "Rocking: helps ensure the LV is horizontal on the screen"
          ]},
          
          { type: 'subheader', text: "A4C:" },
          { type: 'list', items: [
            "Make sure patient’s left arm is behind their head, this opens up the rib spaces",
            "Consider having the patient completely supine or in left lateral decubitus position",
            "If you see only lung then slide medially",
            "If you see abdomen slide superiorly",
            "Sliding medial-lateral: centers the LV on the screen",
            "Rocking: makes the interventricular septum vertical",
            "Fanning superior-inferior: helps see the atria",
            "Rotating: helps see the RV and tricuspid valve"
          ]},
          
          { type: 'subheader', text: "SC:" },
          { type: 'list', items: [
            "Make sure the patient is supine with arms at sides, this will relax the abdomen. Having the patient bend their knees can also relax the abdomen",
            "A deep breath hold can move the heart inferior and posterior which sometimes improves your view.",
            "The liver is the window to the heart, if you do not see the liver you probably will not see the heart. Try sliding laterally to the patient’s right to get more liver on the screen and then rocking to patient left to center the heart.",
            "Sliding superior-inferior: helps find the acoustic window",
            "Fanning inferior-superior: helps visualize the valves and find the widest diameter of the LV",
            "Rocking: helps center the heart on the screen",
            "Rotating: helps ensure the LV is visualized in its longest axis (more like a rectangle than a circle)"
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb,
        color: 'sky',
        content: [
          { type: 'bold', text: "Distinguishing a pericardial effusion from a pleural effusion:" },
          { type: 'sublist', items: [
            "The pleura and pericardium are apposed to each other which can make pleural effusions easy to mistake for pleural effusions especially in the PLAX and A4C view",
            "A pericardial effusion will track anterior to the descending thoracic aorta, a pleural effusion will not",
            "When in doubt, remember that lung ultrasound can be performed to look for the presence of a pleural effusion",
            "It is very difficult to tell if a fluid collection is pleural or pericardial in an A4C view, proceed with caution."
          ]},
          
          { type: 'bold', text: "Distinguishing a pericardial effusion from an epicardial pad in the SC view:" },
          { type: 'sublist', items: [
            "Pericardial fluid will get bigger / easier to see as you fan the probe more inferior/posterior",
            "Pericardial fluid is typically anechoic whereas some echogenicity is typically present in an epicardial pad",
            "An epicardial pad will move with the contraction of the RV, a pericardial effusion will not"
          ]}
        ]
      }
    ]
  }
];