import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CardProps {
  iconPath: string;
  title: string;
  subtitle: string;
  description: string[];
}

export default function CustomCard({
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
      contentRef.current.classList.add('collapsed');
      contentRef.current.getBoundingClientRect();
      const collapsedHeight = contentRef.current.scrollHeight;
      contentRef.current.classList.remove('collapsed');
      contentRef.current.getBoundingClientRect();
      const expandedHeight = contentRef.current.scrollHeight;
      contentRef.current.classList.add('collapsed');
      setCollapsedHeight(collapsedHeight);
      setExpandedHeight(expandedHeight);
      setMaxHeight(collapsedHeight);
      setShowMoreVisible(expandedHeight > collapsedHeight);
    }
  }, [description]);

  const logoTransform = `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`;

  const toggleExpand = () => {
    if (isExpanded) {
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
      contentRef.current?.classList.remove('collapsed');
      contentRef.current?.getBoundingClientRect();
      setMaxHeight(expandedHeight);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="transition-all duration-300 ease-in-out w-full flex flex-col items-center">
      <div ref={cardRef} className="sm:w-[28rem] w-11/12 sm:hover:w-[30rem] transition-all duration-300 ease-in-out">
        <div className="flex flex-row items-center space-x-2 sm:space-x-4">
          <div className="transition-transform duration-200 ease-out flex-shrink-0" style={{ transform: logoTransform }}>
            <Image
              src={iconPath}
              alt={`${title} ${subtitle} logo`}
              height={50}
              width={50}
              className="rounded-md mr-2"
            />
          </div>
          <div className="flex-grow min-w-0">
            <div className="truncate h-[1.6rem]">{title}</div>
            <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
          </div>
        </div>
        <div className="max-w-10/12 sm:max-w-[28rem] ml-auto mr-auto">
          <div
            ref={contentRef}
            className="overflow-hidden transition-max-height duration-300 ease-in-out ml-2 sm:ml-1.5 mt-4"
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
            <Button
              variant="link"
              onClick={toggleExpand}
              className="mt-2 p-0 h-auto ml-2 sm:ml-1.5 text-zinc-500"
            >
              {isExpanded ? "Show less" : "Show more..."}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}