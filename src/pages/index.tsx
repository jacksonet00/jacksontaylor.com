import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Greeting } from "@/components/Greeting";

function Index() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen gap-16 pt-40 pb-20 sm:pb-40 min-w-screen w-full">
      <Greeting />
        <div className="sm:w-[36rem] w-10/12 flex flex-col gap-4 items-center">
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Est quisque aptent quisque aptent per elit a non. Sed semper nulla himenaeos a luctus. Posuere posuere nisi faucibus finibus etiam mi. Proin potenti tellus placerat aptent cubilia sodales. Facilisis semper massa non ac, scelerisque id aptent nunc sem. Fermentum sapien elementum elementum tellus blandit dolor.</p>
          <p>Pretium convallis eros mauris urna quam facilisis nec nibh. Donec diam convallis; magnis at interdum felis vehicula faucibus tempor. Vitae aenean habitant fringilla mattis tempor dictum. Atempus nunc molestie; sed rutrum netus. Ullamcorper laoreet ipsum fermentum fringilla pharetra fames. Libero accumsan nisi facilisis magna mi conubia eu quis. Conubia ornare eu quam id sapien interdum accumsan.</p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Experience</h3>
          </div>
          <div className="flex flex-col gap-4 w-full items-center mb-4 bg-red-500">
            <Card
              iconPath="/images/logos/jpmc.jpeg"
              title="Software Engineer"
              subtitle="JP Morgan Chase"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/meta.webp"
              title="Software Engineer Intern"
              subtitle="Meta Platforms"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/jpmc.jpeg"
              title="Software Engineer Intern"
              subtitle="JP Morgan Chase"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Projects</h3>
          </div>
          <div className="flex flex-col gap-4 w-full items-center mb-4">
            <Card
              iconPath="/images/logos/myeyetheory.png"
              title="myeyetheory.com"
              subtitle="Web Application"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/ichallengeu.png"
              title="iChallengeU.app"
              subtitle="Web Application"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/uf.jpeg"
              title="UF 3D Print Lab"
              subtitle="Web Application"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/sock.png"
              title="Sock: for shared spaces."
              subtitle="Mobile App"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Social</h3>
          </div>
          <div className="flex flex-col gap-4 w-full items-center mb-4">
            <Card
              iconPath="/images/logos/x.png"
              title="@workwithjackson"
              subtitle="X"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
            <Card
              iconPath="/images/logos/github.webp"
              title="@jacksonet00"
              subtitle="GitHub"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
              ]}
            />
          </div>
          <div className="sm:w-[28rem] w-full ml-10 sm:ml-0 flex flex-col items-start">
            <h3 className="font-bold text-2xl">Writing</h3>
          </div>
          <div className="flex flex-col gap-4 w-full items-center mb-4">
            <Card
              iconPath="/images/logos/medium.webp"
              title="Recommendation Systems"
              subtitle="Medium Article"
              description={[
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
                "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora.",
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