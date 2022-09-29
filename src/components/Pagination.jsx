import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            {/* bootstrap classes style */}
            <ul className="pagination justify-content-center flex-wrap">
                {
                    pageNumbers.map(number =>(
                        <li key={number} className="page-item" aria-current="page">
                            <a onClick={() => paginate(number)} className='page-link'>
                            {/* <a href="!#" className='page-link'> */}
                                 {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Pagination;