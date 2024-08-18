import React from 'react';

import { TExpenseLog } from './types';

type TProps = {
  limit: number;
  expenseLogs: TExpenseLog[];
};

function Total({ limit, expenseLogs }: TProps) {
  if (expenseLogs.length === 0) return;

  const total = expenseLogs.reduce((acc, { price }) => acc + +price, 0);

  return (
    <>
      <div className="px-2 py-1 flex border-t">
        <div className="flex-1">일 한도</div>
        <div>{limit.toLocaleString()} 원</div>
      </div>
      <div className="px-2 py-1 flex">
        <div className="flex-1">총 지출</div>
        <div>{total.toLocaleString()} 원</div>
      </div>
      <div className="px-2 py-1 flex border-t">
        <div className="flex-1">남은 금액</div>
        <div>{(limit - total).toLocaleString()} 원</div>
      </div>
    </>
  );
}

export default Total;
