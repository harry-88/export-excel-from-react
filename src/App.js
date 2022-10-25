import React from "react";
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'

function App() {

  const excelData = [
    {
      fileName:"muhammad",
      lastName:"haris",
      age:"21",
    },
    {
      fileName:"muhammad",
      lastName:"haris",
      age:"22",
    },
    {
      fileName:"muhammad",
      lastName:"haris",
      age:"27",
    },
    {
      fileName:"muhammad",
      lastName:"haris",
      age:"24",
    },
    {
      fileName:"muhammad",
      lastName:"haris",
      age:"22",
    },
  ]

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8';
  const fileExtension = '.xlsx'

  const exportToExcel = async()=>{
    const ws  = XLSX.utils.json_to_sheet(excelData);
    const wb = {Sheets:{'data':ws},SheetNames:['data']};
    const excelBuffer = XLSX.write(wb,{bookType:'xlsx',type:'array'});
    const data = new Blob([excelBuffer],{type:fileType});
    FileSaver.saveAs(data,'haris'+fileExtension)
  }
  return (
    <div className="App">
     <button onClick={(e)=>exportToExcel()}>Excel Export</button>
    </div>
  );
}

export default App;
