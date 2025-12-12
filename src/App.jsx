import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AssignmentCard from './components/AssignmentCard'
import profileImg from "./assets/profile.jpg"; 

const sampleAssignments = [
 {
    id: 1,
    title: 'Assignment 1 - MTECH IT INTERNAL 1 PAPER',
    video: 'https://youtube.com/playlist?list=PLSBMcQ-3aOgqoyCAG4lvi2VFBl8g0p0JV&si=ZPG0IFftB8ZW7Hp8',
    pdf: 'https://docs.google.com/presentation/d/1eBi28nPxEOfIcjKPQUXelC1ZzzG88pil/edit?usp=sharing&ouid=102752533725136234639&rtpof=true&sd=true',
    ppt: 'https://docs.google.com/document/d/1lhl4Ijfgh3zcHMLWLNMPYjIMptTAdWILKOjWQAoCOus/edit?tab=t.0',
    summary: 'This playlist contains all three videos of my Internal-1 Data Science paper solution (MTech IT).The paper is divided into three sections, and each video explains one full section in an easy and detailed way.Perfect for quick revision, last-minute study, and understanding concepts with clear logic.'
  },
  {
    id: 1,
    title: 'Assignment 2 - MTECH IT INTERNAL 2 PAPER',
    video: 'https://www.youtube.com/playlist?list=PLSBMcQ-3aOgqJrqV9Paie4gEwGW3e6pi2',
    pdf: 'https://drive.google.com/file/d/1UE5dwkTu0t7BcMmp0J9p2Q9Dc6rq3p34/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1rUIgsUXc0c5cwtEmw1jA4hHQS5VUOpha351ZSU-cYqY/edit?tab=t.0#heading=h.9zqznot71z0k',
    summary: 'This playlist contains 5 videos explaining the entire Data Science internal paper in simple words.From Python and Pandas to ML, DL, and Analytics — every topic is covered with clear explanations.Great for quick revision and easy understanding.'
  },
  {
    id: 2,
    title: 'Assignment 3 - MTECH INTERNAL 3 PAPER',
    video: 'https://youtube.com/playlist?list=PLSBMcQ-3aOgqPtRy9TAE0mPBnObl9uBif&si=4e0jPQd_ENFcv8Ff',
    pdf: 'https://drive.google.com/file/d/1axNdlW6W-JnzNeayNmwYNM2KkToVkqjZ/view?usp=sharing',
    ppt: 'https://drive.google.com/file/d/1axNdlW6W-JnzNeayNmwYNM2KkToVkqjZ/view?usp=sharing',

    summary: 'This solution set covers all 40 Multiple Choice Questions (MCQs) of the Internal–III Examination for M.Tech (Information Technology) in a clear, easy, and well-structured manner. Each question is explained in simple language, ensuring quick understanding and effective revision.'
  },
  
  {
    id: 2,
    title: 'Assignment 4 - MTECH  END SEMESTER PAPER',
    video: 'https://youtube.com/playlist?list=PLSBMcQ-3aOgpPmOLF3bBs_-9X7ajSIoCY&si=PSWlwCdlrPDUMftx',
    pdf: 'https://docs.google.com/document/d/1Ymql7cupcuPN4o2mdjt7zDSKa2GfGhElkt4Yh1_IyIU/edit?tab=t.0#heading=h.9f3w51giynvv',
    ppt: '',
    summary: 'This playlist is specially designed for the MTech End Semester Examination of Introduction to Data Science. It covers the entire syllabus in a structured and easy-to-understand manner'
  },
  {
    id: 3,
    title: 'Assignment 5 - 10 IMP Assignment Questions',
    video: '',
    pdf: 'https://drive.google.com/file/d/16xhT6_1CM3TSeKPr8Lxqhy0bHHBzruZ6/view?usp=sharing',
    ppt: 'https://drive.google.com/drive/folders/13U6IopmpkEUaEr-B1LBzOtjZOFYVpYsi',
    summary: '10 Questions covering whole Syllabus'
  }
  ,
  {
    id: 2,
    title: 'Assignment 6 - MCA INTERNAL 2 PAPER',
    video: 'https://youtube.com/playlist?list=PLSBMcQ-3aOgr6mGxsMhM6b9AJOXjx38se&si=9FUKycY9KE8PesZB',
    pdf: 'https://drive.google.com/file/d/1X6qujTOx1xiTYZ3zGZNoDn8_Pw8K07r3/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1c77BSQSx55J2bF_yqrh3RYYtsPJTvvf3TIIb-0PQgM8/edit?pli=1&tab=t.0',
    summary: 'This playlist covers all four sections of the MCA Second Internal Test for Introduction to Data Science. Each video includes accurate answers, clear explanations, and quick revision support for all 50 questions, including fill-in-the-blanks, Python commands, formulas, and conceptual topics.'
  },
  
]

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return (
    <div className="app-root">
      <Navbar 
        name="Vaishnavi Khatri" 
        onToggleTheme={toggleTheme} 
        theme={theme} 
        profile={profileImg}    
      />

      <main className="container">
        <h1 className="main-heading">Data Science Assignment</h1>

        <section className="assignments-grid">
          {sampleAssignments.map(a => (
            <AssignmentCard key={a.id} assignment={a} />
          ))}
        </section>

        <footer className="footer-note">
          Replace placeholders (YouTube, PDFs, PPTs) with your real content later.
        </footer>
      </main>
    </div>
  )
}
