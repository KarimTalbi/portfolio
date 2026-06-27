import {cn} from "../../lib/utils.ts";

const categories = [
  "Artificial Intelligence", "Frontend Development", "Backend Development", "Tools & DevOps", "Methodologies"
]

const items = [
  ["LLMs", "Generative Ai", "RAG", "Prompt Engineering", "NLP", "LangChain", "Vector Databases"],
  ["React", "TypeScript", "ReactFlow", "Tailwind", "Vite"],
  ["Python", "FastAPI", "SQL", "PostgreSQL", "Pydantic", "RESTful APIs", "OOP"],
  ["Git / Version Control", "GitHub", "Docker", "CI/CD", "PyCharm", "VS Code"],
  ["Data Modeling", "TDD", "Project Management", "Requirement Engineering"]
]

export default function Stack() {
  return (
    <div
      className={cn(
        "w-full max-w-6xl pt-16 mx-auto px-16",
        "flex flex-col gap-2 items-start justify-center",
        "min-h-screen overflow-hidden",
        "portrait:justify-center portrait:mx-0 portrait:px-6 portrait:pt-0"
      )}>

      {categories.map((category, i) => (
        <div
          key={i}
          className="flex flex-col items-start text-left h-full justify-center w-full gap-1 font-bold tracking-wide font-stretch-75% border-l-2 border-page-accent px-3 my-1"
          style={{fontSize: "clamp(12px, 2.5vw, 16px)"}}
        >
          <div className="flex flex-row items-center">
            <p className="uppercase">{category}</p>
            <p className="mx-1">=</p>
            <p>{"{"}</p>
          </div>

          <div className="flex flex-row flex-wrap items-center font-bold tracking-normal gap-2">
            {items[i].map((item, idx) => (
              <div key={idx} className="flex flex-row items-center gap-1">
                <p className="px-0.5 bg-page-accent text-page-accent-text rounded-sm text-nowrap">{item}</p>
              </div>
            ))}
          </div>
          <p>{"}"}</p>
        </div>
      ))}


    </div>
  )
}