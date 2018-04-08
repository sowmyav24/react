import React, {Component} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './App.css';
import myData from './myData';

class PromotionApp extends Component {
    render() {
        const data = myData;
        const columns = [{
            Header: 'Product Id',
            accessor: 'productId'
        },
            {
                Header: 'Product Name',
                accessor: 'productName',
            },
            {
                Header: 'Category Id',
                accessor: 'categoryId',
            }, {
                Header: 'Assortment Type',
                accessor: 'assortmentType',
            }];

        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    showPaginationBottom={false}
                    filterable={true}
                />
            </div>
        )
    }
}

export default PromotionApp;
