// ProductList.jsx
import React from 'react';
import { useTable } from 'react-table';
import './ProductList.css';

const ProductList = () => {
  const data = React.useMemo(
    () => [
      { id: 'product23423343', productName: 'Programming Book 1', customer: 'Devid John', amount: 45, date: '3 October, 2022', paymentStatus: 'Online Payment', status: 'Approved' },
      { id: 'product235343343', productName: 'Programming Book 2', customer: 'Julia Ani', amount: 55, date: '23 April, 2022', paymentStatus: 'Cash On Delivery', status: 'Pending' },
      { id: 'product234239873', productName: 'Programming Book 3', customer: 'John Smith', amount: 25, date: '10 October, 2022', paymentStatus: 'Online Payment', status: 'Approved' },
      { id: 'product23423143', productName: 'Programming Book 4', customer: 'Devid John', amount: 40, date: '3 March, 2022', paymentStatus: 'Cash On Delivery', status: 'Approved' },
      { id: 'product123423343', productName: 'Programming Book 5', customer: 'Humlar', amount: 45, date: '20 November, 2022', paymentStatus: 'Online Payment', status: 'Approved' },
      { id: 'product2333343', productName: 'Programming Book 6', customer: 'Devid John', amount: 28, date: '12 June, 2022', paymentStatus: 'Cash On Delivery', status: 'Pending' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'Tracking ID', accessor: 'id' },
      { Header: 'Product', accessor: 'productName' },
      { Header: 'Customer', accessor: 'customer' },
      { Header: 'Amount', accessor: 'amount' },
      { Header: 'Date', accessor: 'date' },
      { Header: 'Payment Status', accessor: 'paymentStatus' },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <span className={value === 'Approved' ? 'status-approved' : 'status-pending'}>
            {value}
          </span>
        ),
      },
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
    <div className="product-table-container">
      <table {...getTableProps()} className="product-table">
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

export default ProductList;
