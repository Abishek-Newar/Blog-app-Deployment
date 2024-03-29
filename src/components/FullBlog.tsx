import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    const dates = blog.date
    const datetostring = JSON.stringify(dates);
    const date = datetostring.slice(1,11)
    return <div>
        <Appbar  />
        <div className="flex justify-center">
            <div className="grid  md:grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-2xl md:text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        {date}
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-2 hidden md:block">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            
                        </div>
                        <div>
                            <div className="text-xl font-bold flex gap-2 items-center">
                            <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                {blog.author.name || "Anonymous"}
                            </div>
                            
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}