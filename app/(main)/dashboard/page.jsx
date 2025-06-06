import React from 'react'
import FeatureAssistant from './_component/FeatureAssistant'
import History from './_component/History'
import Feedback from './_component/Feedback'

function Dashboard() {
  return (
    <div>
        <FeatureAssistant/>

        <div>
            <History />
            {/* <Feedback /> */}
        </div>
    </div>
  )
}

export default Dashboard