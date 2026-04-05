import Layout from './components/layout/Layout';
import Sidebar from './components/profile/Sidebar';
import ProjectStack from './components/projects/ProjectStack';

/**
 * Root Application Component
 * Wraps the main view in the responsive Layout provider.
 */
export default function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <ProjectStack />
    </Layout>
  );
}
