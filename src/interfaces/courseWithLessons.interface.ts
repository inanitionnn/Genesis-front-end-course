export interface ILessonStatus {
  locked: "locked";
  unlocked: "unlocked";
}
export interface ICourseWithLessons {
  id: string;
  title: string;
  tags: string[];
  launchDate: Date | string;
  status: string;
  description: string;
  duration: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills?: string[];
    courseVideoPreview?: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
  lessons: [
    {
      id: string;
      title: string;
      duration: number;
      order: number;
      type: string;
      // status: ILessonStatus;
      status: string;
      link: string;
      previewImageLink: string;
      meta?: {
        slug: string;
        skills?: string[];
        courseVideoPreview?: {
          link: string;
          duration: number;
          previewImageLink: string;
        };
      };
    }
  ];
}
