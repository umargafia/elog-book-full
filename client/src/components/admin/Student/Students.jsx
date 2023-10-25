import React, { useEffect, useState } from 'react';
import { GetAllUsers, RemoveUser } from '../../../api';
import { Names } from './Names';
import { useSelector } from 'react-redux';

export const Students = ({ role }) => {
  const { token, user } = useSelector((state) => state.student);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const response = await GetAllUsers({ token });
    if (response.status === 'success') {
      const data = response.data.data;
      if (!role) {
        setStudents(data.filter((student) => student.role === 'student'));
        return;
      }
      setStudents(data.filter((student) => student.role !== 'student'));
    }
  };

  const handleDelete = async (id) => {
    if (id === user.id) {
      alert('You cannot delete current user');
      return;
    }
    console.log(id);
    const res = await RemoveUser({ id, token });
    getStudents(res);
  };

  return (
    <div>
      {students.map((student) => (
        <Names
          name={student.name}
          RegNumber={student.regno}
          key={student._id}
          student={student}
          onclick={() => handleDelete(student._id)}
        />
      ))}
    </div>
  );
};
