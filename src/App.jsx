import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AssignmentCard from './components/AssignmentCard'
import profileImg from "./assets/profile.jpg"; 

const sampleAssignments = [
  {
    id: 1,
    title: 'Assignment 1 - MTECH IT INTERNAL 2 PAPER',
    video: 'https://www.youtube.com/playlist?list=PLSBMcQ-3aOgqJrqV9Paie4gEwGW3e6pi2',
    pdf: 'https://drive.google.com/file/d/1UE5dwkTu0t7BcMmp0J9p2Q9Dc6rq3p34/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1rUIgsUXc0c5cwtEmw1jA4hHQS5VUOpha351ZSU-cYqY/edit?tab=t.0#heading=h.9zqznot71z0k',
    summary: 'This playlist contains 5 videos explaining the entire Data Science internal paper in simple words.From Python and Pandas to ML, DL, and Analytics — every topic is covered with clear explanations.Great for quick revision and easy understanding.'
  },
  {
    id: 2,
    title: 'Assignment 2 - MCA INTERNAL 2 PAPER',
    video: 'https://youtube.com/playlist?list=PLSBMcQ-3aOgr6mGxsMhM6b9AJOXjx38se&si=clT3zkFY_Dd7Q0kz',
    pdf: 'https://drive.google.com/file/d/1X6qujTOx1xiTYZ3zGZNoDn8_Pw8K07r3/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1c77BSQSx55J2bF_yqrh3RYYtsPJTvvf3TIIb-0PQgM8/edit?pli=1&tab=t.0',
    summary: 'This playlist covers all four sections of the MCA Second Internal Test for Introduction to Data Science. Each video includes accurate answers, clear explanations, and quick revision support for all 50 questions, including fill-in-the-blanks, Python commands, formulas, and conceptual topics.'
  },
  {
    id: 3,
    title: 'Assignment 3 - 10 IMP Assignment Questions',
    video: 'https://youtube.com/placeholder',
    pdf: 'https://drive.google.com/file/d/16xhT6_1CM3TSeKPr8Lxqhy0bHHBzruZ6/view?usp=sharing',
    ppt: 'https://drive.google.com/drive/folders/13U6IopmpkEUaEr-B1LBzOtjZOFYVpYsi',
    summary: '10 Questions covering whole Syllabus'
  }
  ,
  {
    id: 2,
    title: 'Assignment 2 - MTECH INTERNAL 3 PAPER',
    video: '',
    pdf: 'https://drive.google.com/file/d/1X6qujTOx1xiTYZ3zGZNoDn8_Pw8K07r3/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1c77BSQSx55J2bF_yqrh3RYYtsPJTvvf3TIIb-0PQgM8/edit?pli=1&tab=t.0',
    summary: 'This playlist covers all four sections of the MCA Second Internal Test for Introduction to Data Science. Each video includes accurate answers, clear explanations, and quick revision support for all 50 questions, including fill-in-the-blanks, Python commands, formulas, and conceptual topics.'
  }
  ,
  {
    id: 2,
    title: 'Assignment 2 - MCA INTERNAL 3 PAPER',
    video: '',
    pdf: 'https://drive.google.com/file/d/1X6qujTOx1xiTYZ3zGZNoDn8_Pw8K07r3/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1c77BSQSx55J2bF_yqrh3RYYtsPJTvvf3TIIb-0PQgM8/edit?pli=1&tab=t.0',
    summary: 'This playlist covers all four sections of the MCA Second Internal Test for Introduction to Data Science. Each video includes accurate answers, clear explanations, and quick revision support for all 50 questions, including fill-in-the-blanks, Python commands, formulas, and conceptual topics.'
  }
  ,
  {
    id: 2,
    title: 'Assignment 2 - E LAB',
    video: '',
    pdf: 'https://drive.google.com/file/d/1X6qujTOx1xiTYZ3zGZNoDn8_Pw8K07r3/view?usp=sharing',
    ppt: 'https://docs.google.com/document/d/1c77BSQSx55J2bF_yqrh3RYYtsPJTvvf3TIIb-0PQgM8/edit?pli=1&tab=t.0',
    summary: 'This playlist covers all four sections of the MCA Second Internal Test for Introduction to Data Science. Each video includes accurate answers, clear explanations, and quick revision support for all 50 questions, including fill-in-the-blanks, Python commands, formulas, and conceptual topics.'
  }
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
