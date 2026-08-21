import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import Layout from "./components/Layout";

export default function App() {
  const element = useRoutes(routes);

  return (
    <Suspense
      fallback={
        <div className="px-6 py-16 font-mono text-sm text-bone-dim" role="status">
          Loading…
        </div>
      }
    >
      <Layout>{element}</Layout>
    </Suspense>
  );
}
