import Footer from '@/blocks/Footer/Footer'
import Header from '@/blocks/Header/Header'
import Questions from '@/blocks/RewardPage/Questions/Questions'
import RedeemSteps from '@/blocks/RewardPage/RedeemSteps/RedeemSteps'
import ReferSection from '@/blocks/RewardPage/ReferSection/ReferSection'
import RewardImage from '@/blocks/RewardPage/RewardImage/RewardImage'
import RewardsPoints from '@/blocks/RewardPage/RewardsPoints/RewardsPoints'
import WaysToEarn from '@/blocks/RewardPage/WaysToEarn/WaysToEarn'
import React from 'react'

export default function index() {
  return (
    <div>
        <Header/>
        <RewardImage/>
        <RedeemSteps/>
        <WaysToEarn/>
        <RewardsPoints/>
        <ReferSection/>
        <Questions/>
        <Footer/>
    </div>
  )
}
