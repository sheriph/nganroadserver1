import {
  Avatar,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => ({
  itemAvatarRoot: {
    //  textAlign: "-webkit-right",
  },
}));

const AvatarList = ({
  primaryText = "",
  secondaryText = "",
  imgSrc = "",
  avatarStyle,
  listChildren = <></>,
  variant = "rounded",
}) => {
  const classes = styles();
  return (
    <Container disableGutters>
      <Grid container>
        <Grid item xs={12}>
          <List>
            <ListItem>
              <ListItemAvatar
                style={{ minWidth: "30px" }}
                className={classes.itemAvatarRoot}
              >
                <Avatar
                  children={listChildren}
                  style={avatarStyle}
                  alt="schoollogo"
                  src={imgSrc}
                  variant={variant}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography>{primaryText}</Typography>}
                secondary={
                  <Typography variant="caption">{secondaryText}</Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvatarList;
