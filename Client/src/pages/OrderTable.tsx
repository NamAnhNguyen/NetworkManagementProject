import { Button, FormControl, FormLabel, Grid, TextField, makeStyles, createStyles, Theme, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            marginLeft: "25px",
            marginRight: "25px"
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        table: {
            minWidth: 650,
        },
    }),
);

const OrderTable = (props: { data: any[] }) => {

    const classes = useStyles();
    const { data } = props
    return <div className={classes.root}>
        {data && data.length > 0 ?
            <Grid container alignItems="flex-start" justify="flex-start" spacing={3} >
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Number</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                    <TableCell align="right">Advance Amount</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Customer Code</TableCell>
                                    <TableCell>Agent Code</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row: any) => (
                                    <TableRow key={row.ord_num}>
                                        <TableCell component="th" scope="row" align="right">
                                            {row.ord_num}
                                        </TableCell>
                                        <TableCell align="right">{row.ord_amount}</TableCell>
                                        <TableCell align="right">{row.advance_amount}</TableCell>
                                        <TableCell >
                                            {new Date(row.ord_date).toLocaleDateString('vi-VN')}
                                        </TableCell>
                                        <TableCell >{row.cust_code}</TableCell>
                                        <TableCell >{row.agent_code}</TableCell>
                                        <TableCell >{row.ord_description}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            : <></>}
    </div>
}
export default OrderTable