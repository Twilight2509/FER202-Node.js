import React from 'react'
import { Navigate } from 'react-router-dom'; 
export default function Protected({children}) {
    const account = localStorage.getItem('account');
    if (!account) {
        return <Navigate to="/login" />;
      }
      return children;
}
