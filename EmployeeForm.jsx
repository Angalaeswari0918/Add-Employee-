import { useState } from 'react';
import './EmployeeForm.css';

const initialEmployees = [
  { id: 1, name: 'Ajith Kumar', mobile: '9876543210' },
  { id: 2, name: 'ABCD COLLAGE OF ENG', mobile: '' },
  { id: 3, name: 'Naveen', mobile: '8765432768' },
  { id: 4, name: 'Prasath', mobile: '98765439876' },
];

function EmployeeForm() {
  const [employees, setEmployees] = useState(initialEmployees);

  return (
    <div className="form-container">
      <div className="employee-view">
        <h2>Employee View</h2>
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Employee Name</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.mobile || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="add-employee">
        <h2>Add New Employee</h2>

        <div className="form-group">
          <label htmlFor="employeeName">Employee Name *</label>
          <input type="text" id="employeeName" placeholder="Ex: Peter" />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number *</label>
          <input type="text" id="mobileNumber" placeholder="Ex: 9876543210" />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Ex: Kovilpatti" />
        </div>

        <div className="form-group">
          <label>Gender *</label>
          <div className="radio-group">
            <input type="radio" id="male" name="gender" value="male" defaultChecked />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="workType">Work Type *</label>
          <select id="workType" defaultValue="">
            <option value="" disabled>select</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default EmployeeForm;
