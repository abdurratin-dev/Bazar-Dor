import Link from "next/link";

export default function Footer() {
    
    return (
        <footer className="container mx-auto lg:px-30 px-5 border-t border-gray-300">
            <div className="flex justify-between py-7">
                <Link href="/">বাজার দর - প্রয়োজনীয় পণ্যের দাম এক নজরে।</Link>
                <p>সকল দাম সম্ভাব্য: বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    )
}