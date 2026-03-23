import Footer from "@/app/Component/Footer_Homepage";
import Navbar from "@/app/Component/Navbar";

type props = {
    params: {idMember : string}
}

export default async function Member({params} : props) {
    const { idMember } = await params;
    return (
        <div className="bg-white">
            <Navbar/>
            <h1 className="font-black text-black">Member {idMember}</h1>
            <Footer/>
        </div>
    );
}