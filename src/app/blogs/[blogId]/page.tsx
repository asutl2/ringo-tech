import Link from "next/link";
import { getDetail,getBlogs } from "@/../libs/client";
export async function generateStaticParams(){
  const { contents } = await getBlogs();

  const paths = contents.map((blog)=>{
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params : { blogId },
}: {
  params: { blogId : string};
}) {
  const blog = await getDetail(blogId);

  return(
    <>
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
      <div className="mt-20 h-screen pt-5">
        <div className="content">
          <h1>{blog.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </div>
      </div>
    </>
  )
}

