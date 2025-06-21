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
import Certificate from "@/assets/svg/Certificate.svg";
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
        fontFamily="Arial"
        fontSize="96"
        letterSpacing="0em"
      >
        <tspan x="1698" y="1941.28">
          {SVGText}
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
      className={`absolute top-0 left-0}`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Arial"
        fontSize="96"
        letterSpacing="0em"
      >
        <tspan x="1698" y="1638.28">
          {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const LCNNumber: React.FC<SVGProps> = ({ SVGText }) => {
  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0}`}
    >
      <text
        fill="black"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre" }}
        fontFamily="Arial"
        fontSize="96"
	      fontWeight="900"
        letterSpacing="0em"
      >
        <tspan x="2497" y="1268.47">
          {SVGText}
        </tspan>
      </text>
    </svg>
  );
};

const EMTName: React.FC<SVGProps> = ({ SVGText }) => {
  // Determine font size based on text length
  const fontSize =
    SVGText.length > 28 ? 95 : SVGText.length > 21 ? 110 : 139;

  return (
    <svg
      viewBox="0 0 3450 2210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0"
    >
      <text
        fill="white"
        xmlSpace="preserve"
        style={{ whiteSpace: "pre", fontSize }}
        fontFamily="Arial"
        letterSpacing="0em"
      >
        <tspan x="1861" y="948.792">
          {SVGText}
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
      className="absolute top-0 left-0"
    >
      <rect x="335" y="543" width="997" height="997" fill="url(#pattern0_1_19)" />
      <defs>
        <pattern
          id="pattern0_1_19"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1_19"
            transform="scale(0.00126582)"
          />
        </pattern>
        <image
          id="image0_1_19"
          width="790"
          height="790"
          preserveAspectRatio="none"
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
          <strong>{lcnData.name}</strong> (#{lcn}) license expired on{" "}
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
                      <DialogTitle>Certificate</DialogTitle>
                      <DialogDescription>
                        <Image src={Certificate} alt="Certificate" draggable={false}/>
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
                            src={ID15}
                            alt={`Layer 15`}
                            className={`absolute top-0 left-0`}
                            />
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
                <Field label="Legal Name" value={lcnData.name} />
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
                value={
                  (() => {
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
                  })()
                }
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
                          "20%",
                          "Situational Judgement Examination",
                          lcnData.SJE,
                        ],
                        ["10%", "Equipment Proficiency", lcnData.EP],
                        ["10%", "Patient Assessment Skills", lcnData.PAS],
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

function Field({ label, value }: { label: string; value: React.ReactNode; }) {
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
