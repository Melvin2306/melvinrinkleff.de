export default function Page({ params }: { params: { education: string } }) {
  return <h1>My Education {params.education}</h1>;
}
