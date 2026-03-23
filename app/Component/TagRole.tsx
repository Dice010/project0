import {MemberRoleKey, MemberRole} from "@/app/Data/DataMember";

export default function Tag({ keyCode }: { keyCode: MemberRoleKey }) {
  return (
    <div
      style={{ fontSize: "clamp(12px, 12px + 0.5vw, 14px)" }}
      className="inline-block w-fit px-2 py-1 bg-[#FFF7ED] rounded-full text-[#F54900]"
    >
      {MemberRole[keyCode]}
    </div>
  );
}
