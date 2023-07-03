export async function GET(Request) {
  const edu = await prisma.education.findAll();
  return new Response(edu);
}
