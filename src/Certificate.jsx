import React from 'react';
import { useMediaQuery } from '@mui/material';
import './css/cert.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion";

const Certificate = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const isMobile = useMediaQuery('(max-width:768px)');

  const certificates = [
    { image: '/cert/literasi.jpg', description: 'Participate in a seminar on literacy wisely using social media' },
    { image: '/cert/k3.jpg', description: 'Complete e-learning regarding occupational health and safety' },
    { image: '/cert/ldk.png', description: 'Student Leadership Basic Training Participants' },
    { image: '/cert/meniti.jpg', description: 'Take classes to build a career as a Software Developer' },
    { image: '/cert/dasar-pem.jpg', description: 'Take basic programming classes to become a Software Developer' },
    { image: '/cert/dasar-github.jpg', description: 'Completed a foundational course on Git and GitHub' },
    { image: '/cert/vue.jpg', description: 'Industrial class to learn Frontend science using Vue JS' },
    { image: '/cert/cyberlabs.jpg', description: 'Industrial class to learn Backend science with JavaScript framework' },
    { image: '/cert/ratatype.jpg', description: 'Improved typing skills through intensive practice sessions with Ratatype' },
    { image: '/cert/igdx.jpg', description: 'Participate in seminar activities for prospective Game Developers' },
    { image: '/cert/job-shadow.jpg', description: 'Participate in a program to understand the profession' },
    { image: '/cert/dea.jpg', description: 'Completed a comprehensive basic Digital Marketing training program' },
    { image: '/cert/Figma.jpg', description: 'Completed an intensive course on Figma, focusing on UI/UX design' },
    { image: '/cert/RevoU.jpg', description: 'Participated in the RevoU Coding Camp for Software Engineering' },
    { image: '/cert/DSF42.jpg', description: 'Successfully finished the Faculty of IT - Frontend Development program' },
  ];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  const Wrapper = isMobile ? React.Fragment : motion.div;

  return (
    <Wrapper
      className='cert-container'
      style={{ Bottom: '50px' }}
      {...(!isMobile && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.8 },
        viewport: { once: false, amount: 0.2 }
      })}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h1 className="cert-heading">What I've Achieved</h1>
      </motion.div>

      <motion.div
        className="cert-underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        style={{ transformOrigin: "left" }}
      />

      <div className="cert-grid">
        {certificates.slice().reverse().map((cert, idx) => (
          <Wrapper
            key={idx}
            {...(!isMobile && {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: idx * 0.05 },
              viewport: { once: false, amount: 0.2 }
            })}
          >
            <Card
              sx={{
                maxWidth: 345,
                padding: "20px 20px 0 20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                '&:hover': {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                }
              }}
            >
              <CardActionArea onClick={() => handleOpen(cert.image)}>
                <CardMedia component="img" height="200" image={cert.image} />
                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#fff',
                      fontWeight: 500,
                      textShadow: '0px 1px 3px rgba(0,0,0,0.5)',
                      textAlign: 'center'
                    }}
                  >
                    {cert.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Wrapper>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'fixed',
            top: '20px',
            right: '30px',
            zIndex: 1301,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            padding: 0,
            maxWidth: '85vw',
            maxHeight: '90vh',
            overflow: 'auto',
          }}
        >
          <img
            src={selectedImage}
            alt="Certificate"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </DialogContent>
      </Dialog>
    </Wrapper>
  );
};

export default Certificate;
