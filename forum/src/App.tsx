import './App.css';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Forum } from './Forum.ts';
import ForumPage from './ForumPage.tsx';
import Wpis from './Wpis.tsx';

function App() {
  const [wpisy, setWpisy] = useState<Forum[]>([]);

  useEffect(() => {
    const wpisyPobrane: Forum[] = [
      {
        Id: 1,
        Zdjecie: "profile1.jpg",
        Nazwa: "Anonymous",
        Wpis: "Ut id magna eget augue vehicula consequat ut tincidunt justo. Morbi congue."
      },
      {
        Id: 2,
        Zdjecie: "profile2.jpg",
        Nazwa: "Anonymous",
        Wpis: "Nulla aliquam elementum nulla, ac dictum ante vulputate at. Etiam non ornare."
      },
      {
        Id: 3,
        Zdjecie: "profile3.jpg",
        Nazwa: "Anonymous",
        Wpis: "Sed nec dolor at mi malesuada semper dictum eu diam. Praesent facilisis."
      },
      {
        Id: 4,
        Zdjecie: "profile4.jpg",
        Nazwa: "Anonymous",
        Wpis: "Donec sed placerat odio. Aliquam quis vulputate odio, sit amet condimentum libero."
      }
    ];
    setWpisy(wpisyPobrane);
  }, []);

  const dodajWpis = (nazwa: string, wpis: string) => {
    const nowyWpis: Forum = {
      Id: wpisy.length + 1,
      Zdjecie: "profile.jpg",
      Nazwa: nazwa,
      Wpis: wpis
    };
    setWpisy([nowyWpis, ...wpisy]);
  };

  return (
    <Container className='min-vh-100 d-flex justify-content-center align-items-center'>
      <Wpis onDodaj={dodajWpis} />
      <ForumPage wpisy={wpisy} />
    </Container>
  );
}

export default App;
