import ProjectsClient from "@/components/Project/ProjectClient";
import { projects } from "@/components/Project/ProjectsData";
import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata = {
  title: "نمونه‌کارها",
  description:
    "منتخبی از پروژه‌های وب امیر صبور با React، Next.js، TypeScript و WordPress.",
};

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="پروژه‌هایی که ساخته‌ام"
      intro="منتخبی از تجربه‌های من در طراحی و توسعه وب؛ از فروشگاه‌های اینترنتی تا رابط‌های کاربری مبتنی بر React و Next.js."
    >
      <ProjectsClient initialProjects={projects} />
    </SimpleLayout>
  );
}
