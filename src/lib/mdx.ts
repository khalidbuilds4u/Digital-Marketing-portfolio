import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const insightsDirectory = path.join(process.cwd(), 'src/content/insights');
const workDirectory = path.join(process.cwd(), 'src/content/work');

export function getInsights() {
  const fileNames = fs.readdirSync(insightsDirectory);
  const allInsightsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(insightsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as any),
    };
  });

  return allInsightsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getInsightData(slug: string) {
  const fullPath = path.join(insightsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  const contentHtml = marked.parse(matterResult.content);

  return {
    slug,
    contentHtml,
    ...(matterResult.data as any),
  };
}

export function getWorks() {
  const fileNames = fs.readdirSync(workDirectory);
  const allWorksData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(workDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as any),
    };
  });

  return allWorksData;
}

export function getWorkData(slug: string) {
  const fullPath = path.join(workDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    ...(matterResult.data as any),
  };
}
