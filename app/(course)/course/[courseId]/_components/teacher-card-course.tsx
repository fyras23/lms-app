"use client";

import { getCourseById } from "@/actions/course/get-course-byId";
import {
  getCoursesCountByTeacher,
  getTeacherReviewCount,
} from "@/actions/course/get-courses-count-by-teacher";
import { getTeacherRating } from "@/actions/teacher/get-teacher-rating";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Course, User } from "@prisma/client";
import { Medal, Play, PlayCircle, StarIcon, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
interface TeacherCardCourseProps {
  course: Awaited<ReturnType<typeof getCourseById>> | null;
}
export default function TeacherCardCourse({ course }: TeacherCardCourseProps) {
  const [totalCourse, setTotalCourse] = useState(0);
  const [totalReview, setTotalReview] = useState(0);
  const [teacherRating, setTeacherRating] = useState(0);

  useEffect(() => {
    const getCourseCount = async () => {
      const count = await getCoursesCountByTeacher(course!.userId);
      setTotalCourse(count);
    };
    const getreviewCount = async () => {
      const count = await getTeacherReviewCount(course!.userId);
      setTotalReview(count);
    };
    const getRating = async () => {
      const rating = await getTeacherRating(course!.userId);
      setTeacherRating(rating);
      console.log("ratinhé+"+rating);
    }
    getCourseCount();
    getreviewCount();
    getRating();
  });

  return (
    <div className="w-full p-4">
      <div className="flex items-start space-x-4">
        <Avatar>
          <AvatarImage
            alt="Profile picture"
            src="/placeholder.svg?height=100&width=100"
          />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Jose Portilla</h2>
              <p className="text-sm text-gray-500">
                Head of Data Science, Pierian Data Inc.
              </p>
            </div>
            <div className="flex">
            {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <div key={currentRating} className="flex flex-row space-x-2">
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRating}
                checked={teacherRating === currentRating}
                readOnly
                className="hidden"
              />
              <FaStar
                className={cn(
                  "text-2xl",
                  teacherRating >= currentRating ? "text-yellow-400" : "text-gray-400"
                )}
              />
            </label>
          </div>
        );
      })}
            </div>
          </div>
          <p className="mt-2 text-gray-700">
            Jose Marcial Portilla has a BS and MS in Mechanical Engineering from
            Santa Clara University and years of experience as a professional
            instructor and trainer for Data Science and programming. He has
            publications and patents in various fields such as microfluidics,
            materials science, and data science technologies.
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-6 mt-6">
              <div className="flex items-center gap-x-2">
                <Medal className="w-4 h-4 text-blue-400" />
                <div className="flex gap-x-1">
                  <div className="text-blue-400">{totalReview}</div>
                  <div className="text-blue-400">Review</div>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <Users className="w-4 h-4" /> 1,000,000 students
              </div>
              <div className="flex items-center gap-x-2">
                <PlayCircle className="w-4 h-4 text-blue-400" />
                <div className="flex flex-row gap-x-1 items-center">
                  <div className="text-blue-400 text-lg">{totalCourse}</div>
                  <div className="text-blue-400">Toalt course</div>
                </div>
              </div>
            </div>
            <div className="">
              {
                course?.user?.createdAt ? (
                  <Badge variant="secondary">
                    Instructor since {new Date(course?.user?.createdAt).getFullYear()}
                    </Badge>
                ):(
                  <Badge variant="secondary">
                    No date
                    </Badge>
                )

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
