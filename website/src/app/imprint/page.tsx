import Link from "next/link";

export default function Imprint() {
  return (
    <div>
      <h1>Imprint</h1>
      <h2> Melvin Rinkleff </h2>
      <p> Kornradenstraße 2A </p>
      <p> 30419 Hannover</p>
      <p> Germany </p>
      <p>
        {" "}
        Email:{" "}
        <Link href="mailto:info@melvinrinkleff.de">info@melvinrinkleff.de</Link>
      </p>{" "}
    </div>
  );
}
