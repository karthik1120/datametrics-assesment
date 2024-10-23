import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentAPIDetails } from '../reduxConfig'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'

const StyledAccordionSummary = styled(AccordionSummary)`
  min-height: 45px !important;
  :hover {
    background-color: #f5f5f5;
    border-radius: 5px;
  }
  .css-7iurs7-MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export default function AccordionComponent({ title, handleProviderAPI }) {
  const [open, setOpen] = useState(false)

  const apiProvider = useSelector(
    store => store.apiProvidersInfo.apiProviderResponse
  )
  const dispatch = useDispatch()

  return (
    <Accordion
      onChange={async (e, expand) => {
        await handleProviderAPI(title, expand)
        setOpen(expand)
      }}
      expanded={open}
    >
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </StyledAccordionSummary>
      {Object.keys(apiProvider[title]).map((i, k) => {
        const providerValue = apiProvider[title][i]
        return (
          <AccordionDetails key={k}>
            <StyledLink
              to={`info/${i}`}
              onClick={() => {
                localStorage.setItem(
                  'providerDetail',
                  JSON.stringify(apiProvider[title][i])
                )
                dispatch(currentAPIDetails(apiProvider[title][i]))
              }}
            >
              <span
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <img
                  alt="my-image"
                  src={providerValue?.info?.['x-logo']?.url}
                  style={{ width: '35px', height: '35px', borderRadius: '50%' }}
                />{' '}
                {providerValue?.info?.title}
              </span>
            </StyledLink>
          </AccordionDetails>
        )
      })}
    </Accordion>
  )
}
