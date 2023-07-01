export default function Page({ params }: { params: { experience: string } }) {
  return <h1>My Experience {params.experience}</h1>;
}
