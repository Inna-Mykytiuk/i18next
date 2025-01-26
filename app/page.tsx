import Link from "next/link";
import ExampleClientComponent from "@/components/ExampleClientComponent";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ExampleClientComponent />
      <Link href="/about-us">About</Link>
    </main>
  );
}
