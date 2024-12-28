import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Greeting } from "@/components/Greeting";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center min-h-screen gap-16 pt-40 pb-20 sm:pb-40 w-full overflow-x-hidden">
        <Greeting />
        <div className="sm:w-[36rem] w-10/12 flex flex-col gap-4 items-center">
          <p>Hi, I&apos;m Jackson, a software engineer passionate about creating digital products that deliver massive value and delight users. Currently, I spend the majority of my time building large scale, data intensive applications in the cloud at a fintech company. Outside of work, I love connecting with the tech community by launching tiny internet products, meeting new people, and sharing about what I learn on my <a className="text-zinc-400 underline cursor-pointer">twitter.</a></p>
          <p>I have been passionate about technology my entire life and I&apos;m so grateful to contribute my own work to the software space during this exciting time of rapid acceleration! When I&apos;m not on the computer (rare), I enjoy traveling, running, and spending time with friends, family, and my cat.</p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          {router.query.resume &&
            (<>
            <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
              <h3 className="font-bold text-2xl">Experience</h3>
            </div>
            <div className="flex flex-col gap-8 w-full items-center mb-4">
              <Card
                iconPath="/images/logos/jpmc.jpeg"
                title="Software Engineer"
                subtitle="JP Morgan Chase"
                description={[
                  "Leading development of Payment Insights platform serving enterprise clients, implementing new features like monthly insights and interactive data viewers",
                  "Built comprehensive monitoring system with automated alerts for data integrity, performance tracking, and trend analysis",
                  "Spearheaded adoption of Snowflake Dynamic Tables and enhanced API infrastructure for improved data processing",
                  "Mentored interns and contributed to Force For Good program, building software solutions for educational nonprofits",
                  "Developed common frameworks and developer tools that improved team productivity and code quality"
                ]}
              />
              <Card
                iconPath="/images/logos/meta.webp"
                title="Software Engineer Intern"
                subtitle="Meta Platforms"
                description={[
                  "Optimized Facebook Messenger and Instagram Direct recommendation services, achieving 15% lower CPU usage",
                  "Implemented local caching system for video recommendations while maintaining minimal memory footprint",
                  "Built backend service for remote ML model execution, enabling advanced video autoplay recommendations",
                  "Collaborated with team to improve recommendation quality and infrastructure scalability"
                ]}
              />
              <Card
                iconPath="/images/logos/jpmc.jpeg"
                title="Software Engineer Intern"
                subtitle="JP Morgan Chase"
                description={[
                  "Built full-stack web application used daily by 450+ customer support agents",
                  "Developed REST API serving 150+ developers across multiple organizations",
                  "Implemented interactive interface for accessing internal data and improving workflow efficiency"
                ]}
              />
            </div>
            </>)
          }
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Social</h3>
          </div>
          <div className="flex flex-col gap-8 w-full items-center mb-4">
            <Card
              url="https://x.com/workwithjackson"
              iconPath="/images/logos/x.png"
              title="@workwithjackson"
              subtitle="X"
              description={[
                "Building a tech-focused community sharing insights on software engineering, career growth, and entrepreneurship.",
                "Cultivating an engaged audience of 400+ professionals and enthusiasts in technology and startup spaces.",
                "Actively networking with industry leaders and showcasing technical expertise through regular content creation.",
              ]}
            />
            <Card
              url="https://github.com/jacksonet00"
              iconPath="/images/logos/github.webp"
              title="@jacksonet00"
              subtitle="GitHub"
              description={[
                "Contributing my public projects to the open source community.",
                "Curating lists of repositories to accelerate development workflows across various tech stacks.",
                "Sharing educational resources including useful code snippets and custom implementations of popular JavaScript libraries."
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Projects</h3>
          </div>
          <div className="flex flex-col gap-8 w-full items-center mb-4">
            <Card
              url="https://favifont.jacksontaylor.com"
              iconPath="/images/logos/favifont.png"
              title="FaviFont"
              subtitle="Web Application"
              description={[
                "FaviFont is a simple web tool to help designers and developers choose the best font with thier project with powerful discovery and comparison functionality.",
              ]}
            />
            <Card
              url="https://www.myeyetheory.com"
              iconPath="/images/logos/myeyetheory.png"
              title="myeyetheory.com"
              subtitle="Web Application"
              description={[
                "My Eye Theory is a viral AI-powered iris scanner that analyzes the unique biology the eye and provides users with personality insights.",
                "Through this project, I learned how to implement computer vision analysis to detect iris features, NSFW detection on user uploaded images to prevent abuse, and payment processing with Stripe webhooks. I also learned about eye biology and the unique characteristics of the iris as I added comprehensive learning resources on the subject to this site.",
              ]}
            />
            <Card
              url="https://www.ichallengeu.app"
              iconPath="/images/logos/ichallengeu.png"
              title="iChallengeU.app"
              subtitle="Web Application"
              description={[
                "iChallenge U is a fun tool for hosting challenges like a fitness competition or book club with your friends or coworkers. Each challenge features a leaderboard along with daily progress charts and streaks for each participant.",
                "Implements features such as phone number authentication for user verification and cloud functions for scalability.",
              ]}
            />
            <Card
              url="https://3dprint.uflib.ufl.edu/"
              iconPath="/images/logos/uf.jpeg"
              title="UF 3D Print Lab"
              subtitle="Website"
              description={[
                "Overhauled the design and functionality of the Univeristy of Florida's 3D Print Lab website.",
                "Streamlined the customer process by adding a 3D object file uploader in the order form and implementing an online payment system. Optimized the backend flow by building an adminstrator dashboard for tracking order status, sending 3D files to printers, and bookkeeping. Automated multiple aspects of the ordering process by converting object files to path files on the backend and automatically sending email updates to customers as the order status progresses.",
              ]}
            />
            <Card
              url="https://www.thesockapp.com"
              iconPath="/images/logos/sock.png"
              title="Sock: for shared spaces."
              subtitle="Mobile App"
              description={[
                "Sock is a cross-platform mobile app that helps roommates stay in sync. Users can see who's home and set status updates for quiet times during exams or calls. The app sends smart notifications when roommates arrive home to keep everyone updated, and those at home receive doorbell alerts when housemates are approaching.",
                "Built with React Native, this project taught me how to develop cross-platform applications while integrating advanced features like real-time location tracking and geofenced push notifications from the cloud.",
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Writing</h3>
          </div>
          <div className="flex flex-col gap-8 w-full items-center mb-4">
            <Card
              url="https://medium.com/@jacksonet00/applied-data-science-content-recommendation-systems-6904ffafdf4"
              iconPath="/images/logos/medium.webp"
              title="Recommendation Systems"
              subtitle="Medium Article"
              description={[
                "Deep dive into modern content recommendation systems and their real-world applications.",
                "Analysis of content-based and collaborative filtering approaches with focus on latent feature extraction and efficient data storage solutions.",
                "Written during my university's linear algebra for machine learning course, this research helped launch my internship at Meta working on ML infrastructure for recommendation systems",
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;