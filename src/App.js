import { Box } from "@mui/material";

import Form from "./components/Form";

function App() {
  return (
    <>
      <Box
        sx={{
          width: 800,
          height: 150,
          bgcolor: "background.paper",
          borderRadius: "12px",
          fontWeight: "bold",
          overflow: "hidden",
          mx: "auto",
          boxShadow: 1,
          mt: 10,
        }}
      >
        <Form />
      </Box>
    </>
  );
}

export default App;
