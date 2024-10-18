import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Greeting } from "@/components/Greeting";

function Index() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen gap-16 pt-40 pb-20 sm:pb-40 min-w-screen w-full">
        <Greeting />
        <div className="sm:w-[36rem] w-10/12 flex flex-col gap-4 items-center">
          <p>Hi, I&apos;m Jackson, a software engineer passionate about creating digital products that deliver massive value and delight users. Currently, I spend the majority of my time building large scale, data intensive applications in the cloud at a fintech company. Outside of work, I love connecting with the tech community by launching tiny internet products, meeting new people, and sharing about what I learn on my <a className="text-zinc-400 underline cursor-pointer">twitter.</a></p>
          <p>I have been passionate about technology my entire life and I&apos;m so grateful to now be contributing my own work to the software space during this exciting time of rapid acceleration! When I&apos;m not on the computer (rare), I enjoy traveling, running, and spending time with friends & family... and my cat, Misa.</p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
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
                "Sharing insights on software engineering, tech career growth, and building in public",
                "Growing community of 400+ followers interested in tech, investing, and personal development",
                "Regular updates on my journey as a software engineer and indie developer"
              ]}
            />
            <Card
              url="https://github.com/jacksonet00"
              iconPath="/images/logos/github.webp"
              title="@jacksonet00"
              subtitle="GitHub"
              description={[
                "Open source projects and code snippets that help other developers",
                "Implementations of popular JavaScript libraries and developer tools",
                "Public repository of learning resources and example code"
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Projects</h3>
          </div>
          <div className="flex flex-col gap-8 w-full items-center mb-4">
            <Card
              url="https://www.myeyetheory.com"
              iconPath="/images/logos/myeyetheory.png"
              title="myeyetheory.com"
              subtitle="Web Application"
              description={[
                "Viral AI-powered platform that analyzes eye features to provide personality insights and compatibility matches",
                "Implemented computer vision analysis, OAuth authentication, and Stripe payment processing",
                "Built comprehensive learning resources about eye biology and characteristics",
                "Created engaging user experience combining science and entertainment"
              ]}
            />
            <Card
              url="https://www.ichallengeu.app"
              iconPath="/images/logos/ichallengeu.png"
              title="iChallengeU.app"
              subtitle="Web Application"
              description={[
                "Social platform for creating and joining group challenges with daily progress tracking",
                "Built with TypeScript and Google Cloud Functions for scalability",
                "Implemented features like phone authentication, cloud storage, and real-time leaderboards",
                "Designed for book clubs, fitness groups, and other community challenges"
              ]}
            />
            <Card
              url="https://3dprint.uflib.ufl.edu/"
              iconPath="/images/logos/uf.jpeg"
              title="UF 3D Print Lab"
              subtitle="Website"
              description={[
                "Developed employee dashboard for managing 3D printing orders and customer communications",
                "Implemented file upload system, order tracking, and automated email updates",
                "Built payment processing and accounting export features",
                "Designed customer-facing website following university branding guidelines"
              ]}
            />
            <Card
              url="https://www.thesockapp.com"
              iconPath="/images/logos/sock.png"
              title="Sock: for shared spaces."
              subtitle="Mobile App"
              description={[
                "Mobile app for managing shared living spaces and roommate coordination",
                "Built with React Native for cross-platform compatibility",
                "Implemented features for task management and communication",
                "Focused on improving roommate relationships through better organization"
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
                "Deep dive into modern content recommendation systems and their real-world applications",
                "Analysis of content-based and collaborative filtering approaches",
                "Exploration of data science concepts in practical business contexts",
                "Discussion of implicit vs explicit user behavior data in recommendations"
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