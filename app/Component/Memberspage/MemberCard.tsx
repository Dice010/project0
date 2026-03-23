import { members } from "@/app/Data/DataMember";
import Image from "next/image";
import TagRole from "@/app/Component/TagRole";
import TagGenres from "@/app/Component/TagGenres";

type PropMembersCard = {
  id: number;
};

export default function MemberCard({ id }: PropMembersCard) {
  const member = members.find((member) => member.id === id);
  if (!member) {
    return <></>;
  }
  return (
    <div
      className="bg-white 
        rounded-lg 
        shadow-xl 
        overflow-hidden 
        text-black
        text-left 
        cursor-pointer
        transition-transform 
        duration-300 
        ease-out
        hover:scale-105"
    >
      <Image
        src={member.imgURL}
        alt={member.name || member.name + " Image"}
        width={300}
        height={300}
        className="aspect-2/3 w-full object-cover"
      />
      <div className="p-4">
        <h3
          style={{ fontSize: "clamp(14px, 14px + 0.5vw, 18px)" }}
          className="font-medium text-black pb-2"
        >
          {member.name}
        </h3>
        <div className="mt-2 flex flex-wrap justify-start items-center gap-2 max-sm:hidden pb-2">
          {member.role.map((g) => (
            <TagRole key={g} keyCode={g} />
          ))}
        </div>
        <p
          style={{ fontSize: "clamp(12px, 12px + 0.5 vw, 14px)" }}
          className="text-gray-500 pb-2"
        >
          {member.introduction}
        </p>
        <p
          style={{ fontSize: "clamp(12px, 12px + 0.5 vw, 14px)" }}
          className="text-gray-500 pb-2"
        >
          {member.contributions}
        </p>
        <span
          style={{ fontSize: "clamp(12px, 12px + 0.5 vw, 14px)" }}
          className="text-gray-500 pb-2 max-sm:hidden"
        >Thể loại yêu thích: </span>
        <div className="mt-2 flex flex-wrap justify-start items-center gap-2 max-sm:hidden pb-2">
          {member.favoriteGenres.map((g) => (
            <TagGenres key={g} name={g} />
          ))}
        </div>
      </div>
    </div>
  );
}
