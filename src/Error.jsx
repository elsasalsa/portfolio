import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                textAlign: 'center',
                mt: '-30px',
            }}
        >
            <Box
                component="img"
                src="/img/404.png"
                alt="404 Not Found"
                sx={{
                    maxWidth: '600px',
                    mb: '-50px',
                    filter: 'brightness(1.3) contrast(2.1)',
                }}
            />

            <Typography
                variant="h5"
                sx={{ fontWeight: 'medium', mb: 2 }}
            >
                Sorry, the page or image you’re looking for can’t be found.
            </Typography>

            <Typography
                variant="body2"
                sx={{ color: '#ccc', maxWidth: 500, mb: 4 }}
            >
                The link may no longer exist, the content may have been moved, or it may require access permission.
            </Typography>

            <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{
                    backgroundColor: '#66d9e8',
                    color: '#000',
                    textTransform: 'none',
                    borderRadius: '20px',
                    px: 4,
                    py: 1,
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#52c1d2',
                    },
                }}
            >
                Back to Home
            </Button>
        </Box>
    );
};

export default Error;
