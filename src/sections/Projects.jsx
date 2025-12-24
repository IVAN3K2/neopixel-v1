import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-6 px-6 max-w-6xl mx-auto">
      <SectionTitle
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.key}
            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-orange-500 transition"
          >
            <h3 className="text-xl font-semibold text-orange-500">
              {t(`projects.items.${project.key}.name`, project.name)}
            </h3>

            <p className="text-sm text-gray-400">
              {t(`projects.items.${project.key}.service`, project.service)}
            </p>

            <p className="mt-2 text-gray-300">
              {t(`projects.items.${project.key}.description`, project.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
