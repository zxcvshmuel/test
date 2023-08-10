import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { auth as userAuth } from '../../components/recoil/root';

import TableHead from './TableHead';
import TableRow from './TableRow';

// import { createUserWithEmailAndPassword } from 'firebase/auth';

import './UsersTable.css';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [userAuthentication, setUserAuthentication] = useRecoilState(userAuth);

  useEffect(() => {
    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let newUsers = [];
      querySnapshot.forEach((doc) => {
        newUsers.push({ ...doc.data(), id: doc.id });
      });
      setUsers(newUsers);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!!Object.keys(auth?.currentUser ?? {})?.length && userAuthentication) {
      setUserAuthentication(true);
    } else {
      navigate('/');
    }
  }, [userAuthentication]); //eslint-disable-line

  return (
    <div
      className="container"
      style={{
        direction: 'rtl',
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col col-sm-9 col-xs-12">
                  <h4
                    className="title"
                    style={{
                      color: '#5E5EF1',
                    }}
                  >
                    רשימת <span>משתמשים </span>
                  </h4>
                </div>
                <div className="col-sm-3 col-xs-12 text-right">
                  <button onClick={handleGoBack}>חזרה לעמוד הקודם</button>
                </div>
              </div>
            </div>
            <div className="panel-body table-responsive">
              <table
                className="table table-hover table-bordered"
                style={{
                  width: '100%',
                }}
              >
                <TableHead />
                <tbody>
                  {users.map((user) => (
                    <TableRow {...user} key={user.id} />
                  ))}
                  <TableRow create />
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <div className="row">
                <div className="col col-xs-6">
                  {/* Showing <b>5</b> out of <b>25</b> entries */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
