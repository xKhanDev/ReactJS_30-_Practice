import React from 'react'
import IncrDecr from './Practice Files/IncrDecr'
import Form from './Practice Files/Form'
import ListItems from './Practice Files/ListItems'
import Toggle from './Practice Files/Toggle'
import FetchData from './Practice Files/FetchData'
import TimeCounter from './Practice Files/TimeCounter'
import TodoList from './Practice Files/TodoList'
import BackgroundChange from './Practice Files/ChangeBg'
import RoutingSetup from './Practice Files/RoutingSetup'
import RandomQuoteGeneration from './Practice Files/RandomQuoteGeneration'
import FileUploader from './Practice Files/FileUploader'
import AuthenForm from './Practice Files/AuthenForm'
import WeatherApp from './Practice Files/weatherApp'
import ModernInputSearchBar from './Practice Files/ModernInputSearchBar'
import PaginationComp from './Practice Files/PaginationComp'
import ColorPicker from './Practice Files/ColorPicker'
import NavigationManu from './Practice Files/NavigationManu'


const App = () => {
  const items = ["item 1", "item 2", "item 3", "another item ", "another item 2"]; // this code is only for ModernInputSearchBar
  return (
    <>
     {/* <IncrDecr /> */}
     {/* <Form /> */}
     {/* <ListItems /> */}
     {/* <Toggle /> */}
     {/* <FetchData /> */}
     {/* <TimeCounter /> */}
     {/* <TodoList /> */}
     {/* < BackgroundChange /> */}
     {/* <RoutingSetup /> */}
     {/* <RandomQuoteGeneration /> */}
     {/* < FileUploader /> */}
     {/* < AuthenForm /> */}
     {/* < WeatherApp /> */}
     {/* <ModernInputSearchBar items={items}/> */}
     {/* <PaginationComp items={items} itemsPerPage={2} /> */}
     {/* <ColorPicker /> */}
     <NavigationManu />
    </>
  )
}

export default App
