import WorkDetailCard from "@/Components/WorkDetail/WorkDetailCard";
import IWork from "@/types/workType";
import React from "react";

interface WorkDetailProps {
  params: Promise<{
    workId: string;
  }>;
}

const getWorkData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Data fetching Unsuccesfull", error);
    return [];
  }
};

const WorkDetailPage = async ({ params }: WorkDetailProps) => {
  const works: IWork[] = await getWorkData();
  const { workId } = await params;
  const workDetails = works.find(
    (work: IWork) => String(work.id) === String(workId),
  );
  if (!workDetails) {
    return <div>Soory indivisual workout details not found</div>;
  }
  return (
    <div>
      <WorkDetailCard work={workDetails} />
    </div>
  );
};

export default WorkDetailPage;
