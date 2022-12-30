import React, { useState } from "react";
import "./newUser.css";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField, Typography } from "@material-ui/core";
import { UserInterface } from "../../moduls/Types";

export interface NewUserProps {
  onClickCancel(): void;
  onClickCreate(): void;
  onChangeFullName(value: any): void;
  onChangeUserName(value: any): void;
  onChangeEmail(value: any): void;
  onChangeGroup(value: any): void;
  onChangeProfile(value: any): void;
  onClickReset(value: any): void;
}

export function NewUser(props: NewUserProps) {
  const {
    onClickCancel,
    onClickCreate,
    onChangeFullName,
    onChangeEmail,
    onChangeGroup,
    onChangeProfile,
    onChangeUserName,
    onClickReset,
  } = props;

  // const [newUser, setNemUser] = useState<UserInterface | any>(undefined);

  // const onChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event?.target;
  //   setNemUser({
  //     ...newUser,
  //     Name: value,
  //   });
  //   console.log("value", value);
  // };

  // const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event?.target;
  //   setNemUser({
  //     ...newUser,
  //     UserName: value,
  //   });
  //   console.log("value", value);
  // };

  // const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event?.target;
  //   setNemUser({
  //     ...newUser,
  //     email: value,
  //   });
  //   console.log("value", value);
  // };

  // const onChangeGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event?.target;
  //   setNemUser({
  //     ...newUser,
  //     group: value,
  //   });
  //   console.log("value", value);
  // };

  // const onChangeProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event?.target;
  //   setNemUser({
  //     ...newUser,
  //     status: value,
  //   });
  //   console.log("value", value);
  // };

  // const onClickReset = () => {
  //   setNemUser("");
  // };
  return (
    <>
      <Box className="header">
        <Typography className="newUserTitle">Add New User</Typography>
        <button onClick={onClickCancel}>
          <CloseIcon className="newUserTitle" />
        </button>
      </Box>
      <Box className="newUser">
        <form className="newUserForm">
          <Box className="newUserItem">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="full name"
              onChange={onChangeFullName}
            />
          </Box>
          <Box className="newUserItem">
            <label>User Name</label>
            <input
              type="text"
              placeholder="user name"
              onChange={onChangeUserName}
            />
          </Box>

          <Box className="newUserItem">
            <label>email</label>
            <input
              type="email"
              placeholder="Enter Your email"
              onChange={onChangeEmail}
            />
          </Box>

          <Box className="newUserItem">
            <label>User Group</label>
            <input
              type="text"
              placeholder=" choose User Group"
              onChange={onChangeGroup}
            />
          </Box>
          <Box className="newUserItem">
            <label>Assign Profile</label>
            <input
              type="text"
              placeholder=" choose Profile "
              onChange={onChangeProfile}
            />
          </Box>
          <Box className="footer">
            <button className="Reset" onClick={onClickReset}>
              Reset fields
            </button>
            <button className="cancelButton" onClick={onClickCancel}>
              cancel
            </button>
            <button className="newUserButton" onClick={onClickCreate}>
              Create
            </button>
          </Box>
        </form>
      </Box>
    </>
  );
}
