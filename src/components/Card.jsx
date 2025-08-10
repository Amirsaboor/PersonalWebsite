import BaseCard from '@/components/ui/Card/Card'
import CardLink from '@/components/ui/Card/CardLink'
import CardTitle from '@/components/ui/Card/CardTitle'
import CardDescription from '@/components/ui/Card/CardDescription'
import CardCta from '@/components/ui/Card/CardCta'
import CardEyebrow from '@/components/ui/Card/CardEyebrow'

function Card(props) {
  return <BaseCard {...props} />
}

Card.Link = CardLink
Card.Title = CardTitle
Card.Description = CardDescription
Card.Cta = CardCta
Card.Eyebrow = CardEyebrow

export { Card, CardLink, CardTitle, CardDescription, CardCta, CardEyebrow }
