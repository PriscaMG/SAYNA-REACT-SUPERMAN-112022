import React from 'react'
import { Tabs, Tab } from './MonCompteTabs.js'


function MonCompteApp() {
  return (
    <Tabs>
      <Tab title="Mes avis">
        Avis
      </Tab>
      <Tab title="Favoris">
        Favoris
      </Tab>
    </Tabs>
  )
}

export default MonCompteApp