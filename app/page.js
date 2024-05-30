import Link from "next/link";
import PanelLayout from "./tipCalculator/panelLayout";
import TipForm from "./tipCalculator/tipForm";
import BoringCalculator from "./boringCalculator/boringCalculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24 bg-pink-200">
      <BoringCalculator />
      <p className="pt-5 tracking-wide">Go to an exciting calculator</p>
      <Link
        href={"/tipCalculator"}
        className="underline p-2 font-mono font-bold hover:text-purple-800"
      >
        Click me
      </Link>
    </main>
  );
}
