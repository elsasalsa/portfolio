import React from 'react';
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

const Certificate = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const certificates = [
    {
      title: 'Typing Mastery',
      image: '/cert/literasi.jpg',
      description: 'Participate in literacy activities in order to use social media wisely',
    },
    {
      title: 'Web Development',
      image: '/cert/k3.jpg',
      description: 'Completed ReactJS course from Udemy.',
    },
    {
      title: 'JavaScript Fundamentals',
      image: '/cert/ldk.png',
      description: 'Basic JavaScript programming mastery.',
    },
    {
      title: 'Database Management',
      image: '/cert/dasar-pem.jpg',
      description: 'MySQL and MongoDB certification.',
    },
    {
      title: 'UI/UX Design',
      image: '/cert/meniti.jpg',
      description: 'Figma & Adobe XD design course finished.',
    },
    {
      title: 'Cybersecurity Basics',
      image: '/cert/dasar-github.jpg',
      description: 'Completed course on digital security.',
    },
    {
      title: 'Python Programming',
      image: '/cert/cyberlabs.jpg',
      description: 'Python basics & scripting mastery.',
    },
    {
      title: 'Git & GitHub',
      image: '/cert/vue.jpg',
      description: 'Version control with Git/GitHub certified.',
    },
    {
      title: 'Networking Essentials',
      image: '/cert/ratatype.jpg',
      description: 'Networking basics and protocols.',
    },
    {
      title: 'Agile Project Management',
      image: '/cert/dea.jpg',
      description: 'Scrum methodology and agile tools.',
    },
    {
      title: 'Mobile App Development',
      image: '/cert/igdx.jpg',
      description: 'Flutter & Dart beginner certification.',
    },
    {
      title: 'Cloud Computing',
      image: '/cert/job-shadow.jpg',
      description: 'AWS Cloud Practitioner Certificate.',
    },
  ];

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  return (
    <div className='cert-container'>
      <h1 className="cert-heading">What I've Achieved</h1>
      <div className="cert-underline" />

      <div className="cert-grid">
        {certificates.map((cert, idx) => (
          <Card
            key={idx}
            sx={{
              maxWidth: 345,
              padding: "20px 20px 0 20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
            }}
          >
            <CardActionArea onClick={() => handleOpen(cert.image)}>
              <CardMedia
                component="img"
                height="200"
                image={cert.image}
                alt={cert.title}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    fontWeight: 500,
                    textShadow: '0px 1px 3px rgba(0,0,0,0.5)'
                  }}
                >
                  {cert.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'fixed', // tetap di tempat walaupun discroll
            top: '20px',
            right: '30px',
            zIndex: 1301, // pastikan di atas dialog (default MUI zIndex dialog: 1300)
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
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
    </div>
  );
};

export default Certificate;
