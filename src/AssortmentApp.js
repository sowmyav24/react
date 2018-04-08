import React, {Component} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './App.css';
import inventoryData from './inventoryData';
import myData from './myData';

class AssortmentApp extends Component {
    render() {
        inventoryData.filter(function(i){
            return myData.some(function(m){
                if(i.categoryId === m.categoryId) {
                    i.assortmentType !== undefined ? i.assortmentType =  m.assortmentType + " "  + i.assortmentType
                        : i.assortmentType =  m.assortmentType + " " ;
                }
            });
        });
        const result = inventoryData;
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
        },
            {
            Header: 'AssortmentType',
            accessor: 'assortmentType',
        }];

        return (
            <ReactTable
                data={result}
                columns={columns}
                showPaginationBottom={false}
                filterable={true}
            />);
    }
}

export default AssortmentApp;
