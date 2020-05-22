import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default class Toptab extends Component {
  render(){
    return(
        <Tabs>
            <TabList>
            <Tab>Paintings</Tab>
            <Tab>Genesis</Tab>
            <Tab>Resume</Tab>
            <Tab>Surfing</Tab>
            </TabList>
        
            <TabPanel>
            <h2>Water Color Paintings by Alex Funk</h2>
              
           
            </TabPanel>
            <TabPanel>
            <h2>Genesis</h2>
            <h3> Where Human Knowledge meets Artificial Intelligence</h3>
            </TabPanel>
            <TabPanel>
            <h2>Extensive Deep Learning experience along with a healthy portion of leadership.</h2>
            <iframe 
              src="../public/images_resume/Alex-Funk-Resume.pdf" width="100%" height="1000px">
              </iframe>
            </TabPanel>
            <TabPanel>
            <h2>Vidoes of surfing I enjoy</h2>
            </TabPanel>

        </Tabs>
    )
  }
  
}