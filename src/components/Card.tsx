import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface CardProps {
  iconPath: string;
  title: string;
  subtitle: string;
  description: string[];
}

export default function Card({
  iconPath,
  title,
  subtitle,
  description,
}: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showMoreVisible, setShowMoreVisible] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [collapsedHeight, setCollapsedHeight] = useState<number>(0);
  const [expandedHeight, setExpandedHeight] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      // Apply the 'collapsed' class to clamp text
      contentRef.current.classList.add('collapsed');

      // Force reflow to ensure styles are applied
      contentRef.current.getBoundingClientRect();

      // Measure the collapsed height
      const collapsedHeight = contentRef.current.scrollHeight;

      // Remove the 'collapsed' class to get the full height
      contentRef.current.classList.remove('collapsed');

      // Force reflow again
      contentRef.current.getBoundingClientRect();

      // Measure the expanded height
      const expandedHeight = contentRef.current.scrollHeight;

      // Re-apply the 'collapsed' class
      contentRef.current.classList.add('collapsed');

      // Set the initial maxHeight and state variables
      setCollapsedHeight(collapsedHeight);
      setExpandedHeight(expandedHeight);
      setMaxHeight(collapsedHeight);

      // Determine if 'show more' button should be visible
      setShowMoreVisible(expandedHeight > collapsedHeight);
    }
  }, [description]);

  const logoTransform = `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`;

  const toggleExpand = () => {
    if (isExpanded) {
      // Collapse the content
      setMaxHeight(collapsedHeight);
      const content = contentRef.current;
      if (content) {
        const onTransitionEnd = () => {
          content.classList.add('collapsed');
          content.removeEventListener('transitionend', onTransitionEnd);
        };
        content.addEventListener('transitionend', onTransitionEnd);
      }
    } else {
      // Expand the content
      contentRef.current?.classList.remove('collapsed');
      // Force reflow to apply the class removal before setting maxHeight
      contentRef.current?.getBoundingClientRect();
      setMaxHeight(expandedHeight);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="transition-all duration-300 ease-in-out">
      <div
        ref={cardRef}
        className={`bg-slate-900 border-slate-800 border-4 p-4 w-[28rem] rounded-md flex flex-col transition-all duration-300 ease-in-out
                    hover:p-8 hover:w-[30rem]`}
      >
        <div className="flex items-start">
          <div className="transition-transform duration-200 ease-out flex-shrink-0" style={{ transform: logoTransform }}>
            <Image
              src={iconPath}
              alt={`${title} ${subtitle} logo`}
              height={50}
              width={50}
              className="rounded-md mr-4"
            />
          </div>
          <div className="flex-grow min-w-0">
            <h1 className="font-bold text-lg truncate">{title}</h1>
            <h2 className="text-sm truncate">{subtitle}</h2>
            <div
              ref={contentRef}
              className="mt-2 overflow-hidden transition-max-height duration-300 ease-in-out"
              style={{
                maxHeight: maxHeight,
              }}
            >
              <ul className="list-disc list-inside space-y-1">
                {description.map((point, index) => (
                  <li key={index} className="text-sm">{point}</li>
                ))}
              </ul>
            </div>
            {showMoreVisible && (
              <button
                onClick={toggleExpand}
                className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer"
              >
                {isExpanded ? "Show less" : "Show more..."}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}