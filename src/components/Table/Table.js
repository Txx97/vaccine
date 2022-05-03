import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect, useState } from 'react';

const Table = (props) => {
    const [gridOptions] = useState({
        defaultColDef: {
            editable: false,
            sortable: true,
            resizable: true,
            filter: true,
            flex: 1,
            minWidth: 170
            // wrapText: true,
            // autoHeight: true
        },
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        groupSelectsChildren: true,
        // rowSelection: 'multiple',
        // rowGroupPanelShow: 'always',
        // pivotPanelShow: 'always',
        enableRangeSelection: true,
        pagination: true,
        enableBrowserTooltips: true,
        paginationPageSize: 50,
        cacheBlockSize: 50
    });
    const [rowData,setRowData] = useState(props.rows);
    const [columnDefs] = useState(props.columns);

    useEffect(()=>{
        setRowData(props.rows)
    },[props.rows])

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                gridOptions={gridOptions}
                rowData={rowData}
                columnDefs={columnDefs}>
                
            </AgGridReact>
        </div>
    )
};

export default Table;