import Layout from "./components/layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectStack from "./components/projects/ProjectStack";

export default function App() {
  return (
    
    <Layout sidebar={<Sidebar />}>
      <ProjectStack />
    </Layout>
  );
}