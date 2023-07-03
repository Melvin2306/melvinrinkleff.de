export async function GET(Request) {
  const { id } = Request.params;
  const exp = await prisma.experience.findUnique({
    where: {
      id: Number(id),
    },
  });
  return new Response(exp);
}
