import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Made with
          <Image
            src="/images/mwl.png"
            alt="pixel art heart"
            width={15}
            height={15}
            className="inline mx-1 mb-0.5 animate-heartbeat"
          />
          by{" "}
          <a
            href="https://x.com/workwithjackson"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            jackson⁖
          </a>
          {/* {" "} The source code is available on{" "}
          <a
            href="https://github.com/jacksonet00/jacksontaylor.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          . */}
        </p>
      </div>
    </footer>
  );
}