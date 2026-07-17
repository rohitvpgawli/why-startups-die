import { Explorer } from "./explorer";
import { startups } from "./startups.generated";
import { yc2021SamplingFrame } from "./cohort.generated";

export default function Home() {
  return <Explorer startups={startups} samplingFrame={yc2021SamplingFrame} />;
}
