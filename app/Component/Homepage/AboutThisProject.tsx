export default function AboutThisProject() {
  return (
    <article className="w-dvw flex bg-white items-center justify-center mt-30 px-4">
      <section className="bg-[#F9FAFB] text-center text-[#101828] py-8 mt-8 max-w-3xl p-4 aspect-192/49">
        <h2
          style={{ fontSize: "clamp(24px, 24px + 0.5vw, 30px)" }}
          className="font-medium mb-4"
        >
          Về dự án này
        </h2>
        <p
          style={{ fontSize: "clamp(14px, 14px + 0.5, 16px)" }}
          className="text-[#4A5565]"
        >
          Đây là dự án cuối kỳ của nhóm chúng tôi, được thực hiện nhằm chia sẻ
          niềm đam mê với truyện tranh và tiểu thuyết đồ họa. Mỗi thành viên đã
          lựa chọn những tác phẩm yêu thích của mình ở nhiều thể loại khác nhau,
          tạo nên một bộ sưu tập đa dạng, thể hiện sự phong phú và tiềm năng kể
          chuyện đầy sáng tạo của loại hình nghệ thuật này.
        </p>
        <p
          style={{ fontSize: "clamp(14px, 14px + 0.5, 16px)" }}
          className="text-[#4A5565] mt-4"
        >
          Từ những thiên anh hùng ca siêu anh hùng đến các câu chuyện đời thường
          đầy cảm xúc, bộ sưu tập của chúng tôi tôn vinh giá trị nghệ thuật của
          truyện tranh. Hy vọng bạn sẽ thích thú khi khám phá những tác phẩm
          tuyệt vời này, giống như cách chúng tôi đã hào hứng khi lựa chọn
          chúng.
        </p>
      </section>
    </article>
  );
}
