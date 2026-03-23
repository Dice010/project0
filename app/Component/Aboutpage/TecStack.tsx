type TecStackType = {
  id: number;
  title: string;
  tech_1: string;
  tech_2: string;
  tech_3: string;
};

const TecStackVl: TecStackType[] = [
  {
    id: 0,
    title: "Frontend",
    tech_1: "React",
    tech_2: "React Router",
    tech_3: "TypeScript",
  },
  {
    id: 1,
    title: "Styling",
    tech_1: "Tailwind CSS",
    tech_2: "Custom Components",
    tech_3: "Responsive Design",
  },
  {
    id: 2,
    title: "Tools",
    tech_1: "Lucide Icons",
    tech_2: "Unsplash Images",
    tech_3: "Modern ES6+",
  },
];

export default function TecStack() {
  return (
    <section>
      <section className="flex flex-col justify-center items-center pt-10 md:pt-20">
        <div className="flex flex-col justify-center items-center p-4">
          <h3
            style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
            className="text-black font-medium"
          >
            Công Nghệ Sử Dụng
          </h3>
          <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-3 justify-center items-center p-4 mt-4 text-left">
            {TecStackVl.map((box) => (
              <ul
                style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
                key={box.id}
                className="list-disc p-4 text-[#4A5565]"
              >
                <h3
                  style={{ fontSize: "clamp(16px, 16px + 0.5vw, 18px)" }}
                  className="text-black font-medium"
                >
                  {box.title}
                </h3>
                <li className="ml-4">{box.tech_1}</li>
                <li className="ml-4">{box.tech_2}</li>
                <li className="ml-4">{box.tech_3}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
