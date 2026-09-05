import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { getWorks, getWorkData } from "@/lib/mdx";
import { notFound } from "next/navigation";
import WorkClient from "./WorkClient";

export async function generateStaticParams() {
  const works = getWorks();
  return works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const data = getWorkData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <WorkClient data={data} />
  );
}

