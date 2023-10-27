import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../globalCompanents/Footer';
import { MyAppBar } from '../globalCompanents/MyAppBar';
import AdminTabs from './AdminTabs';
import { Staffs } from './Staff/Staffs';
import { Students } from './Student/Students';

export const Admin = () => {
  return (
    <div>
      <MyAppBar />
      <AdminTabs
        header={'Users'}
        body1={<Students />}
        body2={<Students role="staff" />}
      />
    </div>
  );
};
