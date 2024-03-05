
import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {

    if(localStorage.getItem("token") === null){
           window.location.href = "/signin"
    }

    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    function stringsdate(dates:any){
    const datetostring = JSON.stringify(dates);
    const date = datetostring.slice(1,11)
    return date;
    }

    return <div>
        <Appbar />
        <div  className="flex justify-center">
            
            <div>
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate= {stringsdate(blog.date)}
                />)}
            </div>
        </div>
    </div>
}

