// import React from 'react';

// function MentorDashboard() {
//     // Example data for mentor's sessions
//     const sessions = [
//         { id: 1, student: 'John Doe', time: '7:00 PM - 7:30 PM' },
//         { id: 2, student: 'Jane Smith', time: '7:30 PM - 8:00 PM' },
//     ];

//     return (
//         <div>
//             <h2>Mentor Dashboard</h2>
//             <h3>Upcoming Sessions:</h3>
//             <ul>
//                 {sessions.map(session => (
//                     <li key={session.id}>
//                         {session.student} - {session.time}
//                     </li>
//                 ))}
//             </ul>
//             {/* Additional functionality can be added to manage availability */}
//         </div>
//     );
// }

// export default MentorDashboard;


import React from 'react';

function MentorDashboard() {
    // Example data for mentor's sessions
    const sessions = [
        { id: 1, student: 'John Doe', time: '7:00 PM - 7:30 PM' },
        { id: 2, student: 'Jane Smith', time: '7:30 PM - 8:00 PM' },
    ];

    return (
        <div>
            <h2>Mentor Dashboard</h2>
            <h3>Upcoming Sessions:</h3>
            <ul>
                {sessions.map(session => (
                    <li key={session.id}>
                        {session.student} - {session.time}
                    </li>
                ))}
            </ul>
            {/* Additional functionality can be added to manage availability */}
        </div>
    );
}

export default MentorDashboard;
