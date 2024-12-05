import Image from "next/image";
import JobHuntlyLogo from "@/public/logo.svg";

export default function Header() {
  return (
    <header className={"flex text-2xl px-32 py-6 gap-2"}>
      <Image src={JobHuntlyLogo} alt={"Job Huntly Logo"} />
      <h3 className={"text-custom-dark"}>JobHuntly</h3>
    </header>
  );
}
