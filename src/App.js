import React, {Component} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './App.css';
import myData from './myData';

class App extends Component {
    render() {
        let entries = [];
        // Object.entries(myData).map(([key, value]) => {
        //     entries.push({name: key, count: value})
        // });
        const data = myData;

        const columns = [{
            Header: 'Product Id',
            accessor: 'productId'
        }, {
            Header: 'Category Id',
            accessor: 'categoryId',
        }, {
            Header: 'Product Name',
            accessor: 'productName',
        }, {
            Header: 'Assortment Type',
            accessor: 'assortmentType',
        }];

        return (
            <ReactTable
                data={data}
                columns={columns}
                showPaginationBottom={false}
                filterable={true}
            />);
    }
}

export default App;
