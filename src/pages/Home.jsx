import MainLayout from "../components/layout/MainLayout";
import Sidebar from "../components/sidebar/Sidebar";
import ProjectStack from "../components/projects/ProjectStack";

export default function Home() {
  return (
    <MainLayout sidebar={<Sidebar />}>
      <ProjectStack />
    </MainLayout>
  );
}