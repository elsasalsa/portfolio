import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './css/project.css';

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  const projectData = [
    { title: 'Project 1', image: '/project/masjid.png', link: 'https://example.com/project1' },
    { title: 'Project 2', image: '/project/apotek.png', link: 'https://example.com/project2' },
    { title: 'Project 3', image: '/project/contact.png', link: 'https://example.com/project3' },
    { title: 'Project 4', image: '/project/telat.png', link: 'https://example.com/project4' },
    { title: 'Project 5', image: '/project/porto.png', link: 'https://elcvport.netlify.app' },
    { title: 'Project 6', image: '/project/rm.png', link: 'https://example.com/project6' },
    { title: 'Project 7', image: '/project/sivina2.png', link: 'https://example.com/project7' },
    { title: 'Project 8', image: '/project/das.png', link: 'https://example.com/project8' },
    { title: 'Project 9', image: '/project/codevo.png', link: 'https://codevocompany.netlify.app' },
    { title: 'Project 10', image: '/project/kasir.png', link: 'https://example.com/project10' },
    { title: 'Project 11', image: '/project/porto2.png', link: 'https://example.com/project11' },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      const closestIndex = cards.reduce((closestIdx, card, idx) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const currentDistance = Math.abs(containerCenter - cardCenter);
        const closestDistance = Math.abs(
          containerCenter - (cards[closestIdx]?.offsetLeft + cards[closestIdx]?.offsetWidth / 2)
        );
        return currentDistance < closestDistance ? idx : closestIdx;
      }, 0);

      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="project-container">
      <h1 className="project-heading">What I’ve Built</h1>
      <div className="project-underline" />

      <div
        className="project-cards-wrapper"
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '40px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
        }}
      >
        {projectData.map((project, index) => (
          <Card
            key={index}
            sx={{
              height: 270,
              minWidth: 300,
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden',
              scrollSnapAlign: 'center',
              transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.3s ease',
              boxShadow: activeIndex === index ? '0 6px 20px rgba(0,0,0,0.2)' : 'none',
              ...(index === 0 && { marginLeft: '20px' }),
            }}
          >
            <Box
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 0.3s',
                textDecoration: 'none',
                zIndex: 1,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              <IconButton sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.6)' }}>
                <OpenInNewIcon />
              </IconButton>
            </Box>

            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
