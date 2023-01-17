import React from "react";
import TabNavigator from "./components/bottomTabNavigator";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      fontLoaded : false

    }
  }
  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }
  componentDidMount(){
    this.loadFonts()
  }
  render(){
    const {fontLoaded} = this.state
    if (fontLoaded) {
      return(
        <TabNavigator/>
      )
    } else {
        return null
    }
  }
}
