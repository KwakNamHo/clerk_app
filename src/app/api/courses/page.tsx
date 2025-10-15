import Courses from '@/components/Courses'
import CoursesData from '../courses/data.json'
export default function CoursesPage() {
  const courses = CoursesData

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Courses courses={courses} />
    </div>
  )
}
