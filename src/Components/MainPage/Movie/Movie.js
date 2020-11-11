import React, {useState, useContext} from 'react'
import './Movie.css'
import {MovieContext} from '../MovieContext/MovieContext'
import { AccordionDetails } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Movie = () =>{

    const [movies, setMovies] = useContext (MovieContext)
    const handleRemove = (id) => {
        const idTodDel = movies.findIndex(item => item.id === id);
        let beforeDelItem = movies.slice(0, idTodDel);
        let afterDelItem = movies.slice(idTodDel + 1);
        let newData = [...beforeDelItem, ...afterDelItem];
        setMovies(newData);
    }

    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const Accordion = withStyles({
        root: {
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: 'auto',
          },
        },
        expanded: {},
      })(MuiAccordion);
      const AccordionSummary = withStyles({
        root: {
          backgroundColor: 'rgba(0, 0, 0, .03)',
          borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '12px 0',
          },
        },
        expanded: {},
      })(MuiAccordionSummary);
      const AccordionDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiAccordionDetails);

    return(
    <div className = 'movieDiv'>
    <ul className = 'rectangle'>
        {movies.map((item) => (
            <div  className = 'movieList'>
              <li key = {item.id} ></li>
              <li>Название: {item.name}</li>
              <li>Бюджет: {item.price}$</li>
              <li>Рейтинг: {item.rank}</li>
                <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Описание: {item.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {item.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>    
        
        <button className = 'deleteBtn' onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
    ))}
    </ul>
    </div>
    )
}

export default Movie