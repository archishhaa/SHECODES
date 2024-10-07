import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f5f9;
  }
  h1, h2, h3 {
    color: #222;
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>MeditationPro</Logo>
      <Menu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/types">Meditation Types</NavItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background-color: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #5c67f2;
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled(Link)`
  font-size: 1.2rem;
  color: #222;
  transition: color 0.3s;
  &:hover {
    color: #5c67f2;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroContent>
        <h1>Find Your Inner Peace</h1>
        <p>"A calm mind is the ultimate weapon against your challenges."</p>
        <CTAButton>Start Your Journey</CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  height: 90vh;
  background: url('https://images.unsplash.com/photo-1555685812-4b743f4b8ba8') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
  z-index: 2;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background-color: #5c67f2;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #4b56e1;
  }
`;


const Features = () => {
  return (
    <FeatureSection>
      <h2>Our Benefits</h2>
      <FeatureGrid>
        <FeatureCard>
          <h3>Guided Meditations</h3>
          <p>Step-by-step guided meditations for every need.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Calming Music</h3>
          <p>Relaxing soundscapes to ease your mind.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Sleep Support</h3>
          <p>Improve sleep with our soothing programs.</p>
        </FeatureCard>
      </FeatureGrid>
    </FeatureSection>
  );
};

const FeatureSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f7f7f7;

  h2 {
    margin-bottom: 2rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
  }
`;


const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 MeditationPro. All Rights Reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 2rem;
  text-align: center;
  background-color: #5c67f2;
  color: white;
`;


const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Features />
        </Route>
        <Route path="/about">
          <h1>About Us</h1>
          {/* About content */}
        </Route>
        <Route path="/types">
          <h1>Meditation Types</h1>
          {/* Meditation types content */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
