import Data00 from "@/data/LCN/BATCH-00/LCN_Data";
import Data01 from "@/data/LCN/BATCH-01/LCN_Data";
import Data02 from "@/data/LCN/BATCH-02/LCN_Data";
import Data03 from "@/data/LCN/BATCH-03/LCN_Data";
import Data04 from "@/data/LCN/BATCH-04/LCN_Data";
import Data05 from "@/data/LCN/BATCH-05/LCN_Data";
import Data06 from "@/data/LCN/BATCH-06/LCN_Data";
import Data07 from "@/data/LCN/BATCH-07/LCN_Data";
import Data08 from "@/data/LCN/BATCH-08/LCN_Data";
import Data09 from "@/data/LCN/BATCH-09/LCN_Data";
import Data10 from "@/data/LCN/BATCH-10/LCN_Data";
import Data11 from "@/data/LCN/BATCH-11/LCN_Data";
import Data12 from "@/data/LCN/BATCH-12/LCN_Data";
import Data13 from "@/data/LCN/BATCH-13/LCN_Data";
import Data14 from "@/data/LCN/BATCH-14/LCN_Data";
import Data15 from "@/data/LCN/BATCH-15/LCN_Data";
import Data16 from "@/data/LCN/BATCH-16/LCN_Data";

// ADD NEW BATCHES HERE USING => import DataXX from "@/data/LCN/BATCH-XX/LCN_Data";

const batchMap: Record<string, string> = {};

const sources: { batch: string; data: string[] }[] = [
  { batch: 'BATCH-00', data: Data00 },
  { batch: 'BATCH-01', data: Data01 },
  { batch: 'BATCH-02', data: Data02 },
  { batch: 'BATCH-03', data: Data03 },
  { batch: 'BATCH-04', data: Data04 },
  { batch: 'BATCH-05', data: Data05 },
  { batch: 'BATCH-06', data: Data06 },
  { batch: 'BATCH-07', data: Data07 },
  { batch: 'BATCH-08', data: Data08 },
  { batch: 'BATCH-09', data: Data09 },
  { batch: 'BATCH-10', data: Data10 },
  { batch: 'BATCH-11', data: Data11 },
  { batch: 'BATCH-12', data: Data12 },
  { batch: 'BATCH-13', data: Data13 },
  { batch: 'BATCH-14', data: Data14 },
  { batch: 'BATCH-15', data: Data15 },
  { batch: 'BATCH-16', data: Data16 },


  // ADD NEW BATCHES HERE USING => { batch: 'BATCH-XX', data: DataXX },


];

export const validLCNs: string[] = sources.flatMap(({ batch, data }) => {
  data.forEach((lcn: string) => {
    batchMap[lcn] = batch;
  });
  return data;
});

export const lcnToBatch = batchMap;

export default validLCNs;