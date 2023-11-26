import React from 'react';
import classNames from 'classnames';

import './TableLayout.css';

function TableLayout({ children, classNameList = [] }) {
    return (
        <div className={`table-layout ${classNames(classNameList)}`}>
            {children}
        </div>
    );
}

export default TableLayout;
