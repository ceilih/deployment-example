import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

import TopStoriesList from "@/components/TopStoriesList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <Container maxWidth="md" component={"main"}>
      <Typography component="h1" variant= "h5">
        Top Hacker News Stories
      </Typography>
      <TopStoriesList />
    </Container>
    </div>
  );
}
