import * as React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

import { Theme, createStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PageContainer from "@/components/PageContainer";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      height: "100%"
    },
    text: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing.unit
    }
  });

type Props = WithTranslation & StyleProps<typeof styles>;
const DuplicantNotFound: React.SFC<Props> = ({ t, classes }) => (
  <PageContainer title={t("duplicant-editor.notfound")} back>
    <div className={classes.root}>
      <Typography className={classes.text} variant="h5">
        {t("duplicant-editor.notfound")}
      </Typography>
    </div>
  </PageContainer>
);

export default withStyles(styles)(withTranslation()(DuplicantNotFound));