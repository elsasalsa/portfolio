import React, { useEffect, useRef, useState } from 'react';
import { Card, CardMedia, Modal, Box, Typography, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TranslateIcon from '@mui/icons-material/Translate';
import './css/project.css';

const projectData = [
  {
    title: 'Masjid Project',
    title_id: 'Proyek Masjid',
    image: '/project/masjid.png',
    link: 'https://github.com/elsasalsa/webmasjid',
    description: 'This website was built using PHP Laravel to support mosque development donations. All donation data is recorded and managed by the system.',
    description_id: 'Website ini dibangun menggunakan PHP Laravel untuk mendukung donasi pembangunan masjid. Semua data donasi tercatat dan dikelola oleh sistem.',
  },
  {
    title: 'Simple Pharmacy Project',
    title_id: 'Proyek Apotek Sederhana',
    image: '/project/apotek.png',
    link: 'https://github.com/elsasalsa/apoteker-app',
    description: 'Built with PHP Laravel and Bootstrap, this system includes two roles: admin and cashier. It manages medicine data, checkout system, and includes Excel and PDF export features.',
    description_id: 'Dibangun dengan PHP Laravel dan Bootstrap, sistem ini memiliki dua peran yaitu admin dan kasir. Sistem ini mengelola data obat, sistem checkout, dan memiliki fitur ekspor ke Excel dan PDF.',
  },
  {
    title: 'Late Attendance Project',
    title_id: 'Proyek Keterlambatan Siswa',
    image: '/project/telat.png',
    link: 'https://github.com/elsasalsa/web-keterlambatan',
    description: 'A system to record student late attendance, built with PHP, Laravel, and Bootstrap. Includes photo capture, three user roles (admin, student, counselor), and export to Excel and PDF.',
    description_id: 'Sistem untuk mencatat keterlambatan siswa, dibangun menggunakan PHP, Laravel, dan Bootstrap. Menyediakan fitur unggah foto, tiga peran pengguna (admin, siswa, pembimbing), dan ekspor data ke Excel dan PDF.',
  },
  {
    title: 'Portfolio Project',
    title_id: 'Proyek Portofolio',
    image: '/project/porto.png',
    link: 'https://elcvport.netlify.app',
    description: 'A personal portfolio website built using HTML, CSS, Bootstrap, and a bit of JavaScript. Displays projects and information in a neat and clear layout.',
    description_id: 'Situs portofolio pribadi yang dibangun dengan HTML, CSS, Bootstrap, dan sedikit JavaScript. Menampilkan proyek dan informasi secara rapi dan jelas.',
  },
  {
    title: 'Simple Restaurant Project',
    title_id: 'Proyek Rumah Makan Sederhana',
    image: '/project/rm.png',
    link: 'https://github.com/elsasalsa/project-rumahmakan',
    description: 'A landing page for a restaurant built using PHP Laravel and React-Bootstrap. It showcases food and drink menus.',
    description_id: 'Sebuah landing page rumah makan yang dibangun menggunakan PHP Laravel dan React-Bootstrap. Menampilkan daftar menu makanan dan minuman.',
  },
  {
    title: 'Sivina Retail Project',
    title_id: 'Proyek Retail Sivina',
    image: '/project/sivina2.png',
    link: '/error',
    description: 'An internship project built using React.js (frontend) and Python (backend). This system manages store and product data across Indonesia with filters by region and a map view for store locations.',
    description_id: 'Proyek magang yang dibangun menggunakan React.js (frontend) dan Python (backend). Sistem ini mengelola data toko dan produk di seluruh Indonesia dengan filter wilayah serta tampilan peta lokasi toko.',
  },
  {
    title: 'Ciliwung Watershed Monitoring Project',
    title_id: 'Proyek Pemantauan DAS Ciliwung',
    image: '/project/das.png',
    link: 'https://github.com/aryantiraihana/flood-monitoring-client/tree/master',
    description: 'A part-time project using React.js (frontend) and Python (backend) to monitor flood-prone areas in Jakarta. It displays flood levels and affected locations.',
    description_id: 'Proyek paruh waktu yang menggunakan React.js (frontend) dan Python (backend) untuk memantau wilayah rawan banjir di Jakarta. Menampilkan tingkat kedalaman banjir dan lokasi terdampak.',
  },
  {
    title: 'Portfolio Project',
    title_id: 'Proyek Portofolio Pribadi',
    image: '/project/profile.png',
    link: 'https://github.com/elsasalsa/profile-app',
    description: 'A personal portfolio project built using React.js. Created during my web development bootcamp at Telkom DigiUp.',
    description_id: 'Proyek portofolio pribadi yang dibangun menggunakan React.js. Dibuat saat mengikuti bootcamp web development di Telkom DigiUp.',
  },
  {
    title: 'Company Profile Project',
    title_id: 'Proyek Profil Perusahaan',
    image: '/project/codevo.png',
    link: 'https://codevocompany.netlify.app',
    description: 'A company profile site built with React.js. It presents products, services, and company identity. Developed during my bootcamp at DigiUp.',
    description_id: 'Situs profil perusahaan yang dibangun menggunakan React.js. Menyajikan informasi produk, layanan, dan identitas perusahaan. Dibuat saat bootcamp di DigiUp.',
  },
  {
    title: 'Sales System for Cashiers (Admin Role)',
    title_id: 'Sistem Penjualan Kasir (Peran Admin)',
    image: '/project/kasir.png',
    link: 'https://github.com/elsasalsa/kasir-ukk',
    description: 'A web-based sales system built with PHP Laravel and Flowbite UI for admin users. Features include managing users, viewing product sales percentages, exporting sales data to Excel, and downloading transaction reports as PDF.',
    description_id: 'Sistem penjualan berbasis web yang dibangun menggunakan PHP Laravel dan Flowbite UI untuk peran admin. Fitur mencakup pengelolaan pengguna, melihat presentase penjualan produk, ekspor data penjualan ke Excel, dan unduhan bukti transaksi dalam format PDF.',
  },
  {
    title: 'Sales System for Cashiers (Cashier Role)',
    title_id: 'Sistem Penjualan Kasir (Peran Kasir)',
    image: '/project/kasir2.png',
    link: 'https://github.com/elsasalsa/kasir-ukk',
    description: 'A web-based sales system built with PHP Laravel and Flowbite UI for cashiers. Allows viewing today’s total sales, adding transactions, managing members and points, and exporting sales data to Excel and transaction proof to PDF.',
    description_id: 'Sistem penjualan berbasis web yang dibangun menggunakan PHP Laravel dan Flowbite UI untuk peran kasir. Memungkinkan melihat total penjualan hari ini, menambah transaksi, mengelola member dan sistem poin, serta ekspor data penjualan ke Excel dan bukti transaksi ke PDF.',
  },
  {
    title: 'Store Product Catalog',
    title_id: 'Katalog Produk Toko',
    image: '/project/product.png',
    link: 'https://github.com/elsasalsa/product-web-app/tree/master',
    description: 'Built using .NET Core Framework, this system displays categorized product data. Each category can have multiple products, and the system uses soft delete for product management.',
    description_id: 'Dibangun dengan .NET Core Framework, sistem ini menampilkan data produk yang dikategorikan. Setiap kategori dapat memiliki banyak produk, dan sistem menggunakan metode soft delete untuk pengelolaan produk.',
  },
  {
    title: 'To Do List App - Admin Role',
    title_id: 'Aplikasi To Do List - Peran Admin',
    image: '/project/todo-admin.png',
    link: 'https://todolistify-ruby.vercel.app/',
    description: 'An admin dashboard built with Next.js and TypeScript to monitor users and their task statuses (completed/not completed). Includes search and status filter features.',
    description_id: 'Aplikasi dashboard admin yang dibuat menggunakan Next.js dan TypeScript untuk menampilkan nama-nama user beserta daftar pekerjaan dan statusnya (sudah/belum dikerjakan). Dilengkapi fitur pencarian dan filter berdasarkan status.',
  },
  {
    title: 'To Do List App - User Role',
    title_id: 'Aplikasi To Do List - Peran Pengguna',
    image: '/project/todo-user.png',
    link: 'https://todolistify-ruby.vercel.app/',
    description: 'A To Do List application built with Next.js and TypeScript. Allows users to view, add, update, and delete their tasks efficiently.',
    description_id: 'Aplikasi To Do List yang dibuat menggunakan Next.js dan TypeScript. Bertujuan untuk menampilkan, menambah, mengubah, dan menghapus daftar pekerjaan yang harus dilakukan oleh user.',
  },
  {
    title: 'News Board',
    title_id: 'Papan Berita',
    image: '/project/news.png',
    link: 'https://github.com/elsasalsa/news-board',
    description: 'A News Board application built with React.js, TypeScript, Vite, and Ant Design. Displays news from around the world with category-based filtering.',
    description_id: 'Aplikasi News Board yang dibuat menggunakan React.js, TypeScript, Vite, dan Ant Design. Menampilkan berita dari seluruh dunia serta dilengkapi dengan filter berdasarkan kategori.',
  }
];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [language, setLanguage] = useState('en');

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

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <div className="project-container">
      <h1 className="project-heading">What I’ve Built</h1>
      <div className="project-underline" />

      <Typography
        variant="body2"
        align="center"
        sx={{
          mb: 3,
          color: '#b0bec5',
          textShadow: '0px 1px 6px rgba(206, 206, 233, 0.5)',
        }}
      >
        ← Swipe to view more projects →
      </Typography>

      <div
        className="project-cards-wrapper"
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '40px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: '20px',
        }}
      >
        {[...projectData].reverse().map((project, index) => (
          <Card
            key={index}
            onClick={() => handleOpen(project)}
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
              cursor: 'pointer',
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </Card>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 500,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            pt: 3,
            outline: 'none',
          }}
        >
          {selectedProject && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>

              <Typography variant="h6" fontWeight="bold" gutterBottom color="text.primary">
                {language === 'en'
                  ? selectedProject.title
                  : selectedProject.title_id || selectedProject.title}
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }} color="text.secondary">
                {language === 'en'
                  ? selectedProject.description
                  : selectedProject.description_id || selectedProject.description}
              </Typography>

              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Button
                  onClick={toggleLanguage}
                  startIcon={<TranslateIcon fontSize="small" />}
                  sx={{
                    textTransform: 'none',
                    color: '#1976d2',
                    fontSize: 13,
                    px: 0,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                </Button>

                <Button
                  endIcon={<OpenInNewIcon />}
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ textTransform: 'none' }}
                >
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Project;
