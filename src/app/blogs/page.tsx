import Link from "next/link";
import { getBlogs } from "@/../libs/client";

export default async function StaticPage() {
    const { contents }  = await getBlogs();
  
    if (!contents) {
      return <h1 className="text-2xl font-bold text-center mt-20">No Contents</h1>;
    }
  
    return (
      <>
        {/* ヘッダーの追加 */}
        <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Ringo</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/blogs">
                    <p className="text-blue-500 hover:text-blue-700 transition">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <p className="text-blue-500 hover:text-blue-700 transition">About</p>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <p className="text-blue-500 hover:text-blue-700 transition">Contact</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="h-screen container mx-auto mt-20">
            <ul className="space-y-10">
                {contents.map((blog) => (
                 <li key={blog.id} className="p-5 rounded shadow-lg content flex justify-between items-center">
                    <h4 className="text-xl font-semibold text-gray-800">
                        {blog.title}
                    </h4>
                    <Link href={`/blogs/${blog.id}`}>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                            詳細
                        </button>
                    </Link>
                  </li>
                ))}
            </ul>
        </div>
      </>
    );
}
