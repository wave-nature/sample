import { useState } from "react";
import { Box, FormGroup, Button, Input } from "@mui/material";

import {
  LocationOn,
  Search,
  CalendarViewMonthRounded,
} from "@mui/icons-material";
import EnterLocation from "./EnterLocation";
import BasicDateTimePicker from "./DateAndTime";

const Form = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);

  const showLoactionHanlder = () => setShowLocation((prev) => !prev);
  const dateTimeHandler = () => setShowDateTime((prev) => !prev);

  return (
    <>
      <FormGroup
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          border: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 1,
          mx: "auto",
          mt: 3,
          width: "80%",
        }}
      >
        <Button
          sx={{
            color: "#ccc",
            borderRight: 1,
          }}
          onClick={showLoactionHanlder}
        >
          <LocationOn />
          {"Location"}
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 150,
          }}
        >
          <Search
            sx={{
              color: "#ccc",
            }}
          />
          <Input
            id="my-input"
            placeholder="Try Input Search"
            aria-describedby="my-helper-text"
            sx={{ borderBottom: "none" }}
          />
        </Box>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            width: 150,
            color: "#ccc",
            borderRight: 1,
            borderLeft: 1,
          }}
          onClick={dateTimeHandler}
        >
          <CalendarViewMonthRounded />
          Date {"&"} Time
        </Button>
        <Button
          sx={{
            backgroundColor: "#01B978",
            textTransform: "lowercase",
            color: "white",
            ":hover": {
              backgroundColor: "#01b978",
            },
          }}
        >
          Search
        </Button>
      </FormGroup>
      {showLocation && <EnterLocation />}
      {showDateTime && <BasicDateTimePicker />}
    </>
  );
};

export default Form;
