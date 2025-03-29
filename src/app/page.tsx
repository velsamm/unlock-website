import React from 'react'
import { CTA } from '$components/blocks/cta/cta'
import { ContactOptions } from '$components/blocks/contactOptions/contactOptions'
import { Competence } from '$components/blocks/competence/competence'
import { IndividualApproach } from '$components/blocks/individualApproach/individualApproach'
import { HowWeWork } from '$components/blocks/howWeWork/howWeWork'
import { Divider } from '$components/divider/divider'

export default function Home() {
  return (
    <main>
      <CTA />
      <Divider className="mb-16 mt-20" />
      <ContactOptions />
      <Divider className="mb-16 mt-20" />
      <Competence />
      <Divider className="mb-16 mt-20" />
      <IndividualApproach />
      <Divider className="mb-16 mt-20" />
      <HowWeWork />
    </main>
  )
}
