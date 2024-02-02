import Link from "next/link";

export default function Imprint() {
  return (
    <div className="mb-20">
      <h1>Imprint</h1>
      <h2> Melvin Rinkleff </h2>
      <p> Kornradenstraße 2A </p>
      <p> 30419 Hannover</p>
      <p> Germany </p>
      <p>
        {" "}
        Email:{" "}
        <Link href="mailto:moin@melvinrinkleff.de">moin@melvinrinkleff.de</Link>
      </p>{" "}
    </div>
  );
}
