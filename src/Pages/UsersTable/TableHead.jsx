import React from 'react';

function TableHead() {
  return (
    <thead
      style={{
        color: 'white',
        borderColor: '#5E5EF1',
        borderWidth: '1px',
      }}
    >
      <tr
        style={{
          color: 'white',
          borderColor: '#5E5EF1',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        <th>#</th>
        <th>שם</th>
        <th>אימייל</th>
        <th>סיסמה</th>
        <th>סטריפים נוצלו</th>
        <th>סטריפים נשארו</th>
        <th>פעולות</th>
      </tr>
    </thead>
  );
}

export default TableHead;
