import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  margin: 40px auto;
  max-width: calc(100% - 100px);
  height: 100vh;
`
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  > span {
    font-size: 24px;
    font-weight: 500;
    margin-left: 20px;
  }
`

const Description = styled.div``
const Swagger = styled.div``
const ContactDetail = styled.div``
const ExploreButton = styled.button`
  padding: 8px 15px;
  border: none;
  background: #049dd2;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  width: 200px;
`
const ContentWrapper = styled.div`
  display: grid;
  place-content: space-evenly;
  grid-template-columns: 500px;
  gap: 10px;
  > span {
    display: flex;
    justify-content: center;
  }
`

const InformationPage = () => {
  let apiProvider = useSelector(
    store => store.apiProvidersInfo.currentAPIDetails
  )

  if (!!!apiProvider)
    apiProvider = JSON.parse(localStorage.getItem('providerDetail'))

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `

  return (
    <Wrapper>
      <HeaderSection>
        <img
          alt="header-img"
          src={apiProvider?.info?.['x-logo']?.url}
          style={{ width: '80px', height: '80px', borderRadius: '5px' }}
        />
        <span> {apiProvider?.info?.title}</span>
      </HeaderSection>
      <ContentWrapper>
        <Description>
          <h3>Description</h3>
          <p>{apiProvider?.info?.description}</p>
        </Description>
        <Swagger>
          <h3>Swagger</h3>
          <p>{apiProvider?.swaggerUrl}</p>
        </Swagger>

        {apiProvider?.info?.contact && (
          <ContactDetail>
            <h3>Contact</h3>
            <p>Email {apiProvider?.info?.contact?.email}</p>
            <p>Name {apiProvider?.info?.contact?.name}name url</p>
            <p>URL {apiProvider?.info?.contact?.url}name url</p>
          </ContactDetail>
        )}

        <span>
          <StyledLink to={'/'}>
            <ExploreButton>Explore more API</ExploreButton>
          </StyledLink>
        </span>
      </ContentWrapper>
    </Wrapper>
  )
}

export default InformationPage
