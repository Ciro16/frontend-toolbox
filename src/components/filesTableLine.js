function FilesTableLine({ fileName, dataLine }) {
  const { text, number, hex } = dataLine;

  return (
    <tr>
      <td>{fileName}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  );
}

export default FilesTableLine;
