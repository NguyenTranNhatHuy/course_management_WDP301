import React from 'react';

const Pagination = ({ accountsPerPage, totalAccounts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalAccounts / accountsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button onClick={() => paginate(1)} className='page-link btn btn-success' aria-label='First'>
                        <span aria-hidden='true'>&laquo;</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className='page-link btn btn-success'>
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                    <button onClick={() => paginate(pageNumbers.length)} className='page-link btn btn-success' aria-label='Last'>
                        <span aria-hidden='true'>&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
