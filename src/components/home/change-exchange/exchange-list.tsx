"use client";

import { useForceUpdate } from "@/hooks/use-force-update";
import { Exchange as ExchangeType } from "@/types";
import Exchange from "./exchange";

const ExchangeList = ({ exchanges }: { exchanges: ExchangeType[] }) => {
  const forceUpdate = useForceUpdate();
  return (
    <div className="space-y-2">
      {exchanges.map((exchange, index) => (
        <Exchange exchange={exchange} key={index} forceUpdate={forceUpdate} />
      ))}
    </div>
  );
};

export default ExchangeList;
