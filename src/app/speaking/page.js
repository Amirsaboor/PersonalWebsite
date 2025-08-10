import { SimpleLayout } from '@/components/SimpleLayout'
import { SpeakingSection, Appearance } from '@/components/sections/Speaking'

export const metadata = {
  title: 'Speaking - Name Family',
  description: 'I love to share the joy of STEM+C. If you are looking for your next guest speaker, I\'m your girl!',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I love to share the joy of STEM+C"
      intro="If you are looking for your next guest speaker, I'm your girl! I am passionate about women in STEM+C, living life for the adventure, and navigating college as a non-traditional student."
    >
      <div className="space-y-20">
        <SpeakingSection title="Texas State University">
          <Appearance
            href=""
            title="Life as a First-Gen and Non-Traditional Student"
            description="My journey navigating young adulthood, finding the way back to academia, and discovering a passion for leadership along the way."
            event="TSU Common Experience"
            cta="November 15th, 2022"
          />
          <Appearance
            href=""
            title="(Re)visiting First Generation Students Experiences in STEM Panelist"
            description="A discussion on attending a Hispanic Serving Intitution, the significance of our cultural backgrounds, and how it relates to our experiences in the classroom."
            event="TSU Professional Development Series"
            cta="November 10th, 2022"
          />
          <Appearance
            href=""
            title="Counter-Life Herstories Conference Guest Speaker"
            description="Event with nearly 500 K-12 students, illuminating hidden truths about women and girls of color in STEM+C professions."
            event="TSU Conference"
            cta="November 8th, 2022"
          />
          <Appearance
            href=""
            title="Cohost for The Future of Technology is Human with Dr. Deb Donig"
            description="The vision of a better world is at the heart of technological innovation. How can we take back a vision of technological production so that it more truly and equitably aligns with human values?"
            event="TSU Common Experience"
            cta="October 26th, 2022"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
