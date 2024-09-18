import React from 'react'
import Header from './component/hompage/Header'
import ImmigrationPartnerIntro from './component/hompage/ImmigrationPartnerIntro'
import InfoSection from './component/hompage/InfoSection'
import ServicesSection from './component/hompage/ServicesSection'
import IELTSReleases from './component/hompage/IELTSReleases'
import IELTSTips from './component/hompage/IELTSTips'
import IELTSOnlineTestsBenefits from './component/hompage/IELTSOnlineTestsBenefits'
import LatestPosts from './component/hompage/LatestPosts'
import ImmigrationHero from './component/hompage/ImmigrationHero'


const App = () => {
  return (
    <div>
    <Header />
    <ImmigrationPartnerIntro />
    <InfoSection />
    <ServicesSection />
    <IELTSReleases />
    <IELTSTips />
    <IELTSOnlineTestsBenefits />
    <LatestPosts />
    <ImmigrationHero />
    </div>
  )
}

export default App