interface EducationParams {
  id: string;
}

export async function GET(Request: Request, { params }: { params: Number }) {
  
  const edu = await prisma.education.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({ education: edu });

  return new Response(`${edu}'s education`);
}
