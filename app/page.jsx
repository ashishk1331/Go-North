import H from "@/components/landing/Header.jsx";
import B from "@/components/landing/Body.jsx";
import F from "@/components/landing/Footer.jsx";

export default function (props) {
  return (
    <main className="w-full min-h-screen flex flex-col items-center text-white bg-[#000]">
      <H />
      <B />
      <F />
    </main>
  );
}
