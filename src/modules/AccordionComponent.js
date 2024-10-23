import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentAPIDetails } from '../reduxConfig'

export default function AccordionComponent({ title, handleProviderAPI }) {
  const [open, setOpen] = useState(false)

  const apiProvider = useSelector(
    store => store.apiProvidersInfo.apiProviderResponse
  )
  return (
    <Accordion
      onChange={async (e, expand) => {
        await handleProviderAPI(title, expand)
        setOpen(expand)
      }}
      expanded={open}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      {Object.keys(apiProvider[title]).map((i, k) => (
        <AccordionDetails key={k}>
          <Link
            to={`info/${i}`}
            onClick={() => currentAPIDetails(apiProvider[title][i])}
          >
            <span style={{ cursor: 'pointer' }}> {i}</span>
          </Link>
        </AccordionDetails>
      ))}
    </Accordion>
  )
}
