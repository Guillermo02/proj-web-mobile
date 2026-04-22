import Link from "next/link"; //Reload só dos elementos que mudaram da página

export default function Home() {
  return (
    <Link href="/sobre">Next page</Link>
  );
}
