import Image from "next/image";

import ChartItem from "@/components/ChartItem";

export default function Home() {
  return (
    <div className="mt-16 flex-col flex gap-16 drop-shadow-xl">
      <ChartItem id={33} title="Spring and summershoes" price={29} />
      <ChartItem id={33} title="Spring and summershoes" price={29} />
      <ChartItem id={33} title="Spring and summershoes" price={29} />
    </div>
  );
}
