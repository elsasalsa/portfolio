import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <FaLaravel />, name: "Laravel" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiMysql />, name: "MySQL" },
];

const Skill = () => {
  return (
    <Box
      sx={{
        mt: { xs: "80px", md: "100px" },
        overflow: "hidden",
        width: "100%",
        py: { xs: 2, md: 4 },
      }}
    >
      <motion.div
        style={{
          display: "flex",
          width: "max-content",
        }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: "32px", md: "100px" },
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <Card
              key={index}
              sx={{
                minWidth: { xs: 100, md: 120 },
                height: { xs: 100, md: 120 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 0.5, md: 1 },
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: { xs: "12px", md: "16px" },
                color: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#66d9e8",
                  color: "#66d9e8",
                },
              }}
            >
              <Box sx={{ fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
                {skill.icon}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "0.7rem", md: "0.85rem" },
                  opacity: 0.85,
                }}
              >
                {skill.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Skill;
