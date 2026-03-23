import { Genrekey } from "./DataGenre";

/*
    Toan: Conan, ẩm thực dị giới, doraemon
    Tri:  Shin cậu bé bút chì,Tom và jerry,Dế mèn phưu lưu kí
    Phuc: Gundam, Toriko thợ săn ẩm thực, One piece
    Nam: You and I Are Polar Opposites, The Angel Next Door, Iruma-kun
*/

export const path: string = "/img/Books/";

export type Books = {
  id: number;
  title: string;
  genre: Genrekey[];
  author: string;
  summary: string;
  coverImage: string;
  bannerImage: string;
  selectedbyId: number;
};

export const books: Books[] = [
  {
    id: 0,
    title: "Thám tử lừng danh Conan",
    genre: ["Detective", "Crime", "Psychological_mystery"],
    author: "Gosho Aoyama",
    summary:
      "Kudō Shinichi, một thám tử trung học xuất sắc, bị tổ chức Áo Đen ép uống loại thuốc bí ẩn khiến cơ thể cậu bị teo nhỏ thành một đứa trẻ. Lấy tên giả là Edogawa Conan, Shinichi tiếp tục sống bên cạnh Mori Ran và âm thầm phá giải các vụ án phức tạp, đồng thời truy tìm tung tích tổ chức tội phạm đã hủy hoại cuộc đời mình.",
    coverImage: path + "Conan.png",
    bannerImage: path + "Conan_Banner.png",
    selectedbyId: 0
  },
  {
    id: 1,
    title: "Ẩm thực dị giới",
    genre: ["Cooking", "Isekai", "Slice_of_Life"],
    author: "Eguchi Ren",
    summary:
      "Mukouda Tsuyoshi bị triệu hồi sang dị giới nhưng không có năng lực chiến đấu nào nổi bật, chỉ sở hữu kỹ năng đặc biệt cho phép mua sắm thực phẩm từ thế giới hiện đại. Nhờ những món ăn quen thuộc nhưng vượt xa trình độ ẩm thực của dị giới, anh dần thu phục những sinh vật mạnh mẽ và bắt đầu hành trình phiêu lưu nhẹ nhàng, xoay quanh nấu ăn, sinh tồn và tận hưởng cuộc sống.",
    coverImage: path + "Isekai.png",
    bannerImage: path + "Isekai_Banner.png",
    selectedbyId: 0
  },
  {
    id: 2,
    title: "Doraemon",
    genre: ["Children", "Science_Fiction", "Family"],
    author: "Fujiko F. Fujio",
    summary:
      "Doraemon là chú mèo máy đến từ thế kỷ 22, được gửi về quá khứ để giúp đỡ cậu bé hậu đậu Nobita cải thiện cuộc sống và tương lai. Thông qua những bảo bối kỳ lạ và các tình huống đời thường hài hước, bộ truyện mang đến những câu chuyện nhẹ nhàng, giàu trí tưởng tượng, đồng thời truyền tải các bài học nhân văn về tình bạn, gia đình và trách nhiệm.",
    coverImage: path + "Doraemon.png",
    bannerImage: path + "Doraemon_Banner.png",
    selectedbyId: 0
  },
  {
    id: 3,
    title: "Shin Cậu Bé Bút Chì",
    genre: ["Children", "Comedy", "Slice_of_Life"],
    author: "Yoshito Usui",
    summary:
      "Shinnosuke Nohara là một cậu bé mẫu giáo có tính cách lém lỉnh, vô tư và thường xuyên tạo ra những tình huống dở khóc dở cười cho gia đình và những người xung quanh. Thông qua các câu chuyện đời thường mang màu sắc châm biếm nhẹ, bộ truyện phản ánh cuộc sống gia đình, xã hội Nhật Bản một cách hài hước nhưng không kém phần sâu cay.",
    coverImage: path + "Shin.png",
    bannerImage: path + "Shin_Banner.png",
    selectedbyId: 1
  },
  {
    id: 4,
    title: "Tom và Jerry",
    genre: ["Children", "Comedy", "Slapstick_Comedy"],
    author: "William Hanna & Joseph Barbera",
    summary:
      "Tom và Jerry xoay quanh những màn rượt đuổi bất tận giữa chú mèo Tom và chú chuột Jerry thông minh, lém lỉnh. Không cần nhiều lời thoại, bộ truyện sử dụng hài hình thể, hành động phóng đại và các tình huống trớ trêu để tạo nên tiếng cười trực quan, phù hợp với mọi lứa tuổi và vượt qua rào cản ngôn ngữ.",
    coverImage: path + "TomAndJerry.png",
    bannerImage: path + "TomAndJerry_Banner.png",
    selectedbyId: 1
  },
  {
    id: 5,
    title: "Dế Mèn Phiêu Lưu Ký",
    genre: ["Allegory", "Adventure", "Children"],
    author: "Tô Hoài",
    summary:
      "Dế Mèn Phiêu Lưu Ký kể về hành trình trưởng thành của chú Dế Mèn bồng bột, kiêu ngạo, phải trả giá cho những hành động nông nổi của mình và dần học cách sống có trách nhiệm, biết yêu thương và tôn trọng kẻ khác. Thông qua thế giới loài vật được nhân hoá, tác phẩm gửi gắm những bài học sâu sắc về đạo đức, tình bạn và lẽ sống.",
    coverImage: path + "DeMenPhieuLuuKy.png",
    bannerImage: path + "DeMenPhieuLuuKy_Banner.png",
    selectedbyId: 1
  },
  {
    id: 6,
    title: "Mobile Suit Gundam",
    genre: ["Mecha", "Military", "Science_Fiction"],
    author: "Yoshiyuki Tomino",
    summary:
      "Mobile Suit Gundam lấy bối cảnh chiến tranh giữa các phe phái trong không gian, nơi những cỗ Mobile Suit khổng lồ trở thành vũ khí chủ lực. Thông qua số phận của các phi công trẻ tuổi bị cuốn vào vòng xoáy chiến tranh, bộ truyện khai thác sâu các chủ đề về xung đột, chính trị, mất mát và cái giá phải trả của chiến tranh, vượt xa khuôn mẫu mecha giải trí thông thường.",
    coverImage: path + "Gundam.png",
    bannerImage: path + "Gundam_Banner.png",
    selectedbyId: 2
  },
  {
    id: 7,
    title: "Toriko Thợ săn ẩm thực",
    genre: ["Cooking", "Adventure", "Action"],
    author: "Mitsutoshi Shimabukuro",
    summary:
      "Toriko lấy bối cảnh một thế giới nơi ẩm thực được xem là đỉnh cao của sức mạnh và danh vọng. Toriko, một thợ săn ẩm thực huyền thoại, cùng đầu bếp Komatsu chu du khắp nơi để săn tìm những nguyên liệu hiếm có và nguy hiểm nhất. Bộ truyện kết hợp hành động mãnh liệt với chủ đề ẩm thực độc đáo, tôn vinh sự sáng tạo, đam mê và giá trị của việc thưởng thức món ăn.",
    coverImage: path + "Toriko.png",
    bannerImage: path + "Toriko_Banner.png",
    selectedbyId: 2
  },
  {
    id: 8,
    title: "One Piece",
    genre: ["Adventure", "Action", "Fantasy"],
    author: "Eiichiro Oda",
    summary:
      "One Piece kể về Monkey D. Luffy và hành trình vượt biển cùng băng Hải Tặc Mũ Rơm để tìm kiếm kho báu huyền thoại One Piece. Trên con đường đó, họ đối mặt với kẻ thù mạnh mẽ, chính quyền thế giới hà khắc và những lựa chọn mang tính sống còn. Bộ truyện đề cao tinh thần tự do, tình bạn, ước mơ và ý chí không khuất phục trước số phận.",
    coverImage: path + "OnePiece.png",
    bannerImage: path + "OnePiece_Banner.png",
    selectedbyId: 2
  },
  {
    id: 9,
    title: "You and I Are Polar Opposites",
    genre: ["Romance", "School", "Slice_of_Life"],
    author: "Kocha Agasawa",
    summary:
      "You and I Are Polar Opposites xoay quanh mối quan hệ giữa Suzuki, một cô gái năng động, hòa đồng và luôn quan tâm đến ánh nhìn của người khác, và Tani, một cậu bạn trầm tính, thẳng thắn và sống đúng với bản thân. Sự đối lập trong tính cách khiến cả hai vừa lúng túng vừa dần thấu hiểu nhau, tạo nên một câu chuyện tình cảm học đường nhẹ nhàng, chân thật và giàu cảm xúc.",
    coverImage: path + "PolarOpposites.png",
    bannerImage: path + "PolarOpposites_Banner.png",
    selectedbyId: 3
  },
  {
    id: 10,
    title: "The Angel Next Door Spoils Me Rotten",
    genre: ["Romance", "Slice_of_Life", "School"],
    author: "Saekisan",
    summary:
      "Amane là một nam sinh sống khép kín, vô tình quen biết Mahiru, cô bạn hàng xóm xinh đẹp, hoàn hảo và được mọi người ví như “thiên sứ”. Từ những lần giúp đỡ nhỏ nhặt trong đời sống thường ngày, cả hai dần xây dựng một mối quan hệ ấm áp, chậm rãi và đầy quan tâm. Bộ truyện tập trung vào sự chữa lành cảm xúc, sự thấu hiểu và tình yêu nảy nở từ những điều giản dị nhất.",
    coverImage: path + "TheAngelNextDoor.png",
    bannerImage: path + "TheAngelNextDoor_Banner.png",
    selectedbyId: 3
  },
  {
    id: 11,
    title: "Mairimashita! Iruma-kun",
    genre: ["Comedy", "Fantasy", "School"],
    author: "Osamu Nishi",
    summary:
      "Suzuki Iruma là một cậu bé hiền lành, luôn bị lợi dụng, bất ngờ bị bán cho một ác quỷ và được đưa đến thế giới ma giới. Tại đây, Iruma phải che giấu thân phận con người và học tập tại trường học của quỷ dữ. Bằng sự tử tế, ngốc nghếch và khả năng thích nghi kỳ lạ, cậu liên tục tạo ra những tình huống hài hước nhưng cũng dần thay đổi cả môi trường xung quanh mình.",
    coverImage: path + "IrumaKun.png",
    bannerImage: path + "IrumaKun_Banner.png",
    selectedbyId: 3
  },
] as const;
