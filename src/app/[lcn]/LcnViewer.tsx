"use client";

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
  DialogFooter,
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
    // const licenseImageUrl = `/assets/img/ID/${lcn}.png`;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">License Expired</h1>
        <h3 className="mt-2 text-sm text-gray-600">
          The license for <strong>{lcnData.name}</strong> (#{lcn}) expired on{" "}
          <strong>{lcnData.expiration}</strong>.
        </h3>
        <br />
        <Button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md px-3 py-1.5">
          <Link href="/">Return</Link>
        </Button>
      </div>
    );
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-full w-full items-center justify-center bg-[#f9fafc] font-sans text-gray-700 min-h-screen p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-700 font-semibold text-sm rounded-md px-3 py-1.5 border border-gray-300 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                <span className="block sm:hidden">EMT</span>
                <span className="hidden sm:block">
                  Emergency Medical Technician
                </span>
              </div>
            </div>
            <Button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md px-3 py-1.5">
              <Link href="/">Return</Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row border-t border-gray-200">
            <div className="w-full md:w-1/3 border-r border-gray-200 p-5 space-y-5">
              <div className="relative rounded-lg overflow-hidden bg-[#e6d3ca] w-full aspect-[4/5]">
                <img
                  alt="Profile"
                  className="object-cover w-full h-full"
                  height="375"
                  src="https://storage.googleapis.com/a1aa/image/b4e644f7-5b41-4833-dd1b-937d1072abf4.jpg"
                  width="300"
                />
              </div>

              <div className="flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-2/5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md m-3 py-4 hover:bg-gray-950 hover:text-white">
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Certificate</DialogTitle>
                      <DialogDescription>
                        <Image src={Certificate} alt="Certificate" />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-2/5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md m-3 py-4 hover:bg-gray-950 hover:text-white">
                      View License Card
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>License Card</DialogTitle>
                      <DialogDescription className="relative w-full h-auto">
                        <Image
                          src={ID0}
                          alt="ID0"
                        />
                        <Image
                          src={ID1}
                          alt="ID1"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID2}
                          alt="ID2"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID3}
                          alt="ID3"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID4}
                          alt="ID4"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID5}
                          alt="ID5"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID6}
                          alt="ID6"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID7}
                          alt="ID7"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID8}
                          alt="ID8"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID9}
                          alt="ID9"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID10}
                          alt="ID10"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID11}
                          alt="ID11"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID12}
                          alt="ID12"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID13}
                          alt="ID13"
                          className="absolute top-0 left-0"
                        />
                        <Image
                          src={ID14}
                          alt="ID14"
                          className="absolute top-0 left-0"
                        />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-5 space-y-6">
              <h3 className="text-xs font-semibold text-gray-700 mb-2">
                Profile Information
              </h3>
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
                <Field label="Course Instructor" value="Wilky S. Lao" />
              </form>

              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">
                  Grading Table
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  OCR Paragraph Text Placeholder
                </p>
                <div className="overflow-x-auto border border-gray-300 rounded-md">
                  <table className="min-w-full text-xs text-left text-gray-700 table-fixed">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="w-24 px-3 py-2 border-b border-gray-300 font-semibold">
                          %
                        </th>
                        <th className="w-72 px-3 py-2 border-b border-gray-300 font-semibold">
                          Examination Title
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
                        [
                          "25%",
                          "Critical Case Scenario in Trauma",
                          lcnData.CCST,
                        ],
                        [
                          "25%",
                          "Critical Case Scenario in Medical",
                          lcnData.CCSM,
                        ],
                      ].map(([weight, title, grade], idx) => (
                        <tr key={idx} className="even:bg-gray-50">
                          <td className="px-3 py-2 border-b border-gray-200">
                            {weight}
                          </td>
                          <td className="px-3 py-2 border-b border-gray-200">
                            {title}
                          </td>
                          <td className="px-3 py-2 border-b border-gray-200">
                            {grade}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-100">
                      <tr>
                        <th className="w-24 px-3 py-2 border-b border-gray-300 font-semibold">
                          100%
                        </th>
                        <th className="w-72 px-3 py-2 border-b border-gray-300 font-semibold">
                          Total Evaluation
                        </th>
                        <th className="w-20 px-3 py-2 border-b border-gray-300 font-semibold">
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

function Field({ label, value }: { label: string; value: string }) {
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
