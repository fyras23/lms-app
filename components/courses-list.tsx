import { Category, Course } from "@prisma/client"
import { CourseCard } from "./course-card"



type CourseWithTypeWithProgressWithCategory = Course & {
    category: Category | null
    chapters: { id: string }[]
    progress: number | null
}
interface CoursesListProps {
    items: CourseWithTypeWithProgressWithCategory[]
}
export const CoursesList = ({items}:CoursesListProps) => {
    return (
        <div className="">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            
            items.map((course)=>(
                <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                imageUrl={course.imageUrl!}
                chapterLenght={course.chapters.length!}
                price={course.price!}
                progress={course.progress!}
                category={course.category?.name!}
                />


            ))
        }
        </div>
        {items.length === 0 && <div className="text-center text-smaill mt-10">No courses found</div>}
        
        </div>
    )
    }

