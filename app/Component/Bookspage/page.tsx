import Layout from "@/app/Component/Bookspage/BooksLayout";
import BookCard from "@/app/Component/BookCard";
import {books} from "@/app/Data/DataBook";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer_Homepage";
import Link from "next/link";

export default function Bookspage () {
    return (
        <div className="bg-white">
            <Navbar/>
            <Layout>
                {
                    books.map((book) => (
                        <Link key={book.id} href={`/Component/Product/${book.id}`}>
                            <BookCard key={book.id} id={book.id} isTagVisible={false} />
                        </Link>
                    ))
                }
            </Layout>
            <Footer/>
        </div>
    );
}