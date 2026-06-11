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

// --- CUSTOM ICONS ---
function HeartIcon({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
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
      <path fillRule="evenodd" clipRule="evenodd" d="M24 6.00122C25 6.00122 25 6.00126 25 6.00135L25.0003 20.4973C25.0003 21.8944 25.5642 22.4386 26.0041 22.6951C26.0531 22.7237 26.1024 22.7496 26.1515 22.7732C26.1505 22.6537 26.1492 22.5292 26.1478 22.4003C26.11 18.8717 26.0364 12 31.4752 12C38.9258 12 44.2477 38.0065 41.0546 40.6602C37.8614 43.3139 31.4752 41.7217 28.2821 38.5372C25.7041 35.9663 25.9271 29.9586 26.0873 25.646C26.0971 25.3817 26.1066 25.1237 26.1153 24.8734C25.7901 24.7925 25.3962 24.6558 24.9966 24.4228C24.6406 24.2152 24.2986 23.9414 24.0014 23.5897C23.7036 23.9426 23.3609 24.2171 23.0041 24.4252C22.6045 24.6583 22.2106 24.7949 21.8854 24.8758C21.8941 25.1254 21.9036 25.3824 21.9134 25.6458C22.0738 29.9584 22.2972 35.9663 19.7193 38.5372C16.5264 41.7217 10.1402 43.3139 6.94693 40.6602C3.75364 38.0065 9.07407 12 16.5247 12C21.9635 12 21.8903 18.8717 21.8527 22.4003C21.8525 22.4165 21.8524 22.4327 21.8522 22.4488C21.851 22.5614 21.8499 22.6705 21.849 22.7757C21.8982 22.7521 21.9475 22.7261 21.9966 22.6975C22.4364 22.441 23.0003 21.8968 23.0003 20.4997L23 6.00135C23 6.00126 23 6.00122 24 6.00122ZM31.4752 14C30.5211 14 29.9842 14.3005 29.6085 14.6872C29.1751 15.1334 28.8131 15.851 28.559 16.865C28.114 18.6399 28.1329 20.6823 28.1482 22.3296C28.1508 22.6146 28.1533 22.8877 28.1533 23.1457C28.1533 23.9056 28.1196 24.8156 28.0844 25.7624L28.0844 25.7637C28.0705 26.1361 28.0565 26.5141 28.0442 26.8908C27.9995 28.266 27.974 29.7058 28.0404 31.0985C28.1071 32.4988 28.2641 33.7838 28.5572 34.8599C28.8537 35.9486 29.2508 36.6787 29.6943 37.1211C30.9725 38.3957 32.9907 39.4255 35.0491 39.8246C37.0841 40.2192 38.7223 39.9272 39.6817 39.1972C39.6867 39.186 39.6922 39.1729 39.6983 39.1577C39.7575 39.0098 39.8293 38.7557 39.8877 38.3686C40.0046 37.5936 40.0349 36.5126 39.9562 35.1806C39.7994 32.5308 39.2285 29.1692 38.3267 25.8609C37.4215 22.5399 36.2172 19.4001 34.852 17.1386C34.1687 16.0065 33.495 15.1789 32.8702 14.6538C32.2517 14.134 31.7934 14 31.4752 14ZM16.5248 14C17.4789 14 18.0158 14.3005 18.3915 14.6872C18.825 15.1334 19.187 15.851 19.4412 16.865C19.8862 18.6399 19.8675 20.6823 19.8523 22.3296C19.8497 22.6146 19.8472 22.8877 19.8472 23.1457C19.8472 23.9056 19.8811 24.8156 19.9163 25.7624C19.9301 26.1352 19.9442 26.5136 19.9565 26.8908C20.0014 28.266 20.0269 29.7058 19.9606 31.0985C19.894 32.4988 19.737 33.7838 19.444 34.8599C19.1475 35.9486 18.7505 36.6787 18.307 37.1211C17.0289 38.3957 15.0108 39.4254 12.9524 39.8246C10.9174 40.2192 9.27921 39.9272 8.31972 39.1972C8.31475 39.186 8.30919 39.1729 8.30311 39.1577C8.24389 39.0098 8.17207 38.7557 8.11369 38.3686C7.99679 37.5936 7.96634 36.5125 8.04506 35.1806C8.20167 32.5308 8.77238 29.1692 9.67397 25.8609C10.579 22.5399 11.7831 19.4001 13.1482 17.1386C13.8314 16.0066 14.505 15.1789 15.1298 14.6538C15.7483 14.134 16.2066 14 16.5248 14Z" fill="currentColor"/>
    </svg>
  );
}

function SpleenIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15.2242 7.63526C13.398 8.75847 12.5598 9.83969 12.2161 10.7392C11.8837 11.6094 11.909 12.5834 12.3665 13.7347C13.1465 15.6977 15.0571 17.84 17.6167 19.8763C17.3839 19.9453 17.1526 20.02 16.9228 20.1001C16.8561 20.1178 16.7893 20.137 16.7223 20.1576C16.5517 20.2102 16.3894 20.2773 16.2363 20.3573C15.9703 20.4638 15.7064 20.5776 15.4444 20.6982C9.96535 16.0046 7.1374 10.2723 14.2065 5.92443C30.0226 -3.8031 45.1103 25.8323 34.3954 39.2888C33.1542 40.8476 28.3581 46.1868 22.2548 43.0073C15.2678 39.3674 17.1929 35.1001 18.965 31.172C19.3694 30.2756 19.7659 29.3969 20.0466 28.5473C20.5639 28.8733 21.1877 29.1344 21.9132 29.2209C21.7544 29.6943 21.5733 30.152 21.3908 30.5855C21.199 31.041 20.9934 31.4975 20.7971 31.9326L20.7787 31.9735C20.5856 32.4014 20.4013 32.81 20.2271 33.2186C19.4795 34.9731 19.1334 36.2796 19.3682 37.4022C19.5755 38.3937 20.361 39.7461 23.1895 41.2196C25.5403 42.4442 27.562 42.0489 29.2367 41.1533C30.9937 40.2137 32.2959 38.7418 32.8505 38.0454C35.1457 35.1629 36.1385 31.3094 35.9953 27.1305C35.8523 22.9547 34.574 18.6017 32.5127 14.9205C30.4424 11.2231 27.6756 8.36466 24.6814 6.96673C21.7795 5.61185 18.5772 5.57304 15.2242 7.63526Z" fill="currentColor"/>
      <path d="M23.1904 21.4289C23.7311 21.5025 24.1177 22.0122 24.0539 22.5673C23.9901 23.1224 23.5 23.5127 22.9593 23.4391C22.1212 23.3251 21.3542 23.2969 20.6339 23.3529C20.7662 23.5176 20.8849 23.6793 20.9911 23.8259C21.0426 23.897 21.0916 23.9651 21.1386 24.0304C21.4244 24.4276 21.6356 24.7211 21.8727 24.942C22.1055 25.1587 22.2638 25.2092 22.4447 25.1925C22.9863 25.1426 23.471 25.5542 23.5273 26.112C23.5836 26.6698 23.1902 27.1624 22.6487 27.2123C21.7531 27.2948 21.067 26.9077 20.5608 26.4363C20.1611 26.0641 19.814 25.5785 19.5401 25.1953C19.5347 25.1877 19.5293 25.1802 19.5239 25.1727C19.4865 25.1204 19.4505 25.0701 19.416 25.0224C19.0823 24.5618 18.841 24.2745 18.6013 24.1155C18.43 24.0018 18.2446 23.9391 17.9039 24.0441C17.8892 24.0486 17.8746 24.0527 17.8598 24.0565C17.715 24.1208 17.5709 24.1893 17.4271 24.262C15.7355 25.1166 14.0445 26.571 11.9292 28.7256C11.5451 29.1168 10.9209 29.1092 10.5349 28.7085C10.149 28.3078 10.1475 27.6659 10.5316 27.2747C12.6729 25.0935 14.5486 23.4442 16.5373 22.4394C18.5665 21.4141 20.6611 21.0846 23.1904 21.4289Z" fill="currentColor"/>
      <path d="M18.3407 11.7519C22.3614 15.2776 25.2082 19.0756 26.3895 23.1518C27.5603 27.1915 27.1287 31.618 24.3794 36.5101L26.1229 37.4899C29.1038 32.1859 29.6474 27.2084 28.3105 22.5951C26.984 18.0182 23.8401 13.9143 19.6593 10.2481L18.3407 11.7519Z" fill="currentColor"/>
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
          { type: 'video', url: "/videos/making_an_image.mp4", caption: "Making an image" },
          { type: 'subheader', text: "Curvilinear (Abdominal)" },
          { type: 'list', items: ["Low frequency probe", "Used for: free fluid in abdomen and pelvis, bladder, kidneys, lung ultrasound, AAA"] },
          { type: 'subheader', text: "Phased Array (Cardiac)" },
          { type: 'list', items: ["Low frequency probe that specializes in cardiac movement", "Used for: cardiac scans, lung ultrasound"] },
          { type: 'subheader', text: "Linear (Vascular)" },
          { type: 'list', items: ["High frequency probe", "Best for seeing things close to the surface (lung sliding, vessels, skin, superficial joints)"] },
          { type: 'image', url: "/images/probes.png", caption: "Probes" },
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
          { type: 'image', url: "/images/anatomical_planes.png", caption: "Anatomical Planes" }
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
          { type: 'image', url: "/images/probe_movements.png", caption: "Probe Movements" },
          { type: 'text', text: "The ultrasound probe is moved with respect to standard anatomic directions:" },
          { type: 'image', url: "/images/anatomical_directions.png", caption: "Anatomical Directions" }
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
          { type: 'image', url: "/images/conventions.png", caption: "Conventions" },
          { type: 'image', url: "/images/screen_anatomy.png", caption: "Screen Anatomy" }
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
          { type: 'video', url: "/videos/ruq_external_internal_landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'video', url: "/videos/luq_external_internal_landmarks.mp4", caption: "LUQ External Internal Landmarks" },
          { type: 'subheader', text: "Pelvis (Male)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Prostate | Seminal Vesicles | Rectum" },
          { type: 'video', url: "/videos/male_pelvis_transverse_longitudinal_internal_landmarks.mp4", caption: "Male Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'subheader', text: "Pelvis (Female)" },
          { type: 'text', text: "External: Superior to Pubic Symphysis" },
          { type: 'text', text: "Internal: Bladder | Uterus | Vagina | Rectum" },
          { type: 'video', url: "/videos/female_pelvis_transverse_longitudinal_internal_landmarks.mp4", caption: "Female Pelvis Transverse Longitudinal Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'bold', text: "Right Upper Quadrant (RUQ):" },
          { type: 'text', text: "Hepatorenal Interface | Caudal Tip of Liver" },
          { type: 'bold', text: "Left Upper Quadrant (LUQ):" },
          { type: 'text', text: "Splenorenal Interface | Between Diaphragm and Spleen" },
          { type: 'video', url: "/videos/ruq_luq_area_of_interest.mp4", caption: "RUQ LUQ Area of Interest" },
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Rectovesicular Space" },
          { type: 'video', url: "/videos/male_pelvis_transverse_longitudinal_area_of_interest.mp4", caption: "Male Pelvis Transverse Longitudinal Area of Interest" },
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Rectouterine Space (Pouch of Douglas) | Vesicouterine Space" },
          { type: 'video', url: "/videos/female_pelvis_transverse_longitudinal_area_of_interest.mp4", caption: "Female Pelvis Transverse Longitudinal Area of Interest" }
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
          { type: 'video', url: "/videos/ruq_fanning_interface.mp4", caption: "RUQ Fanning Interface" },
          { type: 'video', url: "/videos/ruq_fanning_caudal_tip_of_liver.mp4", caption: "RUQ Fanning Caudal Tip of Liver" },
          
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
          { type: 'video', url: "/videos/luq_fanning_interface_and_medial_diaphragm.mp4", caption: "LUQ Fanning Interface and Medial Diaphragm" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Pelvis Transverse" },
          { type: 'list', items: [
            "Place probe in transverse just superior to the pubic symphysis (probe marker toward patient right).",
            "Start with lots of depth.",
            "Fan probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe inferior and superior until the bladder disappears in both directions."
          ]},
          { type: 'video', url: "/videos/pelvis_transverse_probe_starting_position.mp4", caption: "Pelvis Transverse Probe Starting Position" },
          { type: 'video', url: "/videos/male_pelvis_transverse_fanning.mp4", caption: "Male Pelvis Transverse Fanning" },
          { type: 'video', url: "/videos/female_pelvis_transverse_fanning.mp4", caption: "Female Pelvis Transverse Fanning" },
          
          { type: 'divider' },

          { type: 'header', text: "Pelvis Longitudinal" },
          { type: 'list', items: [
            "Place probe in longitudinal just superior to the pubic symphysis (probe marker toward head).",
            "Start with lots of depth.",
            "Rock probe inferiorly until the bladder is seen.",
            "Adjust depth to just past the area between the bladder and rectum (male) or uterus and rectum (female).",
            "Fan the probe left and right until the bladder disappears in both directions."
          ]},
          { type: 'video', url: "/videos/pelvis_longitudinal_probe_starting_position.mp4", caption: "Pelvis Longitudinal Probe Starting Position" },
          { type: 'video', url: "/videos/male_pelvis_longitudinal_fanning.mp4", caption: "Male Pelvis Longitudinal Fanning" },
          { type: 'video', url: "/videos/female_pelvis_longitudinal_fanning.mp4", caption: "Female Pelvis Longitudinal Fanning" }
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
          { type: 'video', url: "/videos/ruq_positive_scan_free_fluid_large_amount.mp4", caption: "RUQ Positive Scan Free Fluid Large Amount" },
          { type: 'video', url: "/videos/ruq_positive_scan_small_amount_caudal_tip.mp4", caption: "RUQ Positive Scan Small Amount Caudal Tip" },
          
          { type: 'bold', text: "LUQ:" },
          { type: 'text', text: "Anechoic free fluid seen in splenorenal interface or between medial diaphragm and spleen" },
          { type: 'video', url: "/videos/luq_positive_scan_free_fluid_large_amount.mp4", caption: "LUQ Positive Scan Free Fluid Large Amount" },
          { type: 'video', url: "/videos/luq_positive_scan_free_fluid_small_amount.mp4", caption: "LUQ Positive Scan Free Fluid Small Amount" },
          
          { type: 'bold', text: "Pelvis (Male):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectovesicular space" },
          { type: 'video', url: "/videos/male_pelvis_transverse_positive_scan_free_fluid.mp4", caption: "Male Pelvis Transverse Positive Scan Free Fluid" },
          { type: 'video', url: "/videos/male_pelvis_longitudinal_positive_scan_free_fluid.mp4", caption: "Male Pelvis Longitudinal Positive Scan Free Fluid" },
          
          { type: 'bold', text: "Pelvis (Female):" },
          { type: 'text', text: "Anechoic free fluid seen in the rectouterine space and/or the vesicouterine space" },
          { type: 'video', url: "/videos/female_pelvis_transverse_positive_scan_free_fluid.mp4", caption: "Female Pelvis Transverse Positive Scan Free Fluid" },
          { type: 'video', url: "/videos/female_pelvis_longitudinal_positive_scan_free_fluid.mp4", caption: "Female Pelvis Longitudinal Positive Scan Free Fluid" }
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
          { type: 'video', url: "/videos/ruq_external_internal_landmarks.mp4", caption: "RUQ External Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "Area cranial to diaphragm" },
          { type: 'video', url: "/videos/area_of_interest.mp4", caption: "Area of Interest" }
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
          { type: 'video', url: "/videos/starting_view_before_fanning.mp4", caption: "Starting view before fanning" },
          { type: 'video', url: "/videos/fanning_through_medial_diaphragm.mp4", caption: "Fanning Through Medial Diaphragm" }
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
          { type: 'video', url: "/videos/positive_scan_large_pleural_effusion_and_solid_lung.mp4", caption: "Positive Scan - Large Pleural Effusion and Solid Lung" },
          { type: 'video', url: "/videos/positive_scan_small_pleural_effusion.mp4", caption: "Positive Scan - Small Pleural Effusion" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'list', items: [
            "No pleural effusion after fanning entire medial diaphragm anteriorly to posteriorly until it disappears (see scanning technique)",
            "The curtain sign can rule out a large pleural effusion"
          ]},
          { type: 'video', url: "/videos/curtain_sign.mp4", caption: "Curtain sign" }
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
          { type: 'video', url: "/videos/probe_starting_position_need_to_obtain.mp4", caption: "Probe Starting Position" },
          { type: 'video', url: "/videos/internal_landmarks.mp4", caption: "Internal Landmarks" },
          { type: 'divider' },
          { type: 'header', text: "Area of Interest" },
          { type: 'text', text: "VPPI of 2-3 of the most anterior rib spaces bilaterally" },
          { type: 'video', url: "/videos/area_of_interest.mp4", caption: "Area of Interest" }
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
          { type: 'video', url: "/videos/negative_scan_lung_sliding.mp4", caption: "Negative Scan Lung Sliding" },
          { type: 'video', url: "/videos/negative_scan_lung_pulse.mp4", caption: "Negative Scan Lung Pulse" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "Absence of lung sliding, lung pulse, and B-lines PLUS visualization of a pathological lung point." },
          { type: 'video', url: "/videos/no_lung_sliding.mp4", caption: "No Lung Sliding" },
          { type: 'video', url: "/videos/pathologic_lung_point.mp4", caption: "Pathologic Lung Point" },
          
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
          { type: 'video', url: "/videos/physiologic_lung_point_cardiac_lung_point.mp4", caption: "Physiologic Lung Point - Cardiac Lung Point" },
          { type: 'video', url: "/videos/physiologic_lung_point_liver_lung_point.mp4", caption: "Physiologic Lung Point - Liver Lung Point" }
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
          { type: 'image', url: "/images/lung_zones.png", caption: "Lung Zones" },
          { type: 'video', url: "/videos/internal_landmarks.mp4", caption: "Internal Landmarks" },
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
          { type: 'video', url: "/videos/sliding_to_center_the_vppi.mp4", caption: "Sliding to center the VPPI" },
          { type: 'video', url: "/videos/fanning_to_optimize_vppi.mp4", caption: "Fanning to optimize VPPI" }
        ]
      },
      {
        title: "Interpretation",
        icon: Microscope,
        color: 'rose',
        content: [
          { type: 'header', text: "Positive Scan" },
          { type: 'text', text: "≥ 3 B-lines present in a single rib space at any time throughout the respiratory cycle OR" },
          { type: 'video', url: "/videos/b_lines.mp4", caption: "B-Lines" },
          { type: 'text', text: "Coalescing B-lines" },
          { type: 'video', url: "/videos/coalescing_b_lines.mp4", caption: "Coalescing B-Lines" },
          { type: 'video', url: "/videos/coalescing_b_lines_making_white_lung.mp4", caption: "Coalescing B-Lines Making White Lung" },
          
          { type: 'divider' },
          
          { type: 'header', text: "Negative Scan" },
          { type: 'text', text: "< 3 B-lines present in a single rib space at any time throughout the respiratory cycle" },
          { type: 'video', url: "/videos/normal_a_lines.mp4", caption: "Normal A-Lines" }
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
    <div className="my-5 rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-white/40 backdrop-blur-md">
      <div className="relative bg-black/90 aspect-video flex items-center justify-center group">
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
        <div className="bg-white/80 backdrop-blur-lg p-3 text-xs text-center text-slate-600 font-medium border-t border-white/50">
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
      return <h4 className={`font-bold text-${color}-800 mt-5 mb-2 text-lg`}>{item.text}</h4>;
    
    case 'subheader':
      return <h4 className="font-bold text-slate-900 mt-4 mb-1 text-sm uppercase tracking-wide">{item.text}</h4>;

    case 'bold':
      return <p className="font-bold text-slate-800 mt-3">{item.text}</p>;
    
    case 'info':
      return (
        <div className={`bg-${color}-50/60 backdrop-blur-md border-l-4 border-${color}-400 p-4 my-3 rounded-r-xl shadow-sm text-sm text-slate-700`}>
          {item.text}
        </div>
      );
    
    case 'list':
      return (
        <ul className="list-disc list-inside space-y-1 my-3 text-slate-700 text-sm">
          {item.items.map((li, idx) => <li key={idx} className="leading-relaxed pl-1">{li}</li>)}
        </ul>
      );

    case 'sublist':
      return (
        <ul className="list-[circle] list-inside space-y-1 my-2 ml-6 text-slate-600 text-sm">
          {item.items.map((li, idx) => <li key={idx} className="leading-relaxed pl-1">{li}</li>)}
        </ul>
      );

    case 'divider':
      return <hr className="my-8 border-slate-200/60" />;
    
    case 'video':
      // Using our new Robust Player
      return <VideoPlayer src={item.url} caption={item.caption} />;

    case 'image':
      return (
        <div className="my-5 rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-white/40 backdrop-blur-md">
          <div className="relative bg-white/50 flex items-center justify-center p-4">
             <img 
               src={item.url} 
               alt={item.caption || "Medical Reference"}
               className="w-full h-auto object-contain max-h-[60vh] rounded-xl shadow-sm"
             />
          </div>
          {item.caption && (
            <div className="bg-white/80 backdrop-blur-lg p-3 text-xs text-center text-slate-600 font-medium border-t border-white/50">
              {item.caption}
            </div>
          )}
        </div>
      );

    default:
      return <p className="text-slate-700 leading-relaxed my-2 text-sm">{item.text}</p>;
  }
};

const SectionCard = ({ section }) => {
  const Icon = section.icon || Info;
  const color = section.color || 'emerald'; 

  return (
    <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 overflow-hidden mb-8 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      <div className={`bg-${color}-100/40 backdrop-blur-md px-6 py-5 border-b border-white/60 flex items-center`}>
        <div className={`p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 mr-4 text-${color}-600`}>
          <Icon size={22} />
        </div>
        <h3 className="font-bold text-slate-800 text-xl tracking-tight">{section.title}</h3>
      </div>
      <div className="px-6 pb-6 pt-4">
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
      const view = params.get('view');
      const module = params.get('module');
      if (view === 'about') return 'about';
      if (module) return 'module';
      return 'dashboard';
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
  }, [activeModuleId, currentView]);

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

  const goToAbout = () => {
    setCurrentView('about');
    setActiveModuleId(null);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
    
    try {
      const newUrl = `?view=about`;
      window.history.pushState({ view: 'about' }, '', newUrl);
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
      } else if (state && state.view === 'about') {
        setCurrentView('about');
        setActiveModuleId(null);
      } else {
        setCurrentView('dashboard');
        setActiveModuleId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // --- BACKGROUND GLOW COMPONENT ---
  const AmbientGlow = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-200/30 rounded-full blur-[100px] opacity-70 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[120px] opacity-60 mix-blend-multiply" />
      <div className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] bg-violet-200/20 rounded-full blur-[90px] opacity-50 mix-blend-multiply" />
    </div>
  );

  // --- ABOUT US VIEW ---
  if (currentView === 'about') {
    return (
      <div className="flex h-screen bg-slate-50/80 font-sans overflow-hidden w-full relative">
        <AmbientGlow />
        
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-30 w-80 bg-emerald-950/90 backdrop-blur-2xl text-white transform transition-transform duration-300 ease-in-out flex flex-col border-r border-white/10
          ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:static lg:translate-x-0'}
        `}>
          <div className="p-6 border-b border-emerald-800/50 flex justify-between items-center shrink-0">
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-white">USask POCUS</span>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-emerald-300 hover:text-white transition-colors"><X size={24} /></button>
          </div>
          <nav className="p-4 flex-1 overflow-y-auto no-scrollbar">
            <button onClick={goHome} className="flex items-center text-emerald-200 hover:text-white mb-8 w-full touch-manipulation transition-colors font-medium">
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </button>
            
            <div className="mb-4 px-2">
              <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">Quick Guides</h4>
              <div className="space-y-1.5">
                {modules.map(mod => (
                  <button 
                    key={mod.id}
                    onClick={() => openModule(mod.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
                  >
                    {mod.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 px-2">
              <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">App Info</h4>
              <button 
                onClick={goToAbout}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all touch-manipulation bg-white text-emerald-900 shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
              >
                <Info size={18} className="mr-3" />
                About Us
              </button>
            </div>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
          <header className="h-16 bg-white/70 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 shrink-0 shadow-sm z-20">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors">
                <Menu size={24} />
              </button>
              <h2 className="text-lg font-bold text-slate-800 truncate tracking-tight">About Us</h2>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth z-10 relative">
            <div className="max-w-2xl mx-auto space-y-6 pb-20">
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 overflow-hidden">
                 <div className="bg-emerald-900/90 backdrop-blur-md px-8 py-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />
                    <GraduationCap size={56} className="mx-auto text-emerald-100 mb-5 relative z-10" />
                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight relative z-10">USask POCUS Quick Reference</h2>
                    <p className="text-emerald-100/90 text-sm font-medium relative z-10">Created for the University of Saskatchewan College of Medicine</p>
                 </div>
                 
                 <div className="p-8 md:p-10 space-y-8">
                    <div className="flex items-start group">
                       <div className="p-3.5 bg-blue-50/80 border border-blue-100 shadow-sm text-blue-600 rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                          <Stethoscope size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">Dr. Linden Kolbenson</h3>
                          <p className="text-slate-500 text-sm font-medium">Content Creation and Review</p>
                       </div>
                    </div>
                    
                    <div className="flex items-start group">
                       <div className="p-3.5 bg-blue-50/80 border border-blue-100 shadow-sm text-blue-600 rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                          <Stethoscope size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">Dr. Paul Olszynski</h3>
                          <p className="text-slate-500 text-sm font-medium">Content Creation and Review</p>
                       </div>
                    </div>
                    
                    <hr className="border-slate-200/60" />
                    
                    <div className="flex items-start group">
                       <div className="p-3.5 bg-emerald-50/80 border border-emerald-100 shadow-sm text-emerald-600 rounded-2xl mr-5 shrink-0 transition-transform group-hover:scale-110">
                          <Code2 size={24} />
                       </div>
                       <div>
                          <h3 className="font-bold text-slate-800 text-xl tracking-tight mb-1">Raafi Ali</h3>
                          <p className="text-slate-600 font-bold text-sm mb-1">Internal Medicine Resident</p>
                          <p className="text-slate-500 text-sm font-medium">App Development and Design</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // 1. DASHBOARD VIEW
  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-50/80 font-sans text-slate-800 flex flex-col w-full relative overflow-hidden">
        <AmbientGlow />
        
        <header className="bg-emerald-950/90 backdrop-blur-2xl text-white py-12 px-6 relative overflow-hidden border-b border-white/10 shadow-lg">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="absolute top-4 right-4 p-8 opacity-5">
            <GraduationCap size={200} />
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
             <div className="flex flex-wrap items-center gap-3 mb-6">
               <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-emerald-50 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm">
                 College of Medicine
               </span>
             </div>
             <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">USask POCUS</h1>
             <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                 <p className="text-emerald-100/90 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                   Undergraduate Medical Education Point of Care Ultrasound Curriculum.
                 </p>
                 <button 
                   onClick={goToAbout}
                   className="w-fit px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest border border-white/20 text-white transition-all cursor-pointer flex items-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                 >
                   <Info size={14} className="mr-2" />
                   About
                 </button>
             </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-12 w-full relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-8 flex items-center tracking-tight">
              <BookOpen size={24} className="mr-3 text-emerald-600" />
              Learning Modules
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {modules.map((mod) => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/80 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-${mod.color}-300/50 hover:bg-white/80 active:scale-[0.98] transition-all duration-300 text-left group flex flex-col h-full relative overflow-hidden touch-manipulation z-10`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${mod.color}-50/80 backdrop-blur-md border border-${mod.color}-100 flex items-center justify-center text-${mod.color}-600 mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <mod.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-slate-900">{mod.title}</h3>
                  <p className="text-sm text-slate-600 mb-8 flex-grow leading-relaxed font-medium">{mod.description}</p>
                  
                  <div className={`flex items-center text-${mod.color}-600 text-sm font-bold mt-auto tracking-wide uppercase`}>
                    Start Module <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        <footer className="relative z-10 bg-white/40 backdrop-blur-md border-t border-white/60 py-8 text-center text-slate-500 text-xs font-medium">
          <p className="mb-3">© University of Saskatchewan • College of Medicine • v0.38</p>
          <button 
            onClick={goToAbout} 
            className="inline-flex items-center justify-center text-emerald-600 hover:text-emerald-800 font-bold transition-colors"
          >
             <Info size={14} className="mr-1" /> About the Team
          </button>
        </footer>
      </div>
    );
  }

  // 2. MODULE VIEW
  return (
    <div className="flex h-screen bg-slate-50/80 font-sans overflow-hidden w-full relative">
      <AmbientGlow />
      
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-emerald-950/90 backdrop-blur-2xl text-white transform transition-transform duration-300 ease-in-out flex flex-col border-r border-white/10
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:static lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-emerald-800/50 flex justify-between items-center shrink-0">
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 to-white">USask POCUS</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-emerald-300 hover:text-white transition-colors"><X size={24} /></button>
        </div>
        <nav className="p-4 flex-1 overflow-y-auto no-scrollbar">
          <button onClick={goHome} className="flex items-center text-emerald-200 hover:text-white mb-8 w-full touch-manipulation transition-colors font-medium">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </button>
          
          <div className="mb-4 px-2">
            <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">Quick Guides</h4>
            <div className="space-y-1.5">
              {modules.map(mod => (
                <button 
                  key={mod.id}
                  onClick={() => openModule(mod.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation ${activeModuleId === mod.id ? `bg-white text-emerald-900 shadow-[0_0_15px_rgba(255,255,255,0.2)] font-bold` : 'text-emerald-100/80 hover:bg-white/10 hover:text-white'}`}
                >
                  {mod.title}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 px-2">
            <h4 className="text-xs font-extrabold text-emerald-400/80 uppercase tracking-widest mb-3">App Info</h4>
            <button 
              onClick={goToAbout}
              className={`w-full flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all touch-manipulation text-emerald-100/80 hover:bg-white/10 hover:text-white`}
            >
              <Info size={18} className="mr-3" />
              About Us
            </button>
          </div>
        </nav>
      </aside>

      {/* Background Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">
        <header className="h-16 bg-white/70 backdrop-blur-xl border-b border-white/50 flex items-center justify-between px-6 shrink-0 shadow-sm z-20">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-4 text-slate-500 hover:text-emerald-700 transition-colors">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-bold text-slate-800 truncate tracking-tight">{activeModule?.title}</h2>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth relative z-10">
          <div className="max-w-3xl mx-auto space-y-8 pb-24 pt-2">
            {activeModule && activeModule.sections ? (
              activeModule.sections.map((section, idx) => (
                <SectionCard key={idx} section={section} color={section.color || activeModule.color} />
              ))
            ) : (
              <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/80 text-center">
                <div className="w-20 h-20 bg-emerald-50/80 border border-emerald-100/50 shadow-sm text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Stethoscope size={40} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">Content Coming Soon</h3>
                <p className="text-slate-600 mb-8 font-medium">
                  Dr. Kolbenson is currently curating the curriculum for this module. 
                </p>
                <div className="inline-flex items-center text-xs font-bold text-slate-400 bg-slate-100/80 border border-slate-200/50 backdrop-blur-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                  <Info size={14} className="mr-2" />
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