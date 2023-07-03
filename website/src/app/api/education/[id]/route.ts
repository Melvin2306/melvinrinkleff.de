export async function GET(Request, { params }) {
  const { id } = params.id;
  const edu = await prisma.education.findUnique({
    where: {
      id: Number(id),
    },
  });
  return new Response(`${edu}'s education`);
}
