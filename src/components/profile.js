import React from "react";
import { Button, Grid, Icon, Image } from "semantic-ui-react";
function Profile() {
  return (
    <div>
      <Grid columns="three" divided>
        <Grid.Row>
          <Grid.Column className="profilepage">
            <Image
              src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-11639786938sxvzj5ogua.png"
              size="tiny"
              circular
            />
            <h1>User_Name</h1>
            <h1>e-mail:username@gmail.com</h1>
            <Button>Log Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
    </div>
  );
}

export default Profile;
