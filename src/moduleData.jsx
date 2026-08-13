import React from 'react';
import { 
  BookOpen, 
  Info,
  Scan,
  Move,
  FileText,
  Layers,
  Settings,
  Sliders,   
  Wrench,    
  Microscope,
  Lightbulb
} from 'lucide-react';

// --- CUSTOM ICONS ---

function HeartIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M24 41.5S8 30.5 8 18.5C8 13.2533 12.2533 9 17.5 9C20.738 9 23.596 10.625 25.258 13.208C26.576 10.792 29.578 9 33.5 9C38.7467 9 43 13.2533 43 18.5C43 30.5 24 41.5 24 41.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 22H19L22 14L27 32L30 22H34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

function LiverIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 30.707C17.0781 31.0885 16.0352 31.3613 14.6885 31.3613C12.8526 31.3613 12.2458 32.8297 11.6009 34.3903C10.8697 36.1599 10.0895 38.0479 7.41312 38.0479C2.37634 38.0479 3.61914 22.5479 6.61916 16.5479C9.61919 10.5479 13.7245 10.0479 22.1192 10.0479C27.2615 10.0479 28.5655 10.8319 29.5758 11.4395C30.2149 11.8238 30.7364 12.1374 32.0374 12.1374C33.3805 12.1374 35.2609 11.7362 37.1413 11.335C39.9619 10.7332 42.7825 10.1315 43.7898 10.8837C45.4687 12.1374 40.432 21.3314 35.3952 21.3314C32.8027 21.3314 31.2481 23.1899 29.7392 24.9937C28.3166 26.6944 26.9347 28.3464 24.762 28.3464C22.6699 28.3464 21.311 29.0047 20 29.7061V39.5479H18V30.707ZM8.69292 35.6058C8.47288 35.8312 8.15654 36.0479 7.41312 36.0479H7.41083C7.35819 36.0479 7.31753 36.0479 7.21331 35.9452C7.06443 35.7986 6.8432 35.4767 6.62867 34.8677C6.19706 33.6425 5.97531 31.7877 6.00219 29.5721C6.05609 25.1293 7.08823 20.0818 8.40801 17.4423C9.7236 14.8111 11.1431 13.6011 13.0187 12.9314C15.091 12.1915 17.867 12.0479 22.1192 12.0479C22.4358 12.0479 22.7355 12.051 23.0192 12.0568C22.1361 13.1859 21.6549 14.4264 21.3967 15.502C21.1898 16.3644 21.1212 17.1377 21.104 17.6968C21.0953 17.9773 21.0996 18.2065 21.1063 18.3695C21.1097 18.451 21.1137 18.5161 21.1171 18.563L21.12 18.602L21.1215 18.6195L21.1231 18.6371L21.1237 18.6431L21.124 18.6465C21.124 18.6469 21.1241 18.6474 22.1191 18.5479C23.1142 18.4484 23.1142 18.4487 23.1142 18.4491L23.1119 18.4191C23.1099 18.3916 23.1071 18.3469 23.1046 18.2868C23.0996 18.1665 23.096 17.9856 23.103 17.7583C23.1171 17.3017 23.1735 16.6688 23.3415 15.9687C23.6443 14.7069 24.2935 13.2816 25.6646 12.2314C27.0451 12.408 27.6744 12.6758 28.0486 12.8693C28.2163 12.956 28.3581 13.0412 28.5502 13.1565L28.6079 13.1912C28.8138 13.3147 29.0948 13.4822 29.4246 13.632C30.1563 13.9642 30.9609 14.1374 32.0374 14.1374C33.0791 14.1374 34.2867 13.948 35.4295 13.7297C36.117 13.5983 36.872 13.4374 37.6006 13.2821C38.0667 13.1828 38.5224 13.0857 38.9423 13.0002C40.0902 12.7664 41.0754 12.5959 41.8452 12.5466C41.8838 12.5441 41.9212 12.542 41.9573 12.5402C41.7061 13.3297 41.1912 14.3795 40.46 15.4488C39.709 16.547 38.7994 17.5638 37.8539 18.2858C36.8904 19.0217 36.0515 19.3314 35.3952 19.3314C31.8714 19.3314 29.7796 21.8299 28.3949 23.4838L28.2639 23.6402C27.5199 24.5286 26.9555 25.2025 26.3463 25.6952C25.7756 26.1567 25.2963 26.3464 24.762 26.3464C22.723 26.3464 21.2212 26.8734 20 27.4589V23.0479C20 22.6526 20.195 22.2841 20.5335 21.9879C20.8909 21.6752 21.2902 21.5479 21.5 21.5479V19.5479C20.7098 19.5479 19.8591 19.9205 19.2165 20.4828C18.5727 21.0461 18.0298 21.8962 18.0012 22.9597H12.9072C10.5179 22.9597 7.65081 24.0112 10.5179 26.1135C12.5977 27.6385 16.186 26.4249 18 25.6433V28.5027C16.9811 29.0186 16.0552 29.3613 14.6885 29.3613C12.9882 29.3613 11.8003 30.1533 11.0098 31.2027C10.4285 31.9744 10.028 32.9519 9.74132 33.6517C9.73622 33.6642 9.73111 33.6767 9.72608 33.689C9.69086 33.7749 9.65739 33.8564 9.62554 33.9325C9.27146 34.7786 9.0088 35.2823 8.69292 35.6058Z" fill="currentColor"/>
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

function PneumothoraxIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.72 29.8941C17.8635 29.8523 17.9526 29.8079 18 29.7767V25H20V29.7767C20.0474 29.8079 20.1365 29.8523 20.28 29.8941C20.4502 29.9438 20.6339 29.9718 20.7843 29.9864C20.8253 29.9904 20.8621 29.9932 20.8934 29.9952C20.8819 28.3854 20.9674 25.6491 23.2479 25.6491C26.5375 25.6491 28.8872 37.1315 27.4774 38.3032C26.0675 39.4748 23.2479 38.7718 21.838 37.3658C20.7627 36.2934 20.7912 33.8666 20.8572 31.9962C20.7885 31.9931 20.6974 31.9874 20.5907 31.977C20.3661 31.9552 20.0498 31.9103 19.72 31.8141C19.5042 31.7512 19.2486 31.6567 19 31.5094C18.7514 31.6567 18.4958 31.7512 18.28 31.8141C17.9502 31.9103 17.6339 31.9552 17.4093 31.977C17.2945 31.9882 17.1978 31.9939 17.1276 31.9968C17.0923 31.9983 17.0634 31.9991 17.0419 31.9995L17.0377 31.9995C17.1036 33.8696 17.1314 36.2941 16.0567 37.3658C14.6469 38.7718 11.8272 39.4749 10.4174 38.3032C9.00755 37.1315 11.3573 25.6491 14.6469 25.6491C16.9296 25.6491 17.013 28.3907 17.0014 29.9999L17.003 29.9999C17.0108 29.9997 17.0249 29.9994 17.0443 29.9985C17.0835 29.9969 17.143 29.9935 17.2157 29.9864C17.3661 29.9718 17.5498 29.9438 17.72 29.8941ZM23.1664 27.7117L23.1724 27.6995C23.3206 27.8318 23.5329 28.0815 23.7826 28.4951C24.3119 29.3719 24.8102 30.6499 25.1953 32.0627C25.577 33.4628 25.8135 34.87 25.8774 35.9498C25.9002 36.3346 25.8988 36.6428 25.8835 36.8739C25.6958 36.9048 25.4196 36.9116 25.0385 36.8377C24.3175 36.6979 23.6368 36.3351 23.2503 35.9497C23.2503 35.9497 23.2233 35.923 23.1801 35.8388C23.1364 35.7534 23.0858 35.6269 23.0372 35.4487C22.9376 35.0829 22.8745 34.6051 22.847 34.0283C22.8199 33.4591 22.8299 32.8593 22.8494 32.2601C22.8544 32.1079 22.8602 31.9498 22.8661 31.7905C22.882 31.3641 22.8982 30.928 22.8982 30.5701C22.8982 30.4374 22.8972 30.3038 22.8962 30.1701C22.8907 29.438 22.8852 28.7012 23.0437 28.0686C23.0842 27.9071 23.1278 27.7908 23.1664 27.7117ZM14.7284 27.7117L14.7224 27.6995C14.5742 27.8318 14.3618 28.0815 14.1122 28.4951C13.5829 29.3719 13.0846 30.6499 12.6995 32.0627C12.3178 33.4628 12.0813 34.87 12.0174 35.9498C11.9946 36.3346 11.996 36.6428 12.0112 36.8739C12.199 36.9048 12.4752 36.9116 12.8563 36.8377C13.5773 36.6979 14.258 36.3351 14.6445 35.9497C14.6445 35.9497 14.6715 35.923 14.7146 35.8388C14.7584 35.7534 14.809 35.6269 14.8576 35.4487C14.9572 35.0829 15.0203 34.6051 15.0478 34.0283C15.0749 33.4591 15.0649 32.8593 15.0454 32.2601C15.0404 32.1078 15.0346 31.9497 15.0286 31.7903C15.0128 31.364 14.9966 30.928 14.9966 30.5701C14.9966 30.4375 14.9976 30.3041 14.9986 30.1705C15.0041 29.4384 15.0096 28.7012 14.8511 28.0687C14.8106 27.9071 14.767 27.7908 14.7284 27.7117Z" fill="currentColor"/>
      <path d="M32 14C32 14.5523 31.5523 15 31 15C30.4477 15 30 14.5523 30 14C30 13.4477 30.4477 13 31 13C31.5523 13 32 13.4477 32 14Z" fill="currentColor"/>
      <path d="M34 17C34 17.5523 33.5523 18 33 18C32.4477 18 32 17.5523 32 17C32 16.4477 32.4477 16 33 16C33.5523 16 34 16.4477 34 17Z" fill="currentColor"/>
      <path d="M36 20C36 20.5523 35.5523 21 35 21C34.4477 21 34 20.5523 34 20C34 19.4477 34.4477 19 35 19C35.5523 19 36 19.4477 36 20Z" fill="currentColor"/>
      <path d="M42 19C42 19.5523 41.5523 20 41 20C40.4477 20 40 19.5523 40 19C40 18.4477 40.4477 18 41 18C41.5523 18 42 18.4477 42 19Z" fill="currentColor"/>
      <path d="M42 14C42 14.5523 41.5523 15 41 15C40.4477 15 40 14.5523 40 14C40 13.4477 40.4477 13 41 13C41.5523 13 42 13.4477 42 14Z" fill="currentColor"/>
      <path d="M42 10C42 10.5523 41.5523 11 41 11C40.4477 11 40 10.5523 40 10C40 9.44772 40.4477 9 41 9C41.5523 9 42 9.44772 42 10Z" fill="currentColor"/>
      <path d="M38 12C38 12.5523 37.5523 13 37 13C36.4477 13 36 12.5523 36 12C36 11.4477 36.4477 11 37 11C37.5523 11 38 11.4477 38 12Z" fill="currentColor"/>
      <path d="M38 16C38 16.5523 37.5523 17 37 17C36.4477 17 36 16.5523 36 16C36 15.4477 36.4477 15 37 15C37.5523 15 38 15.4477 38 16Z" fill="currentColor"/>
      <path d="M30 19C30 19.5523 29.5523 20 29 20C28.4477 20 28 19.5523 28 19C28 18.4477 28.4477 18 29 18C29.5523 18 30 18.4477 30 19Z" fill="currentColor"/>
      <path d="M23 17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17C21 16.4477 21.4477 16 22 16C22.5523 16 23 16.4477 23 17Z" fill="currentColor"/>
      <path d="M20 16C20 16.5523 19.5523 17 19 17C18.4477 17 18 16.5523 18 16C18 15.4477 18.4477 15 19 15C19.5523 15 20 15.4477 20 16Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.7229 24.0194C21.6184 24.0194 20.7229 23.124 20.7229 22.0194V21.0728C20.7229 19.9683 21.6184 19.0728 22.7229 19.0728H23.7825C24.0012 19.0728 24.1914 18.9897 24.3161 18.8722C24.4372 18.7579 24.4846 18.626 24.4853 18.5123L24.4853 18.5049L24.4874 18.2679C24.4885 18.1239 24.4899 17.9311 24.4908 17.7341C24.4917 17.5361 24.4921 17.3384 24.4915 17.1831C24.4911 17.1049 24.4906 17.0434 24.4898 17.0007C24.4896 16.9911 24.4894 16.9835 24.4893 16.9775C24.4637 16.5821 24.5522 16.1616 24.7834 15.7828C24.9627 15.489 25.1846 15.2905 25.374 15.1605C25.1221 14.5701 24.8583 13.9508 24.608 13.313C24.5175 13.0822 24.4706 12.8365 24.4699 12.5885L24.4696 12.5735C24.4693 12.5566 24.4686 12.5268 24.467 12.4865C24.4636 12.4051 24.4568 12.2844 24.4428 12.1409C24.4132 11.837 24.3587 11.5064 24.2741 11.2434C23.9826 10.3368 23.3869 9.52217 22.552 8.9311C21.7171 8.34009 20.6927 8.00894 19.6273 8C18.6008 7.99934 17.6089 8.30279 16.7901 8.85521C15.9711 9.40779 15.3727 10.1765 15.0582 11.0406C14.7444 11.9031 14.7229 12.8327 14.9955 13.7057C15.2685 14.5802 15.8287 15.3709 16.6187 15.9556C17.1282 16.3328 17.4287 16.9292 17.4287 17.5631V22.0194C17.4287 23.124 16.5333 24.0194 15.4287 24.0194H12.5981C11.3671 24.0163 10.2025 24.4712 9.34936 25.2577C8.50602 26.0351 8.03545 27.0702 8 28.1366V40H30.9963V29.0534C30.9963 29.0307 30.9966 29.008 30.9974 28.9854C31.0186 28.3639 30.9097 27.7425 30.6746 27.1558C30.4393 26.5688 30.0807 26.0248 29.6139 25.558C29.147 25.091 28.5812 24.7109 27.9466 24.4447C27.3173 24.1807 26.6359 24.0354 25.9418 24.0194H22.7229ZM26.7214 22.0726C27.4097 22.1557 28.0831 22.3331 28.7201 22.6003C29.5896 22.965 30.3741 23.4896 31.0282 24.1439C31.6824 24.7981 32.1931 25.5689 32.531 26.4116C32.8688 27.2544 33.0269 28.1523 32.9963 29.0534V42H6V28.1068C6.04412 26.4752 6.75973 24.9248 7.99374 23.7872C9.22776 22.6496 10.8822 22.0151 12.6032 22.0194H15.4287V17.5631C14.3087 16.734 13.4897 15.5938 13.0864 14.3018C12.683 13.0097 12.7153 11.6305 13.1788 10.3567C13.6423 9.08298 14.5138 7.97837 15.6716 7.19726C16.8293 6.41615 18.2155 5.99757 19.6363 6.00001C21.1046 6.01077 22.5309 6.46577 23.7076 7.29874C24.8842 8.13171 25.7497 9.29916 26.1781 10.6311C26.4699 11.5383 26.4699 12.5825 26.4699 12.5825C26.7155 13.2087 26.9766 13.8203 27.2376 14.4318L27.6062 15.3204C27.7438 15.561 27.8372 15.822 27.8826 16.0922C27.8926 16.2717 27.8323 16.4483 27.7132 16.5881C27.6593 16.6513 27.5952 16.705 27.5238 16.7475C27.4373 16.7989 27.3401 16.8339 27.2377 16.8495C27.2251 16.8495 27.1856 16.8432 27.1309 16.8345C27.0768 16.8259 27.0079 16.8149 26.9354 16.8053C26.7218 16.7769 26.4764 16.7602 26.4852 16.8495C26.5 17 26.4852 18.5243 26.4852 18.5243C26.482 19.0653 26.2985 19.5877 25.9667 20.0194L25.9631 20.0241C25.8804 20.1311 25.7887 20.2325 25.6882 20.3273C25.1818 20.8048 24.4967 21.0728 23.7826 21.0728H22.7229V22.0194H25.9631C26.2172 22.0244 26.4703 22.0422 26.7214 22.0726Z" fill="currentColor"/>
      <path d="M24.4888 16.9609C24.4888 16.9609 24.4888 16.9618 24.4889 16.9642L24.4888 16.9609Z" fill="currentColor"/>
    </svg>
  );
}

function InterstitialIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M33.974 18.9999C33.9749 20.1045 33.0802 21.0006 31.9757 21.0015C30.8711 21.0024 29.9749 20.1077 29.974 19.0032C29.9731 17.8986 30.8678 17.0024 31.9724 17.0015C33.0769 17.0006 33.9731 17.8953 33.974 18.9999Z" fill="currentColor"/>
      <path d="M36.9896 37.9974C38.0941 37.9965 38.9888 37.1003 38.9879 35.9958C38.987 34.8912 38.0909 33.9965 36.9863 33.9974C35.8817 33.9983 34.987 34.8945 34.9879 35.999C34.9888 37.1036 35.885 37.9983 36.9896 37.9974Z" fill="currentColor"/>
      <path d="M33.986 33.9999C33.9869 35.1045 33.0922 36.0006 31.9876 36.0015C30.883 36.0024 29.9869 35.1077 29.986 34.0032C29.9851 32.8986 30.8798 32.0024 31.9843 32.0015C33.0889 32.0006 33.9851 32.8953 33.986 33.9999Z" fill="currentColor"/>
      <path d="M35.9837 30.9984C37.0883 30.9975 37.983 30.1013 37.9821 28.9967C37.9812 27.8922 37.085 26.9975 35.9804 26.9984C34.8759 26.9993 33.9812 27.8954 33.9821 29C33.983 30.1046 34.8791 30.9993 35.9837 30.9984Z" fill="currentColor"/>
      <path d="M33.9786 24.9999C33.9795 26.1045 33.0848 27.0006 31.9802 27.0015C30.8756 27.0024 29.9795 26.1077 29.9786 25.0032C29.9777 23.8986 30.8724 23.0024 31.9769 23.0015C33.0815 23.0006 33.9777 23.8953 33.9786 24.9999Z" fill="currentColor"/>
      <path d="M15.9754 21.0146C14.8708 21.0155 13.9747 20.1209 13.9738 19.0163C13.9729 17.9117 14.8676 17.0155 15.9721 17.0146C17.0767 17.0137 17.9729 17.9084 17.9738 19.013C17.9747 20.1176 17.08 21.0137 15.9754 21.0146Z" fill="currentColor"/>
      <path d="M8.98793 36.0204C8.98884 37.125 9.885 38.0197 10.9896 38.0188C12.0941 38.0179 12.9888 37.1217 12.9879 36.0172C12.987 34.9126 12.0909 34.0179 10.9863 34.0188C9.88172 34.0197 8.98703 34.9159 8.98793 36.0204Z" fill="currentColor"/>
      <path d="M15.9876 36.0146C14.883 36.0155 13.9869 35.1209 13.986 34.0163C13.9851 32.9117 14.8798 32.0156 15.9843 32.0146C17.0889 32.0137 17.9851 32.9084 17.986 34.013C17.9869 35.1176 17.0922 36.0137 15.9876 36.0146Z" fill="currentColor"/>
      <path d="M9.98207 29.0195C9.98298 30.124 10.8791 31.0187 11.9837 31.0178C13.0883 31.0169 13.983 30.1208 13.9821 29.0162C13.9812 27.9116 13.085 27.0169 11.9804 27.0178C10.8759 27.0187 9.98117 27.9149 9.98207 29.0195Z" fill="currentColor"/>
      <path d="M15.9803 27.0146C14.8757 27.0155 13.9796 26.1209 13.9787 25.0163C13.9778 23.9117 14.8724 23.0156 15.977 23.0146C17.0816 23.0137 17.9777 23.9084 17.9787 25.013C17.9796 26.1176 17.0849 27.0137 15.9803 27.0146Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 6.00122C25 6.00122 25 6.00126 25 6.00135L25.0003 20.4973C25.0003 21.8944 25.5642 22.4386 26.0041 22.6951C26.0531 22.7237 26.1024 22.7496 26.1515 22.7732C26.1505 22.6537 26.1492 22.5292 26.1478 22.4003C26.11 18.8717 26.0364 12 31.4752 12C38.9258 12 44.2477 38.0065 41.0546 40.6602C37.8614 43.3139 31.4752 41.7217 28.2821 38.5372C25.7041 35.9663 25.9271 29.9586 26.0873 25.646C26.0971 25.3817 26.1066 25.1237 26.1153 24.8734C25.7901 24.7925 25.3962 24.6558 24.9966 24.4228C24.6406 24.2152 24.2986 23.9414 24.0014 23.5897C23.7036 23.9426 23.3609 24.2171 23.0041 24.4252C22.6045 24.6583 22.2106 24.7949 21.8854 24.8758C21.8941 25.1254 21.9036 25.3824 21.9134 25.6458C22.0738 29.9584 22.2972 35.9663 19.7193 38.5372C16.5264 41.7217 10.1402 43.3139 6.94693 40.6602C3.75364 38.0065 9.07407 12 16.5247 12C21.9635 12 21.8903 18.8717 21.8527 22.4003C21.8525 22.4165 21.8524 22.4327 21.8522 22.4488C21.851 22.5614 21.8499 22.6705 21.849 22.7757C21.8982 22.7521 21.9475 22.7261 21.9966 22.6975C22.4364 22.441 23.0003 21.8968 23.0003 20.4997L23 6.00135C23 6.00126 23 6.00122 24 6.00122ZM31.4752 14C30.5211 14 29.9842 14.3005 29.6085 14.6872C29.1751 15.1334 28.8131 15.851 28.559 16.865C28.114 18.6399 28.1329 20.6823 28.1482 22.3296C28.1508 22.6146 28.1533 22.8877 28.1533 23.1457C28.1533 23.9056 28.1196 24.8156 28.0844 25.7624L28.0844 25.7637C28.0705 26.1361 28.0565 26.5141 28.0442 26.8908C27.9995 28.266 27.974 29.7058 28.0404 31.0985C28.1071 32.4988 28.2641 33.7838 28.5572 34.8599C28.8537 35.9486 29.2508 36.6787 29.6943 37.1211C30.9725 38.3957 32.9907 39.4255 35.0491 39.8246C37.0841 40.2192 38.7223 39.9272 39.6817 39.1972C39.6867 39.186 39.6922 39.1729 39.6983 39.1577C39.7575 39.0095 39.8293 38.7557 39.8877 38.3683C40.0046 37.5936 40.0349 36.5126 39.9562 35.1803C39.7995 32.5305 39.2285 29.1689 38.3268 25.8609C37.4215 22.5399 36.2172 19.4001 34.852 17.1386C34.1687 16.0065 33.495 15.1789 32.8702 14.6538C32.2517 14.134 31.7934 14 31.4752 14ZM16.5248 14C17.4789 14 18.0158 14.3005 18.3915 14.6872C18.825 15.1334 19.187 15.851 19.4412 16.865C19.8862 18.6399 19.8675 20.6823 19.8523 22.3296C19.8497 22.6146 19.8472 22.8877 19.8472 23.1457C19.8472 23.9056 19.8811 24.8156 19.9163 25.7624C19.9301 26.1352 19.9442 26.5136 19.9565 26.8908C20.0014 28.266 20.0269 29.7058 19.9606 31.0985C19.894 32.4988 19.737 33.7838 19.444 34.8599C19.1475 35.9486 18.7505 36.6787 18.307 37.1211C17.0289 38.3957 15.0108 39.4254 12.9524 39.8246C10.9174 40.2192 9.27921 39.9272 8.31972 39.1972C8.31475 39.186 8.30919 39.1729 8.30311 39.1577C8.24389 39.0098 8.17207 38.7557 8.11369 38.3686C7.99679 37.5936 7.96634 36.5125 8.04506 35.1806C8.20167 32.5308 8.77238 29.1692 9.67397 25.8609C10.579 22.5399 11.7831 19.4001 13.1482 17.1386C13.8314 16.0066 14.505 15.1789 15.1298 14.6538C15.7483 14.134 16.2066 14 16.5248 14Z" fill="currentColor"/>
    </svg>
  );
}

function KidneyIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.548 30.7535C1.68377 26.1712 5.97137 10.7044 13.513 8.14889C16.6416 7.08877 20.0938 10.6058 20.0717 12.7895C20.0621 13.7337 19.5749 14.6543 19.0673 15.6135C18.4009 16.8727 17.6993 18.1984 17.9972 19.7311C18.5221 22.4312 19.11 26.987 17.5952 29.1496C16.0803 31.3122 14.5569 31.6008 12.548 30.7535ZM13.3252 28.9107C14.1079 29.2408 14.4924 29.2191 14.7033 29.1584C14.9198 29.096 15.3424 28.8797 15.9571 28.0022C16.3298 27.47 16.5836 26.3471 16.5612 24.6685C16.5403 23.0924 16.2862 21.4104 16.034 20.1127C15.6296 18.0324 16.4601 16.2946 17.0527 15.1483C17.1547 14.9508 17.2479 14.7749 17.3337 14.6127C17.5316 14.2389 17.6907 13.9383 17.8313 13.616C18.0187 13.1865 18.0701 12.932 18.0718 12.7693C18.0723 12.7174 18.0372 12.4529 17.7779 12.0175C17.5343 11.6087 17.1645 11.1732 16.7104 10.8032C15.7472 10.0183 14.8151 9.81937 14.1549 10.0431C11.3449 10.9953 8.70316 14.6619 8.10954 18.9645C7.54002 23.0924 8.95066 27.0656 13.3252 28.9107Z" fill="currentColor"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M34.3473 8.14889C41.889 10.7044 46.1766 26.1712 35.3124 30.7535C33.3034 31.6008 31.78 31.3122 30.2652 29.1496C28.7504 26.987 29.3383 22.4312 29.8631 19.7311C30.161 18.1984 29.4595 16.8727 28.793 15.6135C28.2854 14.6543 27.7982 13.7337 27.7887 12.7895C27.7666 10.6058 31.2188 7.08877 34.3473 8.14889ZM33.157 29.1584C33.368 29.2191 33.7525 29.2408 34.5351 28.9107C38.9097 27.0656 40.3203 23.0924 39.7508 18.9645C39.1572 14.6619 36.5155 10.9953 33.7055 10.0431C33.0452 9.81937 32.1131 10.0183 31.1499 10.8032C30.6958 11.1732 30.326 11.6087 30.0825 12.0175C29.8232 12.4529 29.788 12.7174 29.7886 12.7693C29.7902 12.932 29.8417 13.1865 30.0291 13.616C30.1697 13.9383 30.3288 14.2389 30.5266 14.6127C30.6125 14.7749 30.7056 14.9508 30.8077 15.1483C31.4002 16.2946 32.2307 18.0324 31.8264 20.1127C31.5741 21.4104 31.3201 23.0924 31.2991 24.6685C31.2768 26.3471 31.5306 27.47 31.9033 28.0022C32.518 28.8797 32.9406 29.096 33.157 29.1584Z" fill="currentColor"/>
      <path d="M28.6181 22.7799C28.6867 23.7775 28.6879 23.7774 28.6879 23.7774L28.6891 23.7773L28.6913 23.7772L28.6952 23.7769L28.7007 23.7764L28.7036 23.7761C28.7036 23.7761 28.6934 23.7773 28.6791 23.7796C28.6504 23.7842 28.6001 23.7938 28.5357 23.8121C28.4046 23.8492 28.2318 23.9173 28.0626 24.0378C27.7729 24.2441 27.3469 24.7023 27.3469 25.8585V40.3246C27.3469 40.3246 27.3469 40.3248 26.3469 40.3248C25.3469 40.3248 25.3469 40.3242 25.3469 40.3242V25.8585C25.3469 24.0922 26.0565 23.0111 26.9024 22.4087C27.301 22.1249 27.696 21.9712 27.9907 21.8878C28.1393 21.8457 28.2665 21.8203 28.3619 21.8049C28.4097 21.7972 28.4501 21.792 28.4816 21.7885C28.4974 21.7867 28.5111 21.7854 28.5224 21.7844L28.5377 21.7831L28.5441 21.7826L28.5469 21.7824L28.5482 21.7823C28.5482 21.7823 28.5495 21.7822 28.6181 22.7799Z" fill="currentColor"/>
      <path d="M19.2423 22.7799C19.1737 23.7775 19.1724 23.7774 19.1724 23.7774L19.1713 23.7773L19.169 23.7772L19.1652 23.7769L19.1596 23.7764L19.1565 23.7761C19.1565 23.7761 19.167 23.7773 19.1812 23.7796C19.21 23.7842 19.2603 23.7938 19.3246 23.8121C19.4557 23.8492 19.6285 23.9173 19.7978 24.0378C20.0875 24.2441 20.5135 24.7023 20.5135 25.8585V40.3246C20.5135 40.3246 20.5135 40.3248 21.5135 40.3248C22.5135 40.3248 22.5135 40.3242 22.5135 40.3242V25.8585C22.5135 24.0922 21.8038 23.0111 20.9579 22.4087C20.5594 22.1249 20.1644 21.9712 19.8696 21.8878C19.7211 21.8457 19.5939 21.8203 19.4985 21.8049C19.4506 21.7972 19.4103 21.792 19.3787 21.7885C19.3629 21.7867 19.3493 21.7854 19.3379 21.7844L19.3226 21.7831L19.3163 21.7826L19.3135 21.7824L19.3121 21.7823C19.3121 21.7823 19.3108 21.7822 19.2423 22.7799Z" fill="currentColor"/>
    </svg>
  );
}

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
          { type: 'text', text: "The ultrasound probe is what we use to see into the body. There are three main probes that we use:" },
          { type: 'bold', text: "Curvilinear (Abdominal)" },
          { type: 'list', items: ["Low frequency probe", "Used for: free fluid in abdomen and pelvis, bladder, kidneys, lung ultrasound, AAA)"] },
          { type: 'bold', text: "Phased Array (Cardiac)" },
          { type: 'list', items: ["Low frequency probe that specializes in cardiac movement", "Used for: cardiac scans, lung ultrasound"] },
          { type: 'bold', text: "Linear (Vascular)" },
          { type: 'list', items: ["High frequency probe", "Used for: seeing things close to the surface (lung sliding, vessels, skin, superficial joints)"] },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%202%20-%20Probes%20Real.png", caption: "Ultrasound Probes" },
          { type: 'info', text: <>Low frequency probes have high penetration but low resolution <strong>(you can see far but not very well)</strong></> },
          { type: 'info', text: <>High frequency probes have low penetration but high resolution <strong>(you can see well but not very far)</strong></> },
          { type: 'divider' },
          { type: 'text', text: "Sound travels from the probe into the body. Some sound is lost as heat or scattered away. Some sound reflects back to our probe. The sound that reflects back to the probe is interpreted by our machine and an image is displayed on our screen." },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%201%20-%20Making%20an%20Image%202.mp4", caption: "How an Ultrasound Image is Made" }
        ]
      },
      {
        title: "Body Planes",
        icon: Layers,
        color: 'indigo',
        content: [
          { type: 'text', text: "The images acquired during various POCUS applications will generally be acquired in 1 of 2 longitudinal planes and/or the transverse plane of the body. Conversely, we are sometimes interested in acquiring an image demonstrating the long or short axis of a particular structure." },
          { type: 'bold', text: "Coronal (Long Axis / Longitudinal):" },
          { type: 'text', text: "Separates body anterior-posterior" },
          { type: 'bold', text: "Sagittal (Long Axis / Longitudinal):" },
          { type: 'text', text: "Separates body left-right" },
          { type: 'bold', text: "Transverse (Short Axis):" },
          { type: 'text', text: "Separates body superior-inferior" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%203%20-%20Anatomical%20Planes%202.png", caption: "Anatomical Planes" },
          { type: 'label', label: "Long Axis:", text: "Plane parallel to the maximum length of a structure" },
          { type: 'label', label: "Short Axis:", text: "Plane perpendicular to the maximum length of a structure" }
        ]
      },
      {
        title: "Probe Movements",
        icon: Move,
        color: 'rose',
        content: [
          { type: 'text', text: "There are 5 standard ways an ultrasound probe can be moved." },
          { type: 'bold', text: "Sliding:" },
          { type: 'text', text: "Moving the probe about its long or short axis while keeping the angle between your probe and your structure (angle of insonation) constant." },
          { type: 'text', text: "Sliding is sometimes referred to as translating." },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%204%20-%20Probe%20Movements%20-%20Sliding.mp4", caption: "Sliding the Probe" },
          { type: 'bold', text: "Fanning:" },
          { type: 'text', text: "Keeping the probe on a fixed point while changing the angle of insonation along the short axis of the probe." },
          { type: 'text', text: "Fanning is sometimes referred to as tilting or sweeping." },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%205%20-%20Probe%20Movements%20-%20Fanning.mp4", caption: "Fanning the Probe" },
          { type: 'bold', text: "Rocking:" },
          { type: 'text', text: "Keeping the probe on a fixed point while changing the angle of insonation along the long axis of the probe." },
          { type: 'text', text: "Rocking is sometimes referred to as angling or heel-toeing." },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%206%20-%20Probe%20Movements%20-%20Rocking.mp4", caption: "Rocking the Probe" },
          { type: 'bold', text: "Rotating:" },
          { type: 'text', text: "Keeping the probe on a fixed point while moving clockwise or counter clockwise" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%207%20-%20Probe%20Movements%20-%20Rotating.mp4", caption: "Rotating the Probe" },
          { type: 'bold', text: "Compression:" },
          { type: 'text', text: "Applying pressure to the body on a fixed point with the probe" },
          { type: 'divider' },
          { type: 'text', text: "The ultrasound probe is moved with respect to standard anatomic directions: (slide anteriorly, rock cranially)" },
          { type: 'text', text: "Probe movements are always made with respect to where the sound is moving, not where the probe is moving: (rocking cranially means the sound coming out of the probe will be travelling cranially while the majority of the probe will be moving caudally)" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%208%20-%20Anatomical%20Directions%202.png", caption: "Anatomical Directions" }
        ]
      },
      {
        title: "Conventions",
        icon: Settings,
        color: 'amber',
        content: [
          { type: 'text', text: "Convention = the agreed upon way we do something (reading left to right, driving on the right side of the road)" },
          { type: 'text', text: "Conventions for the same task can differ between groups (some places drive on the left side of the road)." },
          { type: 'text', text: "There are two POCUS imaging conventions:" },
          { type: 'bold', text: "Radiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen LEFT", "Used for all POCUS applications except cardiac"] },
          { type: 'bold', text: "Cardiology Convention" },
          { type: 'list', items: ["Screen marker appears on screen RIGHT", "Used for Cardiac POCUS"] },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%209%20-%20Conventions%202.png", caption: "Ultrasound Imaging Conventions" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/POCUS%20Basics/Media%2010%20-%20Screen%20Anatomy.mp4", caption: "Screen Anatomy" }
        ]
      },
      {
        title: "Documentation",
        icon: FileText,
        color: 'slate',
        content: [
          { type: 'text', text: "If you didn’t document it in the patient’s chart, it didn’t happen." },
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
          { type: 'bold', text: "Right Upper Quadrant (RUQ) | Left Upper Quadrant (LUQ)" },
          { type: 'text', text: "External: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'video', url: "", caption: "RUQ and LUQ Probe Starting Positions (Coming Soon)" },
          { type: 'bold', text: "RUQ" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Liver | Spine | Lung" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%201%20-%20RUQ%20External%20Internal%20Landmarks.mp4", caption: "RUQ Internal Landmarks" },
          { type: 'bold', text: "LUQ" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Spleen | Spine | Lung" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%202%20-%20LUQ%20External%20Internal%20Landmarks.mp4", caption: "LUQ Internal Landmarks" },
          { type: 'bold', text: "Pelvis Male | Female" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'image', url: "", caption: "Pelvis Probe Starting Position" },
          { type: 'bold', text: "Pelvis Male" },
          { type: 'text', text: "Internal: Bladder | Prostate | Seminal Vesicles | Rectum" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%203%20-%20Male%20Pelvis%20Transverse%20Longitudinal%20Internal%20Landmarks.mp4", caption: "Male Pelvis Internal Landmarks" },
          { type: 'bold', text: "Pelvis Female" },
          { type: 'text', text: "Internal: Bladder | Uterus | Vagina | Rectum" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%204%20-%20Female%20Pelvis%20Transverse%20Longitudinal%20Internal%20Landmarks.mp4", caption: "Female Pelvis Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "RUQ" },
          { type: 'text', text: "Hepatorenal Interface | Caudal Tip of Liver" },
          { type: 'bold', text: "LUQ" },
          { type: 'text', text: "Splenorenal Interface | Between Diaphragm and Spleen" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%205%20-%20RUQ%20LUQ%20Area%20of%20Interest.mp4", caption: "RUQ and LUQ Areas of Interest" },
          { type: 'bold', text: "Pelvis Male" },
          { type: 'text', text: "Rectovesicular Space" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%206%20-%20Male%20Pelvis%20Transverse%20Longitduinal%20Area%20of%20Interest.mp4", caption: "Male Pelvis Area of Interest" },
          { type: 'bold', text: "Pelvis Female" },
          { type: 'text', text: "Rectouterine Space (Pouch of Douglas) | Vesicouterine Space" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%207%20-%20Female%20Pelvis%20Transverse%20Longitudinal%20Area%20of%20Interest.mp4", caption: "Female Pelvis Area of Interest" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "RUQ" },
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head)",
            "Start with lots of depth",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best",
            "Adjust depth to just past the spine",
            "Fan through the hepatorenal interface anteriorly to posteriorly",
            "Slide inferiorly to identify the caudal tip of the liver",
            "Fan through the caudal tip of the liver anteriorly to posteriorly"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%208%20-%20RUQ%20Fanning%20Interface.mp4", caption: "RUQ Fanning Through Hepatorenal Interface" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%209%20-%20RUQ%20Fanning%20Caudal%20Tip%20of%20Liver.mp4", caption: "RUQ Fanning Through Caudal Tip of Liver" },
          
          { type: 'divider' },
          
          { type: 'header', text: "LUQ" },
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head)",
            "Start with lots of depth",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best",
            "Adjust depth to just past the spine",
            "Fan through the splenorenal interface anteriorly to posteriorly",
            "Slide cranially to identify the diaphragm",
            "Fan through the medial diagram anterior to posterior until the diaphragm disappears"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2010%20-%20LUQ%20Fanning%20Interface%20and%20Medial%20Diaphragm.mp4", caption: "LUQ Fanning Through Splenorenal Interface and Medial Diaphragm" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Pelvis Transverse" },
          { type: 'list', items: [
            "Place probe in transverse just superior to the pubic symphysis (probe marker toward patient right)",
            "Start with lots of depth",
            "Fan probe inferiorly until the bladder is seen",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female)",
            "Fan the probe inferior and superior until the bladder disappears in both directions"
          ]},
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2011%20-%20Pelvis%20Transverse%20Probe%20Starting%20Position.png", caption: "Pelvis Transverse Initial Probe Placement" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2012%20-%20Male%20Pelvis%20Transverse%20Fanning.mp4", caption: "Male Pelvis Transverse Fanning" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2013%20-%20Female%20Pelvis%20Transverse%20Fanning.mp4", caption: "Female Pelvis Transverse Fanning" },
          
          { type: 'divider' },

          { type: 'header', text: "Pelvis Longitudinal" },
          { type: 'list', items: [
            "Place probe in longitudinal just superior to the pubic symphysis (probe marker toward head)",
            "Start with lots of depth",
            "Rock probe inferiorly until the bladder is seen",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female)",
            "Fan the probe left and right until the bladder disappears in both directions"
          ]},
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2014%20-%20Pelvis%20Longitudinal%20Probe%20Starting%20Position.png", caption: "Pelvis Longitudinal Initial Probe Placement" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2015%20-%20Male%20Pelvis%20Longitudinal%20Fanning.mp4", caption: "Male Pelvis Longitudinal Fanning" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2016%20%20-%20Female%20Pelvis%20Longitudinal%20Fanning.mp4", caption: "Female Pelvis Longitudinal Fanning" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'bold', text: "RUQ" },
          { type: 'text', text: "Anechoic free fluid seen in hepatorenal interface or around the caudal tip of the liver" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2017%20-%20RUQ%20Positive%20Scan%20Free%20Fluid%20Large%20Amount.mp4", caption: "RUQ Positive Scan Large Amount of Free Fluid" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2018%20-%20RUQ%20Positive%20Scan%20Small%20Amount%20Caudal%20Tip.mp4", caption: "RUQ Positive Scan Small Amount of Free Fluid at Caudal Tip of Liver" },
          
          { type: 'bold', text: "LUQ" },
          { type: 'text', text: "Anechoic free fluid seen in splenorenal interface or between medial diaphragm and spleen" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2019%20-%20LUQ%20Positive%20Scan%20Free%20Fluid%20Large%20Amount.mp4", caption: "LUQ Positive Scan Large Amount of Free Fluid" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2020%20-%20LUQ%20Positive%20Scan%20Free%20Fluid%20Small%20Amount.mp4", caption: "LUQ Positive Scan Small Amount of Free Fluid" },
          
          { type: 'bold', text: "Pelvis Male" },
          { type: 'text', text: "Anechoic free fluid seen in the rectovesicular space" },
          { type: 'video', url: "", caption: "Media 21 - Male Pelvis Transverse Positive Scan Free Fluid (Coming Soon)" },
          { type: 'video', url: "", caption: "Media 22 - Male Pelvis Longitudinal Positive Scan Free Fluid (Coming Soon)" },
          
          { type: 'bold', text: "Pelvis Female" },
          { type: 'text', text: "Anechoic free fluid seen in the rectouterine space and/or the vesicouterine space" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2023%20-%20Female%20Pelvis%20Transverse%20Positive%20Scan%20Free%20Fluid.mp4", caption: "Female Pelvis Transverse Positive Scan Free Fluid" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Free%20Fluid%20Abdomen/Media%2024%20-%20Female%20Pelvis%20Longitudinal%20Positive%20Scan%20Free%20Fluid.mp4", caption: "Female Pelvis Longitudinal Positive Scan Free Fluid" },
          
          { type: 'divider' },

          { type: 'header', text: "Negative Scan" },
          { type: 'bold', text: "RUQ" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire hepatorenal interface anterior to posterior AND no anechoic free fluid around the caudal tip of the liver after fanning through the caudal tip anterior to posterior. (See scanning technique clips)" },
          
          { type: 'bold', text: "LUQ" },
          { type: 'text', text: "No anechoic free fluid after fanning through entire splenorenal interface anterior to posterior AND no anechoic free fluid between the medial diaphragm and spleen after fanning through the medial diaphragm until it disappears. (See scanning technique clips)" },
          
          { type: 'bold', text: "Pelvis Male" },
          { type: 'text', text: "No anechoic free fluid seen in the rectovesicular space after fanning through the bladder in both transverse and longitudinal. (See scanning technique clips)" },
          
          { type: 'bold', text: "Pelvis Female" },
          { type: 'text', text: "No anechoic free fluid seen in the rectouterine and vesicouterine space after fanning through the bladder in both transverse and longitudinal. (See scanning technique clips)" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'bold', text: "Rib shadows" },
          { type: 'list', items: ["Rotate probe toward bed into rib space", "Have patient take a breath in and hold to move structure out from under rib"] },
          { type: 'bold', text: "Diaphragm not visualized" },
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
            "POCUS can not help you distinguish the type of fluid, clinical context is key",
            "Free fluid is not always anechoic (clotted blood in hemoperitoneum)",
            "A negative FAST scan does not rule out an intra-abdominal injury",
            "A negative FAST scan is not reliable in patients with a history of prior abdominal surgery",
            "Don’t mistake physiologically or pathologically fluid filled organs for free fluid (gallbladder, fluid filled bowel or stomach)",
            "Don’t mistake the seminal vesicle or prostate for free fluid",
            "The female pelvis can contain small amount of physiologic free fluid, context is important, do not assume it is normal"
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
             "Trauma (FAST Scan)",
             "Respiratory Failure | Sepsis | Shock",
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%201%20-%20RUQ%20External%20Internal%20Landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "Area cranial to diaphragm" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%202%20-%20Area%20of%20Interest.mp4", caption: "Area of Interest" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head).",
            "Slide probe anterior-posterior until the kidney capsule or spine is seen best",
            "Adjust depth to just past the spine",
            "Slide probe cranial until diaphragm in view",
            "Fan through medial diaphragm anteriorly to posteriorly until the diaphragm disappears"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%203%20-%20Starting%20view%20before%20fanning.mp4", caption: "Starting view before fanning" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%204%20-%20Fanning%20Through%20Medial%20Diaphragm.mp4", caption: "Fanning Through Medial Diaphragm" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Anechoic are seen cranial to the diaphragm and ≥ 1 of the following:" },
          { type: 'list', items: [
            "Spine sign",
            "Solid lung floating in effusion",
            "Lateral diaphragm visualized"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%205%20-%20Positive%20Scan%20-%20Large%20Pleural%20Effusion%20and%20Solid%20Lung.mp4", caption: "Positive Scan - Large Pleural Effusion and Solid Lung" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%206%20-%20Positive%20Scan%20-%20Small%20Pleural%20Effusion.mp4", caption: "Positive Scan - Small Pleural Effusion" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'list', items: [
            "No pleural effusion after fanning entire medial diaphragm anteriorly to posteriorly until it disappears (see scanning technique)",
            "The curtain sign can rule out a large pleural effusion"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pleural%20Effusion/Media%207%20-%20Curtain%20Sign.mp4", caption: "Curtain sign" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'bold', text: "Rib Shadows" },
          { type: 'list', items: ["Rotate probe toward bed into rib space", "Have patient take a breath in and hold to move structure out from under rib"] },
          { type: 'bold', text: "Diaphragm not Visualized" },
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
            "Loculated pleural effusions may be missed by standard pleural effusion scanning technique",
            "The sensitivity for finding a pleural effusion will increase the more upright your patient is (free flowing fluid will be gravity dependent)",
            "The presence of a spine sign can also be seen in consolidated lung without pleural effusion",
            "Mirror artifact can mimic lung pathology, a spine sign will not be present with mirror artifact but will be present with lung pathology"
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
          { type: 'video', url: "", caption: "Probe Starting Position (Coming Soon)" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%202%20-%20Internal%20Landmarks.mp4", caption: "Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "VPPI of 2-3 of the most anterior rib spaces bilaterally" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%203%20-%20Area%20of%20Interest.mp4", caption: "Area of Interest" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in the most anterior rib space of the right or left chest (probe marker toward head)",
            "Adjust depth so that the VPPI, ribs, and rib shadows are in view",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen",
            "Fan the probe medially and laterally until the VPPI appears the clearest",
            "Slide the probe superiorly or inferiorly to interrogate a total of 2-3 rib spaces",
            "Repeat the above steps in the remaining hemithorax",
            "If lung sliding is absent, slide the probe within the rib space laterally until a pathologic lung point is visualized"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%204%20-%20Negative%20Scan%20Lung%20Sliding.mp4", caption: "Negative Scan Lung Sliding" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%205%20-%20Negative%20Scan%20Lung%20Pulse.mp4", caption: "Negative Scan Lung Pulse" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan:" },
          { type: 'text', text: "Absence of lung sliding, lung pulse, and B-lines PLUS visualization of a pathological lung point" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%206%20-%20No%20Lung%20Sliding.mp4", caption: "No Lung Sliding" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%207%20-%20Pathologic%20Lung%20Point.mp4", caption: "Pathologic Lung Point" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan:" },
          { type: 'list', items: [
            <>Lung sliding present in 2-3 of the most anterior rib spaces bilaterally (see scanning technique) <strong>OR</strong></>,
            <>Lung pulse present in 2-3 of the most anterior rib spaces bilaterally (see scanning technique) <strong>OR</strong></>,
            "B-lines present in 2-3 of the most anterior rib spaces bilaterally"
          ]}
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'bold', text: "Trouble Visualizing Lung Sliding" },
          { type: 'list', items: [
            "Decrease depth to optimize visualization of the VPPI",
            "Decrease gain to optimize visualization of the VPPI",
            "Rotate probe in the rib space to see more of the VPPI"
          ]},
          { type: 'bold', text: "Differentiating Pathologic From Physiologic Lung Points" },
          { type: 'list', items: [
            "Increase depth to attempt to visualize the underlying physiologic organ (liver, heart, spleen)",
            "Be aware of surface anatomy and expected location of organs / physiologic lung points"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%208%20-%20Physiologic%20Lung%20Point%20Cardiac%20Lung%20Point.mp4", caption: "Physiologic Lung Point - Cardiac Lung Point" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Pneumothorax/Media%209%20-%20Physiologic%20Lung%20Point%20Liver%20Lung%20Point.mp4", caption: "Physiologic Lung Point - Liver Lung Point" }
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, 
        color: 'sky',
        content: [
          { type: 'list', items: [
            "Always fan medial and lateral to optimize visualization of the VPPI",
            "Don’t mistake physiologic lung points for pathologic lung points",
            "If a patient is unstable, the absence of lung sliding, lung pulse, and B-lines may be sufficient to diagnose a pneumothorax in the right clinical context without identifying a pathologic lung point",
            "If a patient is stable, the absence of lung sliding, lung pulse, and B-lines without visualization of a pathologic lung point is insufficient to diagnose a pneumothorax and further investigations are warranted",
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
            "Patients with a large pneumothorax may not have a visible pathologic lung point due to the size"
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
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'text', text: "External: Parasternal Line | Midclavicular Line | Anterior Axillary Line | Posterior Axillary Line | Inter-Nipple Line" },
          { type: 'text', text: "Internal: Visceral Parietal Pleural Interface (VPPI) | Ribs | Rib Shadows | A-lines (if present)" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%201%20-%20Lung%20Zones.png", caption: "Lung Zones" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%202%20-%20Internal%20Landmarks.mp4", caption: "Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "VPPI of ≥ 1 rib space in each lung zone" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "Zone 1" },
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in a rib space of the right hemithorax above the inter-nipple line (probe marker toward head)",
            "Adjust depth to ≥ 10cm past the VPPI",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen",
            "Fan the probe medially and laterally until the VPPI appears the clearest",
            "Evaluate for presence of B-lines"
          ]},
          { type: 'header', text: "Zone 2" },
          { type: 'list', items: [
            "Place the probe in longitudinal in the mid-clavicular line in a rib space of the right hemithorax below the inter-nipple line (probe marker toward head)",
            "Adjust depth to ≥ 10cm past the VPPI",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen",
            "Fan the probe medially and laterally until the VPPI appears the clearest",
            "Evaluate for presence of B-lines"
          ]},
          { type: 'header', text: "Zone 3" },
          { type: 'list', items: [
            "Place the probe in longitudinal between the anterior and posterior axillary line in a rib space of the right hemithorax above the inter-nipple line (probe marker toward head)",
            "Adjust depth to ≥ 10cm past the VPPI",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen",
            "Fan the probe anterior and posterior until the VPPI appears the clearest",
            "Evaluate for presence of B-lines"
          ]},
          { type: 'header', text: "Zone 4" },
          { type: 'list', items: [
            "Place the probe in longitudinal between the anterior and posterior axillary line in a rib space of the right hemithorax below the inter-nipple line (probe marker toward head)",
            "Adjust depth to ≥ 10cm past the VPPI",
            "Slide probe superiorly and inferiorly to center the VPPI on the screen",
            "Fan the probe anterior and posterior until the VPPI appears the clearest",
            "Evaluate for presence of B-lines"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%203%20-%20Sliding%20to%20center%20the%20VPPI.mp4", caption: "Sliding to center the VPPI" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%204%20-%20Fanning%20to%20optimize%20VPPI.mp4", caption: "Fanning to optimize VPPI" },
          { type: 'bold', text: "Repeat above technique for the opposite hemithorax." }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: <>≥ 3 B-lines present in a single rib space at any time throughout the respiratory cycle <strong>OR</strong> coalescing B-lines</> },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%205%20-%20B-Lines.mp4", caption: "B-Lines" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%206%20-%20Coalescing%20B-Lines.mp4", caption: "Coalescing B-Lines" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%207%20-%20Coalescing%20B-Lines%20Making%20White%20Lung.mp4", caption: "Coalescing B-Lines Making White Lung" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'text', text: "< 3 B-lines present in a single rib space at any time throughout the respiratory cycle" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Interstitial%20Syndromes/Media%208%20-%20Normal%20A-Lines.mp4", caption: "Normal A-Lines" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench,
        color: 'amber',
        content: [
          { type: 'bold', text: "Trouble Visualizing the VPPI" },
          { type: 'list', items: [
            "Fan the probe until the the pleural line looks as “crisp” and hyperechoic as possible",
            "Orient your sound so it is 90 degrees to the pleura by fanning"
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb,
        color: 'sky',
        content: [
          { type: 'list', items: [
            "The presence of an abnormal amount of B-lines has a differential diagnosis that extends beyond cardiogenic pulmonary edema, the clinical context and distribution of B-lines (unilateral vs bilateral, focal vs diffuse) will help you determine the cause",
            "Don’t mistake B-lines for a normal vertical artifact called a Z-line, remember the following characteristics of B-lines:"
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
            "Lung presets will often start with inadequate depth to evaluate for B-lines, don’t forget to optimize your depth"
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
          { type: 'video', url: "", caption: "PLAX Probe Starting Position (Coming Soon)" },
          { type: 'video', url: "", caption: "PLAX Internal Landmarks (Coming Soon)" },
          
          { type: 'bold', text: "Apical Four Chamber (A4C)" },
          { type: 'text', text: "External: Inferolateral to Left Nipple" },
          { type: 'text', text: "Internal: Right Ventricle | Left Ventricle | Mitral Valve | Tricuspid Valve | Pericardium | Left Atrium | Right Atrium | Interventricular Septum" },
          { type: 'video', url: "", caption: "A4C Probe Starting Position (Coming Soon)" },
          { type: 'video', url: "", caption: "A4C Internal Landmarks (Coming Soon)" },
          
          { type: 'bold', text: "Subcostal / Subxiphoid (SC | SX)" },
          { type: 'text', text: "External: Midline | Between Umbilicus and Xiphoid Process" },
          { type: 'text', text: "Internal: Right Ventricle | Left Ventricle | Mitral Valve | Tricuspid Valve | Pericardium | Left Atrium | Right Atrium | Interventricular Septum | Liver | Diaphragm" },
          { type: 'video', url: "", caption: "SC Probe Starting Position (Coming Soon)" },
          { type: 'video', url: "", caption: "SC Internal Landmarks (Coming Soon)" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "Parasternal Long Axis (PLAX | PSL)" },
          { type: 'list', items: [
            "Posterior Pericardium | Descending Thoracic Aorta (Pericardial Effusion)",
            "Inside Walls of Left Ventricle | Anterior Mitral Valve Leaflet (LV Systolic Function)",
            "Right Ventricle | Ascending Aorta | Left Atrium (RV Size)"
          ]},
          
          { type: 'bold', text: "Apical Four Chamber (A4C)" },
          { type: 'list', items: [
            "Pericardium | Descending Thoracic Aorta (if visible) (Pericardial Effusion)",
            "Inside Walls of Left Ventricle | Anterior Mitral Valve Leaflet (LV Systolic Function)",
            "Left Ventricle | Right Ventricle | Interventricular Septum | Tricuspid Valve (RV Size / Systolic Function)"
          ]},
          
          { type: 'bold', text: "Subcostal / Subxiphoid (SC | SX)" },
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
            "See trouble shooting section for tips"
          ]},
          
          { type: 'header', text: "Apical Four Chamber (A4C)" },
          { type: 'list', items: [
            "Place probe under the left nipple with probe marker pointing toward 3 o-clock | patient left | the bed with your sound directed toward the right shoulder",
            "Slide the probe medial-lateral and superior-inferio to find the apex of the heart",
            "Slide the probe medial-lateral to center the LV on the screen",
            "Fan the probe superior to see the atria",
            "Rotate the probe to visualize the RV",
            "Rock the probe to make the interventricular septum vertical on the screen",
            "See troubleshooting section for tips"
          ]},
          
          { type: 'header', text: "Subcostal / Subxiphoid (SC | SX)" },
          { type: 'list', items: [
            "Place the probe perpendicularly on the patient in the midline between the xiphoid process and the umbilicus with the probe marker pointed toward 3 O-clock",
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
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%204%20-%20PLAX%20No%20PCE%20vs%20PCE.mp4", caption: "PLAX No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%205%20-%20A4C%20No%20PCE%20vs%20PCE.mp4", caption: "A4C No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%206%20-%20SC%20No%20PCE%20vs%20PCE.mp4", caption: "SC No PCE vs PCE" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%207%20-%20SC%20PCE%20Seen%20When%20Fanning%20Posterior.mp4", caption: "SC PCE Seen When Fanning Posterior" },
          
          { type: 'divider' },
          
          { type: 'header', text: "LV Systolic Function" },
          { type: 'bold', text: "Normal LV Systolic Function:" },
          { type: 'list', items: [
            "PLAX: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm",
            "A4C: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm",
            "SC: fractional shortening of approximately 30%, EPSS (Septal Slap) approximately <1cm"
          ]},
          { type: 'bold', text: "Abnormal LV Systolic Function:" },
          { type: 'list', items: [
            "PLAX: fractional shortening <30%, EPSS >1cm",
            "A4C: fractional shortening <30%, EPSS >1cm",
            "SC: fractional shortening <30%, EPSS >1cm"
          ]},
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%208%20-%20PLAX%20Fractional%20Shortening.png", caption: "PLAX Fractional Shortening" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%209%20-%20PLAX%20EPSS.png", caption: "PLAX EPSS" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%2010%20-%20PLAX%20LVSF%20Normal%20vs%20Severely%20Reduced.mp4", caption: "PLAX Normal vs Severely Abnormal LV Systolic Function" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Cardiac/Media%2011%20-%20A4C%20LVSF%20Normal%20vs%20Severely%20Reduced.mp4", caption: "A4C Normal vs Severely Abnormal LV Systolic Function" },
          { type: 'video', url: "", caption: "SC Normal vs Severely Abnormal LV Systolic Function (Coming Soon)" },
          
          { type: 'divider' },
          
          { type: 'header', text: "RV Size \\ Systolic Function" },
          { type: 'bold', text: "RV Enlarged \\ RV Systolic Function Reduced:" },
          { type: 'label', label: "PLAX:"},
          { type: 'sublist', items: [
            "RV takes up more than ⅓ of right side of screen compared with ascending aorta and left atrium.",
            "Not used for RV systolic function.",
          ]},
          { type: 'label', label: "A4C:"},
          { type: 'sublist', items: [
            "RV the same size or bigger than the LV.",
            "TAPSE subjectively abnormal (approximately <1.7cm)",
          ]},
          { type: 'label', label: "SC:"},
          { type: 'sublist', items: [
            "Not used for RV size.",
            "TAPSE subjectively abnormal (approximately <1.7cm)",
          ]},
          { type: 'divider' },
          { type: 'bold', text: "RV Normal Size \\ RV Systolic Function Normal:" },
          { type: 'label', label: "PLAX:"}, 
          { type: 'sublist', items: [
            "RV, Ascending Aorta, and Left atrium all take up ⅓ of right side of screen.",
            "Not used for RV systolic function",
          ]},
          { type: 'label', label: "A4C:"},
          { type: 'sublist', items: [
            "RV is smaller than the LV.",
            "TAPSE subjectively normal (approximately ≥1.7cm)",
          ]},
          { type: 'label', label: "SC:"},
          { type: 'sublist', items: [
            "Not used for RV size.",
            "TAPSE subjectively normal (approximately ≥1.7cm)",
          ]},
          
          { type: 'video', url: "", caption: "Qualitative RV Size (Coming Soon)" },
          { type: 'video', url: "", caption: "TAPSE (Coming Soon)" },
          { type: 'video', url: "", caption: "PLAX Normal RV Size vs Enlarged RV (Coming Soon)" },
          { type: 'video', url: "", caption: "A4C Normal RV vs Abnormal RV (Coming Soon)" },
          { type: 'video', url: "", caption: "SC Normal RV vs Abnormal RV (Coming Soon)" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench,
        color: 'amber',
        content: [
          { type: 'bold', text: "General Considerations" },
          { type: 'list', items: [
            "Within each view, different probe movements will help you accomplish different goals. A combination of probe movements within the acoustic window will usually be needed to obtain an adequate view.",
            "If a probe movement takes you out of your rib space or acoustic window, your next step is to get back into the rib space / acoustic window"
          ]},
          
          { type: 'bold', text: "Parasternal Long Axis (PLAX | PSL)" },
          { type: 'list', items: [
            "Make sure patient’s left arm is behind their head, this opens up the rib spaces",
            "Consider having the patient completely supine or in left lateral decubitus position",
            "Sliding medially: helps center the RV on the screen and make the LV more horizontal",
            "Fanning inferior-superior: helps visualize the valves and find the widest diameter of the LV",
            "Rotating: helps ensure the LV is visualized in its longest axis (more like a rectangle than a circle)",
            "Rocking: helps ensure the LV is horizontal on the screen"
          ]},
          
          { type: 'bold', text: "Apical Four Chamber (A4C)" },
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
          
          { type: 'bold', text: "Subcostal / Subxiphoid (SC | SX)" },
          { type: 'list', items: [
            "Make sure the patient is supine with arms at sides, this will relax the abdomen. Having the patient bend their knees can also relax the abdomen",
            "A deep breath hold can move the heart inferior and posterior which sometimes improves your view.",
            "The liver is the window to the heart, if you don’t see the liver you probably won’t see the heart. Try sliding laterally to the patient’s right to get more liver on the screen and then rocking to patient left to center the heart.",
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
  },
  {
    id: 'obstructive-uropathy',
    title: 'Obstructive Uropathy',
    description: 'Scanning for hydronephrosis and evaluating bladder volume.',
    icon: KidneyIcon,
    color: 'sky', 
    sections: [
      {
        title: "Scan Basics",
        icon: BookOpen, 
        color: 'blue',
        content: [
          { type: 'subheader', text: "Indication" },
          { type: 'list', items: [
             "Flank Pain | Abdominal Pain | Renal Colic", 
             "Urinary Retention | Oliguria | Sepsis | Shock"
          ]},
          { type: 'subheader', text: "Equipment" },
          { type: 'list', items: ["Transducer: Curvilinear | Phased Array", "Preset: Abdominal", "Convention: Radiology"] },
          { type: 'subheader', text: "Patient Positioning" },
          { type: 'list', items: ["Supine | Semi-Supine | Lateral Decubitus", "Arm above head or across body"] },
          { type: 'divider' },
          { type: 'header', text: "Landmarks" },
          { type: 'bold', text: "Right Upper Quadrant (RUQ) | Left Upper Quadrant (LUQ)" },
          { type: 'text', text: "External: Mid-Posterior Axillary Line | Xiphoid Process" },
          { type: 'text', text: "Internal: Kidney | Diaphragm | Liver / Spleen | Spine" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%201%20-%20RUQ%20External%20Internal%20Landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%202%20-%20LUQ%20External%20Internal%20Landmarks.mp4", caption: "LUQ External Internal Landmarks" },
          { type: 'bold', text: "Pelvis Male | Female" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%203%20-%20Pelvis%20Probe%20Starting%20Position.png", caption: "Pelvis Probe Starting Position" },
          { type: 'bold', text: "Pelvis Male" },
          { type: 'text', text: "Internal: Bladder | Prostate | Seminal Vesicles | Rectum" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%204%20-%20Male%20Pelvis%20Transverse%20Longitudinal%20Internal%20Landmarks.mp4", caption: "Male Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'bold', text: "Pelvis Female" },
          { type: 'text', text: "Internal: Bladder | Uterus | Vagina | Rectum" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%205%20-%20Female%20Pelvis%20Transverse%20Longitudinal%20Internal%20Landmarks.mp4", caption: "Female Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "RUQ | LUQ" },
          { type: 'text', text: "Kidney | Renal Sinus" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%206%20-%20Area%20of%20Interest%20Renal%20Sinus.mp4", caption: "Area of Interest Renal Sinus" },
          { type: 'bold', text: "Pelvis Male and Female" },
          { type: 'text', text: "Bladder | Ureterovesicular Junction (UVJ)" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%207%20-%20Area%20of%20Interest%20Bladder%20UVJ.mp4", caption: "Area of Interest Bladder UVJ" }
        ]
      },
      {
        title: "Scanning Technique",
        icon: Sliders,
        color: 'violet',
        content: [
          { type: 'header', text: "RUQ | LUQ" },
          { type: 'list', items: [
            "Place probe in longitudinal at the intersection of the xiphoid process and the mid-posterior axillary line (probe marker toward head)",
            "Start with lots of depth",
            "Slide probe anterior-posterior until the kidney is seen best",
            "Slide probe superior-inferior to center kidney on the screen",
            "Rotate probe toward bed until kidney appears longest superior to inferior",
            "Adjust depth to just past the kidney",
            "Fan through renal sinus to evaluate for hydronephrosis"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%208%20-%20Fanning%20Through%20Renal%20Sinus.mp4", caption: "Fanning Through Renal Sinus" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Pelvis Transverse" },
          { type: 'list', items: [
            "Place probe in transverse just superior to the pubic symphysis (probe marker toward patient right)",
            "Start with lots of depth",
            "Fan probe inferiorly until the bladder is seen",
            "Adjust depth to just past the bladder",
            "Fan probe superiorly-inferiorly until the trigone and UVJs are seen",
            "Place colour doppler box over the UVJs",
            "Observe for ureteric jets",
            "Fan the probe inferior and superior until the bladder is seen at its largest dimensions",
            "Measure anterior-poster (AP) bladder dimension (near field to far field)",
            "Measure transverse (TRV) bladder dimension (screen left to screen right)"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%209%20-%20Fanning%20Until%20Trigone%20and%20UVJs%20are%20Seen.mp4", caption: "Fanning Until Trigone and UVJs Seen" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2010%20-%20Placing%20Colour%20Box%20to%20Observe%20for%20Ureteric%20Jets.mp4", caption: "Placing Colour Box to Observe for Ureteric Jets" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2011%20-%20Fanning%20to%20Find%20Largest%20Dimension%20Transverse.mp4", caption: "Fanning to Find Largest Dimension Transverse" },
          
          { type: 'divider' },

          { type: 'header', text: "Pelvis Longitudinal" },
          { type: 'list', items: [
            "Place probe in longitudinal just superior to the pubic symphysis (probe marker toward head)",
            "Start with lots of depth",
            "Rock probe inferiorly until the bladder is seen",
            "Adjust depth to just past the bladder",
            "Fan the probe left and right until the bladder is seen at its largest cranial caudal dimension",
            "Measure cranial-caudal (CC) dimension (Screen left to screen right)"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2012%20-%20Fanning%20to%20Find%20Largest%20Dimension%20Longitudinal.mp4", caption: "Fanning to Find Largest Dimension Longitudinal" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Hydronephrosis" },
          { type: 'list', items: [
            "Present or Absent",
            "If present roughly consider severity"
          ]},
          { type: 'sublist', items: [
            "Mild: renal pelvis dilated (pelviectasis) AKA grade 1 (can be seen in normal patients)",
            "Moderate: Major calyces dilated (caliectasis) AKA grade 2 OR Major and minor calyces dilated (caliectasis) AKA grade 3",
            "Severe: cortical thinning present AKA grade 4"
          ]},
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2013%20-%20No%20Hydronephrosis%20vs%20Hydronephrosis.mp4", caption: "No Hydronephrosis vs Hydronephrosis" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2014%20-%20Hydronephrosis%20Severity.png", caption: "Hydronephrosis Severity" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Ureteric Jets" },
          { type: 'text', text: "Present or Absent" },
          { type: 'video', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2015%20-%20Ureteric%20Jets.mp4", caption: "Ureteric Jets" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Bladder Volume" },
          { type: 'text', text: "Bladder Volume (mL) = Anterior-Posterior (AP) x Left-Right/Transverse (TRV) x Cranial-Caudal (cc) x 0.7 (correction factor)" },
          { type: 'image', url: "https://pub-2cf3bcb92e72473dac171762929cd457.r2.dev/Obstructive%20Uropathy/Media%2016%20-%20Bladder%20Volume%20Measurements%20and%20Calculation.png", caption: "Bladder Volume Measurements and Calculation" }
        ]
      },
      {
        title: "Troubleshooting",
        icon: Wrench, 
        color: 'amber',
        content: [
          { type: 'list', items: [
            "If you are having difficulty visualizing the kidney you can try a more posterolateral approach by having the patient roll slightly onto their side or have them sit up.",
            "Consider having the patient take a deep breath and hold to move the kidney more inferiorly into view. This works well for the more superiorly located left kidney.",
            "If bowel gas is obscuring the kidney try sliding posteriorly until the gas disappears and then fan anteriorly to visualize the kidney.",
            "In patients with obesity you may need to apply more pressure to improve visualization of the kidney."
          ]}
        ]
      },
      {
        title: "Pearls & Pitfalls",
        icon: Lightbulb, 
        color: 'sky',
        content: [
          { type: 'list', items: [
            "Renal cysts can be confused for hydronephrosis but will typically be well defined circular fluid collections rather than the irregular shape of hydronephrosis.",
            "Do not confuse normal anechoic medullary pyramids for hydronephrosis.",
            "Do not confuse normal anechoic renal vasculature for hydronephrosis. When in doubt colour doppler can be used (vessels will have colour, hydronephrosis will not)",
            "Bladder volume is most useful when performed immediately after a void to determine a post-void residual.",
            "The presence of ureteric jets rules out complete ureteric obstruction, however partial obstruction may still be present. The absence of ureteric jets is generally not useful information as there is wide variability in how long it will take a ureteric jet to show up between patients.",
            "The absence of hydronephrosis does not rule out an obstructing stone",
            "Hydronephrosis requires that the patient is making urine. An obstruction may be present but hydronephrosis may not be visualized in a severely dehydrated / oliguric / anuric patient.",
            "The presence of hydronephrosis does not rule in an obstructing stone"
          ]},
          { type: 'sublist', items: [
            "Urinary retention",
            "Vesico ureteric reflux",
            "Non-stone causes of obstruction (strictures, malignancy)",
            "Pregnancy (third trimester)",
            "Recently passed stone"
          ]}
        ]
      }
    ]
  }
];
