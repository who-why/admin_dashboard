// UserList.jsx
import React from 'react';
import { useTable } from 'react-table';
import './UserList.css';

const UserList = () => {
  const data = React.useMemo(
    () => [
      { id: '630343eb94c2812e4cd7e45d', username: 'Devid434', email: 'devidbom232@gmail.com', status: 'active', age: 24 },
      { id: '6303234eb94c2812e4cd7e45e', username: 'Johnn434', email: 'john03434@gmail.com', status: 'passive', age: 29 },
      { id: '630363eb84c2812e4cd7e45f', username: 'Sarah123', email: 'sarah123@gmail.com', status: 'active', age: 22 },
      { id: '630373eb94c2812e4cd7e460', username: 'Mike987', email: 'mike987@gmail.com', status: 'active', age: 28 },
      { id: '630383eb94c2812e4cd7e461', username: 'Emma456', email: 'emma456@gmail.com', status: 'passive', age: 27 },
      { id: '630393eb94c2812e4cd7e462', username: 'Liam789', email: 'liam789@gmail.com', status: 'active', age: 30 },
      { id: '630403eb94c2812e4cd7e463', username: 'Olivia12', email: 'olivia12@gmail.com', status: 'active', age: 23 },
      { id: '630413eb94c2812e4cd7e464', username: 'Noah345', email: 'noah345@gmail.com', status: 'passive', age: 31 },
      { id: '630423eb94c2812e4cd7e465', username: 'Ava567', email: 'ava567@gmail.com', status: 'active', age: 26 },
      { id: '630433eb94c2812e4cd7e466', username: 'James654', email: 'james654@gmail.com', status: 'passive', age: 35 },
      { id: '630443eb94c2812e4cd7e467', username: 'Charlotte89', email: 'charlotte89@gmail.com', status: 'active', age: 21 },
      { id: '630453eb94c2812e4cd7e468', username: 'Lucas987', email: 'lucas987@gmail.com', status: 'active', age: 34 },
      { id: '630463eb94c2812e4cd7e469', username: 'Amelia456', email: 'amelia456@gmail.com', status: 'passive', age: 28 },
      { id: '630473eb94c2812e4cd7e46a', username: 'Henry321', email: 'henry321@gmail.com', status: 'active', age: 36 },
      { id: '630483eb94c2812e4cd7e46b', username: 'Isabella12', email: 'isabella12@gmail.com', status: 'passive', age: 33 },
      { id: '630493eb94c2812e4cd7e46c', username: 'Mason765', email: 'mason765@gmail.com', status: 'active', age: 32 },
      { id: '630503eb94c2812e4cd7e46d', username: 'Sophia123', email: 'sophia123@gmail.com', status: 'active', age: 25 },
      { id: '630513eb94c2812e4cd7e46e', username: 'Elijah654', email: 'elijah654@gmail.com', status: 'passive', age: 29 },
      { id: '630523eb94c2812e4cd7e46f', username: 'Mia890', email: 'mia890@gmail.com', status: 'active', age: 22 },
      { id: '630533eb94c2812e4cd7e470', username: 'Benjamin76', email: 'benjamin76@gmail.com', status: 'passive', age: 27 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Username', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span className={value === 'active' ? 'status-active' : 'status-passive'}>
            {value}
          </span>
        ),
      },
      { Header: 'Age', accessor: 'age' },
      {
        Header: 'Action',
        Cell: ({ row }) => (
          <div className="action-buttons">
            <button className="view-btn">View</button>
            <button className="delete-btn">Delete</button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="user-table-container">
      <table {...getTableProps()} className="user-table">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
