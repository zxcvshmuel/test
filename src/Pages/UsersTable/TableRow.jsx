import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function TableRow({
  id = '',
  name = '',
  email = '',
  access: password = '',
  usedStrips = '',
  leftStrips = '',
  admin,
  create,
}) {
  const [newName, setNewName] = useState(name);
  const [newPassword, setNewPassword] = useState(password);
  const [newEmail, setNewEmail] = useState(email);
  const [newLeftStrips, setNewLeftStrips] = useState(leftStrips);

  const signUp = async () => {
    return await createUserWithEmailAndPassword(auth, newEmail, newPassword);
  };

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeNewEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const handleChangeNewLeftStrips = (e) => {
    setNewLeftStrips(e.target.value);
  };

  const handleApproveLine = async () => {
    if (!!id) {
      try {
        const docRef = doc(db, 'users', id);
        const payload = {
          name: newName,
          email: newEmail,
          access: newPassword,
          usedStrips: usedStrips,
          leftStrips: newLeftStrips,
          admin: !!admin,
          localId: id,
        };
        // await setDoc(docRef, payload);
        await updateDoc(docRef, payload);
        alert('עודכן בהצלחה');
      } catch (e) {
        alert('שגיאה במהלך העידכון');
        alert(e.message);
      }
    } else {
      try {
        let signed = await signUp();
        let newId = signed?.user?.reloadUserInfo?.localId;
        if (newId) {
          await setDoc(doc(db, 'users', newId), {
            name: newName,
            email: newEmail,
            access: newPassword,
            usedStrips: 0,
            leftStrips: newLeftStrips,
            localId: newId,
          });
          setNewEmail('');
          setNewPassword('');
          setNewName('');
          setNewLeftStrips('');
          alert('נוסף בהצלחה');
        } else {
        }
      } catch (e) {
        alert(' שגיאה בהוספת משתמש חדש');
        alert(e.message);

        console.error('Error adding document: ', e);
      }
    }
  };

  const handleRemoveUser = () => {
    // db.collection('users').doc(id).delete();
    deleteDoc(doc(db, 'users', id));
    alert('נמחק בהצלחה');
  };

  return (
    <tr>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '5%',
        }}
      >
        {id}
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '20%',
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="שם"
          value={newName}
          onChange={handleChangeNewName}
        />
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '30%',
        }}
      >
        <input
          type="email"
          className="form-control"
          placeholder="מייל"
          value={newEmail}
          onChange={handleChangeNewEmail}
        />
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '10%',
        }}
      >
        {create ? (
          <input
            type="text"
            className="form-control"
            placeholder="סיסמה"
            value={newPassword}
            onChange={handleChangeNewPassword}
          />
        ) : (
          newPassword
        )}
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '5%',
        }}
      >
        {usedStrips}
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '15%',
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="כמות סטריפים"
          value={newLeftStrips}
          onChange={handleChangeNewLeftStrips}
        />
      </td>
      <td
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
          width: '10%',
        }}
      >
        <ul
          className="action-list"
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          {newName && newEmail && newPassword && (
            <li>
              {/* eslint-disable-next-line*/}
              <button
                className="view"
                data-tip="שמור"
                style={{
                  color: 'green',
                  backgroundColor: 'white',
                  outline: 'none',
                  borderWidth: 0,
                  padding: '5px 10px',
                }}
                onClick={handleApproveLine}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </button>
            </li>
          )}

          {id && (
            <li>
              {/* eslint-disable-next-line*/}
              <button
                className="delete"
                data-tip="מחק"
                style={{
                  color: 'red',
                  backgroundColor: 'white',
                  outline: 'none',
                  borderWidth: 0,
                  padding: '5px 10px',
                }}
                onClick={handleRemoveUser}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </button>
            </li>
          )}
        </ul>
      </td>
    </tr>
  );
}

export default TableRow;
