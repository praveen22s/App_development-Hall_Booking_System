import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, Users } from 'lucide-react';
import styles from './AuthLayout.module.scss';
import Hero from '../Hero';

const AuthLayout = () => {
  return (
    <div>

        <Hero
        
        spanText="Connect with the "
        title="System"

        
        />


    <div className={styles.authLayoutContainer}>
      <div className={styles.authLayoutContent}>
        <Link to="/admin-login" className={styles.authOption}>
          <UserCircle size={64} color="#334155" />
          <span> Login</span>
        </Link>
        <Link to="/lecturer-registration" className={styles.authOption}>
          <Users size={75} color="#334155" />
          <span>  Signup</span>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AuthLayout;