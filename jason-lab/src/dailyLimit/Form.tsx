import React, { ChangeEvent, Dispatch } from 'react';
import { TExpenseLog } from './types';

type TProps = {
  limit: string;
  desc: string;
  price: string;
  setLimit: Dispatch<React.SetStateAction<string>>;
  setDesc: Dispatch<React.SetStateAction<string>>;
  setPrice: Dispatch<React.SetStateAction<string>>;
  setExpenseLogs: Dispatch<React.SetStateAction<TExpenseLog[]>>;
};

function Form({ limit, desc, price, setLimit, setDesc, setPrice, setExpenseLogs }: TProps) {
  const onChangeLimit = (e: ChangeEvent<HTMLInputElement>) => {
    setLimit(e.target.value);
  };

  const onChangeDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const addLog = () => {
    if (!desc) {
      alert('내역을 입력하세요.');
      return;
    }

    if (!price) {
      alert('금액을 입력하세요.');
      return;
    }

    setExpenseLogs((prev) => [
      ...prev,
      { id: new Date().getTime(), desc, price }
    ]);
  };

  return (
    <form className="w-80 mx-auto text-slate-900">
      <div className="flex items-center">
        <label className="w-20" htmlFor="limit">일 지출 한도</label>
        <input className="ml-2 p-2 flex-1 border rounded outline-none" type="number" name="limit" value={limit} onChange={onChangeLimit} />
      </div>
      <div className="mt-2 flex items-center">
        <label className="w-20" htmlFor="desc">지출 내역</label>
        <input className="ml-2 p-2 flex-1 border rounded outline-none" type="text" name="desc" value={desc} onChange={onChangeDesc} />
      </div>
      <div className="mt-2 flex items-center">
        <label className="w-20" htmlFor="price">지출 금액</label>
        <input className="ml-2 p-2 flex-1 border rounded outline-none" type="number" name="price" value={price} onChange={onChangePrice} />
      </div>
      <div className="mt-2">
        <button className="py-2 w-full border rounded" type="button" onClick={addLog}>저장</button>
      </div>
    </form>
  );
}

export default Form;
