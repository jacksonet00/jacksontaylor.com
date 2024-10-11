import Card from "@/components/Card";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {/* Hello, peasants. */}
      <Card
        iconPath="/images/logos/jpmc.jpeg"
        title="Software Engineer"
        subtitle="JP Morgan Chase"
        description={[
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora."
        ]}
      />
      <Card
        iconPath="/images/logos/myeyetheory.png"
        title="myeyetheory.com"
        subtitle="Web Application"
        description={[
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate eros dui magna feugiat aliquam. Et ultricies dignissim platea litora magna litora."
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
  );
}

export default Index;