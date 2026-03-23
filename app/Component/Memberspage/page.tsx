import LayoutMembers from "@/app/Component/Memberspage/LayoutMembers";
import MemberCard from "@/app/Component/Memberspage/MemberCard";
import {members} from "@/app/Data/DataMember";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer_Homepage";
import Link from "next/link";

export default function MembersPage() {
    return(
        <section className="bg-white">
            <Navbar/>
            <LayoutMembers>
                {members.map((member) => (
                    <Link key={member.id} href={`/Component/Member/${member.id}`}>
                        <MemberCard key={member.id} id={member.id}/>
                    </Link>
                ))}
            </LayoutMembers>
            <Footer/>
        </section>
    );
}