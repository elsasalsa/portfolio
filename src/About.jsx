import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme, useMediaQuery } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from "@mui/lab";
import "./css/about.css";

const About = () => {
    const [selectedCard, setSelectedCard] = useState("about");

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleCardChange = (card) => {
        setSelectedCard(card);
    };

    const careerPath = [
        {
            date: "Jan 2024 – Jun 2024",
            role: "Frontend Developer (Intern)",
            company: "PT Exorty Indonesia",
        },
        {
            date: "Aug 2024 – Oct 2024",
            role: "Frontend Developer (Part Time)",
            company: "PT Exorty Indonesia",
        },
        {
            date: "Oct 2025 – Dec 2025",
            role: "Frontend Developer",
            company: "CV Funware Nurbadi Digital",
        },
        {
            date: "Jan 2026 – Present",
            role: "Frontend Developer",
            company: "PT Mediatama Indo Teknologi",
        },
    ];

    return (
        <div className="about-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            >
                <h1 className="about-heading">Who I Am</h1>
            </motion.div>

            <motion.div
                className="about-underline"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                style={{ transformOrigin: "left" }}
            />

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
                        onClick={() => handleCardChange("career")}
                        sx={buttonStyle("career", selectedCard)}
                    >
                        Career
                    </Button>
                    <Button
                        onClick={() => handleCardChange("showcase")}
                        sx={buttonStyle("showcase", selectedCard)}
                    >
                        Showcase
                    </Button>
                </ButtonGroup>
            </div>

            {selectedCard === "about" && (
                <Card variant="outlined" sx={cardStyle}>
                    <Typography style={{ wordSpacing: '3px', fontSize: '1.2rem', marginBottom: '20px' }}>
                        Hi! My name is <b>Elsa Salsa Bila</b>. I’m a Web Developer and a proud graduate of Wikrama Bogor
                        Vocational High School, specializing in Software and Game Development. With a strong passion for
                        creating intuitive and engaging digital experiences, I’m dedicated to continuous learning and
                        growth in the ever-evolving world of technology. My six-month internship as a Frontend Developer
                        allowed me to gain hands-on experience in building responsive, user-friendly interfaces, which
                        strengthened both my technical expertise and my ability to bring creative ideas to life.
                    </Typography>
                </Card>
            )}

            {selectedCard === "career" && (
                <Card variant="outlined" sx={cardStyle}>
                    <CardContent>
                        <Timeline position={isMobile ? "right" : "alternate"}>
                            {careerPath.map((item, index) => (
                                <TimelineItem key={index}>
                                    <TimelineOppositeContent
                                        sx={{
                                            display: { xs: 'none', sm: 'block' },
                                            color: '#66d9e8',
                                            fontSize: '0.85rem',
                                            mt: '4px',
                                        }}
                                    >
                                        {item.date}
                                    </TimelineOppositeContent>

                                    <TimelineSeparator>
                                        <TimelineDot sx={{ backgroundColor: '#66d9e8' }} />
                                        {index !== careerPath.length - 1 && <TimelineConnector />}
                                    </TimelineSeparator>

                                    <TimelineContent sx={{ pb: isMobile ? 3 : 2 }}>
                                        {isMobile && (
                                            <Typography
                                                sx={{
                                                    fontSize: '0.8rem',
                                                    color: '#66d9e8',
                                                    mb: 0.5,
                                                }}
                                            >
                                                {item.date}
                                            </Typography>
                                        )}

                                        <Typography sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
                                            {item.role}
                                        </Typography>

                                        <Typography sx={{ fontSize: '0.9rem', color: '#a0aec0' }}>
                                            {item.company}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </CardContent>
                </Card>
            )}

            {selectedCard === "showcase" && (
                <Card variant="outlined" sx={cardStyle}>
                    <CardContent sx={{ padding: 0 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {[
                                { title: "Curriculum Vitae", desc: "A concise resume of career journey and experiences.", file: "/Elsa Salsa Bila - CV.pdf" },
                                { title: "Portfolio", desc: "A collection of highlighted projects and creative works.", file: "/Elsa Salsa Bila - Portofolio.pdf" },
                                { title: "Reference Letter", desc: "Recommendation and work reference letters.", file: "/Elsa Salsa Bila - SRK.pdf" },
                            ].map((doc, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={doc.file}
                                    download
                                    sx={{
                                        textDecoration: 'none',
                                        px: 2,
                                        py: 1.5,
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        color: 'white',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(102, 217, 232, 0.15)',
                                            borderColor: '#66d9e8',
                                            transform: 'translateY(-3px)',
                                        }
                                    }}
                                >
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Typography sx={{ fontWeight: '600', fontSize: '1rem' }}>
                                            {doc.title}
                                        </Typography>
                                        <Typography sx={{ fontSize: '0.85rem', color: '#a0aec0' }}>
                                            {doc.desc}
                                        </Typography>
                                    </Box>

                                    <DownloadIcon sx={{ fontSize: '1.5rem', color: '#66d9e8' }} />
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
    borderRadius: btnType === 'about' ? '50px 0 0 50px' : btnType === 'showcase' ? '0 50px 50px 0' : 0,
    color: selected === btnType ? '#66d9e8' : 'white',
    textTransform: 'none',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRight: btnType !== 'showcase' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
    px: 3,
    backgroundColor: selected === btnType ? 'rgba(102, 217, 232, 0.15)' : 'transparent',
    '&:hover': {
        backgroundColor: 'rgba(102, 217, 232, 0.15)',
        color: '#66d9e8',
    },
});

export default About;
