import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { validLCNs, lcnToBatch } from "@/data/LCN/LCN_Data";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { getTimeFromNow } from "@/lib/dateDiffFromNow";
import { addNumberStrings } from "@/lib/addStrings";
import { isLCNExpired } from "@/lib/dateExpiry";

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

type Params = {
  lcn: string;
};

export function generateStaticParams(): Params[] {
  return validLCNs.map((lcn) => ({ lcn }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lcn } = await params;
  return {
    title: `License Info for ${lcn}`,
  };
}

export default async function LcnPage({ params }: { params: Params }) {
  const { lcn } = await params;
  let lcnData: LcnData

  const batchFolder = lcnToBatch[lcn];
  if (!batchFolder) return notFound();

  try {
    lcnData = (await import(`@/data/LCN/${batchFolder}/${lcn}`)).default;
    const expired = isLCNExpired(lcnData.expiration);

    if (expired) {
      // 🔁 RENDER THIS BLOCK IF EXPIRED
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-8">
          <h1 className="text-2xl font-bold text-red-600">License Expired</h1>
          <h3 className="mt-2 text-sm text-gray-600">
            The license for <strong>{lcnData.name}</strong> (#{lcn}) expired on{" "}
            <strong>{lcnData.expiration}</strong>.
          </h3>
          <br/>
            <Button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md px-3 py-1.5">
              <Link href="/">Return</Link>
            </Button>
        </div>
      );
    }

    return (
      <div className="bg-[#f9fafc] font-sans text-gray-700 min-h-screen p-4 sm:p-6 md:p-10">
        <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-gray-700 font-semibold text-sm rounded-md px-3 py-1.5 border border-gray-300 bg-white hover:bg-gray-50">
                <FontAwesomeIcon icon={faUser} className="text-gray-600" />
                <span className="block sm:hidden">EMT</span>
                <span className="hidden sm:block">
                  Emergency Medical Technician
                </span>{" "}
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
                  alt="Man wearing black turtleneck and orange beanie looking to side"
                  className="object-cover w-full h-full"
                  height="375"
                  src="https://storage.googleapis.com/a1aa/image/b4e644f7-5b41-4833-dd1b-937d1072abf4.jpg"
                  width="300"
                />
              </div>
              <Button className="w-full text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md py-2 hover:bg-gray-50">
                <Link href={`/${lcn}/certificate`}>View Certificate</Link>
              </Button>
              <Button className="w-full text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md py-2 hover:bg-gray-50">
                <Link href={`/${lcn}/license`}>View License Card</Link>
              </Button>
            </div>
            <div className="w-full md:w-2/3 p-5 space-y-6">
              <h3 className="text-xs font-semibold text-gray-700 mb-2">
                Profile Information
              </h3>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    Legal Name
                  </label>
                  <h2
                    className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    id="username"
                  >
                    {lcnData.name}
                  </h2>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    License Number
                  </label>
                  <h2 className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                    {lcnData.lcn}
                  </h2>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    Date of Issuance
                  </label>
                  <h2 className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                    {lcnData.issued}
                  </h2>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    Date of Expiration
                  </label>
                  <h2
                    className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                    id="display-name"
                  >
                    {lcnData.expiration}
                  </h2>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    Duration Active (Latest Re-Certification)
                  </label>
                  <h2 className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                    {getTimeFromNow(lcnData.issued)} ({lcnData.registration})
                  </h2>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-600 mb-1">
                    Course Instructor
                  </label>
                  <h2 className="w-full text-xs rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                    Wilky S. Lao
                  </h2>
                </div>
              </form>
              <div>
                <h4 className="text-xs font-semibold text-gray-700 mb-2">
                  Grading Table
                </h4>
                <p className="text-xs text-gray-600 col-span-1 sm:col-span-2 mb-2">
                  OCR Paragraph Text Placeholder
                </p>
                <div className="overflow-x-auto border border-gray-300 rounded-md">
                  <table className="min-w-full text-xs text-left text-gray-700 table-fixed">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="w-24 px-3 py-2 border-b border-gray-300 font-semibold">
                          Total <span className="block sm:hidden">%</span>
                          <span className="hidden sm:block">
                            Percentage
                          </span>{" "}
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
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          10%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Final Written Examination
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.FWE}%
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          20%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Situational Judgement Examination
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.SJE}%
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          10%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Equipment Proficiency
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.EP}%
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          10%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Patient Assessment Skills
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.PAS}%
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          25%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Critical Case Scenario in Trauma
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.CCST}%
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50">
                        <td className="px-3 py-2 border-b border-gray-200">
                          25%
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          Critical Case Scenario in Medical
                        </td>
                        <td className="px-3 py-2 border-b border-gray-200">
                          {lcnData.CCSM}%
                        </td>
                      </tr>
                    </tbody>
                    <thead className="bg-gray-100">
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
                    </thead>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch {
    return notFound();
  }
}
