import React from 'react'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const AccordionMovie = ({name, description}) => {

    return(
      <div className = 'AccordionDiv'>
      <Accordion atomic = {true}>
          <AccordionItem title={name}>
            <li>{description}</li>
          </AccordionItem>
      </Accordion>
        </div>
    )
}

export default AccordionMovie