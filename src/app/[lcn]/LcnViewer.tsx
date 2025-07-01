"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { getTimeFromNow } from "@/lib/dateDiffFromNow";
import { addNumberStrings } from "@/lib/addStrings";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

import ID0 from "@/assets/svg/License/0.svg";
import ID1 from "@/assets/svg/License/1.svg";
import ID2 from "@/assets/svg/License/2.svg";
import ID3 from "@/assets/svg/License/3.svg";
import ID4 from "@/assets/svg/License/4.svg";
import ID5 from "@/assets/svg/License/5.svg";
import ID6 from "@/assets/svg/License/6.svg";
import ID7 from "@/assets/svg/License/7.svg";
import ID8 from "@/assets/svg/License/8.svg";
import ID9 from "@/assets/svg/License/9.svg";
import ID10 from "@/assets/svg/License/10.svg";
import ID11 from "@/assets/svg/License/11.svg";
import ID12 from "@/assets/svg/License/12.svg";
import ID13 from "@/assets/svg/License/13.svg";
import ID14 from "@/assets/svg/License/14.svg";
import ID15 from "@/assets/svg/License/15.svg";
import ID16 from "@/assets/svg/License/16.svg";
import ID17 from "@/assets/svg/License/17.svg";
import ID18 from "@/assets/svg/License/18.svg";
import ID19 from "@/assets/svg/License/19.svg";
import ID20 from "@/assets/svg/License/20.svg";
import ID21 from "@/assets/svg/License/21.svg";
import ID22 from "@/assets/svg/License/22.svg";

import CERT0 from "@/assets/svg/Certificate/0.svg";
import CERT1 from "@/assets/svg/Certificate/1.svg";
import CERT2 from "@/assets/svg/Certificate/2.svg";
import CERT3 from "@/assets/svg/Certificate/3.svg";
import CERT4 from "@/assets/svg/Certificate/4.svg";
import CERT5 from "@/assets/svg/Certificate/5.svg";
import CERT6 from "@/assets/svg/Certificate/6.svg";
import CERT7 from "@/assets/svg/Certificate/7.svg";
import CERT8 from "@/assets/svg/Certificate/8.svg";
import CERT9 from "@/assets/svg/Certificate/9.svg";
import CERT10 from "@/assets/svg/Certificate/10.svg";
import CERT11 from "@/assets/svg/Certificate/11.svg";
import CERT12 from "@/assets/svg/Certificate/12.svg";
import CERT13 from "@/assets/svg/Certificate/13.svg";
import CERT14 from "@/assets/svg/Certificate/14.svg";
import CERT15 from "@/assets/svg/Certificate/15.svg";
import CERT16 from "@/assets/svg/Certificate/16.svg";
import CERT17 from "@/assets/svg/Certificate/17.svg";
import CERT18 from "@/assets/svg/Certificate/18.svg";
import CERT19 from "@/assets/svg/Certificate/19.svg";
import CERT20 from "@/assets/svg/Certificate/20.svg";
import CERT21 from "@/assets/svg/Certificate/21.svg";
import CERT22 from "@/assets/svg/Certificate/22.svg";
import CERT23 from "@/assets/svg/Certificate/23.svg";

const licenseLayers = [
  ID0,
  ID1,
  ID2,
  ID3,
  ID4,
  ID5,
  ID6,
  ID7,
  ID8,
  ID9,
  ID10,
  ID11,
  ID12,
  ID13,
  ID14,
  ID15,
  ID16,
  ID17,
  ID18,
  ID19,
  ID20,
  ID21,
];

const certificateLayers = [
  CERT0,
  CERT1,
  CERT2,
  CERT3,
  CERT4,
  CERT5,
  CERT6,
  CERT7,
  CERT8,
  CERT9,
  CERT10,
  CERT11,
  CERT12,
  CERT13,
  CERT14,
  CERT15,
  CERT16,
  CERT17,
  CERT18,
  CERT19,
  CERT20,
  CERT21,
  CERT22,
];

type LcnData = {
  lcn: string;
  name: string;
  issued: string;
  expiration: string;
  registration: string;
  FWE: string;
  SJE: string;
  EP: string;
  PAS: string;
  CCST: string;
  CCSM: string;
  batch: string;
  ranking: string;
};

interface SVGProps {
  SVGText: string;
  Batch?: string;
}

const DateExpiry: React.FC<SVGProps> = ({ SVGText }) => {
  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibri"
        fontSize="68"
        letterSpacing="-0.012em"
      >
        <tspan x="177.599" y="1691.5">
          Valid Until: {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const DateIssue: React.FC<SVGProps> = ({ SVGText }) => {
  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Calibri"
        fontSize="68"
        letterSpacing="-0.012em"
      >
        <tspan x="158.583" y="1603.5">
          Date Issued: {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const LCNNumber: React.FC<SVGProps> = ({ SVGText }) => {
  const fontSize = SVGText.length > 10 ? 85 : SVGText.length > 7 ? 125 : 139;
  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Arial"
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="0.012em"
      >
        <tspan x="174.79" y="1443.15">
          {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const EMTName: React.FC<SVGProps> = ({ SVGText }) => {
  const upperText = SVGText.toUpperCase();
  const fontSize = SVGText.length > 28 ? 95 : SVGText.length > 21 ? 110 : 139;

  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Arial"
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="0em"
        textAnchor="middle"
      >
        <tspan x="2200" y="1080.89">  {/* 1725 is center of 3450 width */}
          {upperText}
        </tspan>
      </text>
    </svg>
  );
};


const EMTImage: React.FC<SVGProps> = ({ SVGText, Batch }) => {
  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`absolute top-0 left-0`}
    >
      <rect
        x="1"
        y="129"
        width="1016"
        height="1014"
        fill="url(#pattern0_43_64)"
      />
      <defs>
        <pattern
          id="pattern0_43_64"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_43_64"
            transform="matrix(0.00390625 0 0 0.00391395 0 -0.000986193)"
          />
        </pattern>
        <image
          id="image0_43_64"
          width="256"
          height="256"
          preserveAspectRatio="none"
          href={`/assets/img/ID/${Batch}/${SVGText}.png`}
        />
      </defs>
    </svg>
  );
};

const EMTCertName: React.FC<SVGProps> = ({ SVGText }) => {
  const upperText = SVGText.toUpperCase();
  const fontSize = SVGText.length > 28 ? 269 : SVGText.length > 21 ? 269 : 269;

  return (
    <svg 
      viewBox="0 0 6900 5209" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Copperplate Gothic Bold"
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="0em"
        textAnchor="middle" // center the text
      >
        <tspan x="3450" y="2252.03">  {/* 3450 is center of 6900 width */}
          {upperText}
        </tspan>
      </text>
    </svg>
  );
};


const numberWords1to19 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];

const tensWords = [
  "",
  "", // 0, 1 unused
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];

const getYearInWords = (year: number): string => {
  if (year >= 2000 && year < 2100) {
    const lastTwo = year % 100;

    if (lastTwo === 0) {
      return "Two Thousand";
    }

    if (lastTwo < 20) {
      return `Two Thousand ${numberWords1to19[lastTwo]}`;
    }

    const tens = Math.floor(lastTwo / 10);
    const ones = lastTwo % 10;

    const tensPart = tensWords[tens];
    const onesPart = ones > 0 ? `-${numberWords1to19[ones]}` : "";

    return `Two Thousand ${tensPart}${onesPart}`;
  }

  return year.toString();
};

const getDayWithSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) return `${day}th`;
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

const CertText: React.FC<SVGProps> = ({ SVGText }) => {
  let formattedDate = SVGText;
  let year = 0;

  try {
    const parsedDate = new Date(SVGText);
    year = parsedDate.getFullYear();

    const month = parsedDate.toLocaleString("default", { month: "long" });
    const day = parsedDate.getDate();

    formattedDate = `${getDayWithSuffix(day)} day of ${month}`;
  } catch {
    formattedDate = SVGText;
  }

  const yearInWords = getYearInWords(year);

  return (
    <svg
      viewBox="0 0 6900 5209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Lucida Calligraphy"
        fontSize="68"
        fontWeight="bold"
        fontStyle="italic"
        letterSpacing="-0.006em"
        textAnchor="middle"
      >
        <tspan x="3450" y="3548.17">
          Awarded this {formattedDate} in the year of our Lord {yearInWords}.
        </tspan>
        <tspan x="3450" y="3628.17">
          Given at the ARMEDSAFE Safety &#38; Rescue Training Center,
        </tspan>
        <tspan x="3450" y="3708.17">
          2A Wellgoco Bldg., Instruccion Street, Espana Avenue, Sampaloc Manila
        </tspan>
      </text>
    </svg>
  );
};


const LCNCertNumber: React.FC<SVGProps> = ({ SVGText }) => {
  return (
    <svg
      viewBox="0 0 6900 5209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="AriaCalibril"
        fontSize="116"
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x="1413" y="4413">
          {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const CertImageOne: React.FC<SVGProps> = ({ SVGText, Batch }) => {
  return (
    <svg
      viewBox="0 0 6900 5209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`absolute top-0 left-0`}
    >
    <rect x="268" y="1487" width="1202" height="1250" fill="url(#pattern0_81_66)"/>
    <defs>
    <pattern id="pattern0_81_66" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_81_66" transform="matrix(0.00406224 0 0 0.00390625 -0.0199667 0)"/>
    </pattern>
    <image id="image0_81_66" width="256" height="256" preserveAspectRatio="none" 
          href={`/assets/img/ID/${Batch}/${SVGText}.png`}
        />
      </defs>
    </svg>
  );
};

const CertImageTwo: React.FC<SVGProps> = ({ SVGText, Batch }) => {
  return (
    <svg
      viewBox="0 0 6900 5209"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`absolute top-0 left-0`}
    >
    <rect x="5057" y="3384" width="1650" height="1716" fill="url(#pattern0_81_66)" fillOpacity="0.3"/>
    <defs>
    <pattern id="pattern0_81_66" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_81_66" transform="matrix(0.0040625 0 0 0.00390625 -0.02 0)"/>
    </pattern>
    <image id="image0_81_66" width="256" height="256" preserveAspectRatio="none" 
          href={`/assets/img/ID/${Batch}/${SVGText}.png`}
        />
      </defs>
    </svg>
  );
};

export default function LcnViewer({
  lcn,
  lcnData,
  expired,
}: {
  lcn: string;
  lcnData: LcnData;
  expired: boolean;
}) {
  if (expired) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
        <h1 className="text-xl font-bold text-red-600">License Expired</h1>
        <p className="mt-2 text-sm text-gray-600">
          <strong>{lcnData.name.toUpperCase()}</strong> (#{lcn}) license expired on{" "}
          <strong>{lcnData.expiration}</strong>.
        </p>
        <Button className="mt-6 w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-md">
          <Link href="/">Return</Link>
        </Button>
      </div>
    );
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-full w-full items-center justify-center bg-[#f9fafc] font-sans text-gray-700 min-h-screen p-3 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between bg-white p-4 rounded-md mx-4">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <FontAwesomeIcon icon={faUser} />
              <span>Emergency Medical Technician</span>
            </div>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md">
                Return
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row border-t border-gray-200">
            <div className="w-full md:w-1/3 border-r border-gray-200 p-5 space-y-5">
              <div className="relative rounded-lg overflow-hidden bg-gray-100 w-full aspect-[4/5]">
                <img
                  alt="Profile"
                  className="object-cover w-full h-full"
                  height="375"
                  width="300"
                  src={`/assets/img/ID/${lcnData.batch}/${lcnData.lcn}.png`}
                  draggable={false}
                />
              </div>

              <div className="flex flex-col justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-auto text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md m-3 hover:bg-gray-950 hover:text-white">
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="select-none">
                    <DialogHeader>
                      <DialogTitle>Certificate of Completion</DialogTitle>
                      <DialogDescription className="relative w-full h-auto">
                        {certificateLayers.map((layer, i) => (
                          <Image
                            key={i}
                            src={layer}
                            alt={`Layer ${i}`}
                            className={`absolute top-0 left-0 ${
                              i === 0 ? "relative" : ""
                            }`}
                          />
                        ))}
                        <EMTCertName SVGText={lcnData.name} />
                        <CertText SVGText={lcnData.issued} />
                        <LCNCertNumber SVGText={lcnData.lcn} />
                        <CertImageOne
                          SVGText={lcnData.lcn}
                          Batch={lcnData.batch} />
                        <CertImageTwo
                          SVGText={lcnData.lcn}
                          Batch={lcnData.batch} />

                        <Image
                          src={CERT23}
                          alt={`Layer 23`}
                          className={`absolute top-0 left-0`}
                        />
                        <span className="text-xs">This certificate is issued for digital use only. It is not valid unless printed with the authorized signature and official seal of the issuing institution.</span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-auto text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md m-3 hover:bg-gray-950 hover:text-white">
                      View Identity
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="select-none">
                    <DialogHeader>
                      <DialogTitle>License Card</DialogTitle>
                      <DialogDescription className="relative w-full h-auto">
                        {licenseLayers.map((layer, i) => (
                          <Image
                            key={i}
                            src={layer}
                            alt={`Layer ${i}`}
                            className={`absolute top-0 left-0 ${
                              i === 0 ? "relative" : ""
                            }`}
                          />
                        ))}

                        <DateIssue SVGText={lcnData.issued} />
                        <DateExpiry SVGText={lcnData.expiration} />
                        <LCNNumber SVGText={lcnData.lcn} />
                        <EMTName SVGText={lcnData.name} />
                        <EMTImage SVGText={lcnData.lcn} Batch={lcnData.batch} />
                        <Image
                          src={ID22}
                          alt={`Layer 22`}
                          className={`absolute top-0 left-0`}
                        />
                        <span className="text-xs">This license card is issued for digital use only. It is not valid unless printed with the authorized signature and official seal of the issuing institution.</span>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-5 space-y-6 select-none">
              <h2 className="text-xm font-semibold text-gray-700 mb-2">
                Profile Information
              </h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <Field label="Legal Name" value={lcnData.name.toUpperCase()} />
                <Field label="License Number" value={lcnData.lcn} />
                <Field label="Date of Issuance" value={lcnData.issued} />
                <Field label="Date of Expiration" value={lcnData.expiration} />
                <Field
                  label="Duration Active (Latest Re-Certification)"
                  value={`${getTimeFromNow(lcnData.issued)} (${
                    lcnData.registration
                  })`}
                />
                <Field
                  label="Remarks"
                  value={(() => {
                    const ranking = lcnData.ranking?.toUpperCase();
                    let content = null;

                    if (ranking === "1") {
                      content = (
                        <div className="flex items-center text-yellow-600 font-semibold">
                          <span className="text-xs">🥇&nbsp;</span>
                          <span>Rank {ranking}</span>
                        </div>
                      );
                    } else if (ranking === "2") {
                      content = (
                        <div className="flex items-center text-gray-500 font-semibold">
                          <span className="text-xs">🥈&nbsp;</span>
                          <span>Rank {ranking}</span>
                        </div>
                      );
                    } else if (ranking === "3") {
                      content = (
                        <div className="flex items-center gap-2 text-amber-700 font-semibold">
                          <span className="text-xs">🥉&nbsp;</span>
                          <span>Rank {ranking}</span>
                        </div>
                      );
                    } else {
                      content = (
                        <div className="flex items-center gap-2 text-green-700 font-semibold">
                          <span>PASSED</span>
                        </div>
                      );
                    }

                    return content;
                  })()}
                />
              </form>

              <div>
                <h2 className="text-xm font-semibold text-gray-700 mb-2">
                  Over-All Proficency Evaluation Record
                </h2>
                <p className="text-xs text-justify text-gray-600 mb-6">
                  Scoring criteria describe the quality of evidence required at
                  different levels of achievement for each performance
                  indicator. These criteria are essential components of a
                  proficency-based learning and skills system, designed to
                  promote standard, equitable, challenging, and personalized
                  outcomes for all EMT students.
                </p>
                <div className="overflow-x-auto border border-gray-300 rounded-md">
                  <table className="min-w-full text-xs text-left text-gray-700 table-fixed">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="w-24 px-3 py-2 border-b border-gray-300 font-semibold">
                          Total %
                        </th>
                        <th className="w-72 px-3 py-2 border-b border-gray-300 font-semibold">
                          Examination
                        </th>
                        <th className="w-20 px-3 py-2 border-b border-gray-300 font-semibold">
                          Grade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["10%", "Final Written Examination", lcnData.FWE],
                        [
                          "15%",
                          "Situational Judgement Examination",
                          lcnData.SJE,
                        ],
                        ["10%", "Equipment Proficiency", lcnData.EP],
                        ["15%", "Patient Assessment Skills", lcnData.PAS],
                        ["25%", "Critical Case: Trauma", lcnData.CCST],
                        ["25%", "Critical Case: Medical", lcnData.CCSM],
                      ].map(([weight, title, grade], idx) => (
                        <tr key={idx} className="even:bg-gray-50">
                          <td className="border-r border-gray-200 px-3 py-2">
                            {weight}
                          </td>
                          <td className="border-r border-gray-200 px-3 py-2">
                            {title}
                          </td>
                          <td className="border-r border-gray-200 px-3 py-2">
                            {grade}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="border-t border-gray-200 bg-gray-200 font-semibold text-gray-800">
                      <tr>
                        <th className="border-r border-gray-200 px-3 py-2">
                          100%
                        </th>
                        <th className="border-r border-gray-200 px-3 py-2">
                          Total Evaluation
                        </th>
                        <th className="border-r border-gray-200 px-3 py-2">
                          {addNumberStrings(
                            lcnData.FWE,
                            lcnData.SJE,
                            lcnData.EP,
                            lcnData.PAS,
                            lcnData.CCST,
                            lcnData.CCSM
                          )}
                          %
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
    </ContextMenu>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-semibold text-gray-600 mb-1">
        {label}
      </label>
      <h2 className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
        {value}
      </h2>
    </div>
  );
}
