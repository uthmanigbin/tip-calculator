"use client";

import { useState, useEffect } from "react";

import BillAmount from "./billAmount";
import TipAmount from "./tipAmount";
import PeopleAmount from "./peopleAmount";
import DisplayCard from "./displayCard";

const TipForm = () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState('');

  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [total, setTotal] = useState(0);

  const handleResetTip = (e) => {
    e.preventDefault();
    setBill(0);
    setPeople(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill && tip && people) {
      const tipAmount = Number(bill) * Number(tip);
      const totalAmount = Number(bill) + tipAmount;

      setTipPerPerson(tipAmount / people);
      setTotalPerPerson(totalAmount / people);
      setTotal(totalAmount);
    }
  }, [bill, tip, people]);

  return (
    <form className="mx-auto grid max-w-6xl gap-y-5 lg:grid-cols-2 lg:gap-x-8">
      <div className="flex flex-col gap-y-8 py-5 lg:px-5 lg:py-6">
        <BillAmount bill={bill} setBill={setBill} />
        <TipAmount setTip={setTip} />
        <PeopleAmount people={people} setPeople={setPeople} />
      </div>

      <DisplayCard
        tipPerPerson={tipPerPerson}
        totalPerPerson={totalPerPerson}
        total={total}
        reset={handleResetTip}
      />
    </form>
  );
};

export default TipForm;
