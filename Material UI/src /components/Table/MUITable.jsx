import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TablePagination,
  TableSortLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MUITable() {
  // Örnek veri
  const data = [
    { id: 1, name: "John Doe", age: 25, city: "New York" },
    { id: 2, name: "Jane Smith", age: 30, city: "Los Angeles" },
    { id: 3, name: "Michael Johnson", age: 35, city: "Chicago" },
    { id: 4, name: "Emily Davis", age: 28, city: "San Francisco" },
  ];
  // Örnek veri ekleme fonk
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  // Örnek veri
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  // Sayfalama ve sıralama durumları için state'ler
  const [page, setPage] = React.useState(0); // Sayfa numarasını yönetir
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Her sayfada gösterilen satır sayısı
  const [order, setOrder] = React.useState("asc"); // Sıralama yönü
  const [orderBy, setOrderBy] = React.useState("name"); // Sıralama yapılacak alan

  // Sıralama fonksiyonu
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Tabloyu sıralama
  const sortedData = [...data].sort((a, b) => {
    if (orderBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
    if (orderBy === "age") {
      return order === "asc" ? a.age - b.age : b.age - a.age;
    }
    if (orderBy === "city") {
      return order === "asc"
        ? a.city.localeCompare(b.city)
        : b.city.localeCompare(a.city);
    }
    return 0;
  });

  // Sayfalama değiştirme
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Sayfa başına satır sayısını değiştirme
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Sayfayı sıfırlama
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          {/* Tablo Başlıkları */}
          <TableHead>
            <TableRow>
              {/* Seçim kutusu */}
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleRequestSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "age"}
                  direction={orderBy === "age" ? order : "asc"}
                  onClick={() => handleRequestSort("age")}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "city"}
                  direction={orderBy === "city" ? order : "asc"}
                  onClick={() => handleRequestSort("city")}
                >
                  City
                </TableSortLabel>
              </TableCell>
              {/* Silme ikonu */}
              <TableCell align="right">
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Tablo Verisi */}
          <TableBody>
            {sortedData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {/* Seçim kutusu */}
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  {/* Silme ikonu */}
                  <TableCell align="right">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {/* Sayfalama */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      {/*baska bir tablo */}
      <TableContainer component={Paper} sx={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MUITable;
