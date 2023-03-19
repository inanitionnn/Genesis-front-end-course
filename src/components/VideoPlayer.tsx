import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface ICourseCardProps {
  videoUrl: string;
}
export default function VideoPlayer(props: ICourseCardProps) {
  const { videoUrl } = props;
  const videoRef = useRef(null);
  const hlsRef = useRef<Hls | null>(null);
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
  return (
    <div className="bg-indigo-500 rounded-lg max-w-4xl flex justify-center">
      <video ref={videoRef} width={800} controls placeholder="course video" />
    </div>
  );
}
