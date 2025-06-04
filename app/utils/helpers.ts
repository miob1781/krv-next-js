import { sectionsData } from "@/app/consts/sections-data";
import { LessonData, SectionData } from "@/app/types";

export function getSectionData(lessonId: string): SectionData {
  return sectionsData.find(sectionData => sectionData.lessonId === lessonId)!;
}

export function getLessonData(lessonId: string): LessonData {
  const allLessonData: LessonData[] = [];
  sectionsData.forEach(sectionData => {
    sectionData.lessons.forEach(lessonData => {
      allLessonData.push(lessonData);
    });
  });
  const lessonData: LessonData = allLessonData.find(sectionData => sectionData.lessonId === lessonId)!;
  return lessonData;
}
