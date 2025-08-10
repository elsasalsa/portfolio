import React, { useState } from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme, useMediaQuery } from '@mui/material';
import "./css/about.css";

const About = () => {
    const [selectedCard, setSelectedCard] = useState("about");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleCardChange = (card) => {
        setSelectedCard(card);
    };

    const logos = [
        { src: '/img/html.png', alt: 'HTML' },
        { src: '/img/css.png', alt: 'CSS' },
        { src: '/img/js.jpg', alt: 'JavaScript' },
        { src: '/img/ts.jpg', alt: 'TypeScript' },
        { src: '/img/php.png', alt: 'PHP' },
        { src: '/img/laravel.png', alt: 'Laravel' },
        { src: '/img/node.png', alt: 'Node.js' },
        { src: '/img/react.png', alt: 'React.js' },
        { src: '/img/next.png', alt: 'Next' },
        { src: '/img/tlwnd.png', alt: 'Python' },
        { src: '/img/figma.png', alt: 'PHP' },
        { src: '/img/github.png', alt: 'MySQL' },
    ];

    return (
        <div className="about-container">
            <h1 className="about-heading">Who I Am</h1>
            <div className="underline" />

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '-20px', zIndex: 1, position: 'relative' }}>
                <ButtonGroup
                    variant="outlined"
                    aria-label="Basic button group"
                    sx={{
                        borderRadius: '50px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <Button
                        onClick={() => handleCardChange("about")}
                        sx={buttonStyle("about", selectedCard)}
                    >
                        About
                    </Button>
                    <Button
                        onClick={() => handleCardChange("skills")}
                        sx={buttonStyle("skills", selectedCard)}
                    >
                        Skills
                    </Button>
                    <Button
                        onClick={() => handleCardChange("journey")}
                        sx={buttonStyle("journey", selectedCard)}
                    >
                        Journey
                    </Button>
                </ButtonGroup>
            </div>

            {selectedCard === "about" && (
                <Card variant="outlined" sx={cardStyle}>
                    <Typography style={{ wordSpacing: '3px', fontSize: '1.1rem', marginBottom: '20px' }}>
                        Hi! My name is <b>Elsa Salsa Bila</b>. I’m a Frontend Developer and a graduate of Wikrama Bogor
                        Vocational High School, majoring in Software and Game Development. I have a strong passion
                        and skill set in front-end development, and I’m committed to continuous learning and growth
                        in the world of technology. I also gained valuable hands-on experience during a six-month
                        internship as a Frontend Developer, where I honed my skills in building responsive and
                        user-friendly web interfaces.
                    </Typography>
                </Card>
            )}

            {selectedCard === "journey" && (
                <Card variant="outlined" sx={cardStyle}>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Box sx={{ flex: '1 1 45%' }}>
                            <Typography sx={{ fontSize: '1.1rem', textAlign: 'left', lineHeight: '1.4' }}>
                                <p style={{ fontSize: '0.9rem', color: 'white', marginBottom: '5px' }}>Frontend Developer</p>
                                <p style={{ fontSize: '0.9rem', color: '#4a5568' }}><i>Wikrama Vocational High School</i></p>
                                <ul style={{ fontSize: '0.8rem', marginTop: '5px', paddingLeft: '20px' }}>
                                    <li>Personal Web using HTML, CSS</li>
                                    <li>Profile Website using React JS</li>
                                    <li>Flood Detector Website in the Jakarta area</li>
                                </ul>
                                <hr style={{ width: "80%", margin: '1rem 0' }} />
                            </Typography>

                            <Typography sx={{ fontSize: '1.1rem', textAlign: 'left', lineHeight: '1.4' }}>
                                <p style={{ fontSize: '0.9rem', color: 'white', marginBottom: '5px' }}>Frontend Developer</p>
                                <p style={{ fontSize: '0.9rem', color: '#4a5568' }}><i>Starcore Analytics</i></p>
                                <ul style={{ fontSize: '0.8rem', marginTop: '5px', paddingLeft: '20px' }}>
                                    <li>Developing a corporate retail website to manage data</li>
                                    <li>Testing to improve the quality of web applications</li>
                                </ul>
                            </Typography>
                        </Box>

                        <Box sx={{ flex: '1 1 45%' }}>
                            <Typography sx={{ fontSize: '1.1rem', textAlign: 'left', lineHeight: '1.4' }}>
                                <p style={{ fontSize: '0.9rem', color: 'white', marginBottom: '5px' }}>Fullstack Developer</p>
                                <p style={{ fontSize: '0.9rem', color: '#4a5568' }}><i>Wikrama Vocational High School</i></p>
                                <ul style={{ fontSize: '0.8rem', marginTop: '5px', paddingLeft: '20px' }}>
                                    <li>Charity website for school mosque</li>
                                    <li>Simple pharmacy website</li>
                                    <li>Delay Website for Students at School</li>
                                    <li>Shopping website for cashier</li>
                                </ul>
                                <hr style={{ width: "80%", margin: '1rem 0' }} />
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            )}

            {selectedCard === "skills" && (
                <Card variant="outlined" sx={cardStyle}>
                    <CardContent>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                                columnGap: '20px',
                                rowGap: '60px',
                                justifyItems: 'center',
                                alignItems: 'center',
                                marginTop: '10px',
                            }}
                        >
                            {logos.map((logo, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '12px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        style={{
                                            width: '76px',
                                            height: '76px',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    padding: '70px 50px 40px 50px',
    maxWidth: '825px',
    margin: '0 auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
};

const buttonStyle = (btnType, selected) => ({
    borderRadius: btnType === 'about' ? '50px 0 0 50px' : btnType === 'journey' ? '0 50px 50px 0' : 0,
    color: selected === btnType ? '#66d9e8' : 'white',
    textTransform: 'none',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRight: btnType !== 'journey' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
    px: 3,
    backgroundColor: selected === btnType ? 'rgba(102, 217, 232, 0.15)' : 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(102, 217, 232, 0.15)',
        color: '#66d9e8',
    },
});

export default About;
