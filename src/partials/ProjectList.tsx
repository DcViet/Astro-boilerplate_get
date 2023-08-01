import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Scrat Journey"
        description="Bài học nhằm giúp học sinh biết đến thuật ngữ cơ bản, quan trọng và hay
        gặp khi nói đến Phát triển game nói riêng và Phát triển phần mềm nói chung. 
        (Thuật toán)"
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Thuật toán</Tags>
            <Tags color={ColorTags.LIME}>Game design</Tags>
            <Tags color={ColorTags.SKY}>Game programing</Tags>
            <Tags color={ColorTags.ROSE}>DucTruong</Tags>
          </>
        }
      />
      <Project
        name="Dancer Party"
        description="Một hành đông làm cái gì đó xảy ra ! (Event)."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Event</Tags>
            <Tags color={ColorTags.EMERALD}>Game programming</Tags>
            <Tags color={ColorTags.YELLOW}>DucTruong</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
