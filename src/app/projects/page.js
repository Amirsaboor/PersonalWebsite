// app/projects/page.jsx
import ProjectsClient from "@/components/Project/ProjectClient";
import { projects } from "@/components/Project/ProjectsData";
import { SimpleLayout } from "@/components/SimpleLayout";


export const metadata = {
  title: "Projects - Name Family",
  description: "A couple of my favorite personal projects.",
};

export default function ProjectsPage() {
  return (
    <SimpleLayout
      title="پروژه های مورد علاقه من"
      intro="تعدادی از پروژه‌های شخصی و تمرینی من در حوزه وب و برنامه‌نویسی."
    >
      {/* پروژه‌ها رو به کامپوننت client پاس می‌دیم */}
      <ProjectsClient initialProjects={projects} />
    </SimpleLayout>
  );
}
