import { useEffect } from "react";

import Table from "react-bootstrap/Table";

import FilesTableLine from "./filesTableLine";

import { useSelector, useDispatch } from "react-redux";

import { setFiles, selectFiles } from "../features/counter/fileSlice";

import "./filesTable.css";

function FilesTable() {
  const infoFiles = useSelector(selectFiles);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/files/data");
      const files = await response.json();

      dispatch(setFiles(files));
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <div className="titleCard">React Test App</div>

      <Table striped bordered className="tableFiles">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>

        <tbody>
          {infoFiles &&
            infoFiles.map(({ file, lines }) => {
              return lines.map((line) => {
                return (
                  <FilesTableLine
                    key={crypto.randomUUID()}
                    fileName={file}
                    dataLine={line}
                  />
                );
              });
            })}
        </tbody>
      </Table>
    </>
  );
}

export default FilesTable;
