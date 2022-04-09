import { Box, Input } from "@mui/material";

import { NavigationRounded } from "@mui/icons-material";

const EnterLocation = () => {
  return (
    <Box
      sx={{
        border: 1,
        width: "40%",
        borderColor: "#ccc",
        borderRadius: 5,
        px: 2,
        my: 2,
        mx: 4,
        py: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Input
        sx={{ width: "70%" }}
        placeholder="Enter location.. or Auto locate"
      />
      <NavigationRounded
        sx={{ color: "#01B978", transform: "rotate(45deg)", ml: 2 }}
      />
    </Box>
  );
};

export default EnterLocation;
