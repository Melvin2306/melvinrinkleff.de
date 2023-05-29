import Link from "next/link";

export default function Projects() {
  return (
    <div className="mb-40">
      <h1 className="text-xl mb-6">Projects</h1>

      <p>My current project: </p>
      <Link href="https://app.getopinio.com/" className="hover:underline">
        Opinio
      </Link>
    </div>
  );
}
