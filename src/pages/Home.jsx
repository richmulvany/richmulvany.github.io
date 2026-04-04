import MainLayout from '../components/layout/MainLayout';
import Sidebar from '../components/profile/Sidebar';
import ProjectStack from '../components/projects/ProjectStack';

export default function Home() {
  return (
    <MainLayout sidebar={<Sidebar />}>
      <ProjectStack />
    </MainLayout>
  );
}
