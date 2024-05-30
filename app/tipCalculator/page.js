import Link from "next/link";
import PanelLayout from "./panelLayout";
import TipForm from "./tipForm";

export default function Tips() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase tracking-widest text-cyan-800">
        Tip Calculator 😎
      </h1>
      <PanelLayout>
        <TipForm />
      </PanelLayout>
      <p className="pt-5 tracking-wide">
        Go back to the borrowing old calculator
      </p>
      <Link
        href={"/"}
        className="underline p-2 font-mono font-bold hover:text-cyan-800"
      >
        Click me
      </Link>
    </main>
  );
}
