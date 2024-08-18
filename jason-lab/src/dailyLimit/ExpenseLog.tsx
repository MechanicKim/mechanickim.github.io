import React, { Dispatch } from 'react';
import { TExpenseLog } from './types';

type TProps = {
  log: TExpenseLog;
  setExpenseLogs: Dispatch<React.SetStateAction<TExpenseLog[]>>;
}

function ExpenseLog({ log, setExpenseLogs }: TProps) {
  const { id, desc, price } = log;

  const removeLog = (id: number) => {
    setExpenseLogs((prev) => prev.filter((log) => log.id !== id));
  }

  return (
    <div key={id} className="px-2 py-1 flex">
      <div className="flex-1">{desc}</div>
      <div>{(+price).toLocaleString()} 원</div>
      <div>
        <button className="px-1 text-slate-400" onClick={() => { removeLog(id); }}>x</button>
      </div>
    </div>
  )
}

export default ExpenseLog;
