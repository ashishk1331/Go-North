import H from "@/components/landing/Header.jsx";
import B from "@/components/landing/Body.jsx";
import F from "@/components/landing/Footer.jsx";
import N from "@/components/landing/Navbar.jsx";
import T from "@/components/landing/Team.jsx";

import Fe from "@/components/landing/Features.jsx";
import Te from "@/components/landing/Templates.jsx";

export default function (props) {
  return (
    <main className="max-h-screen flex flex-col items-center text-white">
      <H />
      {/*<N />*/}
      <B />
      <F />
      <T />
      {/*<Fe />*/}
      <Te />
    </main>
  );
}
