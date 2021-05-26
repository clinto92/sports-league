import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = () => {
    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.common.black,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      const useStyle = makeStyles({
        table: {
          minWidth: 700,
        },
        players: {
          margin: "50px",
          padding: "20px",
          backgroundColor: "transparent",
        },
        chips:{
          margin: "5px",
          display: "block",
          width: "30%",
        },
        textField: {
          display: "block",
          margin: "10px"
        },
      });

    //   teams customized styles below
    const useStylesTeam = makeStyles((theme) => ({
        root: {
          width: "70%",
          margin: "auto",
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
        },
        padding: {
          padding: "30px",
        },
        margin: {
          margin: "30px",
        },
        input: {
          margin: "15px",
        },
        icon: {
          verticalAlign: "bottom",
          height: 20,
          width: 20,
        },
        details: {
          alignItems: "center",
        },
        column: {
          flexBasis: "33.33%",
        },
        button: {
          display: "inline",
          margin: "20px",
          width: "60%",
        },
        helper: {
          borderLeft: `2px solid ${theme.palette.divider}`,
          padding: theme.spacing(1, 2),
        },
        chips:{
          margin: "5px",
          display: "block",
          width: "auto",
        },
        players: {
          margin: "50px",
          padding: "20px",
          backgroundColor: "transparent",
        },
        link: {
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "fadeIn",
          },
        },
      }));

    return { useStyle, useStylesTeam, StyledTableRow, StyledTableCell}
}
