import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AssignmentCard from './components/AssignmentCard'
import profileImg from "./assets/profile.jpg";   // ✅ ADD THIS

const sampleAssignments = [
  {
    id: 1,
    title: 'Assignment 1 - Data Cleaning Basics',
    video: 'https://youtube.com/placeholder',
    pdf: 'https://example.com/placeholder.pdf',
    ppt: 'https://example.com/placeholder.pptx',
    summary: 'Placeholder: summary / short description'
  },
  {
    id: 2,
    title: 'Assignment 2 - Exploratory Analysis',
    video: 'https://youtube.com/placeholder',
    pdf: 'https://example.com/placeholder.pdf',
    ppt: 'https://example.com/placeholder.pptx',
    summary: 'Placeholder: summary / short description'
  },
  {
    id: 3,
    title: 'Assignment 3 - Modelling',
    video: 'https://youtube.com/placeholder',
    pdf: 'https://example.com/placeholder.pdf',
    ppt: 'https://example.com/placeholder.pptx',
    summary: 'Placeholder: summary / short description'
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
