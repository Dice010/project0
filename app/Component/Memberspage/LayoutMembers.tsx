import { ReactNode } from "react";

type ProbLayoutMembers = {
  children: ReactNode;
};

export default function LayoutMembers({ children }: ProbLayoutMembers) {
  return (
    <section className="flex flex-col justify-center items-center px-5 pt-10 lg:px-50 md:pt-20 text-center">
      <h1
        style={{ fontSize: "clamp(30px, 30px + 0.5vw, 36px)" }}
        className="font-medium text-black lg:px-50"
      >
        Đội Ngũ Của Chúng Tôi
      </h1>
      <p
        style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
        className="text-[#4A5565] pb-5"
      >
        Bốn sinh viên với niềm đam mê chung — truyện tranh và những câu chuyện
        đáng nhớ. Mỗi người một phong cách, một thể loại riêng, cùng nhau tạo
        nên bộ sưu tập đa dạng này.
      </p>
      <div className="grid grid-cols-1 gap-4 lg:gap-10 lg:grid-cols-4 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}
