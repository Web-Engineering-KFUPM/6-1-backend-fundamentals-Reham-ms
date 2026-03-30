import { useEffect, useState } from 'react';
import './index.css';

export default function App() {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/student')
            .then((res) => res.json())
            .then((data) => {
                setStudent(data);
            });
    }, []);

    return (
        <main className="app-shell">
            <section className="hero-box">
                <p className="tag">Node + React Intro Lab</p>
                <h1>Student Information</h1>
                <p className="subtitle">
                    This page shows one simple example of React receiving data from the back-end.
                </p>
            </section>

            <section className="student-card">
                <h2>Profile</h2>

                {student ? (
                    <div className="student-info">
                        <div className="avatar">
                            {student.name?.charAt(0)}
                        </div>

                        <div>
                            <h3>{student.name}</h3>
                            <p>{student.major}</p>
                        </div>
                    </div>
                ) : (
                    <p className="loading-text">Loading student data...</p>
                )}
            </section>
        </main>
    );
}