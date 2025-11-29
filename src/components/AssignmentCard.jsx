import React from "react";

export default function AssignmentCard({ assignment }) {
  return (
    <article className="assignment-card">

      {/* HEADER */}
      <h3 className="ac-title">{assignment.title}</h3>


      <a
        href='https://drive.google.com/drive/folders/13U6IopmpkEUaEr-B1LBzOtjZOFYVpYsi'
        className="ac-drive-link"
        target="_blank"
        rel="noreferrer"
      >
        🔗 Assignment Link (Google Drive)
      </a>

      {/* SUMMARY */}
      <p className="ac-summary">{assignment.summary}</p>

      {/* RESOURCE BUTTONS */}
      <div className="ac-resources">
        <a href={assignment.video} target="_blank">▶ YouTube Video</a>
        <a href={assignment.pdf} target="_blank">📄 Study Material (PDF)</a>
        <a href={assignment.ppt} target="_blank">📊 PPT / Notes</a>
      </div>

    </article>
  );
}
