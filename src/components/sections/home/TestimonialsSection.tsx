import { Quote, Star } from 'lucide-react'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { TESTIMONIALS } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Customer Stories"
          title="Compliance teams that stopped dreading audits"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} variant="up" delay={index * 120}>
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                {/* Quote mark background */}
                <Quote className="absolute -right-2 -top-2 h-24 w-24 text-primary-50 transition-all duration-500 group-hover:text-primary-100" aria-hidden="true" />

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-6 flex-1 text-base leading-relaxed text-slate-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white shadow-md"
                    >
                      {initials(testimonial.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}
