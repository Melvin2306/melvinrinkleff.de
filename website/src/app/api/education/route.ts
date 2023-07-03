export async function GET(Request) {
  const { id } = Request.params;
  const education = await prisma.education.findUnique({
    where: {
      id: Number(id),
    },
  });
  return new Response(education);
}
