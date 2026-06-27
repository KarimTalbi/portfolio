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
        "w-full max-w-3xl mt-10 mx-auto px-16",
        "flex flex-col gap-2 items-start justify-center",
        "portrait:justify-center portrait:mx-0 portrait:px-6 portrait:pt-0"
      )}>

      <div>
        <span className="font-bold tracking-wide font-stretch-75% flex flex-row my-5"
              style={{fontSize: "clamp(20px, 3vw, 25px)"}}>
                <span className="text-accent">[</span>
          &nbsp;STACK&nbsp;
          <span className="text-accent">]</span>
              </span>
      </div>

      {categories.map((category, i) => (
        <div
          key={i}
          className="flex flex-col items-start justify-center gap-0.5 border-l-2 border-page-accent px-3"
        >

          <div className="items-center font-bold tracking-wide font-stretch-90%">
            <p className="uppercase" style={{fontSize: "clamp(12px, 2.5vw, 14px)"}}>{category}</p>

          </div>

          <div className="flex flex-row flex-wrap items-center gap-1">
            {items[i].map((item, idx) => (

                <span
                  key={idx}
                  className="p-1 bg-page-accent font-bold text-page-accent-text rounded-sm text-nowrap m-0 leading-none"
                  style={{fontSize: "clamp(10px, 2.5vw, 12px)"}}
                >
                  {item}
                </span>

            ))}

          </div>
        </div>

      ))}


    </div>
  )
}