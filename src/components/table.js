import React from "react";

class StudentList extends React.Component {
    render() {
        const students = [
            { name: 'Esther', cohort: 3, age: 22, year: 2024 },
            { name: 'Ritah', cohort: 3, age: 24, year: 2024 },
            { name: 'Whitney', cohort: 2, age: 26, year: 2023 },
            { name: 'Shalom', cohort: 4, age: 20, year: 2025 },
            { name: 'Desire', cohort: 3, age: 25, year: 2022 }
        ];

        return (
            <div className="StudentList">
                
                <h1>Student List for {this.props.name}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cohort</th>
                            <th>Age</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.cohort}</td>
                                <td>{student.age}</td>
                                <td>{student.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;
