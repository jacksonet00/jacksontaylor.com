import Card from "@/components/Card";
import { Greeting } from "@/components/Greeting";

function Index() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-16 py-40">
      <Greeting />
      <div className="w-[36rem] flex flex-col gap-4">
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Est quisque aptent quisque aptent per elit a non. Sed semper nulla himenaeos a luctus. Posuere posuere nisi faucibus finibus etiam mi. Proin potenti tellus placerat aptent cubilia sodales. Facilisis semper massa non ac, scelerisque id aptent nunc sem. Fermentum sapien elementum elementum tellus blandit dolor.</p>
        <p>Pretium convallis eros mauris urna quam facilisis nec nibh. Donec diam convallis; magnis at interdum felis vehicula faucibus tempor. Vitae aenean habitant fringilla mattis tempor dictum. Atempus nunc molestie; sed rutrum netus. Ullamcorper laoreet ipsum fermentum fringilla pharetra fames. Libero accumsan nisi facilisis magna mi conubia eu quis. Conubia ornare eu quam id sapien interdum accumsan.</p>
      </div>
      <div className="flex flex-col gap-4 w-full items-center">
        <Card
          iconPath="/images/logos/myeyetheory.png"
          title="myeyetheory.com"
          subtitle="Web Application"
          description={[
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora."
          ]}
        />
        <Card
          iconPath="/images/logos/meta.webp"
          title="Software Engineer"
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
          iconPath="/images/logos/x.png"
          title="@workwithjackson"
          subtitle="X"
          description={[
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora."
          ]}
        />
        <Card
          iconPath="/images/logos/medium.webp"
          title="Applied Data Science: Content Recommendation Systems"
          subtitle="Medium Article"
          description={[
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam."
          ]}
        />
      </div>
    </div>
  );
}

export default Index;