import React, {useState, useContext} from 'react'
import {MovieContext} from '../MovieContext/MovieContext'
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

const AccordionMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const SearchText = () => (
      movies.map((item) => (
        <div>
          <AccordionItem title={item.name}>
          {item.description.text}
          </AccordionItem>
        </div>
      ))
    )

    return(
      <div className = 'AccordionDiv'>
      <Accordion atomic = {true}>
          <SearchText/>
      </Accordion>
        </div>
    )
}

export default AccordionMovie