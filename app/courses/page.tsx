import courses from '@/data/courses.json';
import careers from '@/data/careers.json';
import { CourseFilter } from '@/components/CourseFilter';

export default function CoursesPage(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Courses & Careers in New Zealand</h1>
      <p className="text-gray-600 mt-2">Browse popular study areas and see typical career outcomes.</p>
      <CourseFilter courses={courses as any} careers={careers as any} />
    </section>
  );
}
