import H from "@/components/landing/Header.jsx";
import B from "@/components/landing/Body.jsx";
import F from "@/components/landing/Footer.jsx";
import Te from "@/components/landing/Templates.jsx";

export default function (props) {
  return (
    <main className="max-h-screen flex flex-col items-center text-white">
      <H />
      <B />
      <F />
      <Te />
    </main>
  );
}
