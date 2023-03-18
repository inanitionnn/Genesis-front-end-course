import React, { useEffect, useRef } from "react";
import { ICourse } from "../interfaces/course.interface";
import Hls from "hls.js";

interface ICourseCardProps {
  course: ICourse;
}
export default function Video(props: ICourseCardProps) {
  const { course } = props;
  const videoRef = useRef(null);
  const hlsRef = useRef<Hls | null>(null);
  const videoUrl = course.meta.courseVideoPreview?.link;
  useEffect(() => {
    if (videoRef.current && videoUrl) {
      const video = videoRef.current;
      const hls = new Hls();

      hlsRef.current = hls;

      hls.loadSource(videoUrl);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [videoRef, videoUrl]);
  return <video ref={videoRef} controls />;
}
