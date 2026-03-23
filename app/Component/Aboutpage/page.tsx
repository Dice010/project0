import AboutLayout from "@/app/Component/Aboutpage/Combine";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer_Homepage";
import { features } from "@/app/Component/Aboutpage/ProjectBox";
import BoxCard from "@/app/Component/Aboutpage/ProjectBox";
import TecStack from "@/app/Component/Aboutpage/TecStack";
import Banner from "@/app/Component/Aboutpage/Banner";

export default function Aboutpage() {
  return (
    <main className="bg-white">
      <Navbar />
      <AboutLayout className="px-5 lg:px-100">
        <article className="w-dvw text-center bg-linear-to-b from-purple-100 to-white pt-10 md:pt-20">
          <h1
            style={{ fontSize: "clamp(30px, 30px + 0.5vw, 48px)" }}
            className="font-medium text-black"
          >
            Về dự án
          </h1>
          <p
            style={{ fontSize: "clamp(16px, 16px + 0.5vw, 20px)" }}
            className="text-[#4A5565]"
          >
            Dự án mẫu, được tạo ra để tôn vinh nghệ thuật truyện tranh và
            graphic novel
          </p>
        </article>
        <article
          style={{ fontSize: "clamp(14px, 14px + 0.5vw, 16px)" }}
          className="w-full gap-4 flex flex-col justify-center items-center text-[#4A5565] bg-white pt-10 md:pt-20"
        >
          <h3
            style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
            className="text-black font-medium"
          >
            Mục Tiêu Của Chúng Tôi
          </h3>
          <p>
            Comic Books Showcase là dự án của nhóm tôi, nơi chúng tôi muốn lan
            tỏa tình yêu dành cho truyện tranh và nghệ thuật kể chuyện. Với
            chúng tôi, truyện tranh không chỉ là những trang giấy — đó là sự kết
            hợp độc đáo giữa hình ảnh và ngôn từ, tạo nên những trải nghiệm mà
            không có định dạng nào khác có thể mang lại.
          </p>
          <p>
            Dự án tập hợp 12 tựa truyện được chọn lọc kỹ càng, đa dạng thể loại
            — từ những cuộc phiêu lưu siêu anh hùng mãn nhãn đến những câu
            chuyện đời thường đầy cảm xúc. Mỗi tựa đều do một thành viên trong
            nhóm tự tay chọn, dựa trên sự yêu thích cá nhân, giá trị nghệ thuật
            và cái cách mà câu chuyện được kể.
          </p>
        </article>
        <section className="flex flex-col justify-center items-center pt-10 md:pt-20">
          <div className="flex flex-col justify-center items-center bg-[#F9FAFB] p-4">
            <h3
              style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
              className="text-black font-medium"
            >
              Khám Phá Dự Án
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {features.map((feature) => (
                <BoxCard key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </section>
        <TecStack />
        <Banner />
      </AboutLayout>
      <Footer />
    </main>
  );
}
