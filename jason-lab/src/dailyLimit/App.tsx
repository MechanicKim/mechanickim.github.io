'use client';

import React, { useState } from 'react';
import '../index.css';

import Header from './Header';
import Form from './Form';
import ExpenseLog from './ExpenseLog';
import Total from './Total';

import { TExpenseLog } from './types';

function App() {
  const [limit, setLimit] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [expenseLogs, setExpenseLogs] = useState<TExpenseLog[]>([]);

  return (
    <main className="pb-3 w-screen h-screen flex flex-col">
      <Header title="일 한도 가계부" />
      <Form
        limit={limit}
        desc={desc}
        price={price}
        setLimit={setLimit}
        setDesc={setDesc}
        setPrice={setPrice}
        setExpenseLogs={setExpenseLogs}
      />
      <div className="w-80 mt-2 mx-auto flex-1 overflow-y-auto">
        <div className="border rounded text-slate-900">
          {expenseLogs.map((log) => <ExpenseLog log={log} setExpenseLogs={setExpenseLogs} />)}
          <Total limit={+(limit || 0)} expenseLogs={expenseLogs} />
        </div>
      </div>
    </main>
  )
}

export default App;
