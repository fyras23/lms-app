"use client";
import {
  getFivestarscount,
  getForstarscount,
  getOnetarscount,
  getThreestarscount,
  getTwostarscount,
} from "@/actions/course/get-stars-number";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { CourseReview } from "@prisma/client";
import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  courseId: string | undefined;
}

export default function ReviewProgress({ courseId }: Props) {
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [fivestars, setFivestars] = React.useState<number>(0);
  const [fourstars, setFourstars] = React.useState<number>(0);
  const [threestars, setThreestars] = React.useState<number>(0);
  const [twostars, setTwostars] = React.useState<number>(0);
  const [onestars, setOnestars] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [percentageoffivestars, setPercentageoffivestars] =
    React.useState<number>(0);
  const [percentageoffourstars, setPercentageoffourstars] =
    React.useState<number>(0);
  const [percentageofthreestars, setPercentageofthreestars] =
    React.useState<number>(0);
  const [percentageoftwostars, setPercentageoftwostars] =
    React.useState<number>(0);
  const [percentageofonestars, setPercentageofonestars] =
    React.useState<number>(0);
  const [average, setAverage] = React.useState<number>(0);

  const toggleTooltip = () => {
    setTooltipVisible(!tooltipVisible);
  };
  useEffect(() => {
    const getFivestarsCount = async () => {
      const fivestars = await getFivestarscount(courseId as string);
      setFivestars(fivestars!);
    };
    const getForstarscountt = async () => {
      const fivestars = await getForstarscount(courseId as string);
      setFourstars(fivestars!);
    };

    const getThreestarsCountt = async () => {
      const fivestars = await getThreestarscount(courseId as string);
      setThreestars(fivestars!);
    };
    const gettwostarsCount = async () => {
      const fivestars = await getTwostarscount(courseId as string);
      setTwostars(fivestars!);
    };
    const getonestarsCount = async () => {
      const fivestars = await getOnetarscount(courseId as string);
      setOnestars(fivestars!);
    };

    getFivestarsCount();
    getForstarscountt();
    getThreestarsCountt();
    gettwostarsCount();
    getonestarsCount();
    setTotal(fivestars + fourstars + threestars + twostars + onestars);

    setPercentageoffivestars(Math.round((fivestars / total) * 100));

    setPercentageoffourstars(Math.round((fourstars / total) * 100));
    setPercentageofthreestars(Math.round((threestars / total) * 100));
    setPercentageoftwostars(Math.round((twostars / total) * 100));
    setPercentageofonestars(Math.round((onestars / total) * 100));
    setAverage(
      (fivestars * 5 +
        fourstars * 4 +
        threestars * 3 +
        twostars * 2 +
        onestars) /
        total
    );
  }, [
    courseId,
    fivestars,
    fourstars,
    threestars,
    twostars,
    onestars,
    total,
    average,
  ]);

  return (
    <div>
      <div className="hs-tooltip inline-block [--trigger:click]">
        <div className="hs-tooltip-toggle block text-center">
          <button
            type="button"
            onClick={toggleTooltip}
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Preline review
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>

          <div
            className={`hs-tooltip-content ${
              tooltipVisible ? "opacity-100 visible p-6" : "opacity-0 invisible"
            } transition-opacity absolute z-10 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700`}
            role="tooltip"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <div key={currentRating} className="flex flex-row space-x-2">
                    <label>
                      <input
                        type="radio"
                        name="rate"
                        value={currentRating}
                        checked={average === currentRating}
                        readOnly
                        className="hidden"
                      />
                      <FaStar
                        className={cn(
                          "text-2xl",
                          average >= currentRating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        )}
                      />
                    </label>
                  </div>
                );
              })}
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {average.toFixed(1)}
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {total} global ratings
            </p>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                5 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: `${percentageoffivestars}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {percentageoffivestars}%{" "}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                4 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: `${percentageoffourstars}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {percentageoffourstars}%{""}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                3 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: `${percentageofthreestars}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {percentageofthreestars}%{""}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                2 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: `${percentageoftwostars}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {percentageoftwostars}%{""}
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                1 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: `${percentageofonestars}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {percentageofonestars}%{""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
