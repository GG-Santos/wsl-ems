import { notFound } from "next/navigation";
import { validLCNs, lcnToBatch } from "@/data/LCN/LCN_Data";
import { isLCNExpired } from "@/lib/dateExpiry";
import LcnViewer from "@/app/[lcn]/LcnViewer";

type Params = { lcn: string };

export function generateStaticParams(): Params[] {
  return validLCNs.map((lcn) => ({ lcn }));
}

export default async function LcnPage(
  props: { params: Promise<Params> }
) {
  const { lcn } = await props.params;
  const batchFolder = lcnToBatch[lcn];
  if (!batchFolder) return notFound();

  try {
    const lcnData = (await import(`@/data/LCN/${batchFolder}/${lcn}`)).default;
    const expired = isLCNExpired(lcnData.expiration);

    return <LcnViewer lcn={lcn} lcnData={lcnData} expired={expired} />;
  } catch {
    return notFound();
  }
}




