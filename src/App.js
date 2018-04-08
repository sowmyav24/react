import React, {Component} from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './App.css';
import myData from './myData';

class App extends Component {
    render() {
        let entries = [];
        Object.entries(myData).map(([key, value]) => {
            entries.push({name: key, count: value})
        });
        const data = entries;

        const columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Count',
            accessor: 'count',
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
